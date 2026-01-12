// lib/animations/variants.ts
// Pre-defined animation variants for consistent animations across components

import { Variants } from "framer-motion";
import {
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  SPRING_CONFIG,
} from "./config";

/**
 * Fade in with upward motion (matches existing sgi-animate-fade-in-up)
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      delay: ANIMATION_DELAY.short,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Fade in with upward motion - delayed version (matches sgi-animate-fade-in-up-delay)
 */
export const fadeInUpDelayed: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slower,
      delay: ANIMATION_DELAY.long,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Simple fade in
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Fade in with scale
 */
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Section fade-in variants (matches sgi-section-fade-1/2/3)
 */
export const sectionFadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Section fade-in with delay 1 (matches sgi-section-fade-1)
 */
export const sectionFadeIn1: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      delay: 0.05,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Section fade-in with delay 2 (matches sgi-section-fade-2)
 */
export const sectionFadeIn2: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal + 0.05,
      delay: ANIMATION_DELAY.medium,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Section fade-in with delay 3 (matches sgi-section-fade-3)
 */
export const sectionFadeIn3: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      delay: ANIMATION_DELAY.longer,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Soft orbit animation (matches sgi-animate-soft-orbit)
 * Subtle ambient movement for background elements
 */
export const softOrbit: Variants = {
  animate: {
    x: [0, -4, 3],
    y: [0, 3, -3],
    scale: [1, 1.01, 1.005],
    opacity: [0.65, 0.7, 0.65],
    transition: {
      duration: 32,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

/**
 * Stagger container variant for sequential child animations
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * Stagger item variant (used with staggerContainer)
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: SPRING_CONFIG.standard,
  },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: SPRING_CONFIG.standard,
  },
};

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING_CONFIG.standard,
  },
};

