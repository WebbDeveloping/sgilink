// components/sections/HomeHero.tsx
"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { PrimaryLinkButton, SecondaryLinkButton } from "@/components/buttons";
import { SmallMuted } from "@/components/typography";
import { FadeInUp } from "@/components/animations";
import { softOrbit } from "@/lib/animations";

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-bg h-[70vh] sm:h-[85vh] lg:h-dvh"
      style={{ position: "sticky", top: 0 }}
    >
      {/* SVG Grid Pattern Background */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-border"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-bg">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* Gradient Blob Overlay */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-1108/632 w-277 bg-linear-to-r from-brand-soft to-brand opacity-20"
        />
      </div>

      {/* Subtle background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(244,242,236,0.4),_transparent_70%)]" />

      {/* Soft blue ambient glow */}
      {!shouldReduceMotion ? (
        <motion.div
          className="pointer-events-none absolute -right-32 -top-32 z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(141,183,232,0.25),_transparent_70%)]"
          animate="animate"
          variants={softOrbit}
        />
      ) : (
        <div className="pointer-events-none absolute -right-32 -top-32 z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(141,183,232,0.25),_transparent_70%)]" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInUp
            as="h1"
            className="text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl lg:text-7xl"
          >
            Systematic Trading. Institutional Performance. Built for You.
          </FadeInUp>
          <FadeInUp
            as="p"
            className="mx-auto mt-6 max-w-3xl text-base/7 font-medium text-pretty text-text-muted sm:mt-8 sm:text-lg/8 lg:text-xl/8"
          >
            Access the same algorithmic strategies that power institutional
            portfolios—designed for sophisticated investors seeking consistent,
            data-driven returns.
          </FadeInUp>
          <FadeInUp
            delay="long"
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6"
          >
            <PrimaryLinkButton
              href="/contact"
              className="w-full px-8 py-3 text-base sm:w-auto"
            >
              <FileText className="mr-2 h-5 w-5 shrink-0" />
              Request Fund Deck
            </PrimaryLinkButton>
            <SecondaryLinkButton
              href="/strategy"
              className="w-full px-8 py-3 text-base sm:w-auto"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
            </SecondaryLinkButton>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
