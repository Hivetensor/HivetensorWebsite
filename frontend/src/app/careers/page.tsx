import Link from 'next/link';
import { 
  Twitter, 
  Github, 
  Send,
  Search,
  MapPin,
  Users,
  Code,
  Brain,
  Settings,
  Calendar,
  Globe
} from 'lucide-react';

export default function CareersPage() {
  const departments = [
    {
      icon: Brain,
      name: 'Research',
      description: 'Push the boundaries of AutoML, distributed systems, and decentralized AI research.',
      locations: ['Remote', 'San Francisco', 'Boston']
    },
    {
      icon: Code,
      name: 'Engineering',
      description: 'Build the infrastructure that powers the future of distributed machine learning.',
      locations: ['Remote', 'San Francisco', 'Austin', 'Berlin']
    },
    {
      icon: Settings,
      name: 'Administration',
      description: 'Support operations, finance, legal, and business development for our growing organization.',
      locations: ['Remote', 'San Francisco']
    }
  ];

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
              Join the Hive
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Help us build the future of decentralized AI. We're looking for researchers, engineers, and operators who share our vision of democratizing machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/50 focus:border-solar-gold/50 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <select className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-solar-gold/50 focus:outline-none transition-colors flex-1">
                <option value="">All Departments</option>
                <option value="research">Research</option>
                <option value="engineering">Engineering</option>
                <option value="administration">Administration</option>
              </select>
              <select className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-solar-gold/50 focus:outline-none transition-colors flex-1">
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="san-francisco">San Francisco</option>
                <option value="boston">Boston</option>
                <option value="austin">Austin</option>
                <option value="berlin">Berlin</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-solar-gold">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white/5 border border-white/20 p-6">
                <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mb-4">
                  <dept.icon className="w-6 h-6 text-solar-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{dept.name}</h3>
                <p className="text-white/70 text-sm mb-4">{dept.description}</p>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <MapPin className="w-3 h-3" />
                  <span>{dept.locations.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Open Positions */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-solar-gold/30 p-8 text-center">
            <div className="w-16 h-16 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-solar-gold" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-solar-gold">Currently No Open Positions</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We're not actively hiring at the moment, but we're always interested in connecting with talented individuals who are passionate about decentralized AI and AutoML.
            </p>
            
            <div className="bg-white/5 border border-white/20 p-6 mb-6">
              <h3 className="text-lg font-bold mb-3 text-white">Interested in Future Opportunities?</h3>
              <p className="text-white/70 text-sm mb-4">
                Send us your resume and a note about what excites you about Hivetensor's mission. We'll keep your information on file and reach out when relevant positions become available.
              </p>
              <a href="mailto:ali@hivetensor.com?subject=Future Career Opportunities at Hivetensor" 
                 className="btn inline-flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Your Information
              </a>
            </div>

            <div className="text-left">
              <h3 className="text-lg font-bold mb-3 text-white">What We Look For</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-solar-gold mb-2">Research</h4>
                  <ul className="text-white/70 space-y-1">
                    <li>• PhD in ML/AI or equivalent</li>
                    <li>• Experience with distributed systems</li>
                    <li>• AutoML and meta-learning expertise</li>
                    <li>• Strong publication record</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-solar-gold mb-2">Engineering</h4>
                  <ul className="text-white/70 space-y-1">
                    <li>• Full-stack or backend expertise</li>
                    <li>• Experience with ML systems</li>
                    <li>• Distributed computing knowledge</li>
                    <li>• Python, Rust, or Go proficiency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-solar-gold mb-2">Administration</h4>
                  <ul className="text-white/70 space-y-1">
                    <li>• Operations or finance background</li>
                    <li>• Startup experience preferred</li>
                    <li>• Strong organizational skills</li>
                    <li>• Remote work experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-solar-gold">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-3 text-white">Decentralized & Remote-First</h3>
              <p className="text-white/70 text-sm">
                We practice what we preach. Our team is distributed globally, working asynchronously to build 
                the infrastructure for decentralized AI.
              </p>
            </div>
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-3 text-white">Open Source by Default</h3>
              <p className="text-white/70 text-sm">
                We believe in transparent development and contributing back to the community. Most of our work 
                is open source and accessible to all.
              </p>
            </div>
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-3 text-white">Research-Driven</h3>
              <p className="text-white/70 text-sm">
                We're not just building products—we're advancing the state of the art in distributed machine 
                learning and AutoML systems.
              </p>
            </div>
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-3 text-white">Long-term Thinking</h3>
              <p className="text-white/70 text-sm">
                We're building infrastructure for the next decade of AI development, not chasing short-term 
                trends or quick wins.
              </p>
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