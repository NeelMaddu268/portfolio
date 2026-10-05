import Head from 'next/head';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, Media, NextLink } from '@/components/CaseStudy';

export default function JotDown() {
  return (
    <>
      <Head>
        <title>JotDown | Neel Maddu</title>
      </Head>

      <CaseStudyLayout backHref="/#project-jotdown">
        <CaseHero
          title="JotDown"
          sub="A private, on-device AI notes app for iOS 26. Apple's on-device model files each note into your own categories and tags its emotion. Built by about 20 students in the Georgia Tech iOS Club, Fall 2025."
          facts={[
            { label: 'Role', value: 'iOS Developer, 6 merged PRs' },
            { label: 'Team', value: '~20 developers' },
            { label: 'When', value: 'Fall 2025' },
          ]}
          links={[{ label: 'GitHub', href: 'https://github.com/gtiosclub/JotDown' }]}
        />

        <CaseStats
          items={[
            { value: '~20', caption: 'developers on the team' },
            { value: '6', caption: 'of my pull requests merged' },
            { value: '2', caption: 'Siri App Intents I built' },
          ]}
        />

        <Media
          items={[
            {
              src: '/projects/jotdown/search-grocery.png',
              alt: 'JotDown search: the on-device model answers from your notes',
              width: 804,
              height: 1748,
              kind: 'phone',
              cap: 'Search: the on-device model answers from your notes',
            },
            {
              src: '/projects/jotdown/radial-map-emotions.png',
              alt: 'JotDown notes grouped by emotion on a zoomed-out map',
              width: 804,
              height: 1748,
              kind: 'phone',
              cap: 'Notes grouped by emotion, zoomed out; text appears as you zoom in',
            },
          ]}
        />

        <h2>What the app does</h2>
        <p>
          JotDown is a team build; my part is in the next section. Across the app:
        </p>
        <ul>
          <li>Onboarding uses Foundation Models guided generation to create categories from a short bio.</li>
          <li>Each note is classified into one of those categories and one of six emotions.</li>
          <li>Search ranks notes with NaturalLanguage word embeddings (cosine similarity, top 5), and the model answers in one sentence.</li>
          <li>The app also has Siri shortcuts, two widgets and an Apple Watch companion.</li>
        </ul>

        <h2>What I built</h2>
        <ul>
          <li>Cross-tab navigation: tapping a note&apos;s category on Home opens that category on the Dashboard tab, via a tab-selection binding plus a NotificationCenter handoff of the category&apos;s SwiftData PersistentIdentifier, with a token-guarded reset so a stale category screen never lingers. (PR #122)</li>
          <li>Two Siri / Shortcuts App Intents: &quot;Read Notes in a Category&quot; (with a live picker of the user&apos;s categories) and &quot;Read Latest Thought&quot;. (PR #85)</li>
          <li>The &quot;Other&quot; catch-all category: added to every generated category set, kept last, gray and non-archivable in Profile. (PR #47)</li>
          <li>The note tiles and first version of the category detail screen, co-built with Charles Huang. (PR #71)</li>
        </ul>

        <h2>What I&apos;d change</h2>
        <ul>
          <li>Make the Siri category parameter an AppEntity so phrases can name the category.</li>
          <li>Sort and limit &quot;Read Notes&quot; to the 5 most recent.</li>
          <li>Check Apple Intelligence availability and tell the user when AI features are off.</li>
        </ul>

        <NextLink href="/projects/marta-transit-tracker" title="MARTA Live Transit Tracker" />
      </CaseStudyLayout>
    </>
  );
}
