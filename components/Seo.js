import Head from 'next/head';
import { useRouter } from 'next/router';

export const SITE_URL = 'https://neel-ai-portfolio.vercel.app';
const DEFAULT_TITLE = 'Neel Maddu';
const DEFAULT_DESCRIPTION = 'Neel Maddu builds AI security tools and iOS apps.';

// Title, description and link-preview tags. Rendered once in _app as the site-wide default;
// a page renders it again with its own title/description, and the keys make the page's win.
export default function Seo({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION }) {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0] || '/';
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content="Neel Maddu" />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:image" property="og:image" content={`${SITE_URL}/og.png`} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      <meta key="og:image:alt" property="og:image:alt" content="Neel Maddu: I build AI security tools and iOS apps." />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
