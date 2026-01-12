// components/animations/ParallaxSection.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useParallaxScale } from "@/lib/animations";
import { useRef } from "react";
import type { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  scaleRange?: [number, number];
  style?: React.CSSProperties;
}

/**
 * ParallaxSection - Creates a parallax zoom effect on scroll
 * Useful for background images that scale as you scroll
 */
export function ParallaxSection({
  children,
  className = "",
  scaleRange = [1, 1.3],
  style,
}: ParallaxSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const scale = useParallaxScale(sectionRef, scaleRange);

  if (shouldReduceMotion) {
    return (
      <section ref={sectionRef} className={className} style={style}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={sectionRef}
      className={className}
      style={{
        ...style,
        scale: shouldReduceMotion ? 1 : scale,
      }}
    >
      {children}
    </motion.section>
  );
}

