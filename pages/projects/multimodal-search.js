import Head from 'next/head';
import Link from 'next/link';

export default function MultimodalSearch() {
  return (
    <>
      <Head>
        <title>Multimodal AI Search | Neel Maddu</title>
      </Head>
      
      <nav style={{ padding: '1.5rem 0', background: 'var(--bg-color)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontWeight: 600, color: 'var(--text-muted)' }}>← Back to Portfolio</Link>
          <div style={{ fontWeight: 800 }}>NM.</div>
        </div>
      </nav>

      <main className="article-container animate-fade-in delay-100">
        <div style={{ marginBottom: '3rem' }}>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">PyTorch</span>
          <span className="tech-badge">CLIP</span>
          <span className="tech-badge">FAISS</span>
        </div>

        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Multimodal AI: Semantic Image Search</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Bridging the gap between natural language prompts and massive visual datasets.
        </p>

        <h2>The Problem</h2>
        <p>
          Traditional image search relies heavily on pre-computed metadata and manual tagging. This approach completely fails when users want to search for highly descriptive or abstract concepts. 
        </p>

        <h2>Architecture & Implementation</h2>
        <p>
          I designed a <strong>Multimodal Search Engine</strong> utilizing OpenAI&apos;s CLIP (Contrastive Language-Image Pretraining) model to encode both text queries and visual assets into the exact same semantic vector space. 
        </p>
        
        <ul className="feature-list">
          <li><strong>Data Ingestion:</strong> Over 10,000 images processed through a PyTorch data pipeline.</li>
          <li><strong>Vector Storage:</strong> Utilized FAISS (Facebook AI Similarity Search) to index the high-dimensional embeddings for extremely rapid nearest-neighbor lookup.</li>
          <li><strong>Frontend:</strong> A highly responsive Streamlit interface that actively updates an endless-scroll gallery as the user structures their prompt.</li>
        </ul>

        <h2>Challenges Overcome</h2>
        <p>
          The most significant hurdle was optimizing the loading speed of the FAISS index and the PyTorch model size. Loading the raw tensor models sequentially bottlenecked initialization. By heavily caching the embeddings and leveraging tensor-optimized hardware rendering on deployment, query times dropped significantly, maintaining an average retrieval pipeline of just two seconds per query.
        </p>

        <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
          <a href="https://huggingface.co/spaces/NM268/Multimodal-ai-search/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Live Demo
          </a>
          <a href="https://github.com/NeelMaddu268/multimodal-ai-search" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub Code
          </a>
        </div>
      </main>
    </>
  );
}
