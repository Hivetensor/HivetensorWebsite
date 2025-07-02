from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from models.models import UserRole

class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str
    role: Optional[UserRole] = UserRole.MINER

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    email: EmailStr
    username: str
    wallet_address: Optional[str]
    role: UserRole
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

class UserUpdate(BaseModel):
    username: Optional[str] = None
    wallet_address: Optional[str] = None

class Token(BaseModel):
    access_token: str
    token_type: str 