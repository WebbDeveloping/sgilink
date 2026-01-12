// components/animations/StaggerItem.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import type { ReactNode, ElementType } from "react";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * StaggerItem - Individual item in a staggered animation
 * Should be used as a child of StaggerContainer
 */
export function StaggerItem({
  children,
  className = "",
  as = "div",
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent variants={staggerItem} className={className}>
      {children}
    </MotionComponent>
  );
}

