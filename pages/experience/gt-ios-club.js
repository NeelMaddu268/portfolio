import Head from 'next/head';
import Link from 'next/link';

export default function GTIOSClub() {
  return (
    <>
      <Head>
        <title>Georgia Tech iOS Club Experience | Neel Maddu</title>
      </Head>

      <nav style={{ padding: '1.5rem 0', background: 'var(--bg-color)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container project-nav-row">
          <Link href="/" style={{ fontWeight: 600, color: 'var(--text-muted)' }}>← Back to Portfolio</Link>
          <div style={{ fontWeight: 800 }}>NM.</div>
        </div>
      </nav>

      <main className="article-container animate-fade-in delay-100">
        <div style={{ marginBottom: '2rem' }}>
          <span className="tech-badge">SwiftUI</span>
          <span className="tech-badge">Core ML</span>
          <span className="tech-badge">Firebase</span>
          <span className="tech-badge">Team Leadership</span>
        </div>

        <h1 className="text-gradient">Senior iOS Developer, GT iOS Club</h1>
        <p>
          Georgia Institute of Technology · Atlanta, GA · Jan 2026 - Present
        </p>

        <h2>Leadership Scope</h2>
        <p>
          As a Senior iOS Developer, I lead project execution across multiple student product teams, helping drive delivery quality, architecture decisions, and engineering mentorship.
        </p>

        <h2>Core Contributions</h2>
        <ul className="feature-list">
          <li><strong>Team Leadership:</strong> Led a team of 8 developers across 3 Swift/Core ML/Firebase projects adopted by 150+ club members.</li>
          <li><strong>Product Architecture:</strong> Collaborated with design and engineering peers on SwiftUI + MVVM implementations that improved onboarding retention.</li>
          <li><strong>Code Review Process:</strong> Reviewed 40+ pull requests using consistent review standards to improve code quality and reduce regressions.</li>
          <li><strong>Mentorship:</strong> Mentored 4 junior developers on iOS patterns, Git workflows, and debugging practices to accelerate feature delivery.</li>
        </ul>

        <h2>Impact</h2>
        <p>
          This role helped me grow from individual contributor to technical leader by balancing delivery speed, quality standards, and team development.
        </p>
      </main>
    </>
  );
}
