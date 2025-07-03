# Docker Setup for Hivetensor

This guide explains how to run the entire Hivetensor application stack using Docker containers.

## Prerequisites

- Docker Desktop (or Docker + Docker Compose)
- Git

## Quick Start

1. **Clone and navigate to the project:**
   ```bash
   git clone <your-repo-url>
   cd HivetensorWebsite
   ```

2. **Start all services:**
   ```bash
   # For production-like environment
   docker-compose up -d

   # For development with hot reload
   docker-compose -f docker-compose.dev.yml up -d
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs
   - pgAdmin (Database UI): http://localhost:5050

## Services

### Database (PostgreSQL)
- **Port:** 5432
- **Database:** hivetensor
- **User:** hivetensor_user
- **Password:** hivetensor_password

### Backend (FastAPI)
- **Port:** 8000
- **Health Check:** http://localhost:8000/health
- **API Docs:** http://localhost:8000/docs

### Frontend (Next.js)
- **Port:** 3000
- **Production build with optimized Docker image**

### pgAdmin (Optional)
- **Port:** 5050
- **Email:** admin@hivetensor.com
- **Password:** admin123

## Development vs Production

### Development Mode
```bash
docker-compose -f docker-compose.dev.yml up -d
```
- Hot reload for both frontend and backend
- Volume mounts for code changes
- Detailed logging

### Production Mode
```bash
docker-compose up -d
```
- Optimized Docker images
- Better performance
- Smaller image sizes

## Database Setup

The database will be automatically initialized with the schema when the backend starts. To populate with dummy data:

```bash
# Access the backend container
docker-compose exec backend bash

# Run the population script
python populate_dummy_data.py
```

## Environment Variables

Create a `.env` file in the root directory (copy from `.env.example`):

```env
# Backend
DATABASE_URL=postgresql://hivetensor_user:hivetensor_password@db:5432/hivetensor
SECRET_KEY=your-super-secret-key-change-this-in-production

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Commands

### Start services
```bash
docker-compose up -d                    # Production mode
docker-compose -f docker-compose.dev.yml up -d  # Development mode
```

### Stop services
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs -f                  # All services
docker-compose logs -f backend          # Backend only
docker-compose logs -f frontend         # Frontend only
```

### Access containers
```bash
docker-compose exec backend bash        # Backend shell
docker-compose exec frontend sh         # Frontend shell
docker-compose exec db psql -U hivetensor_user -d hivetensor  # Database shell
```

### Rebuild containers
```bash
docker-compose build --no-cache         # Rebuild all
docker-compose build backend            # Rebuild backend only
```

## Data Persistence

Database data is persisted in a Docker volume (`postgres_data`). To reset the database:

```bash
docker-compose down -v                  # Remove volumes
docker-compose up -d                    # Restart with fresh database
```

## Troubleshooting

### Port conflicts
If ports 3000, 8000, or 5432 are already in use, modify the port mappings in `docker-compose.yml`:

```yaml
services:
  frontend:
    ports:
      - "3001:3000"  # Change left side to available port
```

### Database connection issues
1. Ensure the database is healthy: `docker-compose ps`
2. Check database logs: `docker-compose logs db`
3. Verify connection string in backend logs: `docker-compose logs backend`

### Frontend build issues
1. Clear Node.js cache: `docker-compose build --no-cache frontend`
2. Check frontend logs: `docker-compose logs frontend`

### API connection issues
1. Verify backend is running: http://localhost:8000/health
2. Check CORS configuration in `backend/main.py`
3. Verify `NEXT_PUBLIC_API_URL` environment variable

## Production Deployment

For production deployment:

1. **Update environment variables:**
   - Generate a secure `SECRET_KEY`
   - Update `NEXT_PUBLIC_API_URL` to your production domain
   - Configure proper CORS origins in `backend/main.py`

2. **Use production compose file:**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

3. **Set up reverse proxy (Nginx/Traefik) for:**
   - SSL termination
   - Load balancing
   - Domain routing

4. **Database considerations:**
   - Use managed database service (AWS RDS, Google Cloud SQL, etc.)
   - Set up automated backups
   - Configure connection pooling 