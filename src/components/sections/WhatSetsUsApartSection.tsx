// components/sections/WhatSetsUsApartSection.tsx
"use client";

import { AlertTriangle, Code, Users } from "lucide-react";
import { Section, ContentBlock } from "./";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { BodyText } from "@/components/typography";
import { IconEyebrow } from "@/components/ui";

const differentiators = [
  {
    icon: AlertTriangle,
    title: "Risk-First Mindset",
    description:
      "We operate with a risk-first mindset, understanding both the upside and downside of every move. Our conservative investment principles are combined with modern quantitative technology.",
  },
  {
    icon: Code,
    title: "Built and Tested Ourselves",
    description:
      "We&apos;ve built and tested every strategy ourselves before offering access. Our systems weren&apos;t built on backtests alone—they reflect years of real-world trading across FX and commodities markets.",
  },
  {
    icon: Users,
    title: "We Understand Our Investors",
    description:
      "Because we&apos;ve walked the same path. SGI-LINK is built for passive investors who value discipline, honesty, and proven systems—delivering above-average returns while maintaining strict control over risk.",
  },
];

export function WhatSetsUsApartSection() {
  return (
    <Section background="blue" padding="standard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <ContentBlock
            eyebrow={
              <IconEyebrow
                icon={AlertTriangle}
                label="What Sets Us Apart"
                className="text-brand-body-alt"
                iconClassName="text-brand"
              />
            }
            title={
              <span className="text-2xl font-semibold leading-tight text-brand-on sm:text-3xl lg:text-4xl">
                Why SGI-LINK Is Different
              </span>
            }
            description={
              <BodyText className="text-sm leading-relaxed text-brand-on-soft sm:text-base">
                These fundamental differences shape how we operate and what you
                can expect from working with us.
              </BodyText>
            }
            align="center"
            maxWidth="lg"
          />
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-5xl">
          <StaggerContainer as="div" className="grid gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
            {differentiators.map((item) => (
              <StaggerItem key={item.title} as="div">
                <div className="rounded-xl border border-border-blue bg-surface/90 p-6 shadow-sm shadow-slate-900/5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-chip-blue">
                      <item.icon className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-on">
                      {item.title}
                    </h3>
                  </div>
                  <BodyText className="text-sm leading-relaxed text-brand-on-soft sm:text-base">
                    {item.description}
                  </BodyText>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <ScrollReveal threshold={0.2}>
            <div className="rounded-2xl border border-border-blue bg-surface/90 p-8 text-center shadow-sm shadow-slate-900/5">
              <blockquote className="text-xl font-semibold leading-relaxed text-brand-on sm:text-2xl">
                &quot;This isn&apos;t a theory. It&apos;s a platform built on
                verified performance—designed for real investors who want real
                results.&quot;
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}

