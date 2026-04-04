import Head from 'next/head';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';

// Data Arrays for ease of structure
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
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px' }}>
            <a href="#">NM.</a>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
            <a href="#about" style={{ color: 'var(--text-muted)' }}>About</a>
            <a href="#projects" style={{ color: 'var(--text-muted)' }}>Projects</a>
            <a href="#experience" style={{ color: 'var(--text-muted)' }}>Experience</a>
            <a href="#resume" className="text-gradient">Resume</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section container">
        <div className="hero-split">
          <div className="hero-text">
            <div className="animate-fade-in delay-100" style={{ marginBottom: '1.5rem' }}>
              <span style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', borderRadius: '99px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                Georgia Tech CS &apos;27
              </span>
            </div>
            <h1 className="animate-fade-in delay-200 text-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
              Building Intelligent Systems.
            </h1>
            <p className="animate-fade-in delay-300" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Hey, I&apos;m Neel. I&apos;m a software engineer and computer science student deeply fascinated with applied Artificial Intelligence and iOS Development. I focus on deploying massive embedding spaces into seamless user experiences.
            </p>
            <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">View Portfolio →</a>
              <a href="mailto:nmaddu3@gatech.edu" className="btn-secondary">Message Me</a>
            </div>
          </div>
          <div className="hero-image-container animate-fade-in delay-200">
            <div className="avatar-wrapper">
              <img src="/headshot.jpg" alt="Neel Maddu Headshot" className="avatar-image" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Behind the Code</h2>
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            My engineering philosophy stems from the idea that <strong style={{ color: 'var(--text-main)' }}>algorithms are only as good as the interfaces that present them</strong>. It&apos;s why I&apos;ve dedicated myself to understanding the full pipeline—from crafting underlying embedding models with PyTorch, down to building reactive views with SwiftUI. Currently a third-year undergrad at the Georgia Institute of Technology, my focus is turning academic AI theory into tangible products.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            When I&apos;m not configuring a FAISS vector database or debating the latest Apple frameworks inside the GT iOS Club, you will likely find me staying active at the gym, tinkering with new Apple Silicon hardware capabilities, or finding ways to inject machine learning into everyday inefficiencies.
          </p>
          <p style={{ color: 'var(--accent-cyan)', fontStyle: 'italic', fontSize: '1.05rem', marginTop: '1rem' }}>
            &quot;Good code solves the math. Great engineering solves the user&apos;s problem.&quot;
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Technical Deep Dives</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Select a project below to read an in-depth case study of the architecture and implementation.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {experience.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Technical Toolkit</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-panel" style={{ padding: '1.5rem' }}>
              <h4 style={{ color: 'var(--accent-blue)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{category}</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section container" style={{ textAlign: 'center', padding: '8rem 0' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Full Resume</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
          A comprehensive overview of my education, experience, projects, and technical skills—available to view and download.
        </p>
        <a href="/Neel's%20Main%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
          ↓ Download PDF Resume
        </a>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '3rem 0', marginTop: 'auto' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Neel Maddu. Built with Next.js.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="mailto:nmaddu3@gatech.edu" style={{ color: 'var(--text-muted)' }}>Email</a>
            <a href="https://linkedin.com/in/neel-maddu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>LinkedIn</a>
            <a href="https://github.com/NeelMaddu268" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
