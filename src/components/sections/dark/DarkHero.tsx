"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  staggerText,
  characterReveal,
  characterRevealSimple,
} from "@/lib/animations";

export function DarkHero() {
  const shouldReduceMotion = useReducedMotion();
  const characterVariant = shouldReduceMotion
    ? characterRevealSimple
    : characterReveal;

  // Split heading into words for proper wrapping
  const headingWords = ["The", "Future", "of", "Digital", "Trading"];

  // Split each word into characters
  const splitIntoCharacters = (word: string) => {
    return word.split("").map((char, index) => ({
      char: char === " " ? "\u00A0" : char, // Non-breaking space
      key: `${word}-${index}`,
    }));
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-bg h-[70vh] sm:h-[65vh]"
    >
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          src="https://video.gumlet.io/67b0aaac8d1f0bda6de7b963/67f16bcae6d1a5d6bccbf3b4/download.mp4"
          loop
          preload="auto"
          playsInline
          autoPlay
          muted
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-label="Trading platform background video"
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-18 sm:h-48 lg:h-64 -z-10 bg-gradient-to-b from-transparent to-black" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-40 flex items-center justify-center min-h-full">
        <div className="mx-auto max-w-4xl text-center w-full">
          {/* Powered by MetaTrader 5 Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-border-card bg-card/50 backdrop-blur-sm px-4 py-2 mb-6 sm:mb-8"
          >
            <p className="text-sm font-medium text-text-muted">Powered by</p>
            {/* <div className="relative w-5 h-5 flex items-center justify-center"></div> */}
            <p className="text-sm font-medium text-text-muted">SGI Link</p>
          </motion.div>

          {/* Animated Heading */}
          <motion.h1
            variants={staggerText}
            initial="hidden"
            animate="visible"
            className="text-4xl font-medium tracking-tight text-balance text-text sm:text-5xl lg:text-6xl xl:text-7xl leading-[115%]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {headingWords.map((word, wordIndex) => (
              <span key={word} className="whitespace-nowrap inline-block">
                {splitIntoCharacters(word).map(({ char, key }) => (
                  <motion.span
                    key={key}
                    variants={characterVariant}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < headingWords.length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-3xl text-sm leading-[160%] text-center text-text sm:mt-8 sm:text-base lg:text-lg"
          >
            Experience revolutionary AI-powered trading with SGI Link. Secure,
            intelligent, and profitable digital asset management.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 sm:mt-10"
          >
            <Link
              href="https://clients.jc-securities.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-base font-semibold leading-snug text-brand-on backdrop-blur-md shadow-md hover:bg-brand-dark active:bg-interactive-active transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand whitespace-nowrap min-h-[44px] sm:min-h-0 sm:py-2.5"
            >
              TRADE NOW
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
