import Link from 'next/link';

interface UnderConstructionProps {
  title: string;
  description: string;
  expectedLaunch?: string;
}

export default function UnderConstruction({ 
  title, 
  description, 
  expectedLaunch = "Q2 2025" 
}: UnderConstructionProps) {
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
          <Link href="/faq">FAQ</Link>
        </div>
      </nav>

      {/* Under Construction Content */}
      <section className="under-construction">
        <div className="construction-bg"></div>
        <div className="wrapper">
          <div className="construction-content">
            <div className="construction-icon">
              <span className="gear">⚙</span>
              <span className="gear">⚙</span>
              <span className="gear">⚙</span>
            </div>
            <h1>{title}</h1>
            <p className="construction-description">{description}</p>
            <div className="construction-meta">
              <span className="launch-date">Expected Launch: {expectedLaunch}</span>
              <span className="progress-indicator">Development in progress...</span>
            </div>
            <div className="construction-actions">
              <Link href="/" className="btn primary">Return Home</Link>
              <Link href="/challenges" className="btn">Browse Challenges</Link>
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
                <li><Link href="/faq">FAQ</Link></li>
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
                <a href="#" aria-label="Twitter"></a>
                <a href="#" aria-label="Discord"></a>
                <a href="#" aria-label="GitHub"></a>
                <a href="#" aria-label="Telegram"></a>
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