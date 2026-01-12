# Framer Motion Setup Plan

## Overview
This document outlines a comprehensive plan to ensure the project is properly set up to use framer-motion throughout. Currently, framer-motion is installed but only used in one component (`StickyParallaxCards.tsx`). This plan will establish a solid foundation for consistent, performant animations across the entire project.

---

## Current State Assessment

### ✅ What's Already Working
- **framer-motion v12.23.26** is installed
- Basic usage in `StickyParallaxCards.tsx` with `motion` and `useReducedMotion`
- Next.js 16 with React 19 (compatible with framer-motion)

### ⚠️ Areas Needing Improvement
1. **CSS Animations** - Many animations are CSS-based in `globals.css`:
   - `sgi-animate-fade-in-up` (hero fade-in)
   - `sgi-animate-fade-in-up-delay` (secondary hero fade-in)
   - `sgi-animate-soft-orbit` (ambient glow)
   - `sgi-section-fade-1`, `sgi-section-fade-2`, `sgi-section-fade-3` (section animations)
   - `sgi-scroll-fade-in` (scroll-triggered animations)

2. **Manual Scroll Handlers** - Components using manual scroll listeners:
   - `HomeHero.tsx` - manual scroll-based parallax zoom
   - `CoreServicesSection.tsx` - manual scroll tracking
   - Could benefit from framer-motion's `useScroll`, `useTransform`, `useMotionValue`

3. **Inconsistent Reduced Motion Handling**:
   - Some components manually check `prefers-reduced-motion`
   - Should use framer-motion's `useReducedMotion` consistently

4. **No Animation Utilities/Presets**:
   - No centralized animation configuration
   - No reusable animation variants
   - No consistent easing/timing functions

---

## Implementation Plan

### Phase 1: Foundation Setup

#### 1.1 Create Animation Configuration File
**File:** `src/lib/animations/config.ts`
- Define animation presets (easing curves, durations, delays)
- Create reusable animation variants
- Export animation constants for consistency

**Key Exports:**
- `ANIMATION_DURATION` - Standard durations (fast, normal, slow)
- `ANIMATION_EASING` - Easing functions (easeInOut, easeOut, etc.)
- `ANIMATION_DELAYS` - Standard delay values
- `SPRING_CONFIG` - Spring animation configurations

#### 1.2 Create Animation Variants File
**File:** `src/lib/animations/variants.ts`
- Pre-defined animation variants for common patterns:
  - `fadeInUp` - Fade in with upward motion
  - `fadeIn` - Simple fade in
  - `scaleIn` - Scale from small to full
  - `slideIn` - Slide in from sides
  - `staggerContainer` - Container for staggered children
  - `staggerItem` - Individual item in staggered animation

#### 1.3 Create Reusable Animation Components
**File:** `src/components/animations/` directory

**Components to create:**
- `FadeInUp.tsx` - Reusable fade-in-up component
- `FadeIn.tsx` - Simple fade-in wrapper
- `StaggerContainer.tsx` - Container for staggered animations
- `ScrollReveal.tsx` - Scroll-triggered reveal component
- `ParallaxSection.tsx` - Parallax scroll effect wrapper

#### 1.4 Create Animation Hooks
**File:** `src/lib/animations/hooks.ts`
- Custom hooks for common animation patterns:
  - `useScrollReveal()` - Hook for scroll-triggered animations
  - `useParallax()` - Hook for parallax effects
  - `useStaggerAnimation()` - Hook for staggered animations

---

### Phase 2: Migration & Integration

#### 2.1 Migrate CSS Animations to Framer Motion
**Priority Order:**
1. **Hero Animations** (`HomeHero.tsx`)
   - Replace `sgi-animate-fade-in-up` with framer-motion
   - Replace `sgi-animate-fade-in-up-delay` with framer-motion
   - Replace `sgi-animate-soft-orbit` with framer-motion

2. **Section Animations**
   - Replace `sgi-section-fade-1/2/3` classes with framer-motion variants
   - Update all section components to use motion components

3. **Scroll-triggered Animations**
   - Replace `sgi-scroll-fade-in` CSS class with `ScrollReveal` component
   - Use `useScroll` and `useTransform` for scroll-based animations

#### 2.2 Replace Manual Scroll Handlers
**Components to Update:**
1. **HomeHero.tsx**
   - Replace manual scroll listener with `useScroll` and `useTransform`
   - Use `motion.div` with `style` prop for parallax zoom effect

2. **CoreServicesSection.tsx**
   - Evaluate if scroll tracking can use framer-motion's scroll features
   - Consider using `useInView` for intersection-based animations

#### 2.3 Standardize Reduced Motion Handling
- Ensure all components use `useReducedMotion()` hook
- Create a wrapper component that automatically respects reduced motion
- Update all animation variants to check reduced motion preference

---

### Phase 3: Advanced Features

#### 3.1 Set Up Scroll-Based Animations
- Use `useScroll` hook for scroll progress tracking
- Use `useTransform` for mapping scroll progress to animation values
- Create reusable scroll animation patterns

#### 3.2 Implement Page Transitions
**File:** `src/components/animations/PageTransition.tsx`
- Use `AnimatePresence` for page transitions
- Create smooth transitions between routes

#### 3.3 Add Gesture Support (if needed)
- Use `useDrag`, `useHover`, `useTap` for interactive elements
- Add hover animations to buttons and cards

---

### Phase 4: Optimization & Best Practices

#### 4.1 Performance Optimization
- Use `will-change` CSS property strategically
- Implement `layoutId` for shared element transitions
- Use `layout` prop for layout animations
- Consider `useMotionValue` for performance-critical animations

#### 4.2 TypeScript Support
- Create proper types for animation variants
- Type all animation props correctly
- Export types for reuse

#### 4.3 Documentation
- Document animation patterns in code comments
- Create examples in a demo page or Storybook
- Update `DESIGN_SYSTEM.md` with animation guidelines

#### 4.4 Testing
- Test animations with reduced motion enabled
- Test on different devices/browsers
- Verify performance on low-end devices
- Test scroll animations at different scroll speeds

---

## File Structure

```
src/
├── lib/
│   └── animations/
│       ├── config.ts          # Animation configuration & constants
│       ├── variants.ts         # Pre-defined animation variants
│       └── hooks.ts           # Custom animation hooks
├── components/
│   └── animations/
│       ├── FadeInUp.tsx
│       ├── FadeIn.tsx
│       ├── StaggerContainer.tsx
│       ├── ScrollReveal.tsx
│       ├── ParallaxSection.tsx
│       └── PageTransition.tsx
└── app/
    └── globals.css            # Keep for non-animation CSS, remove animation classes
```

---

## Migration Checklist

### Foundation
- [ ] Create `src/lib/animations/config.ts`
- [ ] Create `src/lib/animations/variants.ts`
- [ ] Create `src/lib/animations/hooks.ts`
- [ ] Create animation component directory structure

### Components
- [ ] Create `FadeInUp.tsx` component
- [ ] Create `FadeIn.tsx` component
- [ ] Create `StaggerContainer.tsx` component
- [ ] Create `ScrollReveal.tsx` component
- [ ] Create `ParallaxSection.tsx` component
- [ ] Create `PageTransition.tsx` component (optional)

### Migration
- [ ] Migrate `HomeHero.tsx` animations
- [ ] Migrate section fade-in animations
- [ ] Replace manual scroll handlers in `HomeHero.tsx`
- [ ] Update `StickyParallaxCards.tsx` to use shared variants (if applicable)
- [ ] Update all section components to use framer-motion
- [ ] Remove CSS animation classes from `globals.css` (keep keyframes for fallback if needed)

### Standardization
- [ ] Ensure all components use `useReducedMotion()`
- [ ] Create reduced motion wrapper component
- [ ] Update animation variants to respect reduced motion

### Documentation
- [ ] Document animation patterns
- [ ] Update `DESIGN_SYSTEM.md`
- [ ] Add code examples/comments

### Testing
- [ ] Test with reduced motion enabled
- [ ] Test scroll animations
- [ ] Performance testing
- [ ] Cross-browser testing

---

## Best Practices

### 1. Always Use `useReducedMotion()`
```tsx
const shouldReduceMotion = useReducedMotion();
// Conditionally apply animations based on preference
```

### 2. Use Variants for Consistency
```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### 3. Prefer `useScroll` Over Manual Listeners
```tsx
const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
```

### 4. Use `AnimatePresence` for Mount/Unmount
```tsx
<AnimatePresence mode="wait">
  {isVisible && <motion.div>...</motion.div>}
</AnimatePresence>
```

### 5. Optimize with `layout` Prop
```tsx
<motion.div layout> {/* Enables layout animations */}
```

### 6. Use Spring Animations for Natural Feel
```tsx
transition={{ type: "spring", stiffness: 400, damping: 40 }}
```

---

## Next Steps

1. **Start with Phase 1** - Set up the foundation (config, variants, hooks)
2. **Create reusable components** - Build the animation component library
3. **Migrate incrementally** - Start with one component, test, then continue
4. **Remove CSS animations** - Once migrated, clean up CSS animation classes
5. **Document and test** - Ensure everything works and is well-documented

---

## Notes

- Keep CSS animations as fallback initially, remove after migration is complete
- Consider creating a demo page to showcase all animation patterns
- Monitor bundle size impact (framer-motion is already included)
- Ensure animations enhance UX, not distract from content

