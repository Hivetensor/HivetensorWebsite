from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import desc, func
from typing import List, Optional
from core.database import get_db
from core.auth import get_current_user
from models.models import User, Competition, Submission, UserRole, CompetitionStatus
from schemas.competitions import (
    CompetitionCreate, CompetitionResponse, CompetitionUpdate,
    SubmissionCreate, SubmissionResponse, LeaderboardEntry
)

router = APIRouter(prefix="/competitions", tags=["competitions"])

@router.get("/", response_model=List[CompetitionResponse])
def get_competitions(
    skip: int = 0,
    limit: int = 100,
    category: Optional[str] = None,
    status: Optional[CompetitionStatus] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Competition)
    
    if category:
        query = query.filter(Competition.category == category)
    if status:
        query = query.filter(Competition.status == status)
    
    competitions = query.offset(skip).limit(limit).all()
    return competitions

@router.get("/featured", response_model=List[CompetitionResponse])
def get_featured_competitions(db: Session = Depends(get_db)):
    # Get active competitions with highest prize pools
    competitions = db.query(Competition).filter(
        Competition.status == CompetitionStatus.ACTIVE
    ).order_by(desc(Competition.prize_pool)).limit(3).all()
    return competitions

@router.post("/", response_model=CompetitionResponse)
def create_competition(
    competition: CompetitionCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if current_user.role not in [UserRole.CREATOR, UserRole.ADMIN]:
        raise HTTPException(status_code=403, detail="Not authorized to create competitions")
    
    db_competition = Competition(
        **competition.dict(),
        creator_id=current_user.id
    )
    db.add(db_competition)
    db.commit()
    db.refresh(db_competition)
    return db_competition

@router.get("/{competition_id}", response_model=CompetitionResponse)
def get_competition(competition_id: int, db: Session = Depends(get_db)):
    competition = db.query(Competition).filter(Competition.id == competition_id).first()
    if not competition:
        raise HTTPException(status_code=404, detail="Competition not found")
    return competition

@router.put("/{competition_id}", response_model=CompetitionResponse)
def update_competition(
    competition_id: int,
    competition_update: CompetitionUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    competition = db.query(Competition).filter(Competition.id == competition_id).first()
    if not competition:
        raise HTTPException(status_code=404, detail="Competition not found")
    
    if competition.creator_id != current_user.id and current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Not authorized to update this competition")
    
    for field, value in competition_update.dict(exclude_unset=True).items():
        setattr(competition, field, value)
    
    db.commit()
    db.refresh(competition)
    return competition

@router.post("/{competition_id}/submit", response_model=SubmissionResponse)
def submit_solution(
    competition_id: int,
    submission: SubmissionCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    competition = db.query(Competition).filter(Competition.id == competition_id).first()
    if not competition:
        raise HTTPException(status_code=404, detail="Competition not found")
    
    if competition.status != CompetitionStatus.ACTIVE:
        raise HTTPException(status_code=400, detail="Competition is not active")
    
    db_submission = Submission(
        **submission.dict(),
        user_id=current_user.id,
        competition_id=competition_id
    )
    db.add(db_submission)
    db.commit()
    db.refresh(db_submission)
    return db_submission

@router.get("/{competition_id}/leaderboard", response_model=List[LeaderboardEntry])
def get_leaderboard(competition_id: int, db: Session = Depends(get_db)):
    # Get best submission per user for this competition
    subquery = db.query(
        Submission.user_id,
        func.max(Submission.score).label('best_score'),
        func.min(Submission.submitted_at).label('first_submission')
    ).filter(
        Submission.competition_id == competition_id
    ).group_by(Submission.user_id).subquery()
    
    # Join with users to get usernames and create leaderboard
    leaderboard_data = db.query(
        User.username,
        subquery.c.best_score,
        subquery.c.first_submission
    ).join(
        subquery, User.id == subquery.c.user_id
    ).order_by(desc(subquery.c.best_score)).all()
    
    # Add rankings
    leaderboard = []
    for rank, (username, score, submitted_at) in enumerate(leaderboard_data, 1):
        leaderboard.append(LeaderboardEntry(
            rank=rank,
            username=username,
            score=score,
            submitted_at=submitted_at
        ))
    
    return leaderboard

@router.get("/{competition_id}/my-submissions", response_model=List[SubmissionResponse])
def get_my_submissions(
    competition_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    submissions = db.query(Submission).filter(
        Submission.competition_id == competition_id,
        Submission.user_id == current_user.id
    ).order_by(desc(Submission.submitted_at)).all()
    
    return submissions 