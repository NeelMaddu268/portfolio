// All project data in one place. Add an `image` to a featured project to render
// its screenshot in the 16:10 well. Projects without an `image` render no screenshot.
// Screenshots live in /public/projects/<slug>/ ; see the small projects for where to add more.

export const featuredProjects = [
  {
    slug: 'marta-transit-tracker',
    label: 'iOS · Backend',
    title: 'MARTA Live Transit Tracker',
    description: "24/7 FastAPI and SQLite backend on MARTA's GTFS-Realtime feeds, feeding a native SwiftUI app.",
    detail: '~200 live vehicles · 15-second refresh',
    image: '/projects/marta/map-live.png',
  },
  {
    slug: 'contour',
    label: 'iOS · In progress',
    title: 'Contour',
    description: 'On-device iOS app guiding blind and low-vision users to buttons on unfamiliar appliance panels.',
    detail: 'Vision · Core Haptics · on-device',
    image: '/projects/contour/tracking.jpg',
  },
  {
    slug: 'hidden-quakes',
    label: 'ML · HackGT 13',
    title: 'Hidden Quakes',
    description: "A 15x denser earthquake catalog for Utah's FORGE geothermal site, rebuilt from raw seismometer data.",
    detail: 'Built in 36 hours',
  },
  {
    slug: 'llm-red-teaming',
    label: 'Security',
    title: 'LLM Red-Teaming Pipeline',
    description: 'Prompt-injection evaluation of local and frontier LLMs, scored by rule-based and LLM-as-judge checks.',
    detail: '46 payloads · 41 techniques',
  },
];

export const smallProjects = [
  {
    slug: 'multimodal-search',
    title: 'Multimodal AI Search',
    description: 'Searches 10,000+ images in under 2s with CLIP and FAISS.',
  },
  {
    slug: 'jotdown',
    title: 'JotDown',
    description: 'SwiftUI notes with on-device semantic search.',
  },
  {
    slug: 'asl-interpreter',
    title: 'ASL Interpreter',
    description: '95% accuracy on the static ASL alphabet, in real time.',
  },
];
