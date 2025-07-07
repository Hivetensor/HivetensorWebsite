from sqlalchemy.orm import Session
from datetime import datetime, timedelta, timezone
from core.database import SessionLocal
from models.models import User, Competition, Submission, UserRole, CompetitionStatus, CompetitionDifficulty
from core.auth import get_password_hash
import random

def create_dummy_data():
    db = SessionLocal()
    
    try:
        # Clear existing data
        db.query(Submission).delete()
        db.query(Competition).delete()
        db.query(User).delete()
        db.commit()
        
        print("🗑️  Cleared existing data")
        
        # Create dummy users
        users_data = [
            {"email": "alice@example.com", "username": "alice_ml", "role": UserRole.MINER},
            {"email": "bob@hivetensor.com", "username": "bob_creator", "role": UserRole.CREATOR},
            {"email": "charlie@example.com", "username": "charlie_dev", "role": UserRole.MINER},
            {"email": "diana@example.com", "username": "diana_ai", "role": UserRole.MINER},
            {"email": "erik@medai.com", "username": "erik_medtech", "role": UserRole.CREATOR},
            {"email": "fiona@example.com", "username": "fiona_data", "role": UserRole.MINER},
            {"email": "george@fintech.com", "username": "george_fin", "role": UserRole.CREATOR},
            {"email": "hannah@example.com", "username": "hannah_vision", "role": UserRole.MINER},
            {"email": "ian@example.com", "username": "ian_nlp", "role": UserRole.MINER},
            {"email": "jade@example.com", "username": "jade_robot", "role": UserRole.MINER},
        ]
        
        users = []
        for user_data in users_data:
            user = User(
                email=user_data["email"],
                username=user_data["username"],
                hashed_password=get_password_hash("password123"),
                role=user_data["role"],
                wallet_address=f"0x{random.randint(100000000000, 999999999999):012x}"
            )
            db.add(user)
            users.append(user)
        
        db.commit()
        print(f"✅ Created {len(users)} users")
        
        # Get creators for competitions
        creators = [u for u in users if u.role == UserRole.CREATOR]
        miners = [u for u in users if u.role == UserRole.MINER]
        
        # Create dummy competitions
        competitions_data = [
            {
                "title": "E-commerce Conversion Prediction",
                "description": "Predict customer purchase probability from browsing behavior using machine learning. Dataset includes user session data, product views, cart additions, and purchase history.",
                "category": "tabular",
                "difficulty": CompetitionDifficulty.INTERMEDIATE,
                "prize_pool": 15250.0,
                "start_date": datetime.now(timezone.utc) - timedelta(days=5),
                "deadline": datetime.now(timezone.utc) + timedelta(days=3),
                "status": CompetitionStatus.ACTIVE,
                "evaluation_metric": "AUC Score"
            },
            {
                "title": "Medical Image Segmentation",
                "description": "Segment tumors in medical CT scans using deep learning. Help advance medical AI diagnostics with this challenging computer vision task.",
                "category": "computer-vision",
                "difficulty": CompetitionDifficulty.ADVANCED,
                "prize_pool": 25500.0,
                "start_date": datetime.now(timezone.utc) - timedelta(days=10),
                "deadline": datetime.now(timezone.utc) + timedelta(days=12),
                "status": CompetitionStatus.ACTIVE,
                "evaluation_metric": "Dice Coefficient"
            },
            {
                "title": "Financial Risk Assessment",
                "description": "Build models to assess loan default probability using historical financial data, credit scores, and economic indicators.",
                "category": "tabular",
                "difficulty": CompetitionDifficulty.INTERMEDIATE,
                "prize_pool": 8750.0,
                "start_date": datetime.now(timezone.utc) - timedelta(days=2),
                "deadline": datetime.now(timezone.utc) + timedelta(days=8),
                "status": CompetitionStatus.ACTIVE,
                "evaluation_metric": "F1 Score"
            },
            {
                "title": "Stock Price Prediction",
                "description": "Predict stock movements using historical market data, news sentiment, and technical indicators.",
                "category": "time-series",
                "difficulty": CompetitionDifficulty.ADVANCED,
                "prize_pool": 31700.0,
                "start_date": datetime.now(timezone.utc) - timedelta(days=7),
                "deadline": datetime.now(timezone.utc) + timedelta(days=5),
                "status": CompetitionStatus.ACTIVE,
                "evaluation_metric": "Sharpe Ratio"
            },
            {
                "title": "Autonomous Drone Navigation",
                "description": "Train RL agents to navigate complex 3D environments. Cutting-edge robotics AI challenge with simulation environment.",
                "category": "reinforcement-learning",
                "difficulty": CompetitionDifficulty.EXPERT,
                "prize_pool": 42800.0,
                "start_date": datetime.now(timezone.utc) - timedelta(days=15),
                "deadline": datetime.now(timezone.utc) + timedelta(days=19),
                "status": CompetitionStatus.ACTIVE,
                "evaluation_metric": "Success Rate"
            },
            {
                "title": "AI Art Generation",
                "description": "Generate artistic images from text prompts. Push the boundaries of creative AI with state-of-the-art generative models.",
                "category": "generative",
                "difficulty": CompetitionDifficulty.ADVANCED,
                "prize_pool": 35000.0,
                "start_date": datetime.now(timezone.utc) + timedelta(days=3),
                "deadline": datetime.now(timezone.utc) + timedelta(days=45),
                "status": CompetitionStatus.UPCOMING,
                "evaluation_metric": "FID Score"
            },
            {
                "title": "Customer Churn Prediction",
                "description": "Predict customer churn for telecom companies using customer behavior, usage patterns, and demographic data.",
                "category": "tabular",
                "difficulty": CompetitionDifficulty.BEGINNER,
                "prize_pool": 12300.0,
                "start_date": datetime.now(timezone.utc) - timedelta(days=3),
                "deadline": datetime.now(timezone.utc) + timedelta(days=15),
                "status": CompetitionStatus.ACTIVE,
                "evaluation_metric": "AUC Score"
            },
            {
                "title": "Sentiment Analysis at Scale",
                "description": "Analyze sentiment in millions of social media posts. Real-world social media data processing with NLP techniques.",
                "category": "nlp",
                "difficulty": CompetitionDifficulty.INTERMEDIATE,
                "prize_pool": 18200.0,
                "start_date": datetime.now(timezone.utc) - timedelta(days=6),
                "deadline": datetime.now(timezone.utc) + timedelta(days=8),
                "status": CompetitionStatus.ACTIVE,
                "evaluation_metric": "F1 Score"
            }
        ]
        
        competitions = []
        for comp_data in competitions_data:
            competition = Competition(
                **comp_data,
                creator_id=random.choice(creators).id,
                dataset_url=f"https://datasets.hivetensor.com/{comp_data['title'].lower().replace(' ', '-')}.zip"
            )
            db.add(competition)
            competitions.append(competition)
        
        db.commit()
        print(f"✅ Created {len(competitions)} competitions")
        
        # Create dummy submissions for active competitions
        active_competitions = [c for c in competitions if c.status == CompetitionStatus.ACTIVE]
        
        submission_count = 0
        for competition in active_competitions:
            # Random number of submissions per competition (3-8 miners)
            num_submissions = random.randint(3, min(8, len(miners)))
            selected_miners = random.sample(miners, num_submissions)
            
            for i, miner in enumerate(selected_miners):
                # Generate realistic scores based on difficulty
                if competition.difficulty == CompetitionDifficulty.BEGINNER:
                    base_score = random.uniform(0.75, 0.95)
                elif competition.difficulty == CompetitionDifficulty.INTERMEDIATE:
                    base_score = random.uniform(0.65, 0.88)
                elif competition.difficulty == CompetitionDifficulty.ADVANCED:
                    base_score = random.uniform(0.55, 0.82)
                else:  # EXPERT
                    base_score = random.uniform(0.45, 0.75)
                
                # Add some variation for multiple submissions
                num_user_submissions = random.randint(1, 3)
                for j in range(num_user_submissions):
                    score_variation = random.uniform(-0.05, 0.03)  # Slight improvement over time
                    final_score = min(1.0, base_score + score_variation * j)
                    
                    now_utc = datetime.now(timezone.utc)
                    days_since_start = (now_utc - competition.start_date).days
                    submission = Submission(
                        user_id=miner.id,
                        competition_id=competition.id,
                        score=final_score,
                        submitted_at=now_utc - timedelta(
                            days=random.randint(0, max(0, days_since_start)),
                            hours=random.randint(0, 23),
                            minutes=random.randint(0, 59)
                        )
                    )
                    db.add(submission)
                    submission_count += 1
        
        db.commit()
        print(f"✅ Created {submission_count} submissions")
        
        # Print summary
        total_jackpot = sum(c.prize_pool for c in active_competitions)
        print(f"\n📊 Database Summary:")
        print(f"   Users: {len(users)} ({len(miners)} miners, {len(creators)} creators)")
        print(f"   Competitions: {len(competitions)} ({len(active_competitions)} active)")
        print(f"   Submissions: {submission_count}")
        print(f"   Total Active Jackpot: ${total_jackpot:,.2f}")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    print("🚀 Populating database with dummy data...")
    create_dummy_data()
    print("✅ Done!") 