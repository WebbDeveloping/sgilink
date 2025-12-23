// components/sections/OurBeliefsSection.tsx
"use client";

import { Award, ShieldCheck, Zap, Eye } from "lucide-react";
import { Section, ContentBlock } from "./";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { BodyText } from "@/components/typography";
import { IconEyebrow } from "@/components/ui";

const beliefs = [
  {
    icon: Award,
    title: "Proof Over Promises",
    description:
      "Everything we do is measurable, accountable, and performance-focused. We provide third-party verified results and transparent reporting—no hype, just data.",
  },
  {
    icon: ShieldCheck,
    title: "Respecting the Risk",
    description:
      "Risk is part of growth—but it should be calculated, not chaotic. We operate with robust risk-management frameworks and strict limits designed to protect capital.",
  },
  {
    icon: Zap,
    title: "Access Without Complexity",
    description:
      "You don&apos;t need to be a quant or hedge fund insider to benefit from advanced strategies. Our fully automated systems handle the complexity for you.",
  },
  {
    icon: Eye,
    title: "Investor Control",
    description:
      "Our structure gives you the visibility, autonomy, and flexibility you expect. Full transparency, direct access, and clear communication—always.",
  },
];

export function OurBeliefsSection() {
  return (
    <Section background="warm" padding="standard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <ContentBlock
            eyebrow={
              <IconEyebrow
                icon={Award}
                label="Our Beliefs"
                className="text-text-muted"
                iconClassName="text-brand"
              />
            }
            title={
              <span className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                The Principles That Guide Us
              </span>
            }
            description={
              <BodyText className="text-sm leading-relaxed text-text-muted sm:text-base">
                These core beliefs shape every decision we make, from strategy
                development to investor communication.
              </BodyText>
            }
            align="center"
            maxWidth="lg"
          />
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-5xl">
          <StaggerContainer as="div" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-16">
            {beliefs.map((belief) => (
              <StaggerItem key={belief.title} as="div">
                <div className="rounded-xl border border-border-card bg-surface p-6 shadow-sm shadow-slate-900/5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-chip-blue">
                      <belief.icon className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-text">
                      {belief.title}
                    </h3>
                  </div>
                  <BodyText className="text-sm leading-relaxed text-text-muted sm:text-base">
                    {belief.description}
                  </BodyText>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </Section>
  );
}

