import Head from 'next/head';
import Link from 'next/link';

export default function Contour() {
  return (
    <>
      <Head>
        <title>Contour | Neel Maddu</title>
      </Head>

      <nav style={{ padding: '1.5rem 0', background: 'var(--bg-color)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container project-nav-row">
          <Link href="/" style={{ fontWeight: 600, color: 'var(--text-muted)' }}>← Back to Portfolio</Link>
          <div style={{ fontWeight: 800 }}>NM.</div>
        </div>
      </nav>

      <main className="article-container animate-fade-in delay-100">
        <div style={{ marginBottom: '3rem' }}>
          <span className="tech-badge">Swift</span>
          <span className="tech-badge">SwiftUI</span>
          <span className="tech-badge">Vision</span>
          <span className="tech-badge">Core Haptics</span>
          <span className="tech-badge">Swift Packages</span>
        </div>

        <h1 className="text-gradient">Contour</h1>
        <p>
          An iOS app that helps blind and low-vision users find buttons on appliances they&apos;ve never seen. In progress with a 20+ person team at the Georgia Tech iOS Club.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', margin: '2rem 0 0.75rem' }}>
          {[
            ['tracking.jpg', 'Tracking mode: guiding a finger to the START button on a microwave'],
            ['chart.jpg', 'Chart mode: exploring a chart by touch (planned after core guidance)']
          ].map(([file, caption]) => (
            <figure key={file} style={{ margin: 0, textAlign: 'center' }}>
              <img src={`/projects/contour/${file}`} alt={caption} style={{ width: '100%', maxWidth: '300px', borderRadius: '1.5rem' }} />
              <figcaption style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{caption}</figcaption>
            </figure>
          ))}
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', marginBottom: '2.5rem' }}>
          Figma mockups from the team&apos;s design lead. The app itself is still in progress.
        </p>

        <h2>The Problem</h2>
        <p>
          Microwaves, thermostats, and washing machines increasingly use flat touch panels with no tactile cues. Existing workarounds need setup ahead of time, like sticking on bump dots or having someone label the panel. Contour is meant to read an unfamiliar panel cold, on the phone, with zero setup.
        </p>

        <h2>How It Works</h2>
        <p>
          Point the camera at a panel and say which button you want. Contour finds the panel and its buttons, tracks your fingertip, and guides it to the target with haptics and audio, then confirms when you&apos;re there. A second mode, planned once the core guidance works, lets you explore a chart image by touch.
        </p>
        <ul className="feature-list">
          <li><strong>Surface Understanding:</strong> Turns a photo into a SurfaceMap: the panel outline, button locations, and their labels, using Vision rectangle detection and text recognition.</li>
          <li><strong>Tracking:</strong> Follows the panel and your fingertip frame by frame and works out the distance and direction to the target.</li>
          <li><strong>Feedback:</strong> Haptics, audio, and speech that steer your finger and announce success or lost tracking.</li>
        </ul>

        <h2>Architecture</h2>
        <p>
          The app is split into six Swift packages plus an iOS app and a macOS test harness. Every package imports only the shared <code>ContourCore</code> contract, and a script in CI enforces that rule. A mocks package gives predictable fakes for every stage, so each of the 12 lanes can build and test without waiting on the others.
        </p>

        <h2>My Role</h2>
        <ul className="feature-list">
          <li><strong>Tech Lead:</strong> Co-lead the full team with one other Tech Lead, and co-lead the Surface Understanding sub-team.</li>
          <li><strong>Codebase Structure:</strong> Restructured the repo for 3 sub-teams and 12 parallel lanes, and maintain CI and tooling, including the move to Xcode 27 and iOS 27.</li>
          <li><strong>Live Pipeline:</strong> Wired the real panel detector into the live Surface Understanding path.</li>
        </ul>

        <h2>Where It Stands</h2>
        <p>
          The panel detector runs in the live pipeline. Button detection finds all 26 keys on a generated keypad and label reading passes 35 of 35 generated test panels, and both are next to be connected. The project has 83 automated tests in CI. Next up: live fingertip tracking and the haptic guidance loop, toward a working end-to-end prototype.
        </p>
      </main>
    </>
  );
}
