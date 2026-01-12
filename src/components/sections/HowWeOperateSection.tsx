// components/sections/HowWeOperateSection.tsx
"use client";

import { Section, ContentBlock } from "./";
import { ScrollReveal } from "@/components/animations";
import { BodyText } from "@/components/typography";
import { InfoCard } from "@/components/cards";

export function HowWeOperateSection() {
  return (
    <Section background="surface" padding="standard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <ContentBlock
            title={
              <span className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                How We Operate
              </span>
            }
            description={
              <BodyText className="text-sm leading-relaxed text-text-muted sm:text-base">
                SGI-LINK operates as an investment fund offering accredited
                investors access to fully automated, algorithmic trading
                strategies. Each strategy is backed by years of real-world
                testing across foreign exchange and commodities markets.
              </BodyText>
            }
            align="center"
            maxWidth="lg"
          />
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-4xl">
          <ScrollReveal threshold={0.2}>
            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Third-Party Verified Results">
                <BodyText className="text-xs text-text-muted sm:text-sm">
                  Every strategy we offer is backed by third-party verified
                  results, ensuring transparency and accountability in our
                  performance claims.
                </BodyText>
              </InfoCard>

              <InfoCard title="Full Visibility & Control">
                <BodyText className="text-xs text-text-muted sm:text-sm">
                  Every investor retains full visibility and control of their
                  account, with transparent reporting and direct access to
                  decision-makers.
                </BodyText>
              </InfoCard>

              <InfoCard title="Personalized Approach">
                <BodyText className="text-xs text-text-muted sm:text-sm">
                  We offer personalized consultations and work exclusively with
                  accredited investors. Because this isn&apos;t for
                  everyone—but that&apos;s the point.
                </BodyText>
              </InfoCard>

              <InfoCard title="Automated Systems">
                <BodyText className="text-xs text-text-muted sm:text-sm">
                  Our fully automated, hands-off portfolio runs consistently
                  whether markets are calm or noisy—governed by transparent
                  methodology and unwavering discipline.
                </BodyText>
              </InfoCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}

