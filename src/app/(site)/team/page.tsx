// app/team/page.jsx

import {
  Users2,
  ShieldCheck,
  Briefcase,
  Scale,
  Eye,
  Award,
  BookOpen,
  AlertTriangle,
} from "lucide-react";
import {
  Eyebrow,
  SectionTitle,
  BodyText,
  SmallMuted,
} from "@/components/atoms";
import { IconEyebrow, InfoCard } from "@/components/molecules";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <TeamHeroSection />
      <FoundersSection />
      <InvestmentPartnersSection />
      <RiskComplianceSection />
      <TrustSection />
    </main>
  );
}

/** HERO – editorial, consistent with About/Strategy */
function TeamHeroSection() {
  return (
    <section className="relative border-b border-border bg-surface py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <IconEyebrow
          icon={Users2}
          label="Team & Governance"
          className="mb-4 inline-flex items-center justify-center text-text-muted"
          iconClassName="text-brand"
        />

        <SectionTitle
          as="h1"
          className="text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          The people behind{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-section-blue" />
            <span className="relative">our systematic engine</span>
          </span>
          .
        </SectionTitle>

        <BodyText className="mx-auto mt-5 max-w-3xl text-sm text-text-muted sm:text-base">
          SGI-LINK is built and run by a small, experienced team across
          research, investment, and risk &amp; compliance — with a track record
          of operating through different market regimes and communicating
          candidly about what has and hasn&apos;t worked.
        </BodyText>

        <SmallMuted className="mx-auto mt-3 max-w-2xl text-text-muted">
          Short bios here are intentionally concise. Detailed background and
          references are available to qualified investors during diligence.
        </SmallMuted>
      </div>
    </section>
  );
}

/** FOUNDERS – short bios, focused on origin + responsibility */
function FoundersSection() {
  const founders = [
    {
      name: "Alex Morgan",
      title: "Co-Founder & Chief Investment Officer",
      focus:
        "Leads research, portfolio construction, and system design for SGI-LINK.",
      background:
        "15+ years in systematic FX and commodities, previously at multi-manager platforms and a global macro hedge fund.",
      lessons:
        "Has seen multiple drawdown cycles; emphasizes risk limits and de-risking rules over maximizing headline returns.",
      image:
        "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Jordan Lee",
      title: "Co-Founder & Managing Partner",
      focus:
        "Oversees firm strategy, investor relationships, and operational oversight.",
      background:
        "Background across prime brokerage, allocator due diligence, and fund operations.",
      lessons:
        "Believes that clear communication around risk, liquidity, and expectations matters as much as the strategy itself.",
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={Users2}
            label="Founders"
            className="text-text-muted"
            iconClassName="text-brand"
          />
          <SectionTitle>
            Operators first, not just portfolio architects.
          </SectionTitle>
          <BodyText className="text-sm text-text-muted sm:text-base">
            The founding team is responsible for both the investment
            architecture and the day-to-day reality of running capital: managing
            risk, building infrastructure, and speaking plainly with investors.
          </BodyText>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="overflow-hidden rounded-2xl border border-border-card bg-surface shadow-sm shadow-slate-900/5"
            >
              {/* Image header */}
              <div
                className="h-40 bg-cover bg-center sm:h-48"
                style={{ backgroundImage: `url(${founder.image})` }}
              />
              <div className="space-y-3 p-5">
                <Eyebrow className="text-brand-chip">{founder.title}</Eyebrow>
                <p className="text-base font-semibold">{founder.name}</p>
                <BodyText className="text-xs text-text-muted sm:text-sm">
                  {founder.focus}
                </BodyText>
                <BodyText className="text-xs text-text-muted sm:text-sm">
                  {founder.background}
                </BodyText>
                <SmallMuted className="text-text-muted">
                  {founder.lessons}
                </SmallMuted>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** INVESTMENT PARTNERS – collaborators / senior investment roles */
function InvestmentPartnersSection() {
  const partners = [
    {
      name: "Taylor Chen",
      title: "Investment Partner – Systematic Macro",
      focus:
        "Supports research into cross-asset signals and regime behavior across FX and commodities.",
      experience:
        "Prior roles in macro research and risk at a multi-strategy fund; experience integrating systematic sleeves into broader portfolios.",
    },
    {
      name: "Riley Patel",
      title: "Investment Partner – Execution & Microstructure",
      focus:
        "Advises on venue selection, order-routing logic, and slippage management for live trading.",
      experience:
        "Background in electronic trading and execution analytics, with a focus on FX and listed futures.",
    },
  ];

  return (
    <section className="border-b border-border-blue bg-section-blue py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={Briefcase}
            label="Investment Partners"
            className="text-brand-body-alt"
            iconClassName="text-brand"
          />
          <SectionTitle className="text-brand-on">
            External perspective without outsourcing responsibility.
          </SectionTitle>
          <BodyText className="text-sm text-brand-on-soft sm:text-base">
            SGI-LINK draws on a small set of investment partners who have
            relevant experience in systematic macro, execution, and allocator
            risk — but ultimate decision-making and accountability remain with
            the core team.
          </BodyText>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="space-y-2 rounded-2xl border border-border-blue bg-surface/90 p-5 text-sm leading-relaxed text-brand-on-soft shadow-sm shadow-slate-900/5"
            >
              <Eyebrow className="text-brand-chip">{partner.title}</Eyebrow>
              <p className="text-base font-semibold text-brand-on">
                {partner.name}
              </p>
              <BodyText className="text-brand-on-soft text-sm sm:text-base">
                {partner.focus}
              </BodyText>
              <SmallMuted className="text-brand-label">
                {partner.experience}
              </SmallMuted>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** RISK & COMPLIANCE – roles and accountability */
function RiskComplianceSection() {
  const roles = [
    {
      icon: Scale,
      label: "Risk Oversight",
      title: "Chief Risk Officer (CRO)",
      body: "Defines portfolio-level limits, monitors drawdowns and exposures, and is empowered to de-risk regardless of market narrative or recent performance.",
    },
    {
      icon: Eye,
      label: "Compliance & Governance",
      title: "Compliance Lead",
      body: "Oversees policies, marketing review, and regulatory obligations, ensuring that how we describe the strategy matches how it actually behaves.",
    },
    {
      icon: AlertTriangle,
      label: "Operational Resilience",
      title: "Operations & Controls",
      body: "Owns trade reconciliation, breaks management, and incident response so that operational issues are caught and addressed quickly.",
    },
  ];

  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={ShieldCheck}
            label="Risk & Compliance"
            className="text-text-muted"
            iconClassName="text-brand"
          />
          <SectionTitle>Structured accountability around risk.</SectionTitle>
          <BodyText className="text-sm text-text-muted sm:text-base">
            Risk and compliance roles are defined separately from idea
            generation. Their mandate is to protect the integrity of the
            portfolio and of the information investors receive — even when that
            means saying &quot;no&quot; to a tempting trade or narrative.
          </BodyText>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <InfoCard key={role.title} title={role.label}>
              <div className="mt-1 flex items-center gap-2 text-xs text-text-muted">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-chip-blue text-brand shadow-sm">
                  <role.icon className="h-3.5 w-3.5" />
                </span>
                <p className="text-xs font-medium sm:text-sm">{role.title}</p>
              </div>
              <BodyText className="mt-2 text-xs text-text-muted sm:text-sm">
                {role.body}
              </BodyText>
            </InfoCard>
          ))}
        </div>

        <SmallMuted className="max-w-3xl text-text-muted">
          Formal role descriptions, reporting lines, and policy documents are
          available to investors as part of the standard due diligence package.
        </SmallMuted>
      </div>
    </section>
  );
}

/** WHY YOUR TEAM IS TRUSTWORTHY – experience, transparency, hard lessons */
function TrustSection() {
  return (
    <section className="bg-section-warm py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={Award}
            label="Why This Team"
            className="text-text-muted"
            iconClassName="text-brand"
          />
          <SectionTitle>This page reinforces confidence.</SectionTitle>
          <BodyText className="text-sm text-text-muted sm:text-base">
            Trust isn&apos;t built on a single performance number. It comes from
            experience across cycles, transparency about risk and limitations,
            and a willingness to talk about hard lessons learned — not just
            wins.
          </BodyText>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard title="Depth of experience">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              The core team has spent years working in and around institutional
              allocators, multi-manager platforms, and electronic trading. We
              design SGI-LINK with the same scrutiny we used when evaluating
              other managers.
            </BodyText>
          </InfoCard>

          <InfoCard title="Transparency by default">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              We prefer clear, sometimes unglamorous language about risk,
              capacity, and drawdowns. If we can&apos;t explain a behavior or
              decision, we don&apos;t consider that acceptable for a
              long-term-focused vehicle.
            </BodyText>
          </InfoCard>

          <InfoCard title="Hard lessons internalized">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              Members of the team have lived through strategy overfitting,
              liquidity surprises, and operational hiccups in prior roles. SGI
              exists in part to encode those lessons into better guardrails and
              more honest communication.
            </BodyText>
          </InfoCard>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="How we communicate with investors">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              Regular updates emphasize risk and process changes, not just
              recent returns. We are explicit about when conditions are
              favorable vs. difficult, and what that means for expected
              behavior.
            </BodyText>
            <SmallMuted className="mt-2 text-text-muted">
              Example materials and reporting formats are available on request
              for qualified investors.
            </SmallMuted>
          </InfoCard>

          <InfoCard title="Alignment and access">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              The team invests alongside clients under the same risk framework.
              Investors have direct access to decision-makers, not just an
              investor relations layer.
            </BodyText>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
