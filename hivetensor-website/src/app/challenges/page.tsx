import Link from 'next/link';

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      title: "E-commerce Customer Churn",
      description: "Predict customer churn for a major e-commerce platform using behavioral data and purchase history.",
      reward: 15000,
      participants: 247,
      timeLeft: "6d 14h",
      bestScore: 94.2,
      targetScore: 96.0,
      category: "Classification",
      difficulty: "Medium",
      isJackpot: false
    },
    {
      id: 2,
      title: "Stock Price Movement",
      description: "Predict next-day stock price direction using technical indicators and sentiment analysis.",
      reward: 8500,
      participants: 189,
      timeLeft: "12d 3h",
      bestScore: 67.8,
      targetScore: 75.0,
      category: "Classification",
      difficulty: "Hard",
      isJackpot: false
    },
    {
      id: 3,
      title: "Medical Image Classification",
      description: "Classify rare skin conditions from dermatology images. JACKPOT CHALLENGE!",
      reward: 45000,
      participants: 156,
      timeLeft: "3d 7h",
      bestScore: 89.1,
      targetScore: 92.0,
      category: "Computer Vision",
      difficulty: "Expert",
      isJackpot: true
    },
    {
      id: 4,
      title: "Solar Energy Forecasting",
      description: "Predict solar panel energy output based on weather data and historical patterns.",
      reward: 12000,
      participants: 98,
      timeLeft: "18d 12h",
      bestScore: 76.3,
      targetScore: 85.0,
      category: "Regression",
      difficulty: "Medium",
      isJackpot: false
    },
    {
      id: 5,
      title: "Fraud Detection System",
      description: "Detect fraudulent transactions in real-time payment processing data.",
      reward: 22000,
      participants: 203,
      timeLeft: "9d 21h",
      bestScore: 88.7,
      targetScore: 93.0,
      category: "Classification",
      difficulty: "Hard",
      isJackpot: false
    },
    {
      id: 6,
      title: "Protein Structure Prediction",
      description: "Predict protein secondary structure from amino acid sequences.",
      reward: 35000,
      participants: 67,
      timeLeft: "25d 4h",
      bestScore: 82.1,
      targetScore: 90.0,
      category: "Bioinformatics",
      difficulty: "Expert",
      isJackpot: false
    }
  ];

  return (
    <>
      {/* Navigation */}
      <nav>
        <Link href="/" className="logo">
          <span className="hex"></span>
          HIVETENSOR
        </Link>
        <div className="nav-links">
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/challenges">Challenges</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/create">Create Challenge</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
      </nav>

      {/* Page Header */}
      <header className="page-header">
        <div className="wrapper">
          <h1>Active Challenges</h1>
          <p>Compete in AutoML challenges and earn crypto rewards</p>
          
          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="stat">
              <span className="stat-number">{challenges.length}</span>
              <span className="stat-label">Active Challenges</span>
            </div>
            <div className="stat">
              <span className="stat-number">$127,450</span>
              <span className="stat-label">Total Rewards</span>
            </div>
            <div className="stat">
              <span className="stat-number">1,247</span>
              <span className="stat-label">Total Miners</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="filters-section">
        <div className="wrapper">
          <div className="filters">
            <div className="filter-group">
              <label>Category</label>
              <select>
                <option>All Categories</option>
                <option>Classification</option>
                <option>Regression</option>
                <option>Computer Vision</option>
                <option>Bioinformatics</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Difficulty</label>
              <select>
                <option>All Levels</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                <option>Expert</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Sort By</label>
              <select>
                <option>Highest Reward</option>
                <option>Most Participants</option>
                <option>Ending Soon</option>
                <option>Recently Added</option>
              </select>
            </div>
            <div className="filter-group">
              <input type="search" placeholder="Search challenges..." />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="challenges-section">
        <div className="wrapper">
          <div className="challenges-grid">
            {challenges.map((challenge) => (
              <div key={challenge.id} className={`challenge-card ${challenge.isJackpot ? 'jackpot' : ''}`}>
                <div className="challenge-header">
                  <div className="challenge-info">
                    <h3>{challenge.title}</h3>
                    <div className="challenge-badges">
                      <span className={`badge ${challenge.difficulty.toLowerCase()}`}>
                        {challenge.difficulty}
                      </span>
                      <span className="badge category">{challenge.category}</span>
                      {challenge.isJackpot && <span className="badge jackpot">JACKPOT</span>}
                    </div>
                  </div>
                  <div className={`reward ${challenge.isJackpot ? 'jackpot-amount' : ''}`}>
                    ${challenge.reward.toLocaleString()}
                  </div>
                </div>
                
                <p className="challenge-description">{challenge.description}</p>
                
                <div className="challenge-meta">
                  <span className="participants">{challenge.participants} miners</span>
                  <span className="time-left">{challenge.timeLeft} left</span>
                  <span className="accuracy">Best: {challenge.bestScore}%</span>
                </div>
                
                <div className="challenge-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(challenge.bestScore / challenge.targetScore) * 100}%` }}
                    ></div>
                  </div>
                  <span>{Math.round((challenge.bestScore / challenge.targetScore) * 100)}% to target ({challenge.targetScore}%)</span>
                </div>
                
                <div className="challenge-actions">
                  <button className="btn primary">Join Challenge</button>
                  <button className="btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="wrapper">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Platform</h4>
              <ul>
                <li><Link href="/challenges">Browse Challenges</Link></li>
                <li><Link href="/create">Create Challenge</Link></li>
                <li><Link href="/leaderboard">Leaderboard</Link></li>
                <li><Link href="/#faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/api">API</Link></li>
                <li><Link href="/tutorials">Tutorials</Link></li>
                <li><Link href="/syllabus">AutoML Bootcamp</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="Discord">DC</a>
                <a href="#" aria-label="GitHub">GH</a>
                <a href="#" aria-label="Telegram">TG</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Hivetensor • Democratizing AutoML through competition</p>
            <div className="footer-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 