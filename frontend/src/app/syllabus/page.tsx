import Link from 'next/link';
import { 
  Twitter, 
  Github, 
  Send,
  Book,
  Clock,
  Users,
  Target,
  GraduationCap,
  CheckCircle
} from 'lucide-react';

export default function SyllabusPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hexagonal Swarm Background */}
      <div className="absolute inset-0 hex-swarm pointer-events-none"></div>
      
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
      <section className="pt-24 pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: 'rgba(255, 155, 5, 0.15)'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: 'rgba(255, 155, 5, 0.1)'}}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{color: 'var(--solar-gold)', textShadow: '0 0 18px rgba(255, 155, 5, 0.35)'}}>
            Hiveverse Bootcamp
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Hivetensor + Intelliverse collaboration ◇ The comprehensive AutoML training program
          </p>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#phase1" className="btn btn-primary">Phase 1</a>
            <a href="#phase2" className="btn">Phase 2</a>
            <a href="#phase3" className="btn">Phase 3</a>
            <a href="#community" className="btn">Community</a>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">22 Weeks</h3>
              <p className="text-white/70 text-sm">Comprehensive curriculum from fundamentals to advanced AutoML</p>
            </div>
            <div className="bg-white/5 border border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">3 Phases</h3>
              <p className="text-white/70 text-sm">Structured learning path building on each phase</p>
            </div>
            <div className="bg-white/5 border border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Community</h3>
              <p className="text-white/70 text-sm">Collaborative learning with fellow researchers</p>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Phase 1 */}
        <section id="phase1" className="py-12 relative">
          <div className="absolute left-0 top-0 w-1 h-full bg-solar-gold"></div>
          <div className="ml-8">
            <h2 className="text-3xl font-bold mb-6 text-solar-gold">Phase 1: Foundations</h2>
            
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Week 1 — ML Fundamentals & Intuition</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-solar-gold mt-0.5 flex-shrink-0" />
                    <span><strong>Module 1.1:</strong> The ML Mindset – problem‑first framing, data exploration.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-solar-gold mt-0.5 flex-shrink-0" />
                    <span><strong>Module 1.2:</strong> Linear & Logistic Regression – Titanic challenge, AUC‑ROC, error trade‑offs.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-solar-gold mt-0.5 flex-shrink-0" />
                    <span><strong>Module 1.3:</strong> ML Landscape & Taxonomy – supervised vs unsupervised, algorithm personalities.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-solar-gold mt-0.5 flex-shrink-0" />
                    <span><strong>Module 1.4:</strong> Optimization & Learning Theory – gradient descent game, No Free Lunch intro.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Week 2 — Practical ML & Initial Project</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-solar-gold mt-0.5 flex-shrink-0" />
                    <span><strong>Module 2.1:</strong> Feature Engineering & Data Prep – competition & "feature detective".</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-solar-gold mt-0.5 flex-shrink-0" />
                    <span><strong>Module 2.2:</strong> Model Evaluation & Validation – cross‑validation, model court simulation.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-solar-gold mt-0.5 flex-shrink-0" />
                    <span><strong>Module A:</strong> Kolmogorov Corner – algorithmic information theory & compression challenge.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-solar-gold mt-0.5 flex-shrink-0" />
                    <span><strong>Module 2.3:</strong> ML Ethics & Real Stakes – demilitarization, "hard choices" simulation.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-solar-gold mt-0.5 flex-shrink-0" />
                    <span><strong>Capstone:</strong> Build‑a‑Baseline — churn, sentiment transfer, anomaly detection.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="h-1 bg-gradient-to-r from-solar-gold to-solar-amber my-12"></div>

        {/* Phase 2 */}
        <section id="phase2" className="py-12 relative">
          <div className="absolute left-0 top-0 w-1 h-full bg-solar-gold"></div>
          <div className="ml-8">
            <h2 className="text-3xl font-bold mb-6 text-solar-gold">Phase 2: Deep Learning & Transformers</h2>
            
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 1‑2 — Neural Network Fundamentals</h3>
                <p className="text-white/80">NumPy NN from scratch, backpropagation, optimization olympics.</p>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 3‑4 — Specialized Architectures</h3>
                <p className="text-white/80">CNNs, RNNs, modern training techniques with visualizers.</p>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 5‑6 — RL & Efficient Fine‑tuning</h3>
                <p className="text-white/80">RL foundations, LoRA & adapter‑based tuning.</p>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 7‑8 — Transformers & Attention</h3>
                <p className="text-white/80">Self‑attention, transformer build‑up, pre‑trained model adaptation.</p>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 9‑10 — Capstone & Advanced Topics</h3>
                <p className="text-white/80">Self‑supervised, generative, multi‑modal learning & architecture defense.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-1 bg-gradient-to-r from-solar-gold to-solar-amber my-12"></div>

        {/* Phase 3 */}
        <section id="phase3" className="py-12 relative">
          <div className="absolute left-0 top-0 w-1 h-full bg-solar-gold"></div>
          <div className="ml-8">
            <h2 className="text-3xl font-bold mb-6 text-solar-gold">Phase 3: Decentralized Training & AutoML</h2>
            
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 1‑2 — Distributed Training Foundations</h3>
                <p className="text-white/80">Data/model/pipeline parallelism, gradient traffic control.</p>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 3‑4 — Communication‑Efficient Training</h3>
                <p className="text-white/80">DCT & sparsification, EATreeSGD synchronization.</p>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 5‑6 — Parallel Evolution & Auto‑Tuning</h3>
                <p className="text-white/80">Seed chase, evolutionary strategies at scale.</p>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 7‑8 — Decentralized Ecosystem</h3>
                <p className="text-white/80">Federated learning, fault tolerance drills.</p>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Weeks 9‑10 — AutoML & Self‑Improving Systems</h3>
                <p className="text-white/80">NAS, continuous updating AI colony project.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-1 bg-gradient-to-r from-solar-gold to-solar-amber my-12"></div>

        {/* Community & Culture */}
        <section id="community" className="py-12 relative">
          <div className="absolute left-0 top-0 w-1 h-full bg-solar-gold"></div>
          <div className="ml-8">
            <h2 className="text-3xl font-bold mb-6 text-solar-gold">Community & Cohort Culture</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-4 text-white">Daily Rituals</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Algorithm meditations and paper discussions</li>
                  <li>• Distributed debugging workshops</li>
                  <li>• Collaborative coding sessions</li>
                </ul>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-4 text-white">Weekly Events</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• <strong className="text-solar-gold">Failure Friday:</strong> Learning from setbacks</li>
                  <li>• <strong className="text-solar-gold">Distributed Disasters:</strong> System resilience</li>
                  <li>• <strong className="text-solar-gold">Future Friday:</strong> Technology forecasting</li>
                </ul>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6 md:col-span-2">
                <h3 className="text-lg font-bold mb-4 text-white">Learning Environment</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
                  <li>• GPU clusters for hands-on training</li>
                  <li>• Visual dashboards and monitoring tools</li>
                  <li>• Ethical reflection workshops</li>
                  <li>• Real-time collaboration platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="bg-white/5 border border-solar-gold/30 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-solar-gold">Ready to Join the Bootcamp?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Transform your understanding of machine learning and become part of the decentralized AI revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tutorials" className="btn btn-primary inline-flex items-center justify-center gap-2">
                <Book className="w-4 h-4" />
                View Tutorials
              </Link>
              <Link href="/challenges" className="btn inline-flex items-center justify-center gap-2">
                <Target className="w-4 h-4" />
                Start Challenges
              </Link>
            </div>
          </div>
        </section>
      </main>

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
            <p className="text-white/60 text-sm mb-4 md:mb-0">© 2025 Hivetensor • Hiveverse Bootcamp • Solar Brutalism Edition</p>
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