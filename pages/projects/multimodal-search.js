import Seo from '@/components/Seo';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, Media, NextLink } from '@/components/CaseStudy';

const DESCRIPTION =
  "Search 8,091 Flickr8k photos by describing them, showing an example image, or both.";

export default function MultimodalSearch() {
  return (
    <>
      <Seo title="Multimodal AI Search | Neel Maddu" description={DESCRIPTION} />

      <CaseStudyLayout backHref="/#project-multimodal-search">
        <CaseHero
          title="Multimodal AI Search"
          sub={DESCRIPTION}
          facts={[
            { label: 'Role', value: 'Solo project' },
            { label: 'Status', value: 'Live on Hugging Face' },
            { label: 'When', value: 'Rebuilt October 2026' },
          ]}
          links={[
            { label: 'Live demo', href: 'https://nm268-multimodal-ai-search.hf.space' },
            { label: 'GitHub', href: 'https://github.com/NeelMaddu268/multimodal-ai-search' },
          ]}
        />

        <CaseStats
          items={[
            { value: '57.5%', caption: 'right photo ranked first' },
            { value: '86.6%', caption: 'right photo in the top 10' },
            { value: '+15.8 pts', caption: 'top-1 accuracy vs the first version' },
            { value: '~0.3 s', caption: 'to the first result on the live app' },
          ]}
        />

        <Media
          items={[
            {
              src: '/projects/multimodal-search/search-kayak.png',
              alt: 'Search results for “a man in a yellow kayak on rough water”',
              width: 1600,
              height: 1000,
              kind: 'wide',
              cap: '“a man in a yellow kayak on rough water”',
            },
            {
              src: '/projects/multimodal-search/search-dogs-snow.png',
              alt: 'Search results for “two dogs playing tug of war in the snow”',
              width: 1600,
              height: 1000,
              kind: 'wide',
              cap: '“two dogs playing tug of war in the snow”',
            },
          ]}
        />

        <h2>How it works</h2>
        <p>
          SigLIP 2 (ViT-B/16) embeds all 8,091 photos and their 40,437 captions once, offline. A text query gets two scores per photo, one against the pixels and one against the photo&apos;s best-matching caption. They live on very different scales, so each is z-scored across the collection and then blended 0.7 / 0.3, the weight with the best top-1 accuracy on half the benchmark.
        </p>
        <p>
          Scoring is exact (one matrix-vector product), with no approximate index needed at this size. Image search encodes the upload with the same model, and &quot;More like this&quot; reuses a photo&apos;s stored vector. Thumbnails load straight from Hugging Face&apos;s CDN.
        </p>

        <h2>What the rebuild changed</h2>
        <p>
          The first version matched queries against captions only, using CLIP ViT-B/32 and FAISS, showed 5 results, and downloaded each image from Google Drive one at a time (about 6 s to show all five in a replay). The rebuild blends photo and caption scores with SigLIP 2. Top-1 accuracy went from 41.7% to 57.5%, about half from the blending and half from the model, and the first result now appears in about 0.3 s.
        </p>

        <h2>How I measured it</h2>
        <p>
          Every Flickr8k caption is used as a query with that caption held out, and a hit means the photo it describes ranks in the top K. The blend weight was tuned on the even-numbered queries; results are from the 20,218 odd-numbered ones.
        </p>
        <p>
          Caveat: caption-style queries favor the caption signal, so free-form queries were tested by example.
        </p>

        <h2>Where it breaks</h2>
        <ul>
          <li>Counting holds up to about three.</li>
          <li>&quot;No&quot;, word order and left/right are mostly ignored.</li>
          <li>Queries over 64 tokens are cut off without warning.</li>
          <li>It always fills every slot even when nothing matches (searching &quot;a giraffe&quot; returns mostly dogs).</li>
        </ul>

        <h2>What I&apos;d do next</h2>
        <ul>
          <li>Flag weak matches.</li>
          <li>Warn when a query is truncated.</li>
          <li>Collapse duplicate photos.</li>
          <li>Score free-form queries with hand-labeled relevance.</li>
        </ul>

        <NextLink href="/projects/jotdown" title="JotDown" />
      </CaseStudyLayout>
    </>
  );
}
