from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, competitions, users, stats
from core.database import engine
from models import models

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Hivetensor API",
    description="Backend API for Hivetensor AutoML Mining Pool",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/v1")
app.include_router(users.router, prefix="/api/v1")
app.include_router(competitions.router, prefix="/api/v1")
app.include_router(stats.router, prefix="/api/v1")

@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "Hivetensor API is running"}

@app.get("/")
async def root():
    return {"message": "Welcome to Hivetensor API"} 