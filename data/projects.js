// All homepage project data in one place.
// `images` is optional; a project with no images renders text full width (no placeholder).
// Each image: { src, alt, width, height, kind: 'phone' | 'wide' }.
//   'phone' = portrait screenshot (shown in the phone frame).
//   'wide'  = web/desktop screenshot (shown as one 16:10 image, contain, on var(--well)).
// Drop new files in /public/projects/<name>/ and add an entry here.

export const featuredProjects = [
  {
    slug: 'marta-transit-tracker',
    label: 'iOS · Backend',
    title: 'MARTA Live Transit Tracker',
    summary: 'A live MARTA tracker: a 24/7 FastAPI backend feeding a native SwiftUI app.',
    tech: ['Python', 'FastAPI', 'SwiftUI', 'GTFS-Realtime'],
    images: [
      { src: '/projects/marta/map-live.png', alt: 'MARTA live system map', width: 404, height: 880, kind: 'phone' },
      { src: '/projects/marta/departures-bays.png', alt: 'Departure board with bay guidance', width: 404, height: 880, kind: 'phone' },
    ],
  },
  {
    slug: 'contour',
    label: 'iOS · In progress',
    title: 'Contour',
    summary: 'On-device iOS app that guides blind and low-vision users to buttons on unfamiliar appliance panels.',
    tech: ['Swift', 'SwiftUI', 'Vision', 'Core Haptics'],
    images: [
      { src: '/projects/contour/tracking.jpg', alt: 'Guiding a finger to a button', width: 402, height: 874, kind: 'phone' },
      { src: '/projects/contour/chart.jpg', alt: 'Exploring a chart by touch', width: 403, height: 874, kind: 'phone' },
    ],
    mediaCaption: 'Design mockups',
  },
  {
    slug: 'hidden-quakes',
    label: 'ML · HackGT 13',
    title: 'Hidden Quakes',
    summary: "Found 15x more earthquakes than the public catalog under Utah's FORGE geothermal site, in 36 hours.",
    tech: ['Python', 'PyTorch', 'PyOcto', 'ObsPy'],
  },
  {
    slug: 'llm-red-teaming',
    label: 'Security',
    title: 'LLM Red-Teaming Pipeline',
    summary: 'Measures how well local and frontier LLMs resist prompt injection across 46 attack payloads.',
    tech: ['Python', 'Streamlit', 'Ollama', 'Anthropic API'],
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
