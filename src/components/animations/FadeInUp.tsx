// components/animations/FadeInUp.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, fadeInUpDelayed } from "@/lib/animations";
import type { ReactNode, ElementType } from "react";

interface FadeInUpProps {
  children: ReactNode;
  delay?: "none" | "short" | "long";
  className?: string;
  as?: ElementType;
}

/**
 * FadeInUp component - Fades in with upward motion
 * Matches the behavior of sgi-animate-fade-in-up CSS class
 */
export function FadeInUp({
  children,
  delay = "none",
  className = "",
  as = "div",
}: FadeInUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = delay === "long" ? fadeInUpDelayed : fadeInUp;

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

