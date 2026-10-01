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
          <span className="tech-badge">NLP</span>
          <span className="tech-badge">LLM Security</span>
          <span className="tech-badge">Agentic Systems</span>
          <span className="tech-badge">Cybersecurity</span>
        </div>

        <h1 className="text-gradient">Software Engineer Intern, CIPHER Lab</h1>
        <p>
          Georgia Tech Research Institute (GTRI) · Threat Analysis Branch · Atlanta, GA · May 2026 - Present
        </p>

        <h2>Role Scope</h2>
        <p>
          At GTRI&apos;s CIPHER Lab, I work on two things: turning large volumes of unstructured text into structured signals analysts can use, and testing how LLM-enabled and agentic systems hold up against adversarial attacks.
        </p>

        <h2>Core Contributions</h2>
        <ul className="feature-list">
          <li><strong>NLP Pipelines:</strong> Build pipelines for entity extraction and semantic analysis across 60K+ unstructured text records and posts, supporting cybersecurity and intelligence analysis workflows in a national security context.</li>
          <li><strong>Agentic System Red-Teaming:</strong> Evaluate 15 agentic LLM configurations against 6 categories of adversarial and injection-style attacks on an isolated 3-VM testbed, quantifying how prompt design, tool permissions, and guardrail placement drive failure rates.</li>
          <li><strong>Briefings:</strong> Brief 5 program stakeholders on model-vulnerability findings, informing security assessments and program-level architecture decisions.</li>
        </ul>

        <h2>What I&apos;m Learning</h2>
        <p>
          This role has strengthened my ability to bridge research and production constraints: balancing experimental agility with reproducibility, throughput, and actionable outputs for real-world mission contexts.
        </p>
      </main>
    </>
  );
}
