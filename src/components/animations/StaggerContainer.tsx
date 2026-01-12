// components/animations/StaggerContainer.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import type { ReactNode, ElementType } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  staggerDelay?: number;
}

/**
 * StaggerContainer - Container for staggered child animations
 * Children should use staggerItem variant or be wrapped in StaggerItem
 */
export function StaggerContainer({
  children,
  className = "",
  as = "div",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;
  const variants = {
    ...staggerContainer,
    visible: {
      ...staggerContainer.visible,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

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

