import Head from 'next/head';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, NextLink } from '@/components/CaseStudy';

export default function ASLInterpreter() {
  return (
    <>
      <Head>
        <title>ASL Interpreter | Neel Maddu</title>
      </Head>

      <CaseStudyLayout>
        <CaseHero
          title="Real-Time ASL Interpreter"
          sub="A real-time interpreter that reads static ASL alphabet signs from a webcam and speaks them aloud."
          facts={[
            { label: 'Role', value: 'Solo project' },
            { label: 'Scope', value: 'Computer vision + TTS' },
          ]}
          links={[{ label: 'GitHub', href: 'https://github.com/NeelMaddu268/ASL_Interpreter' }]}
        />

        <CaseStats
          items={[
            { value: '95%', caption: 'accuracy on the static alphabet' },
            { value: '21', caption: 'hand landmarks per frame' },
          ]}
        />

        <h2>The approach</h2>
        <p>
          Instead of pushing whole frames through a heavy image model, I track the hand&apos;s geometry and classify that. It is far lighter, so it runs in real time on a plain webcam.
        </p>

        <h2>How it reads a sign</h2>
        <ul>
          <li>MediaPipe extracts 21 hand landmarks from each frame.</li>
          <li>A scikit-learn classifier maps those coordinates to a letter, reaching 95% accuracy on the static alphabet.</li>
          <li>New, distinct predictions are spoken aloud with text-to-speech.</li>
        </ul>

        <h2>Keeping it usable</h2>
        <p>
          OpenCV draws the skeletal tracking overlay so you can see what the model sees. A None class and a mute toggle stop it from blurting out noise while your hand is between letters.
        </p>

        <NextLink href="/projects/marta-transit-tracker" title="MARTA Live Transit Tracker" />
      </CaseStudyLayout>
    </>
  );
}
