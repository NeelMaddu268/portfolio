import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { featuredProjects, smallProjects } from '@/data/projects';

const RESUME_HREF = "/Neel's%20Main%20Resume.pdf";
const GITHUB_HREF = 'https://github.com/NeelMaddu268';
const LINKEDIN_HREF = 'https://linkedin.com/in/neel-maddu';
const EMAIL_HREF = 'mailto:neelmaddu1@gmail.com';

const experience = [
  {
    title: 'Software Engineer Intern',
    org: 'CIPHER Lab, GTRI',
    description: 'NLP pipelines across 60K+ unstructured records. Evaluated 15 agentic LLM configurations against adversarial attacks.',
    date: 'May 2026 – Present',
  },
  {
    title: 'Undergraduate Researcher',
    org: 'Automated Algorithm Design VIP',
    description: 'Own the judge for an LLM-guided evolution jailbreaking pipeline. Two-judge setup surfaced a 46.2% vs 30.6% attack-success gap.',
    date: 'Jan 2026 – Present',
  },
  {
    title: 'Tech Lead',
    org: 'Georgia Tech iOS Club',
    description: 'Co-lead 20+ developers building Contour. Developer to Tech Lead across 3 apps in 3 semesters.',
    date: 'Aug 2025 – Present',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Neel Maddu</title>
        <meta name="description" content="Neel Maddu builds AI security tools and iOS apps." />
      </Head>

      <header className="site-header">
        <div className="wrap header-inner">
          <Link href="/" className="header-name">Neel Maddu</Link>
          <nav className="header-nav">
            <a href="#experience" className="header-link">Experience</a>
            <a href="#projects" className="header-link">Projects</a>
            <a href="#contact" className="header-link">Contact</a>
            <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className="pill pill-resume">Resume</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="wrap">
        <div className="sections">
          {/* 1. Hero */}
          <section className="row">
            <div className="tile hero-intro">
              <span className="tile-label">Software Engineer · CS @ Georgia Tech</span>
              <h1 className="hero-title">I build AI security tools and iOS apps.</h1>
              <p className="hero-body">
                Software engineer intern at GTRI&apos;s CIPHER Lab, evaluating agentic LLMs against adversarial attacks. Tech Lead of the 20+ person iOS Club team building Contour.
              </p>
              <div className="hero-actions">
                <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className="pill pill-accent">Download resume</a>
                <a href={EMAIL_HREF} className="pill pill-chip">Email me</a>
                <a href={GITHUB_HREF} target="_blank" rel="noopener noreferrer" className="text-link">GitHub ↗</a>
                <a href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn ↗</a>
              </div>
            </div>
            <div className="tile hero-photo">
              <Image
                src="/headshot.jpg"
                alt="Neel Maddu"
                fill
                priority
                sizes="(max-width: 600px) 100vw, 350px"
              />
            </div>
          </section>

          {/* 2. Stats */}
          <section className="row">
            <div className="tile stat stat-accent">
              <span className="tile-label">Tech Lead · GT iOS Club</span>
              <span className="stat-value">20+</span>
              <span className="stat-caption">developers on the team I lead</span>
            </div>
            <div className="tile stat">
              <span className="tile-label">MARTA Tracker</span>
              <span className="stat-value">575K+</span>
              <span className="stat-caption">arrival observations logged</span>
            </div>
            <div className="tile stat">
              <span className="tile-label">Hidden Quakes</span>
              <div className="bars">
                <div className="bar-line">
                  <span className="bar-num">654</span>
                  <span className="bar-wrap"><span className="bar-fill" style={{ width: '100%', background: 'var(--accent)', display: 'block' }} /></span>
                </div>
                <div className="bar-line">
                  <span className="bar-num muted">43</span>
                  <span className="bar-wrap"><span className="bar-fill" style={{ width: '7%', background: 'var(--bar)', display: 'block' }} /></span>
                </div>
              </div>
              <span className="stat-caption">events found vs the public catalog</span>
            </div>
            <div className="tile stat">
              <span className="tile-label">LLM Red-Teaming</span>
              <span className="stat-value value-accent">47%</span>
              <span className="stat-caption">robustness gap on local 8B models</span>
            </div>
          </section>

          {/* 3. Experience */}
          <section className="row" id="experience">
            <div className="tile exp-tile">
              <span className="tile-label">Experience</span>
              <div className="exp-rows">
                {experience.map((exp) => (
                  <div key={exp.title} className="exp-row">
                    <div className="exp-main">
                      <div className="exp-title">{exp.title} <span className="exp-org">· {exp.org}</span></div>
                      <div className="exp-desc">{exp.description}</div>
                    </div>
                    <div className="exp-date">{exp.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Projects */}
          <section className="projects" id="projects">
            <h2 className="section-heading">Projects</h2>
            <div className="row">
              {featuredProjects.map((proj) => (
                <Link key={proj.slug} href={`/projects/${proj.slug}`} className="tile proj-big">
                  <div className="proj-text">
                    <span className="tile-label">{proj.label}</span>
                    <h3 className="proj-title">{proj.title}</h3>
                    <p className="proj-desc">{proj.description}</p>
                    <div className="proj-detail">{proj.detail}</div>
                  </div>
                  {proj.image && (
                    <div className="proj-shot">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 600px) 100vw, 560px"
                      />
                    </div>
                  )}
                </Link>
              ))}
            </div>
            <div className="row">
              {smallProjects.map((proj) => (
                <Link key={proj.slug} href={`/projects/${proj.slug}`} className="tile proj-small">
                  <div className="proj-small-title">{proj.title}</div>
                  <div className="proj-small-desc">{proj.description}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* 5. Stack */}
          <section className="row">
            <div className="tile stack-tile">
              <span className="tile-label">Stack</span>
              <p className="stack-body">
                Swift, SwiftUI, Core ML, Vision · Python, PyTorch, FAISS, scikit-learn · FastAPI, Next.js, React · SQL, Docker, Git
              </p>
            </div>
          </section>

          {/* 6. Contact */}
          <section className="row" id="contact">
            <div className="tile contact-tile">
              <h2 className="contact-title">Get in touch</h2>
              <a href={EMAIL_HREF} className="contact-email">neelmaddu1@gmail.com</a>
              <div>
                <a href={EMAIL_HREF} className="pill pill-contact">Email me</a>
              </div>
              <div className="site-footer">
                <span>© 2026 Neel Maddu</span>
                <span>Atlanta, GA</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
