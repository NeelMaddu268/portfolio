import Seo from '@/components/Seo';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, Media, NextLink } from '@/components/CaseStudy';

const DESCRIPTION =
  "An iOS app that helps blind and low-vision users find buttons on appliances they've never seen. I co-lead the build with a 20+ person team at the Georgia Tech iOS Club.";

export default function Contour() {
  return (
    <>
      <Seo title="Contour | Neel Maddu" description={DESCRIPTION} />

      <CaseStudyLayout backHref="/#project-contour">
        <CaseHero
          title="Contour"
          sub={DESCRIPTION}
          facts={[
            { label: 'Role', value: 'Tech Lead' },
            { label: 'Team', value: 'GT iOS Club, 20+' },
            { label: 'When', value: 'Fall 2026' },
            { label: 'Status', value: 'In progress' },
          ]}
        />

        <CaseStats
          items={[
            { value: '20+', caption: 'developers on the team' },
            { value: '12', caption: 'parallel build lanes' },
            { value: '35/35', caption: 'generated test panels read' },
            { value: '83', caption: 'automated tests in CI' },
          ]}
        />

        <Media
          items={[
            { src: '/projects/contour/tracking.jpg', width: 402, height: 874, cap: 'Tracking a finger to the START button' },
            { src: '/projects/contour/chart.jpg', width: 403, height: 874, cap: 'Exploring a chart by touch (planned)' },
          ]}
          caption="Design mockups"
        />

        <h2>The problem with flat panels</h2>
        <p>
          Microwaves, thermostats, and washing machines increasingly use flat touch panels with no tactile cues. Existing workarounds need setup ahead of time, like sticking on bump dots or having someone label the panel. Contour is meant to read an unfamiliar panel cold, on the phone, with zero setup.
        </p>

        <h2>How it works</h2>
        <p>
          Point the camera at a panel and say which button you want. Contour finds the panel and its buttons, tracks your fingertip, and guides it to the target with haptics and audio, then confirms when you are there. A second mode, planned once the core guidance works, lets you explore a chart image by touch.
        </p>
        <ul>
          <li>Surface understanding turns a photo into a SurfaceMap of the panel outline, button locations, and labels, using Vision rectangle detection and text recognition.</li>
          <li>Tracking follows the panel and your fingertip frame by frame and works out the distance and direction to the target.</li>
          <li>Feedback uses haptics, audio, and speech to steer your finger and announce success or lost tracking.</li>
        </ul>

        <h2>Building it in parallel</h2>
        <p>
          The app is split into six Swift packages plus an iOS app and a macOS test harness. Every package imports only the shared ContourCore contract, and a CI script enforces that rule. A mocks package gives predictable fakes for every stage, so each of the 12 lanes can build and test without waiting on the others.
        </p>

        <h2>My role</h2>
        <ul>
          <li>Co-lead the full team with one other Tech Lead, and co-lead the Surface Understanding sub-team.</li>
          <li>Restructured the repo for 3 sub-teams and 12 parallel lanes, and maintain CI and tooling, including the move to Xcode 27 and iOS 27.</li>
          <li>Wired the real panel detector into the live surface understanding path.</li>
        </ul>

        <h2>Where it stands</h2>
        <p>
          The panel detector runs in the live pipeline. Button detection finds all 26 keys on a generated keypad, and label reading passes 35 of 35 generated test panels, and both are next to be connected. The project has 83 automated tests in CI. Next up is live fingertip tracking and the haptic guidance loop, toward a working end-to-end prototype.
        </p>

        <NextLink href="/projects/hidden-quakes" title="Hidden Quakes" />
      </CaseStudyLayout>
    </>
  );
}
