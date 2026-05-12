import Head from 'next/head';
import Link from 'next/link';

export default function VIPAlphaEvolve() {
  return (
    <>
      <Head>
        <title>VIP AlphaEvolve Experience | Neel Maddu</title>
      </Head>

      <nav style={{ padding: '1.5rem 0', background: 'var(--bg-color)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container project-nav-row">
          <Link href="/" style={{ fontWeight: 600, color: 'var(--text-muted)' }}>← Back to Portfolio</Link>
          <div style={{ fontWeight: 800 }}>NM.</div>
        </div>
      </nav>

      <main className="article-container animate-fade-in delay-100">
        <div style={{ marginBottom: '2rem' }}>
          <span className="tech-badge">Genetic Programming</span>
          <span className="tech-badge">LLM-GE</span>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">HPC</span>
        </div>

        <h1 className="text-gradient">VIP Program: AlphaEvolve Subteam</h1>
        <p>
          Georgia Institute of Technology · Automated Algorithm Design · Atlanta, GA · Jan 2026 - Present
        </p>

        <h2>Research Focus</h2>
        <p>
          In the VIP program, I contribute to a GTRI-sponsored research initiative exploring multi-objective genetic programming systems that evolve hybrid algorithms directly from data.
        </p>

        <h2>Core Contributions</h2>
        <ul className="feature-list">
          <li><strong>Evolutionary Frameworks:</strong> Working on systems that combine search, mutation, and objective evaluation to discover high-performing algorithm variants.</li>
          <li><strong>LLM-Guided Evolution:</strong> Extending workflows where LLMs propose and mutate code candidates in an automated evolution loop.</li>
          <li><strong>Experiment Rigor:</strong> Building reproducible Python experiment pipelines with traceable settings, run metadata, and consistent evaluation criteria.</li>
          <li><strong>HPC Execution:</strong> Running and validating experiments on Georgia Tech&apos;s PACE ICE infrastructure for neural architecture and performance studies.</li>
        </ul>

        <h2>Why It Matters</h2>
        <p>
          This experience sits at the intersection of AI systems engineering and scientific experimentation, and it has sharpened my skills in optimization, reproducibility, and analysis at scale.
        </p>
      </main>
    </>
  );
}
