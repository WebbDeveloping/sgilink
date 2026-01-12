// components/sections/TechnologySection.tsx
import { Cpu, Globe2, ShieldCheck, FileText } from "lucide-react";
import { SectionTitle, BodyText } from "@/components/typography";
import { IconEyebrow, CtaLink, Pill } from "@/components/ui";
import { TechLayerCard } from "@/components/cards";
import { Section } from "./";

export function TechnologySection() {
  const layers = [
    {
      label: "Execution layer",
      body: "Order routing and venue selection tuned for FX and futures liquidity, with emphasis on stability over hyper-optimization.",
      icon: Globe2,
    },
    {
      label: "Model layer",
      body: "Portfolio of independently tested strategies with clear roles, versioning, and deprecation rules.",
      icon: Cpu,
    },
    {
      label: "Risk layer",
      body: "Position limits, max-loss thresholds, circuit breakers, and automatic de-risking logic across systems.",
      icon: ShieldCheck,
    },
    {
      label: "Reporting layer",
      body: "Investor reporting aligned with institutional expectations, including risk and drawdown context.",
      icon: FileText,
    },
  ];

  return (
    <Section background="surface" padding="standard">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:px-8">
        {/* LEFT COPY */}
        <div className="max-w-xl space-y-5">
          <IconEyebrow icon={Cpu} label="Technology Stack" />
          <SectionTitle className="text-pretty text-text sm:text-balance">
            Infrastructure built for live markets.
          </SectionTitle>
          <BodyText className="text-lg/8">
            Purpose-built execution, monitoring, and risk tooling support our
            systems in live FX and futures markets — not just in research
            notebooks. The Strategy page includes a deeper view of this
            technology and risk stack.
          </BodyText>

          <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
            <Pill>Live risk dashboards</Pill>
            <Pill>Automated checks</Pill>
            <Pill>Same stack: backtest → live</Pill>
          </div>

          <CtaLink href="/strategy">See technology &amp; risk details</CtaLink>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="flex-1">
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-y-16">
            {layers.map((layer) => (
              <TechLayerCard
                key={layer.label}
                icon={layer.icon}
                label={layer.label}
                body={layer.body}
              />
            ))}
          </div>

          <div className="mt-5 rounded-xl p-4 text-xs/7 ring-1 ring-border-card shadow-xl text-text-muted">
            <p className="font-semibold text-text">
              Technology exists to make the process more repeatable — not more
              complicated.
            </p>
            <p className="mt-1.5">
              Every component supports a simple principle: we should always be
              able to explain what the portfolio is doing in plain language.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

