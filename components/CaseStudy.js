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

// items: [{ src, alt, width, height, kind: 'phone' | 'wide', cap, hero }]
// 'phone' images render in a centered phone frame; 'wide' images render as one 16:10 contain image.
// Every image links to its full-size file.
export function Media({ items = [], caption }) {
  if (items.length === 0) return null;
  const phones = items.filter((i) => (i.kind || 'phone') === 'phone');
  const wides = items.filter((i) => i.kind === 'wide');
  return (
    <div className="case-shots">
      {wides.map((w) => (
        <figure className="wide-figure" key={w.src}>
          <div className="media-wide">
            <a href={w.src} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={w.src} alt={w.alt || w.cap || ''} width={w.width} height={w.height} loading="lazy" />
            </a>
          </div>
          {w.cap && <figcaption className="media-cap">{w.cap}</figcaption>}
        </figure>
      ))}
      {phones.length > 0 && (
        <div className="phones">
          {phones.map((p) => (
            <figure className={`phone${p.hero ? ' hero-shot' : ''}`} key={p.src}>
              <a href={p.src} target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt || p.cap || ''} width={p.width} height={p.height} loading="lazy" />
              </a>
              {p.cap && <figcaption className="phone-cap">{p.cap}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      {caption && <p className="media-cap">{caption}</p>}
    </div>
  );
}

export function NextLink({ href, title, prefix = 'Next project' }) {
  return (
    <Link href={href} className="next-link">{prefix} → {title}</Link>
  );
}
