import Head from 'next/head';
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
    description: 'A computer vision pipeline using MediaPipe to accurately predict and interpret continuous American Sign Language streams into real-time synthesized speech.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Scikit-learn', 'Streamlit'],
    projectSlug: 'asl-interpreter'
  }
];

const experience = [
  {
    role: 'Senior iOS Developer',
    company: 'Georgia Tech iOS Club',
    location: 'Atlanta, GA',
    date: 'Jan 2026 - Present',
    descriptionPoints: [
      'Selected as a Senior Developer to lead development of iOS applications in a competitive, project-based club environment.',
      'Collaborate with designers and developers to architect SwiftUI features using MVVM.',
      'Review pull requests, provide technical feedback, and mentor junior developers.',
      'Contribute to production-level iOS codebases following Git/GitHub best practices.'
    ]
  },
  {
    role: 'Salesperson',
    company: 'Waffle House',
    location: 'Cumming, GA',
    date: 'May 2024 - Feb 2025',
    descriptionPoints: [
      'Delivered customer service in a high-volume, fast-paced environment while ensuring order accuracy and satisfaction.',
      'Managed point-of-sale transactions and balanced cash/tips with strong attention to detail.',
      'Collaborated with team members to maintain efficiency and resolve issues quickly during peak hours.'
    ]
  }
];

const skills = {
  "Machine Learning": "PyTorch, TensorFlow, scikit-learn, FAISS",
  "Data": "pandas, NumPy",
  "iOS Development": "Swift, SwiftUI, Core ML, MVVM",
  "Backend & Databases": "SQL, MySQL, MongoDB, Firebase, Node.js",
  "Programming Languages": "Python, Java, C, JavaScript",
  "Tools": "Git, GitHub"
};

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
            <a href="#about">About</a>
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
              Hey, I&apos;m Neel. I&apos;m a software engineer and computer science student deeply fascinated with applied Artificial Intelligence and iOS Development. I focus on deploying massive embedding spaces into seamless user experiences.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">View Portfolio →</a>
              <a href="mailto:nmaddu3@gatech.edu" className="btn-secondary">Message Me</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <div className="avatar-wrapper">
              <img src="/headshot.jpg" alt="Neel Maddu Headshot" className="avatar-image" />
            </div>
          </motion.div>
        </div>
      </section>

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
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
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
          {experience.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} />
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
          <a href="/Neel's%20Main%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            ↓ Download PDF Resume
          </a>
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
            <a href="mailto:nmaddu3@gatech.edu">Email</a>
            <a href="https://linkedin.com/in/neel-maddu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/NeelMaddu268" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
