import Seo from '@/components/Seo';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, NextLink } from '@/components/CaseStudy';

const DESCRIPTION =
  "Turning unstructured text into signals analysts can use, and testing how agentic LLM systems hold up against adversarial attacks.";

export default function GTRICipherLab() {
  return (
    <>
      <Seo title="Software Engineer Intern, GTRI CIPHER Lab | Neel Maddu" description={DESCRIPTION} />

      <CaseStudyLayout backHref="/#exp-gtri-cipher-lab">
        <CaseHero
          title="Software Engineer Intern, CIPHER Lab"
          sub={DESCRIPTION}
          facts={[
            { label: 'Team', value: 'CIPHER Lab, GTRI' },
            { label: 'Branch', value: 'Threat Analysis' },
            { label: 'When', value: 'May 2026 – Present' },
          ]}
        />

        <CaseStats
          items={[
            { value: '60K+', caption: 'unstructured records processed' },
            { value: '15', caption: 'agentic LLM configurations evaluated' },
            { value: '6', caption: 'categories of adversarial attacks' },
            { value: '5', caption: 'program stakeholders briefed' },
          ]}
        />

        <h2>What the lab works on</h2>
        <p>
          At GTRI&apos;s CIPHER Lab I work on two things: turning large volumes of unstructured text into structured signals analysts can use, and testing how LLM-enabled and agentic systems hold up against adversarial attacks.
        </p>

        <h2>What I do</h2>
        <ul>
          <li>Build pipelines for entity extraction and semantic analysis across 60K+ unstructured text records and posts, supporting cybersecurity and intelligence analysis workflows in a national security context.</li>
          <li>Evaluate 15 agentic LLM configurations against 6 categories of adversarial and injection-style attacks on an isolated 3-VM testbed, measuring how prompt design, tool permissions, and guardrail placement drive failure rates.</li>
          <li>Brief 5 program stakeholders on model-vulnerability findings, informing security assessments and program-level architecture decisions.</li>
        </ul>

        <NextLink href="/experience/vip-research" title="Undergraduate Researcher" prefix="Next role" />
      </CaseStudyLayout>
    </>
  );
}
