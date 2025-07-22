import Link from 'next/link';
import { 
  Twitter, 
  Github, 
  Send,
  Zap,
  Target,
  Brain,
  Code,
  TrendingUp,
  Cpu,
  Network,
  Eye,
  ArrowRight,
  Play,
  BookOpen,
  GitBranch
} from 'lucide-react';

export default function AutoMLZeroPage() {
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
      <section className="pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden bg-black">
        {/* Hexagonal Swarm Background */}
        <div className="absolute inset-0 hex-swarm pointer-events-none"></div>
        {/* Solar Gradient Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: 'rgba(255, 155, 5, 0.15)'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: 'rgba(255, 155, 5, 0.1)'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-solar-gold/10 border border-solar-gold/30 px-4 py-2 rounded-full text-solar-gold text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              Initial Research Focus
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight" style={{color: 'var(--solar-gold)', textShadow: '0 0 18px rgba(255, 155, 5, 0.35)'}}>
              AutoML Zero
              <br />
              <span className="text-white">Algorithm Discovery</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Discovering machine learning algorithms from scratch through evolutionary computation.
              <br className="hidden sm:block" />
              <span className="font-semibold" style={{color: 'var(--solar-gold)'}}>The future of AI starts here.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="#how-it-works" className="btn btn-primary inline-flex items-center justify-center gap-2 flex-1">
                <Play className="w-4 h-4" />
                Learn More
              </Link>
              <a href="https://github.com/Hivetensor/AutoMLInfinite" target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center justify-center gap-2 flex-1">
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is AutoML Zero */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What is AutoML Zero?</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              AutoML Zero is a revolutionary approach to machine learning that discovers algorithms from scratch, 
              rather than just tuning existing ones. Think of it as "AI that creates AI."
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-solar-gold mb-6">The Traditional Approach</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="font-semibold text-white">Manual Algorithm Selection</span>
                  </div>
                  <p className="text-white/70 text-sm">Researchers manually choose algorithms (SVM, Random Forest, Neural Networks)</p>
                </div>
                <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="font-semibold text-white">Hyperparameter Tuning</span>
                  </div>
                  <p className="text-white/70 text-sm">Optimize existing parameters within predefined algorithm structures</p>
                </div>
                <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="font-semibold text-white">Incremental Improvements</span>
                  </div>
                  <p className="text-white/70 text-sm">Small gains through better tuning and feature engineering</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-solar-gold mb-6">AutoML Zero Approach</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-solar-gold/30 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-solar-gold" />
                    </div>
                    <span className="font-semibold text-white">Algorithm Discovery</span>
                  </div>
                  <p className="text-white/70 text-sm">Evolutionary algorithms discover entirely new ML algorithms from basic operations</p>
                </div>
                <div className="bg-white/5 border border-solar-gold/30 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center">
                      <GitBranch className="w-4 h-4 text-solar-gold" />
                    </div>
                    <span className="font-semibold text-white">From Scratch</span>
                  </div>
                  <p className="text-white/70 text-sm">Starting with only basic mathematical operations (+, -, *, /, exp, log)</p>
                </div>
                <div className="bg-white/5 border border-solar-gold/30 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center">
                      <Eye className="w-4 h-4 text-solar-gold" />
                    </div>
                    <span className="font-semibold text-white">Novel Discoveries</span>
                  </div>
                  <p className="text-white/70 text-sm">Potentially discovering algorithms humans haven't thought of yet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Implementation */}
      <section className="py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">Our AutoML Zero Implementation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Domain-Specific Language</h3>
              <p className="text-white/70 text-sm">
                Custom DSL for representing algorithms with setup, predict, and learn phases. 
                Enables evolutionary operations on algorithm structure.
              </p>
            </div>

            <div className="bg-white/5 border border-white/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Bittensor Integration</h3>
              <p className="text-white/70 text-sm">
                Decentralized computation network for distributed algorithm evolution. 
                Miners contribute compute power to the discovery process.
              </p>
            </div>

            <div className="bg-white/5 border border-white/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Vectorized Execution</h3>
              <p className="text-white/70 text-sm">
                High-performance algorithm execution using NumPy arrays. 
                Enables efficient evaluation of thousands of algorithm variants.
              </p>
            </div>

            <div className="bg-white/5 border border-white/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">MNIST Binary Challenge</h3>
              <p className="text-white/70 text-sm">
                Starting with digit classification (0 vs 1) on downscaled MNIST. 
                Perfect testbed for algorithm discovery with clear success metrics.
              </p>
            </div>

            <div className="bg-white/5 border border-white/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Evolutionary Framework</h3>
              <p className="text-white/70 text-sm">
                Multi-generational evolution with mutation, crossover, and selection. 
                Algorithms improve over time through natural selection.
              </p>
            </div>

            <div className="bg-white/5 border border-white/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Real-time Discovery</h3>
              <p className="text-white/70 text-sm">
                Live monitoring of algorithm evolution progress. 
                Watch as new algorithms emerge and improve over generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-solar-gold/10 border border-solar-gold/30 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-solar-gold mb-4">Current Research Focus</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                We're currently focused on building and validating our AutoML Zero implementation. 
                This foundational work will enable the full HiveTensor platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What We're Building</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Core AutoML Zero framework with DSL parser and executor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Evolutionary algorithm implementation for algorithm discovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bittensor network integration for decentralized computation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>MNIST binary classification as initial test case</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Next Steps</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Validate algorithm discovery on MNIST binary task</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Scale to more complex datasets (CIFAR-10, regression tasks)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Launch full HiveTensor platform with AutoML challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enable community participation in algorithm discovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get Involved</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              While we're building the foundation, there are several ways to get involved with our AutoML Zero research.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/20 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Github className="w-8 h-8 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Contribute Code</h3>
              <p className="text-white/70 text-sm mb-4">
                Check out our AutoML Zero implementation on GitHub and contribute to the development.
              </p>
              <a href="https://github.com/Hivetensor/AutoMLInfinite" target="_blank" rel="noopener noreferrer" className="btn btn-primary inline-flex items-center justify-center gap-2">
                <Github className="w-4 h-4" />
                View Repository
              </a>
            </div>

            <div className="bg-white/5 border border-white/20 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-8 h-8 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Learn & Research</h3>
              <p className="text-white/70 text-sm mb-4">
                Dive into AutoML Zero research papers and understand the theoretical foundations.
              </p>
              <Link href="/docs" className="btn btn-primary inline-flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4" />
                Read Documentation
              </Link>
            </div>

            <div className="bg-white/5 border border-white/20 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Send className="w-8 h-8 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Stay Updated</h3>
              <p className="text-white/70 text-sm mb-4">
                Join our community to get notified when the full platform launches.
              </p>
              <a href="mailto:ali@hivetensor.com?subject=AutoML Zero Updates" className="btn btn-primary inline-flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Get Updates
              </a>
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