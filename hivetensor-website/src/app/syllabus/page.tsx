import Link from 'next/link';

export default function Syllabus() {
  return (
    <>
      <style jsx>{`
        /* Syllabus specific styles */
        :root {
          --bg: #000;
          --amber: #ffb300;
          --amber-light: #ffc107;
          --grad: linear-gradient(45deg, #000 0%, var(--amber) 80%);
        }
        
        .hex-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image: radial-gradient(var(--amber) 1px, transparent 1px), radial-gradient(var(--amber) 1px, transparent 1px);
          background-size: 50px 29px;
          background-position: 0 0, 25px 15px;
          opacity: 0.06;
          animation: swarm 40s linear infinite;
        }
        
        @keyframes swarm {
          from { transform: translateY(0); }
          to   { transform: translateY(-800px); }
        }

        header {
          padding: 5rem 2rem 3.5rem;
          text-align: center;
          background: var(--grad);
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        
        header h1 {
          font-family: 'Anton', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4rem);
          color: #000;
          text-shadow: 0 0 6px var(--amber-light);
          letter-spacing: -1px;
        }
        
        .syllabus-nav {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }
        
        .syllabus-nav a {
          color: var(--amber);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          position: relative;
        }
        
        .syllabus-nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 2px;
          background: var(--amber);
          transition: width 0.3s;
        }
        
        .syllabus-nav a:hover::after { width: 100%; }

        main { max-width: 1000px; margin: auto; }
        
        .syllabus-section {
          padding: 2.5rem 1.5rem;
          border-left: 4px solid var(--amber);
          margin-bottom: 4rem;
          position: relative;
        }
        
        .syllabus-section::before {
          content: "\\25C7"; /* diamond */
          position: absolute;
          left: -12px;
          top: 0;
          font-size: 1.1rem;
          color: var(--amber);
        }
        
        .syllabus-section h2 {
          font-family: 'Anton', sans-serif;
          font-size: 2.25rem;
          color: var(--amber);
          margin-bottom: 1rem;
        }
        
        .syllabus-section h3 {
          font-family: 'Anton', sans-serif;
          font-size: 1.5rem;
          color: var(--amber-light);
          margin-top: 1.4rem;
          margin-bottom: 0.6rem;
        }
        
        .syllabus-section ul { margin-left: 1.4rem; margin-bottom: 1rem; }
        .syllabus-section li { margin-bottom: 0.35rem; }

        .gradient-divider {
          height: 3px;
          background: var(--grad);
          margin: 3rem 0;
          border: none;
        }
        
        .syllabus-footer {
          text-align: center;
          padding: 2rem 1rem;
          font-size: 0.85rem;
          color: var(--amber-light);
        }
      `}</style>

      <div className="hex-bg"></div>
      
      <header>
        <h1>Hiveverse Bootcamp ◇ Hivetensor + Intelliverse collaboration</h1>
        <nav className="syllabus-nav">
          <a href="#phase1">Phase 1</a>
          <a href="#phase2">Phase 2</a>
          <a href="#phase3">Phase 3</a>
          <a href="#community">Community</a>
        </nav>
      </header>

      <main>
        {/* Phase 1 */}
        <section id="phase1" className="syllabus-section">
          <h2>Phase 1: Foundations</h2>
          <h3>Week 1 — ML Fundamentals & Intuition</h3>
          <ul>
            <li><strong>Module 1.1:</strong> The ML Mindset – problem‑first framing, data exploration.</li>
            <li><strong>Module 1.2:</strong> Linear & Logistic Regression – Titanic challenge, AUC‑ROC, error trade‑offs.</li>
            <li><strong>Module 1.3:</strong> ML Landscape & Taxonomy – supervised vs unsupervised, algorithm personalities.</li>
            <li><strong>Module 1.4:</strong> Optimization & Learning Theory – gradient descent game, No Free Lunch intro.</li>
          </ul>
          <h3>Week 2 — Practical ML & Initial Project</h3>
          <ul>
            <li><strong>Module 2.1:</strong> Feature Engineering & Data Prep – competition & "feature detective".</li>
            <li><strong>Module 2.2:</strong> Model Evaluation & Validation – cross‑validation, model court simulation.</li>
            <li><strong>Module A:</strong> Kolmogorov Corner – algorithmic information theory & compression challenge.</li>
            <li><strong>Module 2.3:</strong> ML Ethics & Real Stakes – demilitarization, "hard choices" simulation.</li>
            <li><strong>Capstone:</strong> Build‑a‑Baseline — churn, sentiment transfer, anomaly detection.</li>
          </ul>
        </section>

        <hr className="gradient-divider" />

        {/* Phase 2 */}
        <section id="phase2" className="syllabus-section">
          <h2>Phase 2: Deep Learning & Transformers</h2>
          <h3>Weeks 1‑2 — Neural Network Fundamentals</h3>
          <ul>
            <li>NumPy NN from scratch, backpropagation, optimization olympics.</li>
          </ul>
          <h3>Weeks 3‑4 — Specialized Architectures</h3>
          <ul>
            <li>CNNs, RNNs, modern training techniques with visualizers.</li>
          </ul>
          <h3>Weeks 5‑6 — RL & Efficient Fine‑tuning</h3>
          <ul>
            <li>RL foundations, LoRA & adapter‑based tuning.</li>
          </ul>
          <h3>Weeks 7‑8 — Transformers & Attention</h3>
          <ul>
            <li>Self‑attention, transformer build‑up, pre‑trained model adaptation.</li>
          </ul>
          <h3>Weeks 9‑10 — Capstone & Advanced Topics</h3>
          <ul>
            <li>Self‑supervised, generative, multi‑modal learning & architecture defense.</li>
          </ul>
        </section>

        <hr className="gradient-divider" />

        {/* Phase 3 */}
        <section id="phase3" className="syllabus-section">
          <h2>Phase 3: Decentralized Training & AutoML</h2>
          <h3>Weeks 1‑2 — Distributed Training Foundations</h3>
          <ul><li>Data/model/pipeline parallelism, gradient traffic control.</li></ul>
          <h3>Weeks 3‑4 — Communication‑Efficient Training</h3>
          <ul><li>DCT & sparsification, EATreeSGD synchronization.</li></ul>
          <h3>Weeks 5‑6 — Parallel Evolution & Auto‑Tuning</h3>
          <ul><li>Seed chase, evolutionary strategies at scale.</li></ul>
          <h3>Weeks 7‑8 — Decentralized Ecosystem</h3>
          <ul><li>Federated learning, fault tolerance drills.</li></ul>
          <h3>Weeks 9‑10 — AutoML & Self‑Improving Systems</h3>
          <ul><li>NAS, continuous updating AI colony project.</li></ul>
        </section>

        <hr className="gradient-divider" />

        {/* Community & culture */}
        <section id="community" className="syllabus-section">
          <h2>Community & Cohort Culture</h2>
          <ul>
            <li>Daily rituals: algorithm meditations, paper discussions, distributed debugging.</li>
            <li>Weekly events: Failure Friday, Distributed Disasters, Future Friday.</li>
            <li>Environment: GPU clusters, visual dashboards, ethical reflection workshops.</li>
          </ul>
        </section>
      </main>

      <footer className="syllabus-footer">
        © 2025 ML Bootcamp • Solar Brutalism Edition
      </footer>
    </>
  );
} 