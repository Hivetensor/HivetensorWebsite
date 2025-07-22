from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.database import engine, Base
from core.config import settings
from routers import auth, competitions, stats, users, automl_zero

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
    allow_headers=["*"],
    allow_methods=["*"]
)

@app.get("/health")
def health_check():
    return {"status": "ok"}

# Include routers
app.include_router(auth.router, prefix="/api/v1", tags=["auth"])
app.include_router(competitions.router, prefix="/api/v1", tags=["competitions"])
app.include_router(stats.router, prefix="/api/v1", tags=["stats"])
app.include_router(users.router, prefix="/api/v1", tags=["users"])
app.include_router(automl_zero.router, prefix="/api/v1", tags=["automl-zero"])

@app.get("/")
def read_root():
    return {
        "message": "Welcome to Hivetensor API",
        "environment": settings.ENVIRONMENT,
        "docs": "/docs" if not settings.is_production else None
    } 