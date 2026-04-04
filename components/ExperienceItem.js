export default function ExperienceItem({ role, company, location, date, descriptionPoints }) {
  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '2rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-cyan)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{role}</h3>
          <h4 style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>{company}</h4>
        </div>
        <div style={{ textAlign: 'right', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <div>{date}</div>
          <div>{location}</div>
        </div>
      </div>
      <ul style={{ marginTop: '1.5rem', color: 'var(--text-muted)', marginLeft: '1.2rem' }}>
        {descriptionPoints.map((point, i) => (
          <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
