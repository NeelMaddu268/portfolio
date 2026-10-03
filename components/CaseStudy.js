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
export function Media({ items = [], caption }) {
  if (items.length === 0) return null;
  const phones = items.filter((i) => (i.kind || 'phone') === 'phone');
  const wides = items.filter((i) => i.kind === 'wide');
  return (
    <div className="case-shots">
      {wides.map((w) => (
        // eslint-disable-next-line @next/next/no-img-element
        <figure className="media-wide" key={w.src}>
          <img src={w.src} alt={w.alt || w.cap || ''} width={w.width} height={w.height} loading="lazy" />
          {w.cap && <figcaption className="media-cap">{w.cap}</figcaption>}
        </figure>
      ))}
      {phones.length > 0 && (
        <div className="phones">
          {phones.map((p) => (
            <figure className={`phone${p.hero ? ' hero-shot' : ''}`} key={p.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt || p.cap || ''} width={p.width} height={p.height} loading="lazy" />
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
