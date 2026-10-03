import Head from 'next/head';
import Link from 'next/link';
import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function GTIOSClub() {
  return (
    <>
      <Head>
        <title>Georgia Tech iOS Club Experience | Neel Maddu</title>
      </Head>


      <CaseStudyLayout>
        <div style={{ marginBottom: '2rem' }}>
          <span className="tech-badge">Swift</span>
          <span className="tech-badge">SwiftUI</span>
          <span className="tech-badge">Vision</span>
          <span className="tech-badge">CI/CD</span>
          <span className="tech-badge">Team Leadership</span>
        </div>

        <h1>Tech Lead, GT iOS Club</h1>
        <p>
          Georgia Institute of Technology · Atlanta, GA · Aug 2025 - Present
        </p>

        <h2>Three Apps, Three Semesters</h2>
        <ul className="feature-list">
          <li><strong>iOS Developer (Fall 2025), JotDown:</strong> Built SwiftUI features on a notes app with on-device semantic search, using MVVM and a PR-based Git workflow.</li>
          <li><strong>Senior iOS Developer (Spring 2026), SmartCompose:</strong> Built the Slack API integration that lets users send and receive Slack messages inside the app, and taught the team how to keep API keys and secrets out of the repo.</li>
          <li><strong>Tech Lead (Fall 2026), Contour:</strong> Co-leading the whole project team with one other Tech Lead, and co-leading the Surface Understanding sub-team.</li>
        </ul>

        <h2>Leading Contour</h2>
        <p>
          <Link href="/projects/contour">Contour</Link> is an on-device accessibility app that guides blind and low-vision users to buttons on appliance panels they&apos;ve never seen. The team is 20+ developers, which only works if people can build in parallel without blocking each other.
        </p>
        <ul className="feature-list">
          <li><strong>Team Structure:</strong> Restructured the shared Swift codebase for 3 sub-teams and 12 parallel lanes, each working against common interface contracts so no lane waits on another.</li>
          <li><strong>Placement:</strong> Placed 16 junior developers onto sub-teams so everyone got their first or second choice.</li>
          <li><strong>CI &amp; Tooling:</strong> Maintain the team&apos;s CI and build scripts, including the migration to Xcode 27 and iOS 27.</li>
          <li><strong>Planning &amp; Review:</strong> Opened 12 of the repo&apos;s 29 issues to break work into lanes, and review and merge pull requests across the team.</li>
        </ul>

        <h2>By the Numbers</h2>
        <p>
          Across the club&apos;s three app repos I&apos;ve authored <strong>17 pull requests</strong> and merged <strong>22</strong>.
        </p>
      </CaseStudyLayout>
    </>
  );
}
