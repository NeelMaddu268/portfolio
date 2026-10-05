import Head from 'next/head';
import Link from 'next/link';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, NextLink } from '@/components/CaseStudy';

export default function GTIOSClub() {
  return (
    <>
      <Head>
        <title>Tech Lead, GT iOS Club | Neel Maddu</title>
      </Head>

      <CaseStudyLayout backHref="/#exp-gt-ios-club">
        <CaseHero
          title="Tech Lead, GT iOS Club"
          sub="I went from developer to Tech Lead across three iOS Club apps, and now co-lead the 20+ person team building Contour."
          facts={[
            { label: 'Team', value: 'Georgia Tech iOS Club' },
            { label: 'Role', value: 'Tech Lead since Aug 2026' },
            { label: 'When', value: 'Aug 2025 – Present' },
          ]}
        />

        <CaseStats
          items={[
            { value: '3', caption: 'apps across 3 semesters' },
            { value: '20+', caption: 'developers on Contour' },
            { value: '17', caption: 'pull requests authored' },
            { value: '22', caption: 'pull requests reviewed and merged' },
          ]}
        />

        <h2>Three apps, three semesters</h2>
        <ul>
          <li>iOS Developer (Fall 2025), JotDown: built Siri read-back App Intents, cross-tab category navigation and the &apos;Other&apos; category in a 20-developer on-device AI notes app.</li>
          <li>Senior iOS Developer (Spring 2026), SmartCompose: built the Slack API integration that lets users send and receive Slack messages inside the app, and taught the team how to keep API keys and secrets out of the repo.</li>
          <li>Tech Lead (Fall 2026), Contour: co-leading the whole project team with one other Tech Lead, and co-leading the Surface Understanding sub-team.</li>
        </ul>

        <h2>Leading Contour</h2>
        <p>
          <Link href="/projects/contour">Contour</Link> is an on-device accessibility app that guides blind and low-vision users to buttons on appliance panels they have never seen. The team is 20+ developers, which only works if people can build in parallel without blocking each other.
        </p>
        <ul>
          <li>Restructured the shared Swift codebase for 3 sub-teams and 12 parallel lanes, each working against common interface contracts so no lane waits on another.</li>
          <li>Placed 16 junior developers onto sub-teams so everyone got their first or second choice.</li>
          <li>Maintain the team&apos;s CI and build scripts, including the migration to Xcode 27 and iOS 27.</li>
          <li>Opened 12 of the repo&apos;s 29 issues to break work into lanes, and review and merge pull requests across the team.</li>
        </ul>

        <NextLink href="/experience/gtri-cipher-lab" title="Software Engineer Intern" prefix="Next role" />
      </CaseStudyLayout>
    </>
  );
}
