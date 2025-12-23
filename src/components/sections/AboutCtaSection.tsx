// components/sections/AboutCtaSection.tsx
"use client";

import { Section, ContentBlock } from "./";
import { ScrollReveal, FadeInUp } from "@/components/animations";
import { BodyText } from "@/components/typography";
import { PrimaryLinkButton, SecondaryLinkButton } from "@/components/buttons";
import { FileText, ArrowRight } from "lucide-react";

export function AboutCtaSection() {
  return (
    <Section background="surface" padding="standard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <ContentBlock
            title={
              <span className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                Want to learn more?
              </span>
            }
            description={
              <BodyText className="text-sm leading-relaxed text-text-muted sm:text-base">
                We work with accredited investors. Schedule a consultation to
                discuss how our systematic approach can fit into your portfolio.
              </BodyText>
            }
            align="center"
            maxWidth="md"
          />
        </ScrollReveal>

        <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
          <FadeInUp delay="short">
            <PrimaryLinkButton href="/contact" className="w-full px-8 py-3 sm:w-auto">
              <FileText className="mr-2 h-5 w-5 shrink-0" />
              Schedule Consultation
            </PrimaryLinkButton>
          </FadeInUp>
          <FadeInUp delay="short">
            <SecondaryLinkButton
              href="/strategy"
              className="w-full px-8 py-3 sm:w-auto"
            >
              Learn About Our Strategy
              <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
            </SecondaryLinkButton>
          </FadeInUp>
        </div>
      </div>
    </Section>
  );
}

