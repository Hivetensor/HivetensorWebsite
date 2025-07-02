import Link from 'next/link';
import { 
  Twitter, 
  Github, 
  Send,
  Book,
  Play,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Target,
  ArrowRight,
  Download
} from 'lucide-react';

export default function TutorialsPage() {
  const phases = [
    {
      title: "Phase 1: Foundations",
      duration: "2 Weeks",
      description: "ML fundamentals, intuition building, and practical hands-on projects",
      modules: [
        {
          week: "Week 1",
          title: "ML Fundamentals & Intuition",
          topics: [
            "The ML Mindset – problem‑first framing, data exploration",
            "Linear & Logistic Regression – Titanic challenge, AUC‑ROC, error trade‑offs",
            "ML Landscape & Taxonomy – supervised vs unsupervised, algorithm personalities",
            "Optimization & Learning Theory – gradient descent game, No Free Lunch intro"
          ]
        },
        {
          week: "Week 2",
          title: "Practical ML & Initial Project",
          topics: [
            "Feature Engineering & Data Prep – competition & \"feature detective\"",
            "Model Evaluation & Validation – cross‑validation, model court simulation",
            "Kolmogorov Corner – algorithmic information theory & compression challenge",
            "ML Ethics & Real Stakes – demilitarization, \"hard choices\" simulation",
            "Capstone: Build‑a‑Baseline — churn, sentiment transfer, anomaly detection"
          ]
        }
      ]
    },
    {
      title: "Phase 2: Deep Learning & Transformers",
      duration: "10 Weeks",
      description: "Neural networks, specialized architectures, and modern transformer systems",
      modules: [
        {
          week: "Weeks 1‑2",
          title: "Neural Network Fundamentals",
          topics: [
            "NumPy NN from scratch, backpropagation, optimization olympics"
          ]
        },
        {
          week: "Weeks 3‑4",
          title: "Specialized Architectures",
          topics: [
            "CNNs, RNNs, modern training techniques with visualizers"
          ]
        },
        {
          week: "Weeks 5‑6",
          title: "RL & Efficient Fine‑tuning",
          topics: [
            "RL foundations, LoRA & adapter‑based tuning"
          ]
        },
        {
          week: "Weeks 7‑8",
          title: "Transformers & Attention",
          topics: [
            "Self‑attention, transformer build‑up, pre‑trained model adaptation"
          ]
        },
        {
          week: "Weeks 9‑10",
          title: "Capstone & Advanced Topics",
          topics: [
            "Self‑supervised, generative, multi‑modal learning & architecture defense"
          ]
        }
      ]
    },
    {
      title: "Phase 3: Decentralized Training & AutoML",
      duration: "10 Weeks",
      description: "Distributed systems, communication-efficient training, and automated ML",
      modules: [
        {
          week: "Weeks 1‑2",
          title: "Distributed Training Foundations",
          topics: [
            "Data/model/pipeline parallelism, gradient traffic control"
          ]
        },
        {
          week: "Weeks 3‑4",
          title: "Communication‑Efficient Training",
          topics: [
            "DCT & sparsification, EATreeSGD synchronization"
          ]
        },
        {
          week: "Weeks 5‑6",
          title: "Parallel Evolution & Auto‑Tuning",
          topics: [
            "Seed chase, evolutionary strategies at scale"
          ]
        },
        {
          week: "Weeks 7‑8",
          title: "Decentralized Ecosystem",
          topics: [
            "Federated learning, fault tolerance drills"
          ]
        },
        {
          week: "Weeks 9‑10",
          title: "AutoML & Self‑Improving Systems",
          topics: [
            "NAS, continuous updating AI colony project"
          ]
        }
      ]
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
              AutoML Tutorials
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Master the art of automated machine learning and decentralized AI through our comprehensive learning path.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">22 Weeks Total</h3>
              <p className="text-white/70 text-sm">Comprehensive learning journey from basics to advanced AutoML</p>
            </div>
            <div className="bg-white/5 border border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Community-Driven</h3>
              <p className="text-white/70 text-sm">Learn alongside fellow researchers and practitioners</p>
            </div>
            <div className="bg-white/5 border border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-solar-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Hands-On Projects</h3>
              <p className="text-white/70 text-sm">Real challenges and practical applications throughout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Phases */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-solar-gold">Learning Phases</h2>
          
          <div className="space-y-8">
            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="bg-white/5 border border-white/20 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-solar-gold">{phase.title}</h3>
                    <p className="text-white/80 mb-2">{phase.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-white/60">
                      <Clock className="w-4 h-4" />
                      {phase.duration}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center">
                    <span className="text-solar-gold font-bold">{phaseIndex + 1}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {phase.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="bg-white/5 border border-white/20 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-solar-gold/20 border border-solar-gold/30 rounded flex items-center justify-center">
                          <span className="text-solar-gold text-sm font-bold">{module.week}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white">{module.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3 text-white/70 text-sm">
                            <CheckCircle className="w-4 h-4 text-solar-gold mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Culture */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-solar-gold">Community & Culture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-white">Daily Rituals</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Algorithm meditations and theory discussions</li>
                <li>• Paper reading and implementation sessions</li>
                <li>• Distributed debugging workshops</li>
                <li>• Peer code reviews and collaboration</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-white">Weekly Events</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• <strong className="text-solar-gold">Failure Friday:</strong> Learning from mistakes</li>
                <li>• <strong className="text-solar-gold">Distributed Disasters:</strong> System resilience</li>
                <li>• <strong className="text-solar-gold">Future Friday:</strong> Emerging tech discussions</li>
                <li>• <strong className="text-solar-gold">Demo Day:</strong> Project showcases</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-white">Learning Environment</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Access to GPU clusters for training</li>
                <li>• Visual dashboards and monitoring tools</li>
                <li>• Real-time collaboration platforms</li>
                <li>• Ethical reflection workshops</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-white">Assessment & Projects</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Hands-on capstone projects</li>
                <li>• Competition-style challenges</li>
                <li>• Peer evaluation and feedback</li>
                <li>• Real-world problem solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-solar-gold/30 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-solar-gold">Ready to Begin Your Journey?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              The Hiveverse Bootcamp is a collaboration between Hivetensor and Intelliverse, designed to create 
              the next generation of AutoML practitioners and distributed AI researchers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">Prerequisites</h3>
                <ul className="text-white/70 text-sm space-y-1 text-left">
                  <li>• Basic Python programming experience</li>
                  <li>• Linear algebra and calculus fundamentals</li>
                  <li>• Enthusiasm for machine learning</li>
                  <li>• Willingness to collaborate and share knowledge</li>
                </ul>
              </div>
              
              <div className="bg-white/5 border border-white/20 p-6">
                <h3 className="text-lg font-bold mb-3 text-white">What You'll Gain</h3>
                <ul className="text-white/70 text-sm space-y-1 text-left">
                  <li>• Deep understanding of AutoML systems</li>
                  <li>• Distributed training expertise</li>
                  <li>• Real-world project portfolio</li>
                  <li>• Global network of AI practitioners</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/syllabus" className="btn btn-primary inline-flex items-center justify-center gap-2">
                <Book className="w-4 h-4" />
                View Full Syllabus
              </Link>
              <Link href="/challenges" className="btn inline-flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Start with Challenges
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