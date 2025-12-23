// components/sections/BriefHero.tsx
"use client";

import { ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { Eyebrow, BodyText, SmallMuted } from "@/components/typography";
import { PrimaryButton, SecondaryLinkButton } from "@/components/buttons";
import { OverviewMetric } from "@/components/cards";
import { FadeInUp } from "@/components/animations";
import { motion, useReducedMotion } from "framer-motion";
import { softOrbit } from "@/lib/animations";

export function BriefHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg">
      {/* Soft sunlight / sand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,242,236,0.9),_transparent_65%)]" />

      {/* Soft blue ambient glow – gently floating */}
      {!shouldReduceMotion ? (
        <motion.div
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(141,183,232,0.35),_transparent_70%)]"
          animate="animate"
          variants={softOrbit}
        />
      ) : (
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(141,183,232,0.35),_transparent_70%)]" />
      )}

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 py-24 sm:px-6 sm:py-28 lg:flex-row lg:items-center lg:gap-20">
        {/* Left copy */}
        <FadeInUp className="max-w-xl space-y-6">
          <Eyebrow>SGI-LINK · Private Algorithmic Fund</Eyebrow>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
            Systematic returns.
            <span className="relative ml-2 inline-block">
              <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-brand-soft/30" />
              <span className="relative">Simple story.</span>
            </span>
          </h1>

          <BodyText className="text-text-muted">
            SGI-LINK allocates capital to a single, disciplined engine of
            proprietary FX and commodities strategies — built to compound calmly
            in the background of a diversified portfolio.
          </BodyText>

          <div className="flex flex-wrap items-center gap-3">
            <PrimaryButton>
              <FileText className="mr-2 h-4 w-4 shrink-0" />
              <span>Request fund deck</span>
            </PrimaryButton>

            <SecondaryLinkButton href="/strategy" className="px-5">
              <span>View strategy overview</span>
              <ArrowRight className="ml-1.5 h-4 w-4 shrink-0" />
            </SecondaryLinkButton>
          </div>

          <div className="flex max-w-md items-start gap-2">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
            <SmallMuted>
              For qualified and accredited investors only. This is not an offer
              or solicitation to buy or sell any security.
            </SmallMuted>
          </div>
        </FadeInUp>

        {/* Right: snapshot card */}
        <FadeInUp delay="long" className="flex-1">
          <div className="mx-auto max-w-md rounded-3xl border border-border-card bg-surface/80 p-6 shadow-xl shadow-brand-on/5 backdrop-blur-sm">
            <Eyebrow className="mb-4">Fund at a glance</Eyebrow>

            <dl className="grid grid-cols-2 gap-4 text-sm">
              <OverviewMetric label="Core focus" value="FX &amp; Commodities" />
              <OverviewMetric
                label="Objective"
                value="Consistent, tech-driven returns"
              />
              <OverviewMetric
                label="Approach"
                value="Rules-based, fully automated"
              />
              <OverviewMetric
                label="Philosophy"
                value="Risk first. Rules always."
              />
            </dl>

            <SmallMuted className="mt-4 text-text-muted/80">
              Past performance does not guarantee future results. All investing
              involves risk, including the potential loss of principal.
            </SmallMuted>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

