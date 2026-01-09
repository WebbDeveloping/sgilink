"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function ContentHero() {
  const keyPoints = [
    "Cloud-based software platform for trading fund administration",
    "Serves Fund Managers/Algorithmic Traders and Investors",
    "Not a financial institution, broker, or custodian",
    "Non-custodial model - integrates with third-party brokerages",
    "Enhances investor safety and reduces fiduciary risks",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-bg py-24 sm:py-32 lg:py-40">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/80" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle"
          >
            SGI Link Trading Administration Software Platform
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            SGI Link Trading Administration Software Platform
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-text-muted sm:mt-8 sm:text-lg"
          >
            SGI Link is a cloud-based software platform that facilitates the administration of trading funds in foreign exchange (FX), commodities, and digital assets.
          </motion.p>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl space-y-3 text-left sm:mt-10"
          >
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                  {point}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-12"
          >
            <Link
              href="https://clients.jc-securities.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[80px] bg-[rgb(36,127,255)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[rgb(36,127,255)]/90"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
