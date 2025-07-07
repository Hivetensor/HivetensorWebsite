# Hivetensor Backend API

FastAPI backend for the Hivetensor AutoML Mining Pool platform.

## Setup

1. **Install Dependencies**
```bash
cd backend
pip install -r requirements.txt
```

2. **Database Setup**
- Install PostgreSQL locally or use a cloud provider
- Create a database named `hivetensor`
- Copy `.env.example` to `.env` and update with your database credentials

3. **Environment Variables**
Create a `.env` file with:
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/hivetensor
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

4. **Run the Server**
```bash
# Development mode with auto-reload
python run.py

# Or using uvicorn directly
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## API Documentation

Once running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user

### Users
- `GET /api/v1/users/me` - Get current user profile
- `PUT /api/v1/users/me` - Update current user profile

### Competitions
- `GET /api/v1/competitions/` - List competitions
- `POST /api/v1/competitions/` - Create competition (creators only)
- `GET /api/v1/competitions/featured` - Featured competitions
- `GET /api/v1/competitions/{id}` - Get competition details
- `POST /api/v1/competitions/{id}/submit` - Submit solution
- `GET /api/v1/competitions/{id}/leaderboard` - Get leaderboard

### Statistics
- `GET /api/v1/stats/global` - Global platform statistics

## Database Migrations

If you need to make database schema changes:
```bash
# Initialize Alembic (only once)
alembic init alembic

# Create migration
alembic revision --autogenerate -m "description"

# Apply migration
alembic upgrade head
``` 