import Head from 'next/head';
import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function MartaTransitTracker() {
  return (
    <>
      <Head>
        <title>MARTA Live Transit Tracker | Neel Maddu</title>
      </Head>


      <CaseStudyLayout>
        <div style={{ marginBottom: '3rem' }}>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">FastAPI</span>
          <span className="tech-badge">SQLite</span>
          <span className="tech-badge">SwiftUI</span>
          <span className="tech-badge">WidgetKit</span>
          <span className="tech-badge">GTFS-Realtime</span>
        </div>

        <h1>MARTA Live Transit Tracker</h1>
        <p>
          A full-stack, real-time transit tracker for Atlanta&apos;s MARTA network, turning noisy public feeds into a fast, native iOS experience.
        </p>

        <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
          <img
            src="/projects/marta/demo.gif"
            alt="Live demo: real-time map, departure boards with countdowns, commute card, and single-route view"
            style={{ width: '100%', maxWidth: '340px', borderRadius: '1.5rem' }}
          />
          <figcaption style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            Live data: the system map with rail lines, Five Points departures counting down each second, a saved commute with bay guidance, and a single-route live view.
          </figcaption>
        </figure>

        <h2>The Problem</h2>
        <p>
          Public transit data is published through the GTFS and GTFS-Realtime standards, but the raw feeds are messy: vehicle positions drift, delay information is inconsistent, and real-world feeds routinely diverge from what the official documentation promises. I wanted a rider-facing app that felt instant and trustworthy, which meant building an ingestion layer that could absorb those imperfections rather than surface them.
        </p>

        <h2>Architecture &amp; Implementation</h2>
        <p>
          I built a <strong>24/7 FastAPI backend</strong> backed by SQLite that continuously polls MARTA&apos;s GTFS-Realtime bus and rail feeds, normalizing and persisting the data before serving it to a native SwiftUI client.
        </p>

        <ul className="feature-list">
          <li><strong>Continuous Ingestion:</strong> A FastAPI/SQLite backend polling MARTA&apos;s GTFS-Realtime and rail feeds around the clock, accumulating over 575,000 arrival observations across 78 routes and 6,200+ stops.</li>
          <li><strong>Native Client:</strong> A SwiftUI app tracking roughly 200 live vehicles with a 15-second refresh, plus a WidgetKit extension for at-a-glance arrivals.</li>
          <li><strong>Trip Planning:</strong> Integrated OpenTripPlanner to deliver delay-aware, multi-leg trip planning on top of the live feed data.</li>
        </ul>

        <h2>Screenshots</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', margin: '1.5rem 0 2.5rem' }}>
          {[
            ['map-live.png', 'Live system map'],
            ['departures-bays.png', 'Departures with bay guidance'],
            ['commute-alerts.png', 'Commute card, alerts and confidence'],
            ['route-map.png', 'Single-route live map']
          ].map(([file, caption]) => (
            <figure key={file} style={{ margin: 0, textAlign: 'center' }}>
              <img src={`/projects/marta/${file}`} alt={caption} style={{ width: '100%', borderRadius: '1rem' }} />
              <figcaption style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{caption}</figcaption>
            </figure>
          ))}
        </div>

        <h2>Challenges Overcome</h2>
        <p>
          The hardest problems lived in the gap between the spec and reality. Bus delay data was frequently missing from the feed, so I <strong>reconstructed it via trip-to-schedule joins against 2.4M GTFS rows</strong>, inferring delays where the realtime feed stayed silent. I also ran into protobuf payloads that the standard parsers mishandled, so I <strong>hand-wrote a protobuf decoder and validated it byte-for-byte against the reference parser</strong> to guarantee correctness. The entire pipeline is backed by <strong>59 automated tests</strong> to keep the ingestion layer honest as the feeds evolve.
        </p>

        <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/NeelMaddu268/marta-transit-tracker" target="_blank" rel="noopener noreferrer" className="btn-primary">
            GitHub Code
          </a>
        </div>
      </CaseStudyLayout>
    </>
  );
}
