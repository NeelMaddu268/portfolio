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
    points: [
      'Build NLP pipelines for entity extraction and semantic analysis across 60K+ unstructured text records and posts, supporting cybersecurity and intelligence analysis workflows in a national security context.',
      'Evaluate 15 agentic LLM configurations against 6 categories of adversarial and injection-style attacks on an isolated 3-VM testbed, quantifying how prompt design, tool permissions, and guardrail placement drive failure rates.',
      'Brief 5 program stakeholders on model-vulnerability findings, informing security assessments and program-level architecture decisions.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    org: 'Automated Algorithm Design VIP',
    date: 'Jan 2026 – Present',
    slug: 'vip-research',
    points: [
      "Own the judge for an automated LLM jailbreaking pipeline built on LLM-Guided Evolution (LLM-GE), a framework cited as prior work by Google DeepMind's AlphaEvolve, running on Georgia Tech's PACE ICE HPC cluster.",
      'Designed the scoring formula the team adopted as the search fitness function, rating refusal, on-topic, specificity, and convincingness separately on 0-1 scales so empty compliance scores near zero.',
      'Proposed a two-judge setup with HarmBench as an independent reporting judge to catch the search overfitting its own scorer; first runs showed a 46.2% vs. 30.6% attack-success gap between the judges.',
    ],
  },
  {
    role: 'Tech Lead',
    org: 'Georgia Tech iOS Club',
    date: 'Aug 2025 – Present',
    slug: 'gt-ios-club',
    points: [
      'Co-lead a 20+ developer team building Contour, an on-device iOS accessibility app that guides blind and low-vision users to buttons on unfamiliar appliance panels using Vision and haptic/audio feedback.',
      'Restructured the shared Swift codebase for 3 sub-teams and 12 parallel lanes working against common interface contracts; maintain CI and tooling, including the migration to Xcode 27 and iOS 27.',
      "Grew from developer to Tech Lead across 3 apps in 3 semesters, including Slack API messaging for SmartCompose; authored 17 and merged 22 pull requests across the club's repos.",
    ],
  },
];

const skills = {
  Languages: 'Python, Java, C, C++, JavaScript, Swift, SQL',
  'ML & AI': 'PyTorch, TensorFlow, scikit-learn, FAISS, MediaPipe, NLP, LLM Evaluation, Graph Analytics',
  'iOS Development': 'SwiftUI, Core ML, Vision, WidgetKit, MVVM',
  'Frameworks & Libraries': 'FastAPI, Node.js, React, Next.js, Streamlit, pandas, NumPy',
  'Data & Infrastructure': 'MySQL, MongoDB, SQLite, Firebase, Docker, Git, GitHub Actions, Jenkins, CI/CD',
};

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
                <Image src="/headshot.jpg" alt="Neel Maddu" fill priority sizes="(max-width: 600px) 100vw, 350px" />
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
                <span className="stat-caption">robustness gap on local 8B models</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <section className="section" id="experience">
            <h2 className="section-heading">Experience</h2>
            <div className="row">
              <div className="tile exp-tile">
                {experience.map((exp) => (
                  <div className="exp-row" key={exp.slug}>
                    <div className="exp-head">
                      <div className="exp-title">{exp.role} <span className="exp-org">· {exp.org}</span></div>
                      <div className="exp-date">{exp.date}</div>
                    </div>
                    <ul className="exp-points">
                      {exp.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                    <div style={{ marginTop: '14px' }}>
                      <Link href={`/experience/${exp.slug}`} className="link-item">Details →</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="section" id="projects">
            <h2 className="section-heading">Projects</h2>
            <div className="row">
              {featuredProjects.map((proj) => {
                const hasMedia = proj.images && proj.images.length > 0;
                return (
                  <div className={`tile proj-feature${hasMedia ? ' has-media' : ''}`} key={proj.slug}>
                    <div className="proj-feature-text">
                      <span className="tile-label">{proj.label}</span>
                      <h3 className="proj-title"><Link href={`/projects/${proj.slug}`}>{proj.title}</Link></h3>
                      <p className="proj-desc">{proj.description}</p>
                      <ul className="proj-points">
                        {proj.points.map((pt) => <li key={pt}>{pt}</li>)}
                      </ul>
                      <div className="chip-row">
                        {proj.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
                      </div>
                      <div className="link-row">
                        <Link href={`/projects/${proj.slug}`} className="link-item">Case study →</Link>
                        {proj.links.map((l) => (
                          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link-item">{l.label} ↗</a>
                        ))}
                      </div>
                    </div>
                    {hasMedia && (
                      <div className="proj-feature-media">
                        <div className="phones">
                          {proj.images.map((img) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <figure className="phone" key={img.src}>
                              <img src={img.src} alt={proj.title} width={img.width} height={img.height} loading="lazy" />
                            </figure>
                          ))}
                        </div>
                        {proj.mediaCaption && <p className="media-cap">{proj.mediaCaption}</p>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="row">
              {smallProjects.map((proj) => (
                <Link key={proj.slug} href={`/projects/${proj.slug}`} className="tile proj-small">
                  <div className="proj-small-title">{proj.title} →</div>
                  <div className="proj-small-desc">{proj.description}</div>
                  <div className="proj-small-tech">{proj.tech}</div>
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
