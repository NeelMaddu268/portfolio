import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function CaseStudyLayout({ children }) {
  return (
    <>
      <nav className="subnav">
        <div className="wrap subnav-inner">
          <Link href="/" className="back-link">← Back</Link>
          <div className="subnav-right">
            <Link href="/" className="header-name">Neel Maddu</Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <main className="article">{children}</main>
    </>
  );
}
