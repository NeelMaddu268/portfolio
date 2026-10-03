import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from '@/components/ThemeToggle';

export default function CaseStudyLayout({ children, backHref = '/' }) {
  const router = useRouter();
  const [fromHome, setFromHome] = useState(false);

  // Consume the flag set when the visitor clicked a homepage item in this tab.
  useEffect(() => {
    try {
      if (sessionStorage.getItem('fromHome') === '1') {
        setFromHome(true);
        sessionStorage.removeItem('fromHome');
      }
    } catch {}
  }, []);

  const onBack = (e) => {
    e.preventDefault();
    // Came from the homepage this tab: go back so scroll position is restored exactly.
    // Opened directly (resume, LinkedIn, fresh tab): jump to this item on the homepage.
    if (fromHome) router.back();
    else router.push(backHref);
  };

  return (
    <>
      <nav className="subnav">
        <div className="wrap subnav-inner">
          <Link href="/" className="header-name">Neel Maddu</Link>
          <div className="subnav-right">
            <a href={backHref} onClick={onBack} className="back-link">← Back</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <main className="article">{children}</main>
    </>
  );
}
