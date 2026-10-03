import Head from 'next/head';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, NextLink } from '@/components/CaseStudy';

export default function MultimodalSearch() {
  return (
    <>
      <Head>
        <title>Multimodal AI Search | Neel Maddu</title>
      </Head>

      <CaseStudyLayout backHref="/#project-multimodal-search">
        <CaseHero
          title="Multimodal AI Search"
          sub="A search engine that finds images from a plain-language description instead of tags or filenames."
          facts={[
            { label: 'Role', value: 'Solo project' },
            { label: 'Scope', value: 'CLIP + FAISS search' },
          ]}
          links={[
            { label: 'Live demo', href: 'https://huggingface.co/spaces/NM268/Multimodal-ai-search/' },
            { label: 'GitHub', href: 'https://github.com/NeelMaddu268/multimodal-ai-search' },
          ]}
        />

        <CaseStats
          items={[
            { value: '10,000+', caption: 'images indexed' },
            { value: '~2s', caption: 'average query time' },
          ]}
        />

        <h2>Why tags fall short</h2>
        <p>
          Traditional image search leans on tags and filenames, so it fails the moment you look for something descriptive or abstract that nobody labeled.
        </p>

        <h2>How search works</h2>
        <p>
          I used OpenAI&apos;s CLIP to put text queries and images into the same vector space, so a sentence and a picture can be compared directly.
        </p>
        <ul>
          <li>A PyTorch pipeline encodes 10,000+ images into embeddings once, up front.</li>
          <li>FAISS indexes those embeddings for fast nearest-neighbor lookup.</li>
          <li>A Streamlit gallery updates as you refine the prompt.</li>
        </ul>

        <h2>Making it fast</h2>
        <p>
          Loading the model and the FAISS index was the slow part. Caching the embeddings and warming the index up front brought the average query down to about two seconds.
        </p>

        <NextLink href="/projects/jotdown" title="JotDown" />
      </CaseStudyLayout>
    </>
  );
}
