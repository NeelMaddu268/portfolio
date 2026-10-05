import Head from 'next/head';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, Media, NextLink } from '@/components/CaseStudy';

export default function HiddenQuakes() {
  return (
    <>
      <Head>
        <title>Hidden Quakes | Neel Maddu</title>
      </Head>

      <CaseStudyLayout backHref="/#project-hidden-quakes">
        <CaseHero
          title="Hidden Quakes"
          sub="Finding the small earthquakes the public catalog misses under Utah's FORGE geothermal site. Built by a team of four in 36 hours at HackGT 13."
          facts={[
            { label: 'Role', value: 'Seismology lead' },
            { label: 'Team', value: '4 people' },
            { label: 'When', value: 'HackGT 13, 36 hours' },
          ]}
          links={[
            { label: 'Live demo', href: 'https://hidden-quakes-final.vercel.app' },
            { label: 'GitHub', href: 'https://github.com/NeelMaddu268/hidden-quakes' },
            { label: 'Devpost', href: 'https://devpost.com/software/hidden-quakes' },
          ]}
        />

        <CaseStats
          items={[
            { value: '654', caption: 'candidate events found' },
            { value: '15x', caption: 'denser than the public catalog' },
            { value: '43/43', caption: 'catalogued events recovered' },
            { value: '0.96', caption: 'held-out ROC AUC on the scramble test at equal station count' },
          ]}
        />

        <Media
          items={[
            {
              src: '/projects/hidden-quakes/depth-wells.png',
              alt: 'Candidate earthquakes plotted at depth beneath the Utah FORGE wells',
              width: 1600,
              height: 1000,
              kind: 'wide',
              cap: 'Events at depth beneath the Utah FORGE wells',
            },
          ]}
        />

        <h2>What the public catalog misses</h2>
        <p>
          Geothermal development near Milford, Utah triggers small earthquakes, and operators pause work when bigger ones hit. But the public regional catalog for the area is sparse: it listed 43 events for our test day. Public seismometers in the same area record far more than that. We wanted to pull those events out of the raw waveforms and show what the public catalog leaves out.
        </p>

        <h2>What I owned</h2>
        <p>
          I owned the seismology lane: everything between the phase picks and a located, scored event. Teammates owned waveform ingest and neural phase picking, the 3D frontend, and the data platform.
        </p>
        <ul>
          <li>Grouped 27K PhaseNet picks from 24 stations into candidate events with PyOcto.</li>
          <li>Located events with a grid search and per-station timing corrections, reaching a median timing misfit of 0.033 s.</li>
          <li>Matched candidates against the public catalog and sorted them into strict, medium, and loose confidence tiers.</li>
          <li>Calibrated magnitudes against public events, with a leave-one-out MAE of 0.11.</li>
          <li>Built a logistic-regression scramble test that scores how distinguishable each event is from chance alignments of picks.</li>
        </ul>

        <h2>Results</h2>
        <p>
          The final run produced 654 candidate events against 43 in the public catalog for the same day and region, a 15x denser catalog, and recovered all 43 catalogued events. Of the candidates, 32 are strict-tier, 171 medium, and 451 loose, and 14 strict-tier events do not appear in the public catalog at all.
        </p>
        <Media
          items={[
            {
              src: '/projects/hidden-quakes/comparison.png',
              alt: '654 candidate events compared with 43 public catalog events, by hour and confidence tier',
              width: 1600,
              height: 1000,
              kind: 'wide',
              cap: '654 candidate events vs 43 public, by hour and tier',
            },
          ]}
        />

        <h2>How I checked it</h2>
        <p>
          A denser catalog only means something if the extra events are not noise, so most of my time went into validation.
        </p>
        <ul>
          <li>Null test: re-ran association on 20 clock-shuffled versions of the data. Shuffles produced about 94 chance events on average, and zero at the strict tier.</li>
          <li>Scramble classifier: held-out ROC AUC of 0.96 at equal station count for separating real events from scrambled ones.</li>
          <li>Synthetic depth test: located 200 synthetic events with a median vertical error of 59 m.</li>
          <li>Baseline: a classic STA/LTA detector produced 4,120 candidates but none at the strict tier, while the PhaseNet pipeline produced 33 strict-tier events on the same rerun.</li>
        </ul>
        <Media
          items={[
            {
              src: '/projects/hidden-quakes/validation.png',
              alt: 'Clock-scramble null test results and scramble classifier performance',
              width: 1600,
              height: 1000,
              kind: 'wide',
              cap: 'Clock-scramble null test and scramble classifier',
            },
          ]}
        />

        <h2>What got cut</h2>
        <p>
          A live real-time mode did not make the deadline. A 3D velocity model was built but left off by default because it carried a +2.25 km depth bias, and relative relocation was dropped for time.
        </p>

        <NextLink href="/projects/llm-red-teaming" title="LLM Red-Teaming Pipeline" />
      </CaseStudyLayout>
    </>
  );
}
