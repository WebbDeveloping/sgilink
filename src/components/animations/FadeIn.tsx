// components/animations/FadeIn.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import type { ReactNode, ElementType } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * FadeIn component - Simple fade in animation
 */
export function FadeIn({ children, className = "", as = "div" }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  const MotionComponent = motion[
    as as keyof typeof motion
  ] as typeof motion.div;

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
