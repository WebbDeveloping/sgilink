// lib/animations/config.ts
// Animation configuration and constants for consistent animations across the project

/**
 * Standard animation durations (in seconds)
 */
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  slower: 1.2,
} as const;

/**
 * Standard animation delays (in seconds)
 */
export const ANIMATION_DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.16,
  long: 0.22,
  longer: 0.3,
} as const;

/**
 * Easing functions for smooth animations
 * Using cubic-bezier values that match the existing CSS animations
 */
export const ANIMATION_EASING = {
  // Smooth ease-out (matches existing CSS: cubic-bezier(0.16, 1, 0.3, 1))
  easeOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Standard ease-in-out
  easeInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  // Sharp ease-out
  easeOutSharp: [0.4, 0, 1, 1] as [number, number, number, number],
  // Smooth ease-in
  easeIn: [0.4, 0, 1, 1] as [number, number, number, number],
} as const;

/**
 * Spring animation configurations
 * Provides natural, physics-based animations
 */
export const SPRING_CONFIG = {
  // Gentle spring (for subtle animations)
  gentle: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  },
  // Standard spring (for most animations)
  standard: {
    type: "spring" as const,
    stiffness: 400,
    damping: 40,
    mass: 0.8,
  },
  // Bouncy spring (for playful animations)
  bouncy: {
    type: "spring" as const,
    stiffness: 500,
    damping: 25,
    mass: 0.8,
  },
  // Stiff spring (for quick, snappy animations)
  stiff: {
    type: "spring" as const,
    stiffness: 600,
    damping: 50,
    mass: 0.8,
  },
} as const;

/**
 * Standard transition configurations
 */
export const TRANSITIONS = {
  // Smooth fade transitions
  fade: {
    duration: ANIMATION_DURATION.normal,
    ease: ANIMATION_EASING.easeOut,
  },
  // Quick fade for micro-interactions
  fadeFast: {
    duration: ANIMATION_DURATION.fast,
    ease: ANIMATION_EASING.easeOut,
  },
  // Slow fade for hero elements
  fadeSlow: {
    duration: ANIMATION_DURATION.slow,
    ease: ANIMATION_EASING.easeOut,
  },
  // Spring-based transitions
  spring: SPRING_CONFIG.standard,
  springGentle: SPRING_CONFIG.gentle,
  springBouncy: SPRING_CONFIG.bouncy,
} as const;

/**
 * Stagger delays for sequential animations
 */
export const STAGGER_DELAY = {
  short: 0.05,
  medium: 0.1,
  long: 0.15,
} as const;

