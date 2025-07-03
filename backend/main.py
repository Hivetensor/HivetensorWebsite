from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.database import engine, Base
from routers import auth, competitions, stats, users

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
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy"}

# Include routers
app.include_router(auth.router, prefix="/api/v1", tags=["auth"])
app.include_router(competitions.router, prefix="/api/v1", tags=["competitions"])
app.include_router(stats.router, prefix="/api/v1", tags=["stats"])
app.include_router(users.router, prefix="/api/v1", tags=["users"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Hivetensor API"} 