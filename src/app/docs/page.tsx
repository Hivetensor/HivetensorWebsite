import Link from 'next/link';
import { 
  Twitter, 
  Github, 
  Send,
  Download,
  Terminal,
  Monitor,
  Apple,
  Zap,
  Book,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/20 bg-black/95 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center font-bold text-xl text-solar-gold hover:text-solar-amber transition-colors">
            <span className="hex"></span>
            HIVETENSOR
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" className="text-white/80 hover:text-solar-gold transition-colors">How It Works</Link>
            <Link href="/challenges" className="text-white/80 hover:text-solar-gold transition-colors">Challenges</Link>
            <Link href="/leaderboard" className="text-white/80 hover:text-solar-gold transition-colors">Leaderboard</Link>
            <Link href="/create" className="text-white/80 hover:text-solar-gold transition-colors">Create Challenge</Link>
            <Link href="/faq" className="text-white/80 hover:text-solar-gold transition-colors">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-solar-gold">
              Documentation
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Everything you need to get started with Hivetensor's decentralized AutoML platform.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Link href="#getting-started" className="bg-white/5 border border-white/20 p-4 hover:border-solar-gold/50 transition-colors">
              <div className="flex items-center gap-3">
                <Book className="w-5 h-5 text-solar-gold" />
                <span className="font-semibold">Getting Started</span>
              </div>
            </Link>
            <Link href="#client-download" className="bg-white/5 border border-white/20 p-4 hover:border-solar-gold/50 transition-colors">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-solar-gold" />
                <span className="font-semibold">Download Client</span>
              </div>
            </Link>
            <Link href="#tutorials" className="bg-white/5 border border-white/20 p-4 hover:border-solar-gold/50 transition-colors">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-solar-gold" />
                <span className="font-semibold">Tutorials</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-solar-gold">Getting Started</h2>
          
          <div className="bg-white/5 border border-white/20 p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">What is Hivetensor?</h3>
            <p className="text-white/80 mb-4">
              Hivetensor is a decentralized AutoML platform that democratizes artificial intelligence through competition. 
              We connect machine learning researchers and practitioners worldwide to solve real-world challenges and earn 
              crypto rewards based on model performance.
            </p>
            <p className="text-white/80 mb-4">
              Our platform operates on three core principles:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
              <li><strong className="text-solar-gold">Decentralized Competition:</strong> Anyone can participate in AutoML challenges</li>
              <li><strong className="text-solar-gold">Fair Rewards:</strong> Crypto payments based on model accuracy and ranking</li>
              <li><strong className="text-solar-gold">Open Innovation:</strong> Real-world problems solved collaboratively</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/20 p-6">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-solar-gold" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-white">For Participants</h4>
              <p className="text-white/70 text-sm">
                Browse active challenges, download datasets, build your AutoML solutions, and submit models for evaluation. 
                Earn rewards based on your model's performance.
              </p>
            </div>
            <div className="bg-white/5 border border-white/20 p-6">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-solar-gold" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-white">For Organizations</h4>
              <p className="text-white/70 text-sm">
                Post machine learning challenges with reward pools. Access the collective intelligence of our global 
                researcher network to solve your toughest AI problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Download */}
      <section id="client-download" className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-solar-gold">Download Hivetensor Client</h2>
          
          <div className="bg-white/5 border border-solar-gold/30 p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-solar-gold">Coming Soon</h3>
            <p className="text-white/80 mb-6">
              The Hivetensor desktop client is currently in development. It will provide an intuitive interface for 
              participating in challenges, managing submissions, and monitoring your earnings.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* macOS */}
              <div className="bg-white/5 border border-white/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Apple className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">macOS</h4>
                    <p className="text-white/60 text-sm">macOS 11.0 or later</p>
                  </div>
                </div>
                <button disabled className="btn w-full opacity-50 cursor-not-allowed inline-flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download for Mac
                </button>
                <p className="text-white/50 text-xs mt-2 text-center">Universal Binary (Intel & Apple Silicon)</p>
              </div>

              {/* Windows */}
              <div className="bg-white/5 border border-white/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Windows</h4>
                    <p className="text-white/60 text-sm">Windows 10 or later</p>
                  </div>
                </div>
                <button disabled className="btn w-full opacity-50 cursor-not-allowed inline-flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download for Windows
                </button>
                <p className="text-white/50 text-xs mt-2 text-center">64-bit installer (.exe)</p>
              </div>
            </div>

            <div className="bg-solar-gold/10 border border-solar-gold/20 p-6">
              <h4 className="font-bold text-solar-gold mb-2">📧 Get Notified</h4>
              <p className="text-white/80 mb-4">
                Want to be the first to know when the client is available? Send us your email and we'll notify you 
                as soon as it's ready for download.
              </p>
              <a href="mailto:ali@hivetensor.com?subject=Notify me when client is available" 
                 className="btn btn-primary inline-flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Get Notified
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Planned Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/20 p-6">
                <h4 className="font-bold text-white mb-3">Challenge Browser</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Browse active AutoML challenges</li>
                  <li>• Filter by category and reward size</li>
                  <li>• Download datasets and starter code</li>
                  <li>• Track challenge deadlines</li>
                </ul>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h4 className="font-bold text-white mb-3">Model Submission</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Upload and validate models</li>
                  <li>• Real-time accuracy feedback</li>
                  <li>• Submission history tracking</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h4 className="font-bold text-white mb-3">Earnings Dashboard</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Real-time earnings tracking</li>
                  <li>• Reward pool monitoring</li>
                  <li>• Payment history</li>
                  <li>• Performance rankings</li>
                </ul>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h4 className="font-bold text-white mb-3">Distributed Computing</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Contribute idle compute power</li>
                  <li>• NECTAR protocol integration</li>
                  <li>• GPU/CPU utilization monitoring</li>
                  <li>• Automatic reward distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-solar-gold">System Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-white">Minimum Requirements</h3>
              <ul className="text-white/70 space-y-2">
                <li><strong>OS:</strong> macOS 11.0+ / Windows 10+</li>
                <li><strong>CPU:</strong> Intel Core i5 / AMD Ryzen 5</li>
                <li><strong>RAM:</strong> 8 GB</li>
                <li><strong>Storage:</strong> 2 GB free space</li>
                <li><strong>Network:</strong> Broadband internet</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-white">Recommended for Mining</h3>
              <ul className="text-white/70 space-y-2">
                <li><strong>CPU:</strong> Intel Core i7+ / AMD Ryzen 7+</li>
                <li><strong>GPU:</strong> NVIDIA RTX 3080+ / 24GB+ VRAM</li>
                <li><strong>RAM:</strong> 32 GB+</li>
                <li><strong>Storage:</strong> 100 GB+ SSD</li>
                <li><strong>Network:</strong> High-speed broadband</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Web Interface */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-solar-gold">Available Now: Web Interface</h2>
          
          <div className="bg-white/5 border border-white/20 p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Start Participating Today</h3>
            <p className="text-white/80 mb-6">
              While the desktop client is in development, you can already participate in challenges through our web interface. 
              Browse active challenges, download datasets, and submit your models directly through the browser.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/challenges" className="btn btn-primary inline-flex items-center justify-center gap-2 flex-1">
                <Zap className="w-4 h-4" />
                Browse Challenges
              </Link>
              <Link href="/tutorials" className="btn inline-flex items-center justify-center gap-2 flex-1">
                <Book className="w-4 h-4" />
                View Tutorials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/20 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link href="/challenges" className="text-white/70 hover:text-solar-gold transition-colors">Browse Challenges</Link></li>
                <li><Link href="/create" className="text-white/70 hover:text-solar-gold transition-colors">Create Challenge</Link></li>
                <li><Link href="/leaderboard" className="text-white/70 hover:text-solar-gold transition-colors">Leaderboard</Link></li>
                <li><Link href="/faq" className="text-white/70 hover:text-solar-gold transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-solar-gold transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-solar-gold transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-solar-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-white/70 hover:text-solar-gold transition-colors">Documentation</Link></li>
                <li><Link href="/tutorials" className="text-white/70 hover:text-solar-gold transition-colors">Tutorials</Link></li>
                <li><Link href="/syllabus" className="text-white/70 hover:text-solar-gold transition-colors">AutoML Bootcamp</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="https://x.com/GPLv6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-solar-gold hover:border-solar-gold/50 transition-all hover:-translate-y-0.5">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://github.com/Hivetensor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-solar-gold hover:border-solar-gold/50 transition-all hover:-translate-y-0.5">
                  <Github className="w-4 h-4" />
                </a>
                <a href="mailto:ali@hivetensor.com" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-solar-gold hover:border-solar-gold/50 transition-all hover:-translate-y-0.5">
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4 md:mb-0">© 2025 Hivetensor • Democratizing AutoML through competition</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-solar-gold text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-white/60 hover:text-solar-gold text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 