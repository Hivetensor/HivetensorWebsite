import Link from 'next/link';
import { 
  Twitter, 
  MessageCircle, 
  Github, 
  Send,
  Settings,
  ArrowLeft,
  Target,
  Calendar,
  Code
} from 'lucide-react';

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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/20 bg-black/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center font-bold text-xl text-yellow-500 hover:text-yellow-400 transition-colors">
            <span className="hex"></span>
            HIVETENSOR
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" className="text-white/80 hover:text-yellow-500 transition-colors">How It Works</Link>
            <Link href="/challenges" className="text-white/80 hover:text-yellow-500 transition-colors">Challenges</Link>
            <Link href="/leaderboard" className="text-white/80 hover:text-yellow-500 transition-colors">Leaderboard</Link>
            <Link href="/create" className="text-white/80 hover:text-yellow-500 transition-colors">Create Challenge</Link>
            <Link href="/faq" className="text-white/80 hover:text-yellow-500 transition-colors">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* Under Construction Content */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 relative overflow-hidden bg-black">
        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-2xl mx-auto relative z-10 w-full">
          <div className="bg-white/5 border border-yellow-500/30 p-6 sm:p-8 md:p-12 text-center backdrop-blur-sm">
            {/* Animated Gears */}
            <div className="flex justify-center gap-4 mb-8">
              <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 animate-spin [animation-duration:4s]" />
              <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 animate-spin [animation-duration:3s] [animation-direction:reverse]" />
              <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 animate-spin [animation-duration:5s]" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-yellow-500 tracking-tight uppercase leading-tight">
              {title}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 sm:p-6 mb-8">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2 text-yellow-500 font-semibold">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Expected Launch: {expectedLaunch}
                </div>
                <div className="flex items-center justify-center gap-2 text-white/60 animate-pulse">
                  <Code className="w-4 h-4" />
                  Development in progress...
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/" className="btn btn-primary inline-flex items-center justify-center gap-2 flex-1">
                <ArrowLeft className="w-4 h-4" />
                Return Home
              </Link>
              <Link href="/challenges" className="btn inline-flex items-center justify-center gap-2 flex-1">
                <Target className="w-4 h-4" />
                Browse Challenges
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
                <li><Link href="/challenges" className="text-white/70 hover:text-yellow-500 transition-colors">Browse Challenges</Link></li>
                <li><Link href="/create" className="text-white/70 hover:text-yellow-500 transition-colors">Create Challenge</Link></li>
                <li><Link href="/leaderboard" className="text-white/70 hover:text-yellow-500 transition-colors">Leaderboard</Link></li>
                <li><Link href="/faq" className="text-white/70 hover:text-yellow-500 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-yellow-500 transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-yellow-500 transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="text-white/70 hover:text-yellow-500 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-yellow-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-white/70 hover:text-yellow-500 transition-colors">Documentation</Link></li>
                <li><Link href="/api" className="text-white/70 hover:text-yellow-500 transition-colors">API</Link></li>
                <li><Link href="/tutorials" className="text-white/70 hover:text-yellow-500 transition-colors">Tutorials</Link></li>
                <li><Link href="/syllabus" className="text-white/70 hover:text-yellow-500 transition-colors">AutoML Bootcamp</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-yellow-500 hover:border-yellow-500/50 transition-all hover:-translate-y-0.5">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-yellow-500 hover:border-yellow-500/50 transition-all hover:-translate-y-0.5">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-yellow-500 hover:border-yellow-500/50 transition-all hover:-translate-y-0.5">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-yellow-500 hover:border-yellow-500/50 transition-all hover:-translate-y-0.5">
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4 md:mb-0">© 2025 Hivetensor • Democratizing AutoML through competition</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-yellow-500 text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-white/60 hover:text-yellow-500 text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 