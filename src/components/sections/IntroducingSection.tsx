// components/sections/IntroducingSection.tsx
"use client";

import { Section, ContentBlock } from "./";

export function IntroducingSection() {
  return (
    <Section background="surface" padding="standard" className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContentBlock
          eyebrow="Meet SGI-LINK"
          title={
            <span className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl xl:text-5xl">
              Beyond Conventional Portfolios. Beyond Speculative Gambles.
            </span>
          }
          description={
            <>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-text sm:mt-6 sm:text-xl lg:text-2xl">
                Purpose-Built for Investors Who Demand Substance
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-base lg:text-lg">
                SGI-LINK serves investors who recognize that exceptional returns
                require exceptional systems—backed by rigorous testing,
                transparent methodology, and unwavering discipline.
              </p>
            </>
          }
          align="center"
          maxWidth="lg"
        />
      </div>
    </Section>
  );
}
