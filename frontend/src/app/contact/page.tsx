import Link from 'next/link';
import { 
  Twitter, 
  Github, 
  Send,
  Mail,
  MapPin,
  Clock,
  MessageCircle
} from 'lucide-react';

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Questions about our platform? Want to contribute to the future of decentralized AI? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Primary Contact */}
            <div className="bg-white/5 border border-solar-gold/30 p-8">
              <div className="w-16 h-16 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-solar-gold" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-solar-gold">Email Us</h2>
              <p className="text-white/80 mb-6">
                For general inquiries, partnerships, or technical questions about our platform.
              </p>
              <a href="mailto:ali@hivetensor.com" 
                 className="btn btn-primary inline-flex items-center justify-center gap-2 w-full">
                <Send className="w-4 h-4" />
                ali@hivetensor.com
              </a>
            </div>

            {/* Community */}
            <div className="bg-white/5 border border-white/20 p-8">
              <div className="w-16 h-16 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-solar-gold" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Join the Community</h2>
              <p className="text-white/80 mb-6">
                Connect with other researchers and developers working on decentralized AI.
              </p>
              <div className="space-y-3">
                <a href="https://x.com/GPLv6" target="_blank" rel="noopener noreferrer"
                   className="btn inline-flex items-center justify-center gap-2 w-full">
                  <Twitter className="w-4 h-4" />
                  Follow on X
                </a>
                <a href="https://github.com/Hivetensor" target="_blank" rel="noopener noreferrer"
                   className="btn inline-flex items-center justify-center gap-2 w-full">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/5 border border-white/20 p-8">
            <h2 className="text-2xl font-bold mb-6 text-solar-gold">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-solar-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">General Inquiries</h3>
                  <a href="mailto:ali@hivetensor.com" className="text-white/70 hover:text-solar-gold transition-colors">
                    ali@hivetensor.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-solar-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Location</h3>
                  <p className="text-white/70">
                    Distributed Team<br />
                    Worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-solar-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Response Time</h3>
                  <p className="text-white/70">
                    Within 24-48 hours<br />
                    Monday - Friday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-solar-gold">Common Questions</h2>
          <div className="space-y-6">
            
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-3 text-white">How do I get started with Hivetensor?</h3>
              <p className="text-white/70 mb-3">
                Start by browsing our active challenges on the platform. You can also read our documentation 
                to understand how our AutoML mining system works.
              </p>
              <div className="flex gap-3">
                <Link href="/challenges" className="text-solar-gold hover:text-solar-amber transition-colors text-sm">
                  Browse Challenges →
                </Link>
                <Link href="/docs" className="text-solar-gold hover:text-solar-amber transition-colors text-sm">
                  Read Docs →
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-3 text-white">Can I propose a new challenge?</h3>
              <p className="text-white/70 mb-3">
                Yes! We encourage organizations and researchers to submit their machine learning challenges. 
                Email us with your problem description, dataset details, and success criteria.
              </p>
              <a href="mailto:ali@hivetensor.com?subject=New Challenge Proposal" 
                 className="text-solar-gold hover:text-solar-amber transition-colors text-sm">
                Submit a Challenge →
              </a>
            </div>

            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-3 text-white">How do rewards work?</h3>
              <p className="text-white/70 mb-3">
                Each challenge has a reward pool that's distributed based on model performance and ranking. 
                The more accurate your model, the larger your share of the rewards.
              </p>
              <Link href="/faq" className="text-solar-gold hover:text-solar-amber transition-colors text-sm">
                Learn More in FAQ →
              </Link>
            </div>

            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-3 text-white">Are you hiring?</h3>
              <p className="text-white/70 mb-3">
                We're always interested in connecting with talented researchers and engineers who share our 
                vision of decentralized AI. Check our careers page for current opportunities.
              </p>
              <Link href="/careers" className="text-solar-gold hover:text-solar-amber transition-colors text-sm">
                View Careers →
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