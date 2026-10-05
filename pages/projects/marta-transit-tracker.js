import Seo from '@/components/Seo';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, Media, NextLink } from '@/components/CaseStudy';

const DESCRIPTION =
  "A live transit tracker for Atlanta's MARTA network. I built the backend and the SwiftUI app to make noisy public feeds feel fast and trustworthy.";

export default function MartaTransitTracker() {
  return (
    <>
      <Seo title="MARTA Live Transit Tracker | Neel Maddu" description={DESCRIPTION} />

      <CaseStudyLayout backHref="/#project-marta-transit-tracker">
        <CaseHero
          title="MARTA Live Transit Tracker"
          sub={DESCRIPTION}
          facts={[
            { label: 'Role', value: 'Solo project' },
            { label: 'Scope', value: 'SwiftUI app + FastAPI backend' },
            { label: 'Data', value: 'GTFS-Realtime' },
            { label: 'Tests', value: '59 automated' },
          ]}
          links={[{ label: 'GitHub', href: 'https://github.com/NeelMaddu268/marta-transit-tracker' }]}
        />

        <CaseStats
          items={[
            { value: '575K+', caption: 'arrival observations logged' },
            { value: '~200', caption: 'live vehicles tracked' },
            { value: '15s', caption: 'refresh interval' },
            { value: '2.4M', caption: 'GTFS rows joined for delays' },
          ]}
        />

        <Media
          items={[
            { src: '/projects/marta/demo.gif', width: 420, height: 914, hero: true, cap: 'Live data across the app' },
            { src: '/projects/marta/map-live.png', width: 404, height: 880, cap: 'Live system map' },
            { src: '/projects/marta/departures-bays.png', width: 404, height: 880, cap: 'Departures with bay guidance' },
            { src: '/projects/marta/commute-alerts.png', width: 404, height: 880, cap: 'Commute card, alerts and confidence' },
            { src: '/projects/marta/route-map.png', width: 404, height: 880, cap: 'Single-route live map' },
          ]}
        />

        <h2>Why I built it</h2>
        <p>
          Public transit data comes through the GTFS and GTFS-Realtime standards, but the raw feeds are messy: vehicle positions drift, delay fields go missing, and the live feed often diverges from the docs. I wanted an app that felt instant and trustworthy, so the ingestion layer had to absorb those problems instead of passing them on to the rider.
        </p>

        <h2>How the data flows</h2>
        <p>
          A FastAPI backend with SQLite polls MARTA&apos;s GTFS-Realtime bus and rail feeds around the clock, normalizing and storing the data before the app ever reads it.
        </p>
        <ul>
          <li>The backend has logged 575K+ arrival observations across 78 routes and 6,200+ stops.</li>
          <li>The SwiftUI app tracks about 200 live vehicles at a 15-second refresh, with a WidgetKit widget for quick arrivals.</li>
          <li>OpenTripPlanner handles delay-aware, multi-leg trip planning on top of the live data.</li>
        </ul>

        <h2>Fixing the feeds</h2>
        <p>
          Most of the work was in the gap between the spec and reality. Bus delays were often missing, so I reconstructed them with trip-to-schedule joins against 2.4M GTFS rows. The standard parsers mishandled some protobuf payloads, so I hand-wrote a decoder and checked it byte-for-byte against the reference parser. 59 automated tests keep the pipeline honest as the feeds change.
        </p>

        <NextLink href="/projects/contour" title="Contour" />
      </CaseStudyLayout>
    </>
  );
}
