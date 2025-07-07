from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func, desc, case
from typing import List
from core.database import get_db
from core.auth import get_current_user
from models.models import User, Competition, Submission, CompetitionStatus
from schemas.users import UserResponse, UserUpdate

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/me", response_model=UserResponse)
def get_current_user_info(current_user: User = Depends(get_current_user)):
    return current_user

@router.put("/me", response_model=UserResponse)
def update_current_user(
    user_update: UserUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    for field, value in user_update.dict(exclude_unset=True).items():
        setattr(current_user, field, value)
    
    db.commit()
    db.refresh(current_user)
    return current_user

@router.get("/me/dashboard-stats")
def get_user_dashboard_stats(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get user-specific dashboard statistics"""
    
    # Get user's active competitions (competitions they have submitted to and are still active)
    active_competitions_count = db.query(func.count(func.distinct(Submission.competition_id))).join(
        Competition, Submission.competition_id == Competition.id
    ).filter(
        Submission.user_id == current_user.id,
        Competition.status == CompetitionStatus.ACTIVE
    ).scalar() or 0
    
    # Get user's total submissions count
    total_submissions = db.query(func.count(Submission.id)).filter(
        Submission.user_id == current_user.id
    ).scalar() or 0
    
    # Get user's best rank across all competitions
    best_rank = None
    if total_submissions > 0:
        # Get all competitions user has submitted to
        user_competitions = db.query(func.distinct(Submission.competition_id)).filter(
            Submission.user_id == current_user.id
        ).all()
        
        best_rank = float('inf')
        for (comp_id,) in user_competitions:
            # Get user's best score in this competition
            user_best_score = db.query(func.max(Submission.score)).filter(
                Submission.user_id == current_user.id,
                Submission.competition_id == comp_id
            ).scalar()
            
            if user_best_score is not None:
                # Get all unique users with their best scores for this competition
                subquery = db.query(
                    Submission.user_id,
                    func.max(Submission.score).label('best_score')
                ).filter(
                    Submission.competition_id == comp_id
                ).group_by(Submission.user_id).subquery()
                
                # Count users with better scores than current user
                users_with_better_scores = db.query(func.count()).filter(
                    subquery.c.best_score > user_best_score
                ).scalar() or 0
                
                current_rank = users_with_better_scores + 1
                best_rank = min(best_rank, current_rank)
        
        if best_rank == float('inf'):
            best_rank = None
    
    # Calculate estimated earnings (simplified - this would normally involve complex prize distribution)
    # For now, let's calculate based on performance in completed competitions
    estimated_earnings = 0.0
    completed_competitions = db.query(Competition).filter(
        Competition.status == CompetitionStatus.COMPLETED
    ).all()
    
    for comp in completed_competitions:
        # Check if user participated in this competition
        user_submissions = db.query(Submission).filter(
            Submission.user_id == current_user.id,
            Submission.competition_id == comp.id
        ).count()
        
        if user_submissions > 0:
            # Get user's best score
            user_best = db.query(func.max(Submission.score)).filter(
                Submission.user_id == current_user.id,
                Submission.competition_id == comp.id
            ).scalar()
            
            # Get all participants' best scores
            all_best_scores = db.query(
                Submission.user_id,
                func.max(Submission.score).label('best_score')
            ).filter(
                Submission.competition_id == comp.id
            ).group_by(Submission.user_id).order_by(desc('best_score')).all()
            
            # Simple prize distribution: top 3 get prizes
            total_participants = len(all_best_scores)
            user_rank = None
            for i, (user_id, score) in enumerate(all_best_scores):
                if user_id == current_user.id:
                    user_rank = i + 1
                    break
            
            if user_rank and user_rank <= 3 and total_participants >= 3:
                if user_rank == 1:
                    estimated_earnings += comp.prize_pool * 0.5  # 50% for 1st
                elif user_rank == 2:
                    estimated_earnings += comp.prize_pool * 0.3  # 30% for 2nd
                elif user_rank == 3:
                    estimated_earnings += comp.prize_pool * 0.2  # 20% for 3rd
    
    return {
        "active_competitions": active_competitions_count,
        "total_submissions": total_submissions,
        "best_rank": best_rank,
        "estimated_earnings": round(estimated_earnings, 2)
    }

@router.get("/me/active-competitions")
def get_user_active_competitions(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get user's active competitions with their current standings"""
    
    # Get competitions user has submitted to that are still active
    user_active_comps = db.query(Competition).join(
        Submission, Competition.id == Submission.competition_id
    ).filter(
        Submission.user_id == current_user.id,
        Competition.status == CompetitionStatus.ACTIVE
    ).distinct().all()
    
    result = []
    for comp in user_active_comps:
        # Get user's best score in this competition
        user_best = db.query(func.max(Submission.score)).filter(
            Submission.user_id == current_user.id,
            Submission.competition_id == comp.id
        ).scalar()
        
        # Calculate user's current rank
        subquery = db.query(
            Submission.user_id,
            func.max(Submission.score).label('best_score')
        ).filter(
            Submission.competition_id == comp.id
        ).group_by(Submission.user_id).subquery()
        
        users_with_better_scores = db.query(func.count()).filter(
            subquery.c.best_score > user_best
        ).scalar() or 0
        
        current_rank = users_with_better_scores + 1
        
        # Calculate days left
        from datetime import datetime, timezone
        days_left = (comp.deadline - datetime.now(timezone.utc)).days
        
        result.append({
            "id": comp.id,
            "title": comp.title,
            "current_score": user_best,
            "current_rank": current_rank,
            "days_left": max(0, days_left),
            "prize_pool": comp.prize_pool
        })
    
    return result

@router.get("/me/recent-activity")
def get_user_recent_activity(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
    limit: int = 10
):
    """Get user's recent activity (submissions, joined competitions, etc.)"""
    
    # Get recent submissions with competition info
    recent_submissions = db.query(Submission, Competition).join(
        Competition, Submission.competition_id == Competition.id
    ).filter(
        Submission.user_id == current_user.id
    ).order_by(desc(Submission.submitted_at)).limit(limit).all()
    
    activities = []
    for submission, competition in recent_submissions:
        activities.append({
            "type": "submission",
            "description": f"Submitted solution to {competition.title}",
            "timestamp": submission.submitted_at,
            "score": submission.score,
            "competition_title": competition.title
        })
    
    return activities

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user 