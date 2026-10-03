import Head from 'next/head';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, NextLink } from '@/components/CaseStudy';

export default function LLMRedTeaming() {
  return (
    <>
      <Head>
        <title>LLM Red-Teaming Pipeline | Neel Maddu</title>
      </Head>

      <CaseStudyLayout>
        <CaseHero
          title="LLM Red-Teaming Pipeline"
          sub="A framework I built to measure how well language models resist prompt-injection attacks, and where their defenses quietly break down."
          facts={[
            { label: 'Role', value: 'Solo project' },
            { label: 'Scope', value: 'Prompt-injection evaluation' },
            { label: 'Tests', value: '35 in CI' },
          ]}
          links={[{ label: 'GitHub', href: 'https://github.com/NeelMaddu268/llm-redteam' }]}
        />

        <CaseStats
          items={[
            { value: '46', caption: 'attack payloads' },
            { value: '41', caption: 'distinct techniques' },
            { value: '47%', caption: 'breakthrough on local 8B models' },
            { value: '~0%', caption: 'breakthrough on a frontier model' },
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

        <h2>What the runs showed</h2>
        <p>
          The pipeline measured a robustness gap of up to a 47% breakthrough rate on local 8B models against near-zero on a frontier model. Repeated, multi-model runs also surfaced less obvious failure modes: prompt-hardening defenses that relocated vulnerabilities rather than removing them, and denylist filters defeated by trivial obfuscation. Defenses that look effective in isolation can give a false sense of security until they are measured directly.
        </p>

        <NextLink href="/projects/multimodal-search" title="Multimodal AI Search" />
      </CaseStudyLayout>
    </>
  );
}
