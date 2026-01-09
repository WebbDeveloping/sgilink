// components/sections/FundSnapshotSection.tsx
"use client";

import { ShieldCheck, Layers, Users2 } from "lucide-react";
import { IconStatCard, OverviewMetric } from "@/components/cards";
import { ContentBlock } from "./";
import { motion, useReducedMotion } from "framer-motion";
import {
  sectionFadeIn1,
  sectionFadeIn2,
  sectionFadeIn3,
} from "@/lib/animations";

export function FundSnapshotSection() {
  const pillars = [
    {
      title: "Systematic Execution",
      body: "Rules-based trading across FX and commodities markets. No discretionary decisions. No emotional trading. Pure systematic execution backed by institutional infrastructure.",
      icon: Layers,
      variant: sectionFadeIn1,
    },
    {
      title: "Risk-First Framework",
      body: "Conservative leverage and defined drawdown controls protect capital first. Every strategy prioritizes preservation through structured risk protocols—never leaving risk management as an afterthought.",
      icon: ShieldCheck,
      variant: sectionFadeIn2,
    },
    {
      title: "Aligned Interests",
      body: "SGI invests alongside clients under identical risk frameworks, fees, and reporting structures. When you succeed, we succeed—complete alignment of interests.",
      icon: Users2,
      variant: sectionFadeIn3,
    },
  ];

  const metrics = [
    { label: "Markets", value: "Foreign Exchange & Commodities" },
    { label: "Approach", value: "Systematic Only" },
    { label: "Target Role", value: "Systematic Diversifier" },
  ];

  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative z-20 bg-section-warm py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ContentBlock
          eyebrow="Fund Overview"
          title="Institutional Systems. Transparent Access. Complete Control."
          description={
            <>
              SGI-LINK provides direct access to SGI&apos;s proprietary trading
              systems through independently managed accounts. Built for
              sophisticated investors who demand institutional-caliber execution
              without the institutional barriers.{" "}
              <a
                href="/strategy"
                className="font-semibold text-brand hover:text-brand/80 underline-offset-2 hover:underline"
              >
                Explore the full strategy
              </a>
              .
            </>
          }
          align="center"
          maxWidth="md"
          className="[&_h2]:text-4xl [&_h2]:sm:text-5xl [&_p]:text-lg/8"
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={shouldReduceMotion ? undefined : pillar.variant}
            >
              <IconStatCard
                icon={pillar.icon}
                title={pillar.title}
                body={pillar.body}
              />
            </motion.div>
          ))}
        </div>

        {/* Metrics row */}
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid gap-6 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border-card bg-surface/50 p-4 text-center"
              >
                <OverviewMetric label={metric.label} value={metric.value} />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
