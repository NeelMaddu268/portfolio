import Link from 'next/link';

export function CaseHero({ title, sub, facts = [], links = [] }) {
  return (
    <header className="case-hero">
      <h1>{title}</h1>
      {sub && <p className="case-sub">{sub}</p>}
      {facts.length > 0 && (
        <div className="case-facts">
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <span className="fact-label">{f.label}</span>
              <span className="fact-value">{f.value}</span>
            </div>
          ))}
        </div>
      )}
      {links.length > 0 && (
        <div className="case-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="case-link" target="_blank" rel="noopener noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export function CaseStats({ items = [] }) {
  if (items.length === 0) return null;
  return (
    <div className="case-stats">
      {items.map((s) => (
        <div className="cstat" key={s.caption}>
          <span className="cstat-value">{s.value}</span>
          <span className="cstat-cap">{s.caption}</span>
        </div>
      ))}
    </div>
  );
}

// shots: [{ src, width, height, cap, hero, unoptimized }]
export function Phones({ shots = [], caption }) {
  if (shots.length === 0) return null;
  return (
    <div className="case-shots">
      <div className="phones">
        {shots.map((s) => (
          <figure className={`phone${s.hero ? ' hero-shot' : ''}`} key={s.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.cap || ''} width={s.width} height={s.height} loading="lazy" />
            {s.cap && <figcaption className="phone-cap">{s.cap}</figcaption>}
          </figure>
        ))}
      </div>
      {caption && <p className="media-cap">{caption}</p>}
    </div>
  );
}

export function NextLink({ href, title, prefix = 'Next project' }) {
  return (
    <Link href={href} className="next-link">{prefix} → {title}</Link>
  );
}
