import Head from 'next/head';
import Link from 'next/link';

export default function HiddenQuakes() {
  return (
    <>
      <Head>
        <title>Hidden Quakes | Neel Maddu</title>
      </Head>

      <nav style={{ padding: '1.5rem 0', background: 'var(--bg-color)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container project-nav-row">
          <Link href="/" style={{ fontWeight: 600, color: 'var(--text-muted)' }}>← Back to Portfolio</Link>
          <div style={{ fontWeight: 800 }}>NM.</div>
        </div>
      </nav>

      <main className="article-container animate-fade-in delay-100">
        <div style={{ marginBottom: '3rem' }}>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">PyTorch</span>
          <span className="tech-badge">SeisBench</span>
          <span className="tech-badge">PyOcto</span>
          <span className="tech-badge">ObsPy</span>
          <span className="tech-badge">React Three Fiber</span>
        </div>

        <h1 className="text-gradient">Hidden Quakes</h1>
        <p>
          Finding the small earthquakes the public catalog misses under Utah&apos;s FORGE geothermal site. Built by a team of four in 36 hours at HackGT 13.
        </p>

        <h2>The Problem</h2>
        <p>
          Geothermal development near Milford, Utah triggers small earthquakes, and operators pause work when bigger ones hit. But the public regional catalog for the area is sparse: it listed <strong>43 events</strong> for our test day. Public seismometers in the same area record far more than that. We wanted to pull those events out of the raw waveforms and show what the public catalog leaves out.
        </p>

        <h2>What I Built</h2>
        <p>
          I owned the seismology lane: everything between &quot;here are the phase picks&quot; and &quot;here is a located, scored event.&quot; Teammates owned waveform ingest and neural phase picking, the 3D frontend, and the data platform.
        </p>
        <ul className="feature-list">
          <li><strong>Association:</strong> Grouped 27K PhaseNet picks from 24 stations into candidate events with PyOcto.</li>
          <li><strong>Relocation:</strong> Grid-search location with per-station timing corrections (statics), reaching a median timing misfit of 0.033 s.</li>
          <li><strong>Catalog Matching &amp; Tiers:</strong> Matched candidates against the public catalog and sorted them into strict, medium, and loose confidence tiers anchored to public-catalog quality.</li>
          <li><strong>Magnitude:</strong> Calibrated magnitudes against public events (leave-one-out MAE 0.11).</li>
          <li><strong>Scramble Test:</strong> A logistic-regression model that scores how distinguishable each event is from chance alignments of picks.</li>
        </ul>

        <h2>Results</h2>
        <p>
          The final run produced <strong>654 candidate events vs. 43</strong> in the public catalog for the same day and region, a 15x denser catalog, and recovered <strong>all 43</strong> catalogued events. Of the candidates, 32 are strict-tier, 171 medium, and 451 loose; 14 strict-tier events don&apos;t appear in the public catalog at all.
        </p>

        <h2>How We Checked It</h2>
        <p>
          A denser catalog only means something if the extra events aren&apos;t noise, so most of my time went into validation.
        </p>
        <ul className="feature-list">
          <li><strong>Null Test:</strong> Re-ran association on 20 clock-shuffled versions of the data. Shuffles produced about 94 chance events on average, and <strong>zero</strong> at the strict tier.</li>
          <li><strong>Scramble Classifier:</strong> Held-out ROC AUC of 0.96 at equal station count for separating real events from scrambled ones.</li>
          <li><strong>Synthetic Depth Test:</strong> Located 200 synthetic events with a median vertical error of 59 m.</li>
          <li><strong>Baseline:</strong> A classic STA/LTA detector produced 4,120 candidates but none at the strict tier; the PhaseNet pipeline produced 33 strict-tier events on the same rerun.</li>
        </ul>

        <h2>What Got Cut</h2>
        <p>
          A live real-time mode didn&apos;t make the deadline. A 3D velocity model was built but left off by default because it carried a +2.25 km depth bias, and relative relocation was dropped for time.
        </p>

        <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://hidden-quakes-final.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Live Demo
          </a>
          <a href="https://github.com/NeelMaddu268/hidden-quakes" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub Code
          </a>
          <a href="https://devpost.com/software/hidden-quakes" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Devpost
          </a>
        </div>
      </main>
    </>
  );
}
