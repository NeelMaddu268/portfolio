// All homepage project data in one place.
// `images` is optional: a project with no images renders text full width (no placeholder).
// To add screenshots later, drop portrait phone shots in /public/projects/<name>/ and add
// entries here: { src: '/projects/<name>/<file>', width, height }. Keep them portrait.

export const featuredProjects = [
  {
    slug: 'marta-transit-tracker',
    label: 'iOS · Backend',
    title: 'MARTA Live Transit Tracker',
    description:
      "A full-stack live transit tracker: a 24/7 FastAPI/SQLite backend polling MARTA's GTFS-Realtime feeds (575K+ arrival observations across 78 routes and 6,200+ stops), feeding a native SwiftUI app tracking ~200 live vehicles at a 15-second refresh.",
    points: [
      'Rebuilt missing bus delays with trip-to-schedule joins over 2.4M GTFS rows',
      'Hand-wrote a protobuf decoder, validated byte-for-byte against the reference parser, with 59 tests',
    ],
    tech: ['Python', 'FastAPI', 'SwiftUI', 'SQLite', 'GTFS-Realtime'],
    links: [{ label: 'GitHub', href: 'https://github.com/NeelMaddu268/marta-transit-tracker' }],
    images: [
      { src: '/projects/marta/map-live.png', width: 404, height: 880 },
      { src: '/projects/marta/departures-bays.png', width: 404, height: 880 },
    ],
  },
  {
    slug: 'contour',
    label: 'iOS · In progress',
    title: 'Contour',
    description:
      'An on-device iOS accessibility app that guides blind and low-vision users to buttons on unfamiliar appliance panels using Vision and haptic/audio feedback. Building it with a 20+ person GT iOS Club team, where I co-lead the team and the Surface Understanding sub-team.',
    points: [
      'Co-lead the team and the Surface Understanding sub-team, and restructured the repo for 3 sub-teams and 12 parallel lanes',
      'Panel detector runs in the live pipeline; label reading passes 35 of 35 generated test panels, with 83 tests in CI',
    ],
    tech: ['Swift', 'SwiftUI', 'Vision', 'Core Haptics', 'Swift Packages'],
    links: [],
    images: [
      { src: '/projects/contour/tracking.jpg', width: 402, height: 874 },
      { src: '/projects/contour/chart.jpg', width: 403, height: 874 },
    ],
    mediaCaption: 'Design mockups',
  },
  {
    slug: 'hidden-quakes',
    label: 'ML · HackGT 13',
    title: 'Hidden Quakes',
    description:
      "Rebuilt a 15x denser earthquake catalog for Utah's FORGE geothermal site from raw public seismometer data in 36 hours at HackGT 13: 654 candidate events vs. 43 in the public catalog, with all 43 recovered. I owned association, relocation, and validation.",
    points: [
      'Owned the seismology lane: association, relocation, magnitudes, and validation',
      '654 candidate events vs 43 in the public catalog, a 15x denser catalog, with all 43 recovered',
    ],
    tech: ['Python', 'PyTorch', 'SeisBench', 'PyOcto', 'ObsPy', 'React Three Fiber'],
    links: [
      { label: 'Live demo', href: 'https://hidden-quakes-final.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/NeelMaddu268/hidden-quakes' },
      { label: 'Devpost', href: 'https://devpost.com/software/hidden-quakes' },
    ],
  },
  {
    slug: 'llm-red-teaming',
    label: 'Security',
    title: 'LLM Red-Teaming Pipeline',
    description:
      'An extensible prompt-injection evaluation framework testing local and frontier LLMs across 46 payloads and 41 techniques, with a dual rule-based + LLM-as-judge scoring pipeline that quantified up to a 47% robustness gap on local 8B models.',
    points: [
      'Tested 46 payloads across 4 categories and 41 techniques, scored by rule-based checks and an LLM-as-judge',
      'Measured up to a 47% breakthrough on local 8B models versus near-zero on a frontier model',
    ],
    tech: ['Python', 'Streamlit', 'Ollama', 'Anthropic API', 'pytest'],
    links: [{ label: 'GitHub', href: 'https://github.com/NeelMaddu268/llm-redteam' }],
  },
];

export const smallProjects = [
  {
    slug: 'multimodal-search',
    title: 'Multimodal AI Search',
    description: 'Searches 10,000+ images in under 2s with CLIP and FAISS.',
    tech: 'Python · PyTorch · CLIP · FAISS',
  },
  {
    slug: 'jotdown',
    title: 'JotDown',
    description: 'SwiftUI notes with on-device semantic search.',
    tech: 'SwiftUI · Core ML · NLP',
  },
  {
    slug: 'asl-interpreter',
    title: 'ASL Interpreter',
    description: '95% accuracy on the static ASL alphabet, in real time.',
    tech: 'Python · MediaPipe · scikit-learn',
  },
];
