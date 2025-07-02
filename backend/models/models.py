from sqlalchemy import Column, Integer, String, Text, DateTime, Float, Boolean, ForeignKey, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from core.database import Base
import enum

class UserRole(enum.Enum):
    MINER = "miner"
    CREATOR = "creator"
    ADMIN = "admin"

class CompetitionStatus(enum.Enum):
    UPCOMING = "upcoming"
    ACTIVE = "active"
    COMPLETED = "completed"

class CompetitionDifficulty(enum.Enum):
    BEGINNER = "beginner"
    INTERMEDIATE = "intermediate"
    ADVANCED = "advanced"
    EXPERT = "expert"

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    wallet_address = Column(String, unique=True, index=True, nullable=True)
    role = Column(Enum(UserRole), default=UserRole.MINER)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    created_competitions = relationship("Competition", back_populates="creator")
    submissions = relationship("Submission", back_populates="user")

class Competition(Base):
    __tablename__ = "competitions"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    category = Column(String, nullable=False)
    difficulty = Column(Enum(CompetitionDifficulty), nullable=False)
    prize_pool = Column(Float, nullable=False)
    currency = Column(String, default="USD")
    start_date = Column(DateTime(timezone=True), nullable=False)
    deadline = Column(DateTime(timezone=True), nullable=False)
    status = Column(Enum(CompetitionStatus), default=CompetitionStatus.UPCOMING)
    dataset_url = Column(String, nullable=True)
    evaluation_metric = Column(String, nullable=False)
    
    # Foreign key
    creator_id = Column(Integer, ForeignKey("users.id"))
    
    # Relationships
    creator = relationship("User", back_populates="created_competitions")
    submissions = relationship("Submission", back_populates="competition")
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Submission(Base):
    __tablename__ = "submissions"
    
    id = Column(Integer, primary_key=True, index=True)
    score = Column(Float, nullable=False)
    file_url = Column(String, nullable=True)
    submitted_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Foreign keys
    user_id = Column(Integer, ForeignKey("users.id"))
    competition_id = Column(Integer, ForeignKey("competitions.id"))
    
    # Relationships
    user = relationship("User", back_populates="submissions")
    competition = relationship("Competition", back_populates="submissions") 