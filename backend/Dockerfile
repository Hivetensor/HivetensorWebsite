FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application
COPY . .

EXPOSE 8000

# Production startup (removed --reload flag)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"] 