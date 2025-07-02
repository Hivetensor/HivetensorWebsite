from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from models.models import CompetitionStatus, CompetitionDifficulty

class CompetitionCreate(BaseModel):
    title: str
    description: str
    category: str
    difficulty: CompetitionDifficulty
    prize_pool: float
    currency: Optional[str] = "USD"
    start_date: datetime
    deadline: datetime
    evaluation_metric: str
    dataset_url: Optional[str] = None

class CompetitionUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    prize_pool: Optional[float] = None
    deadline: Optional[datetime] = None

class CompetitionResponse(BaseModel):
    id: int
    title: str
    description: str
    category: str
    difficulty: CompetitionDifficulty
    prize_pool: float
    currency: str
    start_date: datetime
    deadline: datetime
    status: CompetitionStatus
    evaluation_metric: str
    creator_id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

class SubmissionCreate(BaseModel):
    score: float
    file_url: Optional[str] = None

class SubmissionResponse(BaseModel):
    id: int
    score: float
    submitted_at: datetime
    user_id: int
    competition_id: int
    
    class Config:
        from_attributes = True

class LeaderboardEntry(BaseModel):
    rank: int
    username: str
    score: float
    submitted_at: datetime 