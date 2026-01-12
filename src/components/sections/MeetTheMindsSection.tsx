// components/sections/MeetTheMindsSection.tsx
"use client";

import { Users2 } from "lucide-react";
import { Section, ContentBlock } from "./";
import { ScrollReveal } from "@/components/animations";
import { BodyText } from "@/components/typography";
import { IconEyebrow } from "@/components/ui";
import { PrimaryLinkButton } from "@/components/buttons";

export function MeetTheMindsSection() {
  return (
    <Section background="surface" padding="standard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <ContentBlock
            eyebrow={
              <IconEyebrow
                icon={Users2}
                label="Leadership"
                className="text-text-muted"
                iconClassName="text-brand"
              />
            }
            title={
              <span className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                Meet the Minds Behind the Model
              </span>
            }
            description={
              <div className="space-y-4">
                <BodyText className="text-base font-semibold leading-relaxed text-text sm:text-lg">
                  Built by traders. Backed by experience. Focused on results.
                </BodyText>
                <BodyText className="text-sm leading-relaxed text-text-muted sm:text-base">
                  Our leadership team comes from a blend of trading, algorithmic
                  strategy, entrepreneurship, and digital infrastructure. We&apos;ve
                  created businesses, scaled operations, and traded markets
                  firsthand—so we understand the real-world needs of the people
                  we serve.
                </BodyText>
                <BodyText className="text-sm leading-relaxed text-text-muted sm:text-base">
                  This isn&apos;t a bank. It&apos;s not Wall Street. It&apos;s a
                  new approach to systematic investing—and you deserve a seat at
                  the table.
                </BodyText>
              </div>
            }
            align="center"
            maxWidth="lg"
          />
        </ScrollReveal>

        <div className="mx-auto mt-10 flex justify-center">
          <ScrollReveal threshold={0.2}>
            <PrimaryLinkButton href="/team" className="px-8 py-3">
              Meet the Team
            </PrimaryLinkButton>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}

