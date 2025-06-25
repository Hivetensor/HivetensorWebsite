import Link from 'next/link';
import { 
  Twitter, 
  MessageCircle, 
  Github, 
  Send,
  Users,
  Clock,
  Coins,
  TrendingUp,
  Filter,
  Search,
  ChevronDown,
  Star,
  Target,
  DollarSign
} from 'lucide-react';

export default function ChallengesPage() {
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
            <Link href="/challenges" className="text-yellow-400">Challenges</Link>
            <Link href="/leaderboard" className="text-white/80 hover:text-yellow-400 transition-colors">Leaderboard</Link>
            <Link href="/create" className="text-white/80 hover:text-yellow-400 transition-colors">Create Challenge</Link>
            <Link href="/faq" className="text-white/80 hover:text-yellow-400 transition-colors">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 text-yellow-400">
              Active Challenges
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose from cutting-edge AutoML challenges across multiple domains. 
              Compete against the best miners and earn crypto rewards.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search challenges..."
                className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/50 focus:border-yellow-400/50 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex gap-3">
              <select className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-yellow-400/50 focus:outline-none transition-colors">
                <option value="">All Categories</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="ecommerce">E-commerce</option>
                <option value="nlp">NLP</option>
                <option value="computer-vision">Computer Vision</option>
              </select>
              <select className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-yellow-400/50 focus:outline-none transition-colors">
                <option value="">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <select className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-yellow-400/50 focus:outline-none transition-colors">
                <option value="reward_desc">Highest Reward</option>
                <option value="reward_asc">Lowest Reward</option>
                <option value="time_asc">Ending Soon</option>
                <option value="participants_desc">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Challenge 1 - Jackpot */}
            <div className="bg-white/5 border border-yellow-400/50 p-6 relative animate-glow">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">JACKPOT</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">E-COMMERCE</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">INTERMEDIATE</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">E-commerce Conversion Prediction</h3>
              <p className="text-white/70 text-sm mb-4">
                Predict customer purchase probability from browsing behavior using advanced ML techniques.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Reward Pool</span>
                  <span className="text-yellow-400 font-semibold flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    15,250
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Target Accuracy</span>
                  <span className="text-white">94.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Current Best</span>
                  <span className="text-white">91.2%</span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="bg-yellow-400 h-2 rounded-full" style={{width: '91.2%'}}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> 147 miners
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 3d 14h left
                </span>
              </div>

              <div className="flex gap-2">
                <button className="btn btn-primary flex-1 inline-flex items-center justify-center gap-2">
                  <Coins className="w-4 h-4" />
                  Join Challenge
                </button>
                <button className="btn w-12 h-12 flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">FINANCE</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">ADVANCED</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Financial Risk Assessment</h3>
              <p className="text-white/70 text-sm mb-4">
                Build models to assess loan default probability using credit and behavioral data.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Reward Pool</span>
                  <span className="text-yellow-400 font-semibold flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    8,750
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Target Accuracy</span>
                  <span className="text-white">92.0%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Current Best</span>
                  <span className="text-white">89.4%</span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '89.4%'}}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> 89 miners
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 1d 8h left
                </span>
              </div>

              <div className="flex gap-2">
                <button className="btn flex-1">View Details</button>
                <button className="btn w-12 h-12 flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">HEALTHCARE</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">ADVANCED</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Medical Image Classification</h3>
              <p className="text-white/70 text-sm mb-4">
                Classify X-ray images for disease detection using computer vision techniques.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Reward Pool</span>
                  <span className="text-yellow-400 font-semibold flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    12,400
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Target Accuracy</span>
                  <span className="text-white">96.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Current Best</span>
                  <span className="text-white">93.1%</span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="bg-blue-400 h-2 rounded-full" style={{width: '93.1%'}}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> 203 miners
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 5d 12h left
                </span>
              </div>

              <div className="flex gap-2">
                <button className="btn flex-1">View Details</button>
                <button className="btn w-12 h-12 flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Challenge 4 */}
            <div className="bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">NLP</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">INTERMEDIATE</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Sentiment Analysis for Reviews</h3>
              <p className="text-white/70 text-sm mb-4">
                Analyze customer sentiment from product reviews with high accuracy.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Reward Pool</span>
                  <span className="text-yellow-400 font-semibold flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    6,800
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Target Accuracy</span>
                  <span className="text-white">88.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Current Best</span>
                  <span className="text-white">85.2%</span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="bg-purple-400 h-2 rounded-full" style={{width: '85.2%'}}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> 76 miners
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 8d 3h left
                </span>
              </div>

              <div className="flex gap-2">
                <button className="btn flex-1">View Details</button>
                <button className="btn w-12 h-12 flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Challenge 5 */}
            <div className="bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded">COMPUTER VISION</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">BEGINNER</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Object Detection in Retail</h3>
              <p className="text-white/70 text-sm mb-4">
                Detect and classify products in retail store images for inventory management.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Reward Pool</span>
                  <span className="text-yellow-400 font-semibold flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    4,200
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Target mAP</span>
                  <span className="text-white">0.75</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Current Best</span>
                  <span className="text-white">0.68</span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="bg-teal-400 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> 124 miners
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 12d 7h left
                </span>
              </div>

              <div className="flex gap-2">
                <button className="btn flex-1">View Details</button>
                <button className="btn w-12 h-12 flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Challenge 6 */}
            <div className="bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">FINANCE</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">BEGINNER</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Stock Price Movement</h3>
              <p className="text-white/70 text-sm mb-4">
                Predict next-day stock price direction using technical indicators and news sentiment.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Reward Pool</span>
                  <span className="text-yellow-400 font-semibold flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    7,500
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Target Accuracy</span>
                  <span className="text-white">72.0%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Current Best</span>
                  <span className="text-white">67.8%</span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="bg-orange-400 h-2 rounded-full" style={{width: '67.8%'}}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> 189 miners
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 15d 2h left
                </span>
              </div>

              <div className="flex gap-2">
                <button className="btn flex-1">View Details</button>
                <button className="btn w-12 h-12 flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn btn-primary">Load More Challenges</button>
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