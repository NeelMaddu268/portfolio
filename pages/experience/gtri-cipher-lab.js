import Head from 'next/head';
import Link from 'next/link';

export default function GTRICipherLab() {
  return (
    <>
      <Head>
        <title>GTRI CIPHER Lab Experience | Neel Maddu</title>
      </Head>

      <nav style={{ padding: '1.5rem 0', background: 'var(--bg-color)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container project-nav-row">
          <Link href="/" style={{ fontWeight: 600, color: 'var(--text-muted)' }}>← Back to Portfolio</Link>
          <div style={{ fontWeight: 800 }}>NM.</div>
        </div>
      </nav>

      <main className="article-container animate-fade-in delay-100">
        <div style={{ marginBottom: '2rem' }}>
          <span className="tech-badge">ML R&D</span>
          <span className="tech-badge">NLP</span>
          <span className="tech-badge">Graph Analytics</span>
          <span className="tech-badge">Cybersecurity</span>
        </div>

        <h1 className="text-gradient">Software Engineer Intern, CIPHER Lab</h1>
        <p>
          Georgia Tech Research Institute (GTRI) · Threat Analysis Branch · Atlanta, GA · May 2026 - Present
        </p>

        <h2>Role Scope</h2>
        <p>
          At GTRI&apos;s CIPHER Lab, I work on machine learning and graph analytics solutions used in cybersecurity and intelligence analysis workflows. My focus is on building practical systems that can process noisy, large-scale data and deliver analyst-ready insights.
        </p>

        <h2>Core Contributions</h2>
        <ul className="feature-list">
          <li><strong>ML Pipeline Development:</strong> Implementing research-oriented ML pipelines to evaluate model behavior and extract high-value patterns from unstructured datasets.</li>
          <li><strong>NLP for Threat Context:</strong> Applying NLP techniques to structure and summarize text-heavy sources for downstream analysis.</li>
          <li><strong>Graph Systems:</strong> Building graph analytics components and dashboard workflows that operate on vertex/edge structures to surface relationships and anomalies.</li>
          <li><strong>Research Collaboration:</strong> Iterating with researchers and engineers on experiments, model assumptions, and system-level tradeoffs.</li>
        </ul>

        <h2>What I&apos;m Learning</h2>
        <p>
          This role has strengthened my ability to bridge research and production constraints: balancing experimental agility with reproducibility, throughput, and actionable outputs for real-world mission contexts.
        </p>
      </main>
    </>
  );
}
