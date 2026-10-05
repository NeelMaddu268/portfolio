import Head from 'next/head';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, Media, NextLink } from '@/components/CaseStudy';

export default function LLMRedTeaming() {
  return (
    <>
      <Head>
        <title>LLM Red-Teaming Pipeline | Neel Maddu</title>
      </Head>

      <CaseStudyLayout backHref="/#project-llm-red-teaming">
        <CaseHero
          title="LLM Red-Teaming Pipeline"
          sub="A framework I built to measure how well language models resist prompt-injection attacks, and where their defenses quietly break down."
          facts={[
            { label: 'Role', value: 'Solo project' },
            { label: 'Scope', value: 'Prompt-injection evaluation' },
            { label: 'Tests', value: '35 in CI' },
          ]}
          links={[
            { label: 'Live demo', href: 'https://llm-redteam.streamlit.app' },
            { label: 'GitHub', href: 'https://github.com/NeelMaddu268/llm-redteam' },
          ]}
        />

        <CaseStats
          items={[
            { value: '47%', caption: 'qwen2.5:7b, local' },
            { value: '29%', caption: 'llama3.1:8b, local' },
            { value: '3%', caption: 'Claude Sonnet 5' },
            { value: '46', caption: 'payloads in the library' },
          ]}
        />

        <Media
          items={[
            {
              src: '/projects/llm-red-teaming/dashboard.png',
              alt: 'Dashboard showing breakthrough rate by model under rule-based scoring',
              width: 1600,
              height: 1000,
              kind: 'wide',
              cap: 'Three-model run: 34 payloads per model, 102 runs. The 26% is all three models combined. anthropic-direct is Claude Sonnet 5.',
            },
          ]}
        />

        <h2>Why measure robustness</h2>
        <p>
          As LLMs get wired into agentic systems with tool access, prompt injection becomes a real security surface rather than a curiosity. And whether a model is safe is not a yes or no question: robustness varies by attack technique, by model size, and by the defenses layered on top. I wanted a repeatable way to measure it instead of reasoning about it anecdotally.
        </p>

        <h2>How the harness is built</h2>
        <p>
          The framework keeps the provider, target, classifier, and defense as separate, pluggable layers, so new models, attacks, and mitigations can be swapped in without touching the core.
        </p>
        <ul>
          <li>46 attack payloads spanning 4 categories and 41 techniques, run against both local and frontier models.</li>
          <li>A dual scoring pipeline that combines deterministic rule-based checks with an LLM-as-judge.</li>
          <li>A Streamlit dashboard for exploring results, backed by 35 automated tests in CI.</li>
        </ul>
        <Media
          items={[
            {
              src: '/projects/llm-red-teaming/heatmap.png',
              alt: 'Heatmap of 46 attack payloads across 3 models, grouped by attack category',
              width: 1600,
              height: 1000,
              kind: 'wide',
              cap: '46 payloads across 3 models, grouped by attack category',
            },
          ]}
        />

        <h2>What the runs showed</h2>
        <p>
          In the three-model run (34 payloads each), rule-based scoring had 47% of attacks get through qwen2.5:7b (16 of 34) and 29% through llama3.1:8b, versus 3% on Claude Sonnet 5. The LLM judge scored the same runs lower (26%, 21% and 0%). Prompt hardening on llama3.1:8b only cut breakthroughs from 21% to 17%: each defense closed two or three attacks but opened one or two others, and two attacks got through all four configurations. Denylist filters were beaten by simple obfuscation.
        </p>
        <Media
          items={[
            {
              src: '/projects/llm-red-teaming/defenses.png',
              alt: 'Chart of which attacks each prompt-hardening defense closed and opened on llama3.1:8b',
              width: 1600,
              height: 1000,
              kind: 'wide',
              cap: 'Which attacks each prompt-hardening defense closed and opened, llama3.1:8b',
            },
          ]}
        />

        <NextLink href="/projects/multimodal-search" title="Multimodal AI Search" />
      </CaseStudyLayout>
    </>
  );
}
