import Head from 'next/head';
import Link from 'next/link';

export default function JotDown() {
  return (
    <>
      <Head>
        <title>JotDown | Neel Maddu</title>
      </Head>
      
      <nav style={{ padding: '1.5rem 0', background: 'var(--bg-color)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontWeight: 600, color: 'var(--text-muted)' }}>← Back to Portfolio</Link>
          <div style={{ fontWeight: 800 }}>NM.</div>
        </div>
      </nav>

      <main className="article-container animate-fade-in delay-100">
        <div style={{ marginBottom: '3rem' }}>
          <span className="tech-badge">SwiftUI</span>
          <span className="tech-badge">MVVM</span>
          <span className="tech-badge">Core ML</span>
          <span className="tech-badge">NLP</span>
        </div>

        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>JotDown</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          An iOS platform blending hyper-minimalist note-taking with on-device semantic awareness.
        </p>

        <h2>Design Architecture</h2>
        <p>
          I architected the application utilizing <strong>SwiftUI</strong> and strict <strong>MVVM (Model-View-ViewModel)</strong> design patterns. The goal was to build a UI that had absolutely zero friction for data entry while hiding an immensely powerful structural engine beneath the surface.
        </p>
        
        <h2>Core ML & NLP Integration</h2>
        <p>
          Most applications send text data to cloud providers to parse sentiment or tags. JotDown instead processes entirely on-device using Apple's <strong>Core ML</strong> framework to perform Natural Language Processing.
        </p>

        <ul className="feature-list">
          <li><strong>Entity Recognition:</strong> Automatically detects dates, actionable keywords, and key themes without the user needing to manually tag them.</li>
          <li><strong>Semantic Search:</strong> Searching "grocery" will pull up notes mentioning "apples" or "milk", understanding the underlying semantic relationship.</li>
          <li><strong>Data Visualization:</strong> A fully custom view that renders a knowledge node graph of notes overlapping in latent themes, helping discover hidden connections.</li>
        </ul>

        <h2>Outcomes</h2>
        <p>
          JotDown successfully marries advanced AI with native iOS development, proving that powerful large-scale data manipulation doesn't require backend cloud dependency; it can effectively run in the palm of your hand utilizing efficient algorithmic logic.
        </p>
      </main>
    </>
  );
}
