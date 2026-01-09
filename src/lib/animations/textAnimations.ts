// lib/animations/textAnimations.ts
// Text animation variants for character-by-character reveal animations

import { Variants } from "framer-motion";
import {
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  STAGGER_DELAY,
} from "./config";

/**
 * Character reveal animation variant
 * Each character fades in and slides up slightly
 */
export const characterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

/**
 * Stagger text container variant
 * Animates children sequentially with a stagger delay
 */
export const staggerText: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY.short,
      delayChildren: ANIMATION_DELAY.short,
    },
  },
};

/**
 * Simple character reveal (for reduced motion)
 * Just fades in without blur or transform
 */
export const characterRevealSimple: Variants = {
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

