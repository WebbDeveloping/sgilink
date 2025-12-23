// components/sections/ConsultationSection.tsx
"use client";

import Image from "next/image";
import { Section } from "./Section";
import { PrimaryLinkButton } from "@/components/buttons";

export function ConsultationSection() {
  return (
    <Section background="bg" padding="large" className="relative z-30 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-brand-on px-4 pt-12 shadow-2xl rounded-3xl sm:px-6 sm:pt-16 md:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#sgi-radial-gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="sgi-radial-gradient">
                <stop stopColor="#3a5e7b" />
                <stop offset={1} stopColor="#8db7e8" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl lg:text-4xl">
              Ready to explore a different approach?
            </h2>
            <p className="mt-4 text-base/7 text-pretty text-brand-soft sm:mt-6 sm:text-lg sm:leading-8">
              Our strategies aren&apos;t for everyone. We believe in personal
              conversations to ensure SGI-LINK aligns with your investment goals
              and risk tolerance. Schedule a private consultation to discuss how
              our systematic approach can fit into your portfolio.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6 lg:justify-start">
              <PrimaryLinkButton
                href="/contact"
                className="w-full bg-surface text-brand hover:bg-chip-blue sm:w-auto"
              >
                Schedule Your Consultation
              </PrimaryLinkButton>
              <a
                href="/fund-deck"
                className="text-sm font-semibold leading-6 text-white hover:text-brand-soft"
              >
                Request Fund Documentation
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-12 h-64 sm:mt-16 sm:h-80 lg:mt-8">
            <Image
              alt="Trading analytics and data visualization dashboard"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1824&h=1080&fit=crop"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 57rem"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
