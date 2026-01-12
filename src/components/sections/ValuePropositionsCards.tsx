// components/sections/ValuePropositionsCards.tsx
"use client";

import Image from "next/image";
import { StickyParallaxCards, StickyParallaxCard } from "./StickyParallaxCards";
import { Section } from "./Section";
import { SectionTitle } from "@/components/typography";
import { ScrollReveal } from "@/components/animations";

export function ValuePropositionsCards() {
  const cards: StickyParallaxCard[] = [
    {
      id: "systems",
      content: (
        <div className="relative isolate overflow-hidden bg-brand-on rounded-2xl sm:rounded-3xl px-4 pt-12 shadow-2xl sm:px-6 sm:pt-16 md:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl lg:text-4xl">
              Proprietary Trading Systems
            </h2>
            <p className="mt-4 text-base/7 text-pretty text-white/90 sm:mt-6 sm:text-lg/8">
              SGI-LINK deploys capital exclusively into SGI&apos;s own
              algorithmic trading systems—developed, tested, and refined
              in-house. These systems combine advanced quantitative technology
              with robust risk-management frameworks designed to perform across
              diverse FX and commodities markets.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6 lg:justify-start">
              <a
                href="/strategy"
                className="w-full rounded-md bg-surface px-4 py-3 text-sm font-semibold text-text shadow-xs hover:bg-section-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-3.5 sm:py-2.5"
              >
                Learn about our strategy
              </a>
              <a
                href="/performance"
                className="text-sm/6 font-semibold text-white hover:text-brand-soft"
              >
                View performance
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative z-10 mt-12 h-64 sm:mt-16 sm:h-80 lg:mt-8 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
              alt="Algorithmic trading systems"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-surface/5 ring-1 ring-white/10 object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 57rem"
              priority
            />
          </div>
        </div>
      ),
    },
    {
      id: "testing",
      content: (
        <div className="relative isolate overflow-hidden bg-brand-on rounded-2xl sm:rounded-3xl px-4 pt-12 shadow-2xl sm:px-6 sm:pt-16 md:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl lg:text-4xl">
              Years of Real-World Testing
            </h2>
            <p className="mt-4 text-base/7 text-pretty text-white/90 sm:mt-6 sm:text-lg/8">
              Our systems weren&apos;t built on backtests alone. SGI was
              developed through years of live trading across FX and commodities
              markets. Many ideas were discarded. The systems that remain
              reflect what survived real liquidity shocks, changing regimes, and
              actual market conditions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6 lg:justify-start">
              <a
                href="/track-record"
                className="w-full rounded-md bg-surface px-4 py-3 text-sm font-semibold text-text shadow-xs hover:bg-section-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-3.5 sm:py-2.5"
              >
                View track record
              </a>
              <a
                href="/why-sgi"
                className="text-sm/6 font-semibold text-white hover:text-brand-soft"
              >
                Why SGI
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative z-10 mt-12 h-64 sm:mt-16 sm:h-80 lg:mt-8 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
              alt="Real-world testing and validation"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-surface/5 ring-1 ring-white/10 object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 57rem"
            />
          </div>
        </div>
      ),
    },
    {
      id: "investors",
      content: (
        <div className="relative isolate overflow-hidden bg-brand-on rounded-2xl sm:rounded-3xl px-4 pt-12 shadow-2xl sm:px-6 sm:pt-16 md:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl lg:text-4xl">
              Built for Passive Investors
            </h2>
            <p className="mt-4 text-base/7 text-pretty text-white/90 sm:mt-6 sm:text-lg/8">
              SGI-LINK is designed for accredited investors who want
              technology-powered returns without day-to-day decisions. A fully
              automated, hands-off portfolio that runs consistently whether
              markets are calm or noisy—governed by transparent methodology and
              unwavering discipline.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6 lg:justify-start">
              <a
                href="/contact"
                className="w-full rounded-md bg-surface px-4 py-3 text-sm font-semibold text-text shadow-xs hover:bg-section-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-3.5 sm:py-2.5"
              >
                Get started
              </a>
              <a
                href="/about"
                className="text-sm/6 font-semibold text-white hover:text-brand-soft"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative z-10 mt-12 h-64 sm:mt-16 sm:h-80 lg:mt-8 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
              alt="Passive investing approach"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-surface/5 ring-1 ring-white/10 object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 57rem"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section background="warm" padding="large" className="relative z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <ScrollReveal>
            <SectionTitle
              as="h2"
              className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl"
            >
              What Sets SGI-LINK Apart
            </SectionTitle>
          </ScrollReveal>
        </div>
        <StickyParallaxCards cards={cards} />
      </div>
    </Section>
  );
}
