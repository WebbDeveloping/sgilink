// components/sections/HomeHero.tsx
"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { PrimaryLinkButton, SecondaryLinkButton } from "@/components/buttons";
import { SmallMuted } from "@/components/typography";
import { FadeInUp } from "@/components/animations";
import { useParallaxScale, softOrbit } from "@/lib/animations";

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Use framer-motion's scroll-based scale animation
  const scale = useParallaxScale(heroRef, [1, 1.3]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-surface h-[70vh] sm:h-[85vh] lg:h-dvh"
      style={{ position: "sticky", top: 0 }}
    >
      {/* Background image with parallax zoom */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/u3aEpDa9c0ZGBqscXXPDHuJv8.png')",
          willChange: "transform",
          transformOrigin: "center center",
          scale: shouldReduceMotion ? 1 : scale,
        }}
      />

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
          <FadeInUp
            delay="long"
            className="mt-6 flex flex-col items-center justify-center gap-2 px-4 sm:mt-8 sm:flex-row sm:px-0"
          >
            <ShieldCheck className="h-4 w-4 shrink-0 text-brand" />
            <SmallMuted className="text-center sm:text-left">
              For qualified and accredited investors only. This is not an offer
              or solicitation to buy or sell any security.
            </SmallMuted>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
