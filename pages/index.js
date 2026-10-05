import { useEffect } from 'react';
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
    role: 'Software Engineer Intern',
    org: 'CIPHER Lab, GTRI',
    date: 'May 2026 – Present',
    slug: 'gtri-cipher-lab',
    summary: 'NLP pipelines over 60K+ records and red-teaming of 15 agentic LLM setups.',
  },
  {
    role: 'Undergraduate Researcher',
    org: 'Automated Algorithm Design VIP',
    date: 'Jan 2026 – Present',
    slug: 'vip-research',
    summary: 'I own the judge for an automated LLM jailbreaking pipeline.',
  },
  {
    role: 'Tech Lead',
    org: 'Georgia Tech iOS Club',
    date: 'Aug 2025 – Present',
    slug: 'gt-ios-club',
    summary: 'Tech Lead since Aug 2026. Co-lead the 20+ developer team building Contour.',
  },
];

const skills = {
  Languages: 'Python, Java, C, C++, JavaScript, Swift, SQL',
  'ML & AI': 'PyTorch, TensorFlow, scikit-learn, FAISS, NLP, LLM Evaluation, Graph Analytics',
  'iOS Development': 'SwiftUI, SwiftData, App Intents, Core ML, Vision, WidgetKit, MVVM',
  'Frameworks & Libraries': 'FastAPI, Node.js, React, Next.js, Streamlit, pandas, NumPy',
  'Data & Infrastructure': 'MySQL, MongoDB, SQLite, Firebase, Docker, Git, GitHub Actions, Jenkins, CI/CD',
};

const markFromHome = () => {
  try {
    sessionStorage.setItem('fromHome', '1');
  } catch {}
};

const smoothTo = (e, id) => {
  const el = typeof document !== 'undefined' && document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth' });
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', `#${id}`);
  }
};

export default function Home() {
  // A fresh homepage visit resets the back-navigation flag.
  useEffect(() => {
    try {
      sessionStorage.removeItem('fromHome');
    } catch {}
  }, []);

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
            <a href="#experience" className="header-link" onClick={(e) => smoothTo(e, 'experience')}>Experience</a>
            <a href="#projects" className="header-link" onClick={(e) => smoothTo(e, 'projects')}>Projects</a>
            <a href="#contact" className="header-link" onClick={(e) => smoothTo(e, 'contact')}>Contact</a>
            <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className="pill pill-resume">Resume</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="wrap">
        <div className="sections">
          {/* Intro: hero + quick stats */}
          <div className="section">
            <div className="row">
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
                <Image src="/headshot.jpg" alt="Neel Maddu" fill priority sizes="(max-width: 600px) 100vw, 480px" />
              </div>
            </div>

            <div className="row stats-row">
              <div className="tile stat stat-accent">
                <span className="tile-label">Georgia Tech · B.S. Computer Science</span>
                <span className="stat-value">4.0</span>
                <span className="stat-caption">GPA · graduating Dec 2027</span>
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
                    <span className="bar-wrap"><span className="bar-fill" style={{ width: '100%', background: 'var(--accent)' }} /></span>
                  </div>
                  <div className="bar-line">
                    <span className="bar-num muted">43</span>
                    <span className="bar-wrap"><span className="bar-fill" style={{ width: '7%', background: 'var(--bar)' }} /></span>
                  </div>
                </div>
                <span className="stat-caption">events found vs the public catalog</span>
              </div>
              <div className="tile stat">
                <span className="tile-label">LLM Red-Teaming</span>
                <span className="stat-value value-accent">47%</span>
                <span className="stat-caption">peak breakthrough rate on local 7–8B models</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <section className="section" id="experience">
            <h2 className="section-heading">Experience</h2>
            <div className="row">
              <div className="tile exp-tile">
                {experience.map((exp) => (
                  <Link
                    key={exp.slug}
                    id={`exp-${exp.slug}`}
                    href={`/experience/${exp.slug}`}
                    className="exp-row"
                    onClick={markFromHome}
                  >
                    <div className="exp-head">
                      <div className="exp-title">{exp.role} <span className="exp-org">· {exp.org}</span></div>
                      <div className="exp-date">{exp.date}</div>
                    </div>
                    <div className="exp-line">{exp.summary} <span className="arrow">→</span></div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="section" id="projects">
            <h2 className="section-heading">Projects</h2>
            <div className="row">
              {featuredProjects.map((proj) => {
                const images = proj.images || [];
                const phones = images.filter((i) => (i.kind || 'phone') === 'phone');
                const wides = images.filter((i) => i.kind === 'wide');
                const hasMedia = images.length > 0;
                return (
                  <Link
                    key={proj.slug}
                    id={`project-${proj.slug}`}
                    href={`/projects/${proj.slug}`}
                    className={`tile proj-feature${hasMedia ? ' has-media' : ''}`}
                    onClick={markFromHome}
                  >
                    <div className="proj-feature-text">
                      <span className="tile-label">{proj.label}</span>
                      <h3 className="proj-title">{proj.title}</h3>
                      <p className="proj-desc">{proj.summary}</p>
                      <div className="chip-row">
                        {proj.tech.slice(0, 4).map((t) => <span className="chip" key={t}>{t}</span>)}
                      </div>
                      <span className="proj-view">View project →</span>
                    </div>
                    {hasMedia && (
                      <div className="proj-feature-media">
                        {wides.map((w) => (
                          <figure className="media-wide" key={w.src}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={w.src} alt={w.alt || ''} width={w.width} height={w.height} loading="lazy" />
                          </figure>
                        ))}
                        {phones.length > 0 && (
                          <div className="phones">
                            {phones.map((p) => (
                              <figure className="phone" key={p.src}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={p.src} alt={p.alt || ''} width={p.width} height={p.height} loading="lazy" />
                              </figure>
                            ))}
                          </div>
                        )}
                        {proj.mediaCaption && <p className="media-cap">{proj.mediaCaption}</p>}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="row">
              {smallProjects.map((proj) => (
                <Link
                  key={proj.slug}
                  id={`project-${proj.slug}`}
                  href={`/projects/${proj.slug}`}
                  className="tile proj-small"
                  onClick={markFromHome}
                >
                  <div className="proj-small-title">{proj.title} →</div>
                  <div className="proj-small-desc">{proj.description}</div>
                  {proj.tech && <div className="proj-small-tech">{proj.tech}</div>}
                </Link>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section className="section">
            <h2 className="section-heading">Stack</h2>
            <div className="row">
              <div className="tile stack-tile">
                {Object.entries(skills).map(([group, items]) => (
                  <div className="stack-group" key={group}>
                    <div className="stack-group-label">{group}</div>
                    <div className="stack-group-items">{items}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="section" id="contact">
            <h2 className="section-heading">Get in touch</h2>
            <div className="row">
              <div className="tile contact-tile">
                <a href={EMAIL_HREF} className="contact-email">neelmaddu1@gmail.com</a>
                <a href={EMAIL_HREF} className="pill pill-accent">Email me</a>
              </div>
            </div>
            <div className="site-footer">
              <span>© 2026 Neel Maddu</span>
              <span>Atlanta, GA</span>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
