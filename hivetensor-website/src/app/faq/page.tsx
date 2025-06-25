import Link from 'next/link';

export default function FAQ() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is AutoML mining?",
          answer: "AutoML mining is a competitive system where participants (miners) solve machine learning challenges using automated ML tools. Winners earn cryptocurrency rewards based on their model's performance relative to other participants."
        },
        {
          question: "Do I need machine learning expertise to participate?",
          answer: "While some ML knowledge helps, AutoML tools are designed to make machine learning accessible. The automated tools handle most of the complex model selection and hyperparameter tuning, so you can focus on understanding the problem and data."
        },
        {
          question: "What equipment do I need to start mining?",
          answer: "For most challenges, a standard computer with internet access is sufficient. Some advanced challenges may benefit from GPUs, but we provide cloud compute credits for resource-intensive tasks."
        },
        {
          question: "How do I connect my crypto wallet?",
          answer: "We support MetaMask, WalletConnect, and other popular Ethereum wallets. Simply click 'Connect Wallet' in the top navigation to link your account and start earning rewards."
        }
      ]
    },
    {
      category: "Challenges & Competition",
      questions: [
        {
          question: "How are challenges created and vetted?",
          answer: "Challenge creators submit proposals with datasets, problem descriptions, and reward pools. Our team reviews each submission for data quality, problem clarity, and feasibility before publishing."
        },
        {
          question: "What types of ML problems are featured?",
          answer: "We host challenges across classification, regression, computer vision, NLP, time series forecasting, and specialized domains like bioinformatics and finance."
        },
        {
          question: "How long do challenges typically run?",
          answer: "Challenge duration varies from 3 days for quick competitions to 30 days for complex problems. Each challenge page shows the exact deadline and remaining time."
        },
        {
          question: "Can I participate in multiple challenges simultaneously?",
          answer: "Absolutely! There's no limit to how many active challenges you can join. Many miners work on multiple problems to maximize their earning potential."
        },
        {
          question: "What happens if I submit multiple solutions?",
          answer: "You can submit as many solutions as you want during the competition period. Only your best-performing submission counts toward final rankings and rewards."
        }
      ]
    },
    {
      category: "Rewards & Payouts",
      questions: [
        {
          question: "How are rewards calculated and distributed?",
          answer: "Rewards are distributed based on final leaderboard rankings. Typically, the top 10-20% of performers split the reward pool, with larger shares going to higher-ranked solutions."
        },
        {
          question: "What happens to rewards from unsolved challenges?",
          answer: "If no solution meets the target accuracy threshold, the reward amount goes into our jackpot pool. This creates larger prizes for future challenges and adds excitement to difficult problems."
        },
        {
          question: "When do I receive my rewards?",
          answer: "Rewards are automatically distributed to your connected wallet within 24 hours of challenge completion. You'll receive a notification when payment is processed."
        },
        {
          question: "Are there any fees or platform charges?",
          answer: "We charge a small platform fee (typically 5-10%) to maintain infrastructure and support challenge creation. This is clearly disclosed before you join any challenge."
        },
        {
          question: "Can I withdraw my earnings immediately?",
          answer: "Yes, rewards are paid directly to your wallet and are immediately available for withdrawal or trading. We don't hold funds or require minimum withdrawal amounts."
        }
      ]
    },
    {
      category: "Technical & Platform",
      questions: [
        {
          question: "What AutoML tools and frameworks are supported?",
          answer: "We support popular AutoML libraries including Auto-sklearn, TPOT, H2O AutoML, AutoKeras, and Google Cloud AutoML. You can also use custom approaches as long as they meet submission requirements."
        },
        {
          question: "How are model submissions evaluated?",
          answer: "Models are evaluated on held-out test datasets using metrics specified in each challenge (accuracy, F1-score, RMSE, etc.). Evaluation is automated and results appear on leaderboards in real-time."
        },
        {
          question: "Is my code and data secure?",
          answer: "We use enterprise-grade security with encrypted data transmission and storage. Your submitted models are kept confidential, and we never share proprietary code or techniques."
        },
        {
          question: "What if I encounter technical issues during a challenge?",
          answer: "Our support team is available 24/7 via Discord and email. We also maintain detailed documentation and tutorials for common issues and best practices."
        },
        {
          question: "Can I collaborate with other miners?",
          answer: "Team competitions are allowed for designated challenges. Solo challenges require individual submissions, but you're welcome to discuss general approaches in our community forums."
        }
      ]
    },
    {
      category: "Community & Growth",
      questions: [
        {
          question: "How can I improve my mining skills?",
          answer: "We offer an AutoML Bootcamp, community workshops, and mentorship programs. Many top miners also share insights in our Discord and blog posts."
        },
        {
          question: "Are there beginner-friendly challenges?",
          answer: "Yes! We mark challenges by difficulty level and regularly host 'Rookie Leagues' with smaller datasets and extended timelines for newcomers to learn."
        },
        {
          question: "How do I create my own challenges?",
          answer: "Visit our 'Create Challenge' page to submit your problem, dataset, and proposed rewards. Our team will review and help optimize your challenge for maximum participation."
        },
        {
          question: "Is there a mobile app?",
          answer: "Currently we're web-based, but our platform is fully responsive on mobile devices. A dedicated mobile app is planned for 2025 with push notifications and mobile-optimized features."
        }
      ]
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
          <Link href="/faq">FAQ</Link>
        </div>
      </nav>

      {/* Page Header */}
      <header className="page-header">
        <div className="wrapper">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about AutoML mining</p>
        </div>
      </header>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="wrapper">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="faq-items">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="faq-item">
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta">
        <div className="wrapper">
          <h2>Still Have Questions?</h2>
          <p>Join our community or contact our support team</p>
          <div className="cta-buttons">
            <a href="#" className="btn primary">Join Discord</a>
            <a href="#" className="btn">Contact Support</a>
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