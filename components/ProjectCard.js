import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ title, description, techStack, projectSlug }) {
  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '2rem', marginBottom: '2rem' }}>
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
        <Link href={`/projects/${projectSlug}`} className="btn-secondary flex-center" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          View Project <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
