import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="logo">
          <span className="hex"></span>
          HIVETENSOR
        </div>
        <div className="nav-links">
          <a href="#how-it-works">How It Works</a>
          <Link href="/challenges">Challenges</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/create">Create Challenge</Link>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="top">
        <div className="swarm"></div>
        <div className="wrapper">
          <h1>
            <span className="sigil">∑</span>AutoML Mining Pool<span className="sigil">⚡</span>
          </h1>
          <p>
            Compete on AutoML challenges. Earn crypto rewards. Build the future of automated machine learning.
          </p>
          <div className="hero-buttons">
            <Link href="/challenges" className="btn primary">Browse Challenges</Link>
            <Link href="/create" className="btn">Create Challenge</Link>
          </div>
          
          {/* Live Stats */}
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">$127,450</div>
              <div className="stat-label">Total Jackpot</div>
            </div>
            <div className="stat">
              <div className="stat-number">2,847</div>
              <div className="stat-label">Active Miners</div>
            </div>
            <div className="stat">
              <div className="stat-number">156</div>
              <div className="stat-label">Live Challenges</div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Challenges */}
      <section id="featured-challenges" className="featured-challenges">
        <div className="wrapper">
          <h2 className="section-title">🔥 Hot Challenges</h2>
          <div className="challenges-grid">
            <div className="challenge-card">
              <div className="challenge-header">
                <h3>E-commerce Customer Churn</h3>
                <div className="reward">$15,000</div>
              </div>
              <p>Predict customer churn for a major e-commerce platform using behavioral data.</p>
              <div className="challenge-meta">
                <span className="participants">247 miners</span>
                <span className="time-left">6d 14h left</span>
                <span className="accuracy">Best: 94.2%</span>
              </div>
              <div className="challenge-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '78%' }}></div>
                </div>
                <span>78% to target accuracy</span>
              </div>
            </div>

            <div className="challenge-card">
              <div className="challenge-header">
                <h3>Stock Price Movement</h3>
                <div className="reward">$8,500</div>
              </div>
              <p>Predict next-day stock price direction using technical indicators and sentiment.</p>
              <div className="challenge-meta">
                <span className="participants">189 miners</span>
                <span className="time-left">12d 3h left</span>
                <span className="accuracy">Best: 67.8%</span>
              </div>
              <div className="challenge-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '45%' }}></div>
                </div>
                <span>45% to target accuracy</span>
              </div>
            </div>

            <div className="challenge-card jackpot">
              <div className="challenge-header">
                <h3>Medical Image Classification</h3>
                <div className="reward jackpot-amount">$45,000</div>
              </div>
              <p>Classify rare skin conditions from dermatology images. JACKPOT CHALLENGE!</p>
              <div className="challenge-meta">
                <span className="participants">156 miners</span>
                <span className="time-left">3d 7h left</span>
                <span className="accuracy">Best: 89.1%</span>
              </div>
              <div className="challenge-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '92%' }}></div>
                </div>
                <span>92% to target accuracy</span>
              </div>
            </div>
          </div>
          <div className="view-all">
            <Link href="/challenges" className="btn">View All Challenges</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="wrapper">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <article className="step" data-step="01">
              <h3>Connect Wallet</h3>
              <p>Link your crypto wallet to start earning rewards from AutoML competitions.</p>
            </article>
            <article className="step" data-step="02">
              <h3>Choose Challenge</h3>
              <p>Browse active challenges, check rewards, and pick problems that match your skills.</p>
            </article>
            <article className="step" data-step="03">
              <h3>Submit Solution</h3>
              <p>Upload your AutoML model and get real-time performance feedback.</p>
            </article>
            <article className="step" data-step="04">
              <h3>Earn Rewards</h3>
              <p>Top performers split the reward pool. Unsolved challenges grow the jackpot.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section id="leaderboard-preview" className="leaderboard-preview">
        <div className="wrapper">
          <h2 className="section-title">🏆 Top Miners This Month</h2>
          <div className="leaderboard-table">
            <div className="leaderboard-header">
              <span>Rank</span>
              <span>Miner</span>
              <span>Earnings</span>
              <span>Challenges Won</span>
            </div>
            <div className="leaderboard-row">
              <span className="rank">#1</span>
              <span className="miner">0x7a9f...c4d2</span>
              <span className="earnings">$23,450</span>
              <span className="wins">12</span>
            </div>
            <div className="leaderboard-row">
              <span className="rank">#2</span>
              <span className="miner">0x2b8e...f7a1</span>
              <span className="earnings">$18,920</span>
              <span className="wins">8</span>
            </div>
            <div className="leaderboard-row">
              <span className="rank">#3</span>
              <span className="miner">0x9c4f...8b3e</span>
              <span className="earnings">$15,670</span>
              <span className="wins">7</span>
            </div>
          </div>
          <div className="view-all">
            <Link href="/leaderboard" className="btn">View Full Leaderboard</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="wrapper">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is AutoML mining?</h3>
              <p>Miners compete to solve machine learning challenges using automated ML tools. Winners earn crypto rewards based on model performance.</p>
            </div>
            <div className="faq-item">
              <h3>How are rewards distributed?</h3>
              <p>Rewards are split among top performers based on accuracy ranking. If no solution meets the target, rewards go to the growing jackpot.</p>
            </div>
            <div className="faq-item">
              <h3>What happens to unsolved challenges?</h3>
              <p>Unsolved challenge rewards accumulate in a jackpot pool, creating larger prizes for future competitions.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need ML expertise?</h3>
              <p>AutoML tools make it accessible to anyone. Basic data science knowledge helps, but the tools handle most complexity.</p>
            </div>
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
                <li><a href="#faq">FAQ</a></li>
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
