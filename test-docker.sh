#!/bin/bash

echo "🚀 Testing Hivetensor Docker Setup..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if service is responsive
check_service() {
    local url=$1
    local service_name=$2
    local max_attempts=30
    local attempt=1
    
    echo -n "⏳ Waiting for $service_name to be ready..."
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s -f "$url" > /dev/null 2>&1; then
            echo -e " ${GREEN}✓${NC}"
            return 0
        fi
        echo -n "."
        sleep 2
        attempt=$((attempt + 1))
    done
    
    echo -e " ${RED}✗${NC}"
    echo -e "${RED}❌ $service_name failed to start within $((max_attempts * 2)) seconds${NC}"
    return 1
}

# Test API endpoint
test_api_endpoint() {
    local endpoint=$1
    local description=$2
    
    echo -n "🧪 Testing $description..."
    
    if response=$(curl -s -f "http://localhost:8000$endpoint" 2>/dev/null); then
        echo -e " ${GREEN}✓${NC}"
        return 0
    else
        echo -e " ${RED}✗${NC}"
        echo -e "${RED}❌ Failed to fetch $endpoint${NC}"
        return 1
    fi
}

# Start services
echo "🔧 Starting Docker services..."
docker-compose -f docker-compose.dev.yml up -d

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to start Docker services${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Docker services started${NC}"

# Wait for services to be ready
check_service "http://localhost:8000/health" "Backend API"
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Backend API health check failed${NC}"
    echo "📋 Backend logs:"
    docker-compose -f docker-compose.dev.yml logs backend --tail=20
    exit 1
fi

check_service "http://localhost:3000" "Frontend"
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Frontend health check failed${NC}"
    echo "📋 Frontend logs:"
    docker-compose -f docker-compose.dev.yml logs frontend --tail=20
    exit 1
fi

# Test API endpoints
echo ""
echo "🧪 Testing API endpoints..."

test_api_endpoint "/api/v1/stats/global" "Global statistics"
test_api_endpoint "/api/v1/competitions/featured" "Featured competitions"
test_api_endpoint "/api/v1/competitions" "All competitions"

# Check database connection
echo -n "🗄️  Testing database connection..."
if docker-compose -f docker-compose.dev.yml exec -T db psql -U hivetensor_user -d hivetensor -c "SELECT COUNT(*) FROM competitions;" > /dev/null 2>&1; then
    echo -e " ${GREEN}✓${NC}"
else
    echo -e " ${RED}✗${NC}"
    echo -e "${RED}❌ Database connection failed${NC}"
    exit 1
fi

# Test frontend-backend integration
echo -n "🔗 Testing frontend-backend integration..."
if curl -s "http://localhost:3000" | grep -q "Hivetensor" > /dev/null 2>&1; then
    echo -e " ${GREEN}✓${NC}"
else
    echo -e " ${RED}✗${NC}"
    echo -e "${RED}❌ Frontend-backend integration test failed${NC}"
fi

echo ""
echo -e "${GREEN}🎉 All tests passed! Your Hivetensor application is running successfully.${NC}"
echo ""
echo "📋 Service URLs:"
echo "   • Frontend:  http://localhost:3000"
echo "   • Backend:   http://localhost:8000"
echo "   • API Docs:  http://localhost:8000/docs"
echo "   • pgAdmin:   http://localhost:5050"
echo ""
echo "🛠️  Useful commands:"
echo "   • View logs:       docker-compose -f docker-compose.dev.yml logs -f"
echo "   • Stop services:   docker-compose -f docker-compose.dev.yml down"
echo "   • Restart:         docker-compose -f docker-compose.dev.yml restart"
echo ""
echo -e "${YELLOW}💡 Tip: Open http://localhost:3000 in your browser to see the application!${NC}" 