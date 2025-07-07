#!/bin/bash

echo "Starting Hivetensor Backend..."

# Wait for database to be ready
echo "Waiting for database..."
while ! python -c "
import psycopg2
import os
try:
    conn = psycopg2.connect(os.getenv('DATABASE_URL'))
    conn.close()
    print('Database is ready!')
except:
    exit(1)
"; do
    echo "Database not ready, waiting..."
    sleep 2
done

# Create tables
echo "Creating database tables..."
python -c "
from core.database import engine, Base
Base.metadata.create_all(bind=engine)
print('Tables created successfully!')
"

# Check if we should populate with dummy data
if [ "$POPULATE_DUMMY_DATA" = "true" ]; then
    echo "Populating database with dummy data..."
    python populate_dummy_data.py
    echo "Dummy data populated successfully!"
fi

# Start the application
echo "Starting FastAPI application..."
exec uvicorn main:app --host 0.0.0.0 --port 8000 --reload 