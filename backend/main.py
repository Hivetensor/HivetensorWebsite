from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from core.database import engine, Base
from core.config import settings
from routers import auth, competitions, stats, users
from sqlalchemy import text

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Hivetensor API",
    description="AutoML Mining Pool Platform API",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Enhanced health check endpoint with database connectivity
@app.get("/health")
def health_check():
    try:
        # Test database connectivity
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        
        return {
            "status": "healthy",
            "environment": settings.ENVIRONMENT,
            "database": "connected"
        }
    except Exception as e:
        # Return unhealthy if database is down
        return {
            "status": "unhealthy",
            "environment": settings.ENVIRONMENT,
            "database": "disconnected",
            "error": str(e)
        }

# Include routers
app.include_router(auth.router, prefix="/api/v1", tags=["auth"])
app.include_router(competitions.router, prefix="/api/v1", tags=["competitions"])
app.include_router(stats.router, prefix="/api/v1", tags=["stats"])
app.include_router(users.router, prefix="/api/v1", tags=["users"])

@app.get("/")
def read_root():
    return {
        "message": "Welcome to Hivetensor API",
        "environment": settings.ENVIRONMENT,
        "docs": "/docs" if not settings.is_production else None
    } 