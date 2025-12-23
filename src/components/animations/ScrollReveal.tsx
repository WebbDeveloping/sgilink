// components/animations/ScrollReveal.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useScrollReveal } from "@/lib/animations";
import { sectionFadeIn } from "@/lib/animations";
import type { ReactNode, ElementType } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  threshold?: number;
  variant?: "fadeIn" | "fadeInUp";
}

/**
 * ScrollReveal - Reveals content when it scrolls into view
 * Matches the behavior of sgi-scroll-fade-in CSS class
 */
export function ScrollReveal({
  children,
  className = "",
  as = "div",
  threshold = 0.1,
  variant = "fadeInUp",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, isInView } = useScrollReveal(threshold);

  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component ref={ref} className={className}>
        {children}
      </Component>
    );
  }

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;
  const variants = variant === "fadeInUp" ? sectionFadeIn : sectionFadeIn;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

