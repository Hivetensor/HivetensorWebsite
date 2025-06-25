import Link from 'next/link';
import { 
  Twitter, 
  MessageCircle, 
  Github, 
  Send,
  TrendingUp,
  Users,
  Trophy,
  Zap,
  Target,
  Coins,
  ChevronRight,
  Star,
  Clock,
  Award
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/90 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center font-bold text-xl text-yellow-400 hover:text-yellow-300 transition-colors">
            <span className="hex"></span>
            HIVETENSOR
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" className="text-white/80 hover:text-yellow-400 transition-colors">How It Works</Link>
            <Link href="/challenges" className="text-white/80 hover:text-yellow-400 transition-colors">Challenges</Link>
            <Link href="/leaderboard" className="text-white/80 hover:text-yellow-400 transition-colors">Leaderboard</Link>
            <Link href="/create" className="text-white/80 hover:text-yellow-400 transition-colors">Create Challenge</Link>
            <Link href="/faq" className="text-white/80 hover:text-yellow-400 transition-colors">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-yellow-400 tracking-tight">
              AutoML
              <br />
              <span className="text-white">Mining Pool</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Compete in decentralized AutoML challenges. Earn crypto rewards. 
              <br />
              <span className="text-yellow-400 font-semibold">Build the future of AI together.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/challenges" className="btn btn-primary inline-flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Start Mining
              </Link>
              <Link href="/create" className="btn inline-flex items-center gap-2">
                <Target className="w-4 h-4" />
                Create Challenge
              </Link>
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$127,450</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Total Jackpot</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2,847</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Active Miners</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400 mb-2">156</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Live Challenges</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Challenges */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white">Featured Challenges</h2>
            <Link href="/challenges" className="btn inline-flex items-center gap-2">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Challenge Card 1 - Jackpot */}
            <div className="bg-white/5 border border-yellow-400/50 p-6 relative animate-glow">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">JACKPOT</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">E-commerce Conversion Prediction</h3>
              <p className="text-white/70 text-sm mb-4">Predict customer purchase probability from browsing behavior</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Reward Pool</span>
                  <span className="text-yellow-400 font-semibold">$15,250</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Target Accuracy</span>
                  <span className="text-white">94.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Progress</span>
                  <span className="text-white">91.2%</span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="bg-yellow-400 h-2 rounded-full" style={{width: '91.2%'}}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 147 miners</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 3d 14h left</span>
              </div>

              <Link href="/challenges" className="btn w-full inline-flex items-center justify-center gap-2">
                <Coins className="w-4 h-4" />
                Join Challenge
              </Link>
            </div>

            {/* Challenge Card 2 */}
            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Financial Risk Assessment</h3>
              <p className="text-white/70 text-sm mb-4">Build models to assess loan default probability</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Reward Pool</span>
                  <span className="text-yellow-400 font-semibold">$8,750</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Target Accuracy</span>
                  <span className="text-white">92.0%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Progress</span>
                  <span className="text-white">89.4%</span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '89.4%'}}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 89 miners</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 1d 8h left</span>
              </div>

              <Link href="/challenges" className="btn w-full inline-flex items-center justify-center gap-2">
                View Details
              </Link>
            </div>

            {/* Challenge Card 3 */}
            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Medical Image Classification</h3>
              <p className="text-white/70 text-sm mb-4">Classify X-ray images for disease detection</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Reward Pool</span>
                  <span className="text-yellow-400 font-semibold">$12,400</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Target Accuracy</span>
                  <span className="text-white">96.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Progress</span>
                  <span className="text-white">93.1%</span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="bg-blue-400 h-2 rounded-full" style={{width: '93.1%'}}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 203 miners</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5d 12h left</span>
              </div>

              <Link href="/challenges" className="btn w-full inline-flex items-center justify-center gap-2">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-400/20 transition-colors">
                <Target className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Choose Challenge</h3>
              <p className="text-white/70 text-sm">Browse active challenges and find one that matches your expertise</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-400/20 transition-colors">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Build & Submit</h3>
              <p className="text-white/70 text-sm">Create your AutoML solution and submit your model for evaluation</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-400/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Compete & Rank</h3>
              <p className="text-white/70 text-sm">Climb the leaderboard as your model performance improves</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-400/20 transition-colors">
                <Coins className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Earn Rewards</h3>
              <p className="text-white/70 text-sm">Get crypto rewards based on your model's performance and ranking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Miners Preview */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white">Top Miners</h2>
            <Link href="/leaderboard" className="btn inline-flex items-center gap-2">
              Full Leaderboard <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top Miner Cards */}
            <div className="bg-white/5 border border-yellow-400/30 p-6 text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-bold text-yellow-400 mb-1">AIWizard_2024</h3>
              <p className="text-white/60 text-sm mb-3">Rank #1</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Total Earned</span>
                  <span className="text-yellow-400">$23,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Challenges Won</span>
                  <span className="text-white">47</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/20 p-6 text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">DataMaster_X</h3>
              <p className="text-white/60 text-sm mb-3">Rank #2</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Total Earned</span>
                  <span className="text-yellow-400">$19,280</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Challenges Won</span>
                  <span className="text-white">34</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/20 p-6 text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">MLNinja_Pro</h3>
              <p className="text-white/60 text-sm mb-3">Rank #3</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Total Earned</span>
                  <span className="text-yellow-400">$16,790</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Challenges Won</span>
                  <span className="text-white">28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link href="/challenges" className="text-white/70 hover:text-yellow-400 transition-colors">Browse Challenges</Link></li>
                <li><Link href="/create" className="text-white/70 hover:text-yellow-400 transition-colors">Create Challenge</Link></li>
                <li><Link href="/leaderboard" className="text-white/70 hover:text-yellow-400 transition-colors">Leaderboard</Link></li>
                <li><Link href="/faq" className="text-white/70 hover:text-yellow-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-yellow-400 transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-yellow-400 transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="text-white/70 hover:text-yellow-400 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-yellow-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-white/70 hover:text-yellow-400 transition-colors">Documentation</Link></li>
                <li><Link href="/api" className="text-white/70 hover:text-yellow-400 transition-colors">API</Link></li>
                <li><Link href="/tutorials" className="text-white/70 hover:text-yellow-400 transition-colors">Tutorials</Link></li>
                <li><Link href="/syllabus" className="text-white/70 hover:text-yellow-400 transition-colors">AutoML Bootcamp</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-yellow-400 hover:border-yellow-400/50 transition-all hover:-translate-y-0.5">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-yellow-400 hover:border-yellow-400/50 transition-all hover:-translate-y-0.5">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-yellow-400 hover:border-yellow-400/50 transition-all hover:-translate-y-0.5">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-yellow-400 hover:border-yellow-400/50 transition-all hover:-translate-y-0.5">
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">© 2025 Hivetensor • Democratizing AutoML through competition</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-white/60 hover:text-yellow-400 text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-white/60 hover:text-yellow-400 text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
