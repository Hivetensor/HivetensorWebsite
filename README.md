# Hivetensor Website

**AutoML Mining Pool** - Decentralized competition platform for machine learning challenges.

## Project Structure

```
HivetensorWebsite/
├── frontend/          # Next.js frontend
│   ├── src/
│   ├── public/
│   └── package.json
└── backend/           # FastAPI backend
    ├── main.py        # FastAPI app entry point
    ├── requirements.txt
    ├── core/          # Configuration & database
    ├── models/        # SQLAlchemy models
    ├── schemas/       # Pydantic schemas
    └── routers/       # API endpoints
```

## Getting Started

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
# Set up PostgreSQL database and update .env file
python run.py
```
API docs at [http://localhost:8000/docs](http://localhost:8000/docs)

## Features

- **Authentication**: JWT-based user registration/login
- **Competitions**: Create and participate in AutoML challenges
- **Leaderboards**: Real-time ranking and scoring
- **Role-based Access**: Miners, creators, and admins
- **Global Statistics**: Platform metrics for homepage

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: FastAPI, SQLAlchemy, PostgreSQL
- **Authentication**: JWT tokens, bcrypt password hashing

## Database Schema

- **Users**: Authentication and profile management
- **Competitions**: Challenge details and metadata  
- **Submissions**: User solutions and scores

For detailed API documentation, see `/backend/README.md`. 