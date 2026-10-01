import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

// --- Data ---
const projects = [
  {
    title: 'MARTA Live Transit Tracker',
    description: "A full-stack live transit tracker: a 24/7 FastAPI/SQLite backend polling MARTA's GTFS-Realtime feeds (575K+ arrival observations across 78 routes and 6,200+ stops), feeding a native SwiftUI app tracking ~200 live vehicles at a 15-second refresh.",
    techStack: ['Python', 'FastAPI', 'SwiftUI', 'SQLite', 'GTFS-Realtime'],
    projectSlug: 'marta-transit-tracker'
  },
  {
    title: 'Contour (in progress)',
    description: 'An on-device iOS accessibility app that guides blind and low-vision users to buttons on unfamiliar appliance panels using Vision and haptic/audio feedback. Building it with a 20+ person GT iOS Club team, where I co-lead the team and the Surface Understanding sub-team.',
    techStack: ['Swift', 'SwiftUI', 'Vision', 'Core Haptics', 'Swift Packages'],
    projectSlug: 'contour'
  },
  {
    title: 'Hidden Quakes',
    description: "Rebuilt a 15x denser earthquake catalog for Utah's FORGE geothermal site from raw public seismometer data in 36 hours at HackGT 13: 654 candidate events vs. 43 in the public catalog, with all 43 recovered. I owned association, relocation, and validation.",
    techStack: ['Python', 'PyTorch', 'SeisBench', 'PyOcto', 'ObsPy', 'React Three Fiber'],
    projectSlug: 'hidden-quakes'
  },
  {
    title: 'LLM Red-Teaming Evaluation Pipeline',
    description: 'An extensible prompt-injection evaluation framework testing local and frontier LLMs across 46 payloads and 41 techniques, with a dual rule-based + LLM-as-judge scoring pipeline that quantified up to a 47% robustness gap on local 8B models.',
    techStack: ['Python', 'Streamlit', 'Ollama', 'Anthropic API', 'pytest'],
    projectSlug: 'llm-red-teaming'
  },
  {
    title: 'Multimodal AI Search Engine',
    description: 'A visual search engine indexing over 10,000 images using CLIP embeddings and FAISS, enabling retrieval from natural language prompts in under 2 seconds.',
    techStack: ['Python', 'PyTorch', 'CLIP', 'FAISS', 'Streamlit'],
    projectSlug: 'multimodal-search'
  },
  {
    title: 'JotDown',
    description: 'An elegant SwiftUI macOS/iOS application leveraging on-device Core ML to perform NLP semantic searching and dynamically generate knowledge graphs from user notes.',
    techStack: ['SwiftUI', 'MVVM', 'Core ML', 'NLP'],
    projectSlug: 'jotdown'
  },
  {
    title: 'Real-Time ASL Interpreter',
    description: 'A real-time computer vision pipeline that recognizes static ASL alphabet gestures from a webcam at 95% accuracy, using MediaPipe hand landmarks and a scikit-learn classifier, with text-to-speech output.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Scikit-learn', 'Streamlit'],
    projectSlug: 'asl-interpreter'
  }
];

const experience = [
  {
    role: 'Software Engineer Intern, CIPHER Lab - Threat Analysis Branch',
    company: 'Georgia Tech Research Institute (GTRI)',
    location: 'Atlanta, GA',
    date: 'May 2026 - Present',
    experienceSlug: 'gtri-cipher-lab',
    descriptionPoints: [
      'Build NLP pipelines for entity extraction and semantic analysis across 60K+ unstructured text records and posts, supporting cybersecurity and intelligence analysis workflows in a national security context.',
      'Evaluate 15 agentic LLM configurations against 6 categories of adversarial and injection-style attacks on an isolated 3-VM testbed, quantifying how prompt design, tool permissions, and guardrail placement drive failure rates.',
      'Brief 5 program stakeholders on model-vulnerability findings, informing security assessments and program-level architecture decisions.'
    ]
  },
  {
    role: 'Undergraduate Researcher, Automated Algorithm Design',
    company: 'Georgia Institute of Technology VIP Program',
    location: 'Atlanta, GA',
    date: 'Jan 2026 - Present',
    experienceSlug: 'vip-research',
    descriptionPoints: [
      "Own the judge for an automated LLM jailbreaking pipeline built on LLM-Guided Evolution (LLM-GE), a framework cited as prior work by Google DeepMind's AlphaEvolve, running on Georgia Tech's PACE ICE HPC cluster.",
      'Designed the scoring formula the team adopted as the search fitness function, rating refusal, on-topic, specificity, and convincingness separately on 0-1 scales so empty compliance scores near zero.',
      'Proposed a two-judge setup with HarmBench as an independent reporting judge to catch the search overfitting its own scorer; first runs showed a 46.2% vs. 30.6% attack-success gap between the judges.'
    ]
  },
  {
    role: 'Tech Lead (previously Senior iOS Developer, iOS Developer)',
    company: 'Georgia Tech iOS Club',
    location: 'Atlanta, GA',
    date: 'Aug 2025 - Present',
    experienceSlug: 'gt-ios-club',
    descriptionPoints: [
      'Co-lead a 20+ developer team building Contour, an on-device iOS accessibility app that guides blind and low-vision users to buttons on unfamiliar appliance panels using Vision and haptic/audio feedback.',
      'Restructured the shared Swift codebase for 3 sub-teams and 12 parallel lanes working against common interface contracts; maintain CI and tooling, including the migration to Xcode 27 and iOS 27.',
      "Grew from developer to Tech Lead across 3 apps in 3 semesters, including Slack API messaging for SmartCompose; authored 17 and merged 22 pull requests across the club's repos."
    ]
  }
];

const skills = {
  "Languages": "Python, Java, C, C++, JavaScript, Swift, SQL",
  "ML & AI": "PyTorch, TensorFlow, scikit-learn, FAISS, MediaPipe, NLP, LLM Evaluation, Graph Analytics",
  "iOS Development": "SwiftUI, Core ML, Vision, WidgetKit, MVVM",
  "Frameworks & Libraries": "FastAPI, Node.js, React, Next.js, Streamlit, pandas, NumPy",
  "Data & Infrastructure": "MySQL, MongoDB, SQLite, Firebase, Docker, Git, GitHub Actions, Jenkins, CI/CD"
};

const summaryHighlights = [
  "Software Engineer Intern at GTRI's CIPHER Lab, building NLP pipelines and red-teaming agentic LLM systems for cybersecurity and intelligence analysis.",
  'Undergraduate researcher on an automated LLM jailbreaking pipeline, where I own the judge that scores attacks inside an evolutionary search.',
  'Tech Lead at the GT iOS Club, co-leading 20+ developers building Contour, an on-device iOS accessibility app.'
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Neel Maddu | Portfolio</title>
        <meta name="description" content="Portfolio of Neel Maddu - AI & iOS Developer" />
      </Head>

      {/* Navbar */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, padding: '1rem 0', background: 'rgba(11, 15, 25, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container nav-bar-row">
          <div className="nav-logo">
            <a href="#">NM.</a>
          </div>
          <div className="nav-links">
            <a href="#summary">Summary</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#resume" className="text-gradient">Resume</a>
          </div>
        </div>
      </nav>

      {/* Hero Section — staggered entrance on page load */}
      <section className="section container">
        <div className="hero-split">
          <motion.div
            className="hero-text"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
              <span className="hero-badge">
                Georgia Tech CS &apos;27
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-gradient"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}
            >
              Building Intelligent Systems.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}
            >
              Hey, I&apos;m Neel. I&apos;m a software engineer and Georgia Tech CS student focused on applied AI and iOS. I&apos;m currently building NLP and LLM security systems at GTRI&apos;s CIPHER Lab and leading a 20+ person iOS team at Georgia Tech.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">View Portfolio →</a>
              <a href="mailto:neelmaddu1@gmail.com" className="btn-secondary">Message Me</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <div className="avatar-wrapper">
              <Image
                src="/headshot.jpg"
                alt="Neel Maddu Headshot"
                className="avatar-image"
                width={700}
                height={933}
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1200px) 40vw, 350px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="summary"
        className="section container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="page-section-title" style={{ marginBottom: '1rem' }}>Summary</motion.h2>
        <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          I build practical AI and iOS systems that translate research into products people can use every day.
        </motion.p>
        <motion.div className="summary-grid" variants={staggerContainer}>
          {summaryHighlights.map((highlight) => (
            <motion.div key={highlight} className="glass-panel" style={{ padding: '1.5rem' }} variants={fadeUp}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{highlight}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* About Section — scroll triggered */}
      <motion.section
        id="about"
        className="section container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="page-section-title" style={{ marginBottom: '2rem' }}>Behind the Code</motion.h2>
        <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            My engineering philosophy stems from the idea that <strong style={{ color: 'var(--text-main)' }}>algorithms are only as good as the interfaces that present them</strong>. It&apos;s why I&apos;ve dedicated myself to understanding the full pipeline—from crafting underlying embedding models with PyTorch, down to building reactive views with SwiftUI. Currently a third-year undergrad at the Georgia Institute of Technology, my focus is turning academic AI theory into tangible products.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            When I&apos;m not configuring a FAISS vector database or debating the latest Apple frameworks inside the GT iOS Club, you will likely find me staying active at the gym, tinkering with new Apple Silicon hardware capabilities, or finding ways to inject machine learning into everyday inefficiencies.
          </p>
          <p style={{ color: 'var(--accent-cyan)', fontStyle: 'italic', fontSize: '1.05rem', marginTop: '1rem' }}>
            &quot;Good code solves the math. Great engineering solves the user&apos;s problem.&quot;
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        id="education"
        className="section container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="page-section-title" style={{ marginBottom: '2rem' }}>Education</motion.h2>
        <motion.div variants={fadeUp} className="glass-panel education-card" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Georgia Institute of Technology</h3>
          <p style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>Bachelor of Science in Computer Science</p>
          <p style={{ color: 'var(--text-muted)' }}>Atlanta, GA · GPA: 4.0 · Expected Dec 2027</p>
        </motion.div>
      </motion.section>

      {/* Projects Section — staggered grid */}
      <motion.section
        id="projects"
        className="section container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="page-section-title" style={{ marginBottom: '0.5rem' }}>Technical Deep Dives</motion.h2>
        <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Select a project below to read an in-depth case study of the architecture and implementation.</motion.p>

        <motion.div className="projects-grid" variants={staggerContainer}>
          {projects.map((proj) => (
            <ProjectCard key={proj.projectSlug} {...proj} />
          ))}
        </motion.div>
      </motion.section>

      {/* Experience Section — staggered items */}
      <motion.section
        id="experience"
        className="section container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="page-section-title" style={{ marginBottom: '3rem' }}>Experience</motion.h2>
        <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {experience.map((exp) => (
            <ExperienceItem
              key={`${exp.company}-${exp.role}`}
              {...exp}
              detailHref={`/experience/${exp.experienceSlug}`}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section — staggered grid */}
      <motion.section
        id="skills"
        className="section container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="page-section-title" style={{ marginBottom: '2rem' }}>Technical Toolkit</motion.h2>
        <motion.div className="skills-grid" variants={staggerContainer}>
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="glass-panel"
              style={{ padding: '1.5rem' }}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h4 style={{ color: 'var(--accent-blue)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{category}</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{items}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Resume Section */}
      <motion.section
        id="resume"
        className="section container"
        style={{ textAlign: 'center', padding: '8rem 0' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="page-section-title" style={{ marginBottom: '1.5rem' }}>Full Resume</motion.h2>
        <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
          A comprehensive overview of my education, experience, projects, and technical skills—available to view and download.
        </motion.p>
        <motion.div variants={fadeUp}>
          <a href="/Neel's%20Main%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem', marginBottom: '2rem' }}>
            ↓ Download PDF Resume
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="resume-preview-wrap">
          <iframe
            src="/Neel's%20Main%20Resume.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
            title="Neel Maddu Resume Preview"
            className="resume-preview"
          />
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        style={{ borderTop: '1px solid var(--glass-border)', padding: '3rem 0', marginTop: 'auto' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container footer-content">
          <div className="footer-credit">
            © {new Date().getFullYear()} Neel Maddu. Built with Next.js.
          </div>
          <div className="footer-links">
            <a href="mailto:neelmaddu1@gmail.com">Email</a>
            <a href="https://linkedin.com/in/neel-maddu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/NeelMaddu268" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
