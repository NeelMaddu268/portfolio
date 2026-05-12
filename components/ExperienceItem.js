import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ExperienceItem({ role, company, location, date, descriptionPoints }) {
  return (
    <motion.div
      className="glass-panel"
      style={{ padding: '2rem', borderLeft: '4px solid var(--accent-cyan)' }}
      variants={itemVariants}
      whileHover={{ x: 6, transition: { duration: 0.2 } }}
    >
      <div className="experience-header">
        <div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{role}</h3>
          <h4 style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>{company}</h4>
        </div>
        <div className="experience-meta">
          <div>{date}</div>
          <div>{location}</div>
        </div>
      </div>
      <ul style={{ marginTop: '1.5rem', color: 'var(--text-muted)', marginLeft: '1.2rem' }}>
        {descriptionPoints.map((point, i) => (
          <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}
