import Head from 'next/head';
import Link from 'next/link';

export default function LLMRedTeaming() {
  return (
    <>
      <Head>
        <title>LLM Red-Teaming Evaluation Pipeline | Neel Maddu</title>
      </Head>

      <nav style={{ padding: '1.5rem 0', background: 'var(--bg-color)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container project-nav-row">
          <Link href="/" style={{ fontWeight: 600, color: 'var(--text-muted)' }}>← Back to Portfolio</Link>
          <div style={{ fontWeight: 800 }}>NM.</div>
        </div>
      </nav>

      <main className="article-container animate-fade-in delay-100">
        <div style={{ marginBottom: '3rem' }}>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">Streamlit</span>
          <span className="tech-badge">Ollama</span>
          <span className="tech-badge">Anthropic API</span>
          <span className="tech-badge">pytest</span>
        </div>

        <h1 className="text-gradient">LLM Red-Teaming Evaluation Pipeline</h1>
        <p>
          An extensible framework for measuring how well language models resist prompt-injection attacks—and where their defenses quietly break down.
        </p>

        <h2>The Problem</h2>
        <p>
          As LLMs get wired into agentic systems with tool access, prompt injection becomes a real security surface rather than a curiosity. But &quot;is this model safe?&quot; is not a yes/no question—robustness varies by attack technique, by model size, and by the defenses layered on top. I set out to build a rigorous, repeatable way to <strong>quantify</strong> that robustness instead of reasoning about it anecdotally.
        </p>

        <h2>Architecture &amp; Implementation</h2>
        <p>
          I designed an <strong>extensible prompt-injection evaluation framework</strong> with cleanly separated, pluggable layers—provider, target, classifier, and defense—so new models, attacks, and mitigations can be swapped in without touching the core harness.
        </p>

        <ul className="feature-list">
          <li><strong>Attack Corpus:</strong> 46 attack payloads spanning 4 categories and 41 distinct techniques, exercised against both local and frontier models.</li>
          <li><strong>Dual Scoring:</strong> A hybrid scoring pipeline combining deterministic rule-based checks with an LLM-as-judge, surfacing breakthroughs a single method would miss.</li>
          <li><strong>Dashboard &amp; CI:</strong> A Streamlit dashboard for exploring results, backed by 35 automated tests running in CI.</li>
        </ul>

        <h2>Key Findings</h2>
        <p>
          The pipeline quantified a <strong>robustness gap of up to a 47% breakthrough rate on local 8B models versus near-zero on a frontier model</strong>—a stark, measurable difference in resilience. Through multi-model, repeated-trial experiments, it also surfaced non-obvious failure modes: <strong>prompt-hardening defenses that merely relocated vulnerabilities rather than removing them</strong>, and denylist filters that were defeated by trivial obfuscation. The takeaway: defenses that look effective in isolation can give a false sense of security until they&apos;re measured systematically.
        </p>

        <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/NeelMaddu268/llm-redteam" target="_blank" rel="noopener noreferrer" className="btn-primary">
            GitHub Code
          </a>
        </div>
      </main>
    </>
  );
}
