// Syllabus page component

export default function Syllabus() {
  return (
    <>
      <div className="hex-bg"></div>
      
      <header className="syllabus-header">
        <h1>Hiveverse Bootcamp ◇ Hivetensor + Intelliverse collaboration</h1>
        <nav className="syllabus-nav">
          <a href="#phase1">Phase 1</a>
          <a href="#phase2">Phase 2</a>
          <a href="#phase3">Phase 3</a>
          <a href="#community">Community</a>
        </nav>
      </header>

      <main className="syllabus-main">
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
            <li><strong>Module 2.1:</strong> Feature Engineering & Data Prep – competition & &quot;feature detective&quot;.</li>
            <li><strong>Module 2.2:</strong> Model Evaluation & Validation – cross‑validation, model court simulation.</li>
            <li><strong>Module A:</strong> Kolmogorov Corner – algorithmic information theory & compression challenge.</li>
            <li><strong>Module 2.3:</strong> ML Ethics & Real Stakes – demilitarization, &quot;hard choices&quot; simulation.</li>
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