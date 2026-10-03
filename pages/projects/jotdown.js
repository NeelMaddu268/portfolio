import Head from 'next/head';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, NextLink } from '@/components/CaseStudy';

export default function JotDown() {
  return (
    <>
      <Head>
        <title>JotDown | Neel Maddu</title>
      </Head>

      <CaseStudyLayout backHref="/#project-jotdown">
        <CaseHero
          title="JotDown"
          sub="A minimal notes app for iOS that understands what you write, entirely on device."
          facts={[
            { label: 'Role', value: 'iOS developer' },
            { label: 'Team', value: 'GT iOS Club' },
            { label: 'When', value: 'Fall 2025' },
          ]}
        />

        <h2>The idea</h2>
        <p>
          I wanted a notes app with no friction for writing that still understood structure underneath. SwiftUI and MVVM keep the writing surface simple while the analysis runs behind it.
        </p>

        <h2>On-device understanding</h2>
        <p>
          JotDown runs its language processing with Core ML on the device, so notes never leave the phone.
        </p>
        <ul>
          <li>It picks out dates, keywords, and themes without you tagging anything.</li>
          <li>Semantic search goes by meaning, so searching grocery surfaces notes that mention apples or milk.</li>
        </ul>

        <h2>The graph view</h2>
        <p>
          A custom view draws a node graph of notes that share themes, so related thoughts cluster together and connections show up on their own.
        </p>

        <NextLink href="/projects/asl-interpreter" title="ASL Interpreter" />
      </CaseStudyLayout>
    </>
  );
}
