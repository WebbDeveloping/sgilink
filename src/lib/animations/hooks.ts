// lib/animations/hooks.ts
// Custom hooks for common animation patterns

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Hook for scroll-triggered reveal animations
 * Returns a ref to attach to the element and a boolean indicating if it's in view
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  return { ref, isInView };
}

/**
 * Hook for parallax scroll effects
 * Returns scroll progress and transformed values
 */
export function useParallax(
  elementRef: React.RefObject<HTMLElement | null>,
  options?: {
    offset?: ["start end", "end start"];
    clamp?: boolean;
  }
) {
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: options?.offset || ["start end", "end start"],
  });

  return {
    scrollYProgress,
    // Helper to create transformed values
    createTransform: (
      inputRange: [number, number],
      outputRange: [number, number],
      clamp = options?.clamp ?? true
    ) => {
      return useTransform(scrollYProgress, inputRange, outputRange, {
        clamp,
      });
    },
  };
}

/**
 * Hook for scroll-based scale animation (like parallax zoom)
 * Useful for background images that scale on scroll
 */
export function useParallaxScale(
  elementRef: React.RefObject<HTMLElement | null>,
  scaleRange: [number, number] = [1, 1.3]
) {
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange, {
    clamp: true,
  });

  return scale;
}

/**
 * Hook for scroll-based opacity animation
 */
export function useParallaxOpacity(
  elementRef: React.RefObject<HTMLElement | null>,
  opacityRange: [number, number] = [0, 1]
) {
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange, {
    clamp: true,
  });

  return opacity;
}

/**
 * Hook for scroll-based Y translation (parallax movement)
 */
export function useParallaxY(
  elementRef: React.RefObject<HTMLElement | null>,
  yRange: [number, number] = [0, -50]
) {
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], yRange, {
    clamp: true,
  });

  return y;
}

