import Seo from '@/components/Seo';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { CaseHero, CaseStats, NextLink } from '@/components/CaseStudy';

const DESCRIPTION =
  "I lead GTAlgoPoker, the Georgia Tech Poker Club's six-max Hold'em bot league, and moved it onto the club's own AWS account.";

export default function GTPoker() {
  return (
    <>
      <Seo title="Director of Technology, GTPoker | Neel Maddu" description={DESCRIPTION} />

      <CaseStudyLayout backHref="/#exp-gtpoker">
        <CaseHero
          title="Director of Technology, GTPoker"
          sub={DESCRIPTION}
          facts={[
            { label: 'Club', value: 'GTPoker (Georgia Tech Poker Club)' },
            { label: 'Role', value: 'Director of Technology' },
            { label: 'When', value: 'Oct 2026 – Present' },
          ]}
          links={[{ label: 'Live site', href: 'https://gtpoker.org' }]}
        />

        <CaseStats
          items={[
            { value: '6', caption: 'bots per table, run in one isolated task' },
            { value: '3', caption: 'bot languages: Python, C++, Rust' },
            { value: '13/32', caption: 'code-review findings closed' },
          ]}
        />

        <h2>The league</h2>
        <p>
          GTAlgoPoker is the club&apos;s algorithmic poker league. Members upload a single Python, C++ or Rust source file, and six bots play no-limit Hold&apos;em against each other in an isolated match runner on AWS Fargate.
        </p>

        <h2>Moving it onto the club&apos;s own AWS</h2>
        <p>
          I migrated the league and the club website to the club&apos;s own AWS account and rebuilt them on S3, CloudFront, Lambda and an auto-pausing Aurora database, in place of an always-on server.
        </p>

        <h2>Hardening the bot runner</h2>
        <p>
          Every match runs code that members upload, so each bot has to be kept to its own seat.
        </p>
        <ul>
          <li>Removed the match tasks&apos; AWS role.</li>
          <li>Limited each bot to its own source with per-seat signed URLs.</li>
          <li>Ran each bot as a separate user.</li>
          <li>Added an HMAC seat check.</li>
        </ul>
        <p>
          That round of runner fixes closed 13 of the 32 findings from the project&apos;s code review.
        </p>

        <NextLink href="/experience/gtri-cipher-lab" title="Software Engineer Intern" prefix="Next role" />
      </CaseStudyLayout>
    </>
  );
}
