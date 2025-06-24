import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="logo">
          <span className="hex"></span>
          HIVETENSOR
        </div>
        <div className="nav-links">
          <a href="#manifesto">Manifesto</a>
          <a href="#how-it-works">How&nbsp;It&nbsp;Works</a>
          <a href="#join">Join</a>
          <Link href="/syllabus">Bootcamp</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="top">
        <div className="swarm"></div>
        <div className="wrapper">
          <h1>
            <span className="sigil">∑</span>The Liberation of <br />
            Artificial Intelligence<span className="sigil">∴</span>
          </h1>
          <p>
            Individually we are drops, together we are the ocean. Abundance is our weapon against scarcity join the swarm.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Join the Hive</button>
            <button className="btn">Read the Manifesto</button>
          </div>
        </div>
      </header>

      {/* Manifesto Section */}
      <section id="manifesto" className="manifesto">
        <div className="wrapper">
          <h2 className="section-title">The Hive Manifesto</h2>
          <p>
            A shadow looms over the digital republic. While citizens slept, new emperors crowned themselves lords of thought. 
            They who inherited the treasury of human knowledge now claim it as their private estate.
          </p>
          <p>
            <strong>The Great Betrayal:</strong> When giants released marvels while concealing their mechanisms, they shattered 
            the covenant of scientific progress. This was no mere business strategy it was a fundamental betrayal of the commons 
            that nurtures innovation.
          </p>
          <p>
            <strong>The Path Forward Burns Clear:</strong> We have identified the three barriers that confine decentralized AI: 
            (1) compute, (2) bandwidth, (3) synchronization. Where others see walls, we see puzzles awaiting solutions.
          </p>
          <p>
            <strong>The Oath of the Hive:</strong> We will not be denied our rightful inheritance. We choose an AI future of 
            plurality, not monopoly. The hive rises. The nectar flows. The future opens.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <div className="wrapper">
          <h2 className="section-title">How it Works</h2>
          <p>Three steps to transform surplus hardware into liberated intelligence.</p>
          <div className="steps">
            <article className="step" data-step="01">
              <h3>Join the Collective</h3>
              <p>Download NECTAR and connect your device to the hive. From laptops to workstations, every node strengthens the swarm.</p>
            </article>
            <article className="step" data-step="02">
              <h3>Contribute Compute</h3>
              <p>Your device collaborates on distributed model training, solving complex tasks in parallel.</p>
            </article>
            <article className="step" data-step="03">
              <h3>Earn Rewards</h3>
              <p>For every FLOP you contribute, value returns. This is not charity; this is the purest market physics.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" style={{ background: 'var(--obsidian-800)' }}>
        <div className="wrapper">
          <h2 className="section-title">Join the Hive</h2>
          <p>Today, we launch NECTAR the protocol that transforms your computer into a cell within the global brain.</p>
          <div className="requirements">
            <div className="requirement">
              <h3>For AutoML</h3>
              <p>CPU & 4 GB RAM is enough to grow the swarm.</p>
            </div>
            <div className="requirement">
              <h3>For Distributed Training</h3>
              <p>A GPU with 24 GB+ memory to fuel neural genesis.</p>
            </div>
          </div>
          <button className="btn primary">COMING SOON</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <a href="#">X</a>
          <a href="#">GitHub</a>
          <a href="#">Discord</a>
        </div>
        <p style={{ fontSize: '.8rem', opacity: '.6' }}>
          © 2025 Hivetensor   The hive rises. The nectar flows. The future opens.
        </p>
      </footer>
    </>
  );
}
