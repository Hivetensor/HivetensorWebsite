from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from core.database import get_db
from models.models import Competition, User, Submission, CompetitionStatus

router = APIRouter(prefix="/stats", tags=["statistics"])

@router.get("/global")
def get_global_stats(db: Session = Depends(get_db)):
    # Total jackpot from active competitions
    total_jackpot = db.query(func.sum(Competition.prize_pool)).filter(
        Competition.status == CompetitionStatus.ACTIVE
    ).scalar() or 0
    
    # Active miners (users with at least one submission)
    active_miners = db.query(func.count(func.distinct(Submission.user_id))).scalar() or 0
    
    # Live challenges (active competitions)
    live_challenges = db.query(func.count(Competition.id)).filter(
        Competition.status == CompetitionStatus.ACTIVE
    ).scalar() or 0
    
    # Total registered users
    total_users = db.query(func.count(User.id)).scalar() or 0
    
    return {
        "total_jackpot": total_jackpot,
        "active_miners": active_miners,
        "live_challenges": live_challenges,
        "total_users": total_users
    } 