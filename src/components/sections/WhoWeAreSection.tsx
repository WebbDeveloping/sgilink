// components/sections/WhoWeAreSection.tsx
"use client";

import { Section } from "./";
import { ScrollReveal } from "@/components/animations";
import { Eyebrow, BodyText } from "@/components/typography";
import { motion, useReducedMotion } from "framer-motion";
import { sectionFadeIn1, sectionFadeIn2 } from "@/lib/animations";
import Image from "next/image";

export function WhoWeAreSection() {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    {
      label: "Trading Systems",
      value: "15+",
      description: "Proprietary algorithmic strategies",
    },
    {
      label: "Years Experience",
      value: "20+",
      description: "Combined team experience",
    },
    {
      label: "Markets",
      value: "FX & Commodities",
      description: "Systematic macro focus",
    },
    {
      label: "Investor Focus",
      value: "Accredited",
      description: "Sophisticated investors",
    },
  ];

  const images = [
    {
      src: "/images/1.png",
      alt: "Trading floor operations",
    },
    {
      src: "/images/2.png",
      alt: "Data analysis and research",
    },
    {
      src: "/images/3.png",
      alt: "Technology infrastructure",
    },
    {
      src: "/images/4.png",
      alt: "Investment strategy",
    },
  ];

  return (
    <Section background="surface" padding="standard" id="who-we-are">
      <div className="mx-auto max-w-7xl px-6 lg:max-w-7xl lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl">
            <Eyebrow className="text-brand">About us</Eyebrow>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-text sm:text-5xl">
              Introducing SGI-LINK
            </h2>
            <p className="mt-6 text-xl/8 text-balance text-text-muted">
              Built for accredited investors seeking consistent, data-driven
              returns. SGI-LINK offers proprietary algorithmic trading systems.
              You maintain control. We provide the technology.
            </p>
          </div>
        </ScrollReveal>

        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {/* Left column - Mission text */}
          <motion.div
            className="lg:pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={shouldReduceMotion ? undefined : sectionFadeIn1}
          >
            <h3 className="text-2xl font-semibold tracking-tight text-pretty text-text">
              Our mission
            </h3>
            <BodyText className="mt-6 text-base/7 text-text-muted">
              We don&apos;t manage mutual funds. We don&apos;t chase hype. And
              we don&apos;t believe slow and steady is the only path to building
              wealth. We work with investors who know what it means to create
              momentum—whether that&apos;s in a business, in markets, or in
              building long-term wealth through systematic, disciplined
              approaches.
            </BodyText>
            <BodyText className="mt-8 text-base/7 text-text-muted">
              SGI-LINK serves investors who recognize that exceptional returns
              require exceptional systems—backed by rigorous testing,
              transparent methodology, and unwavering discipline. Our
              proprietary trading systems are designed to compound performance,
              not just preserve it.
            </BodyText>
          </motion.div>

          {/* Right column - Image grid */}
          <motion.div
            className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={shouldReduceMotion ? undefined : sectionFadeIn2}
          >
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 transition-transform hover:scale-105 ${
                    index === 1 || index === 3 ? "-mt-8 lg:-mt-40" : ""
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={
                    shouldReduceMotion
                      ? undefined
                      : {
                          hidden: { opacity: 0, scale: 0.9 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 0.5,
                              delay: index * 0.1,
                              ease: "easeOut",
                            },
                          },
                        }
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={560}
                    height={560}
                    className="block size-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div
            className="max-lg:mt-16 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={shouldReduceMotion ? undefined : sectionFadeIn2}
          >
            <p className="text-base/7 font-semibold text-text-muted">
              The numbers
            </p>
            <hr className="mt-6 border-t border-border" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`flex flex-col gap-y-2 ${
                    index < stats.length - 2
                      ? "border-b border-dotted border-border pb-4"
                      : index === stats.length - 2
                      ? "max-sm:border-b max-sm:border-dotted max-sm:border-border max-sm:pb-4"
                      : ""
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={
                    shouldReduceMotion
                      ? undefined
                      : {
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.4,
                              delay: index * 0.1,
                              ease: "easeOut",
                            },
                          },
                        }
                  }
                >
                  <dt className="text-sm/6 text-text-muted">{stat.label}</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
                    {stat.value}
                  </dd>
                  {stat.description && (
                    <dd className="text-xs text-text-muted mt-1">
                      {stat.description}
                    </dd>
                  )}
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </section>
      </div>
    </Section>
  );
}
