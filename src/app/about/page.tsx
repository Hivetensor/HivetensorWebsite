import Link from 'next/link';
import { 
  Twitter, 
  Github, 
  Send,
  Zap,
  Users,
  Target,
  Coins,
  ArrowLeft
} from 'lucide-react';

export default function AboutPage() {
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
              About Hivetensor
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              The liberation of artificial intelligence through decentralized AutoML competition.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Mission */}
          <div className="bg-white/5 border border-white/20 p-8">
            <h2 className="text-2xl font-bold mb-6 text-solar-gold">Our Mission</h2>
            <div className="space-y-4 text-white/80">
              <p>
                A shadow looms over the digital republic. While citizens slept, new emperors crowned themselves lords of thought. 
                They who inherited the treasury of human knowledge now claim it as their private estate.
              </p>
              <p>
                <strong className="text-solar-gold">The Great Betrayal:</strong> When giants released marvels while concealing their mechanisms, 
                they shattered the covenant of scientific progress. This was no mere business strategy—it was a fundamental betrayal of 
                the commons that nurtures innovation.
              </p>
              <p>
                <strong className="text-solar-gold">We choose an AI future of plurality, not monopoly.</strong> Individually we are drops, 
                together we are the ocean. Abundance is our weapon against scarcity.
              </p>
            </div>
          </div>

          {/* What We're Building */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-solar-gold">What We're Building</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/20 p-6">
                <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-solar-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">AutoML Mining Pool</h3>
                <p className="text-white/70 text-sm">
                  A decentralized platform where participants compete in AutoML challenges, earning crypto rewards for achieving 
                  breakthrough model performance.
                </p>
              </div>

              <div className="bg-white/5 border border-white/20 p-6">
                <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-solar-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Community-Driven Research</h3>
                <p className="text-white/70 text-sm">
                  Real-world machine learning challenges posted by organizations, solved collaboratively by our global network 
                  of AI researchers and engineers.
                </p>
              </div>

              <div className="bg-white/5 border border-white/20 p-6">
                <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-solar-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Distributed Compute</h3>
                <p className="text-white/70 text-sm">
                  Transform surplus hardware into productive AI research. Our NECTAR protocol connects devices worldwide 
                  into a unified compute network.
                </p>
              </div>

              <div className="bg-white/5 border border-white/20 p-6">
                <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-solar-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Fair Compensation</h3>
                <p className="text-white/70 text-sm">
                  Every FLOP contributed to the network generates value. This isn't charity—it's pure market physics 
                  rewarding computational contribution.
                </p>
              </div>
            </div>
          </div>

          {/* The Path Forward */}
          <div className="bg-white/5 border border-white/20 p-8">
            <h2 className="text-2xl font-bold mb-6 text-solar-gold">The Path Forward</h2>
            <div className="space-y-4 text-white/80">
              <p>
                We have identified the three barriers that confine decentralized AI: <strong>(1) compute</strong>, 
                <strong> (2) bandwidth</strong>, <strong> (3) synchronization</strong>. Where others see walls, we see puzzles awaiting solutions.
              </p>
              <p>
                Our platform transforms the traditional approach to AI development from centralized corporate labs to a 
                distributed ecosystem where innovation thrives through competition and collaboration.
              </p>
              <p className="text-solar-gold font-semibold">
                The hive rises. The nectar flows. The future opens.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/challenges" className="btn btn-primary inline-flex items-center justify-center gap-2 flex-1">
                <Zap className="w-4 h-4" />
                Join the Hive
              </Link>
              <Link href="/docs" className="btn inline-flex items-center justify-center gap-2 flex-1">
                Learn More
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