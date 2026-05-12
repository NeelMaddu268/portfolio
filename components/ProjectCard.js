import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ProjectCard({ title, description, techStack, projectSlug }) {
  return (
    <motion.div
      className="glass-panel"
      style={{ padding: '2rem' }}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }} className="text-gradient">
        {title}
      </h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
        {description}
      </p>
      <div style={{ marginBottom: '1.5rem' }}>
        {techStack.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div>
        <Link href={`/projects/${projectSlug}`} className="btn-secondary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          View Project <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
