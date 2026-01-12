# Design System Documentation

This document outlines the design system standards for the SGI-LINK website.

## Color System

### Background Colors
- `bg` - Base background color (`#fcfcfd` light / `#020617` dark)
- `bg-surface` - Surface/white background (`#ffffff` light / `#020617` dark)
- `bg-section-blue` - Blue section background (`#e9f2ff` light / `#020617` dark)
- `bg-section-warm` - Warm section background (`#f4f2ec` light / `#020617` dark)
- `bg-brand-on` - Dark brand background for contrast sections (`#10243a` light / `#f9fafb` dark)

### Text Colors
- `text-text` - Primary text color (`#1f2933` light / `#e5e7eb` dark)
- `text-text-muted` - Muted/secondary text color (`#6b7280` light / `#9ca3af` dark)

### Brand Colors
- `text-brand` - Primary brand color (`#3a5e7b` light / `#8db7e8` dark)
- `text-brand-soft` - Soft brand color (`#8db7e8` light / `#3a5e7b` dark)
- `text-brand-dark` - Dark brand color (`#324b63` light / `#1f2937` dark)
- `text-brand-on` - Brand text on dark backgrounds (`#10243a` light / `#f9fafb` dark)
- `text-brand-on-soft` - Soft brand text on dark (`#1f3b57` light / `#e5e7eb` dark)
- `text-brand-chip` - Chip/badge brand color (`#355477` light / `#1e293b` dark)
- `text-brand-label` - Label brand color (`#5c7aa4` light / `#9ca3af` dark)
- `text-brand-body-alt` - Alternative brand body text (`#23405f` light / `#cbd5f5` dark)

### Border Colors
- `border-border` - Default border (`#ece7dc` light / `#1f2937` dark)
- `border-border-strong` - Strong border (`#ddd2bd` light / `#374151` dark)
- `border-border-blue` - Blue border (`#d5e3f6` light / `#1d3557` dark)
- `border-border-card` - Card border (`#e2e8f0` light / `#111827` dark)

### Chip/Badge Background Colors
- `bg-chip-warm` - Warm chip background (`#f7f5f0` light / `#111827` dark)
- `bg-chip-blue` - Blue chip background (`#e2eeff` light / `#0b1120` dark)

### Accent Colors
- `accent-warm` - Warm accent (`#e4d7bb` light / `#43311f` dark)

## Typography Scale

### Headings
- **SectionTitle** - Primary section headings
  - Default: `text-2xl font-semibold text-text sm:text-3xl`
  - Variants: Can be `h1`, `h2`, or `h3` via `as` prop
  - Usage: All major section headings

### Body Text
- **BodyText** - Standard paragraph text
  - Default: `text-sm text-text leading-relaxed sm:text-base`
  - Usage: All body paragraphs

### Labels & Small Text
- **Eyebrow** - Section labels/eyebrows
  - Default: `text-xs font-semibold uppercase tracking-[0.18em] text-text-muted`
  - Usage: Section labels above titles

- **SmallMuted** - Small muted text
  - Usage: Disclaimers, fine print, secondary information

## Spacing System

### Section Padding
- **Standard sections**: `py-24 sm:py-32`
- **Hero sections**: `py-24 sm:py-32 lg:py-40`
- **Compact sections**: `py-16 sm:py-20` (when needed)

### Container Widths
- **Main container**: `max-w-7xl px-6 lg:px-8`
- **Content blocks**:
  - Text content (centered): `max-w-3xl`
  - Wider content: `max-w-4xl` or `max-w-5xl`
  - Grid layouts: `max-w-5xl` or `max-w-6xl`

### Grid Gaps
- **Standard grid**: `gap-x-8 gap-y-10 lg:gap-y-16`
- **Tighter grids**: `gap-x-6 gap-y-10`
- **Compact grids**: `gap-4` or `gap-6`

### Horizontal Padding
- **Container padding**: `px-6 lg:px-8`

## Component Patterns

### Section Structure
All sections should use the `Section` component with appropriate props:
```tsx
<Section background="surface" padding="standard">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Content */}
  </div>
</Section>
```

### Z-Index Layering (Home Page)
**Important**: Sections on the home page that appear after `ValuePropositionsCards` must have a minimum z-index of `z-20` to prevent parallax cards from appearing above them.

**Z-Index Hierarchy:**
- `ValuePropositionsCards`: `z-30` (section wrapper with sticky parallax cards)
  - Internal sticky cards use z-index: 10, 20, 30
- **Sections after ValuePropositionsCards**: Minimum `z-20` required
  - Use `className="relative z-20"` on the `Section` component
  - Example: `StrategySection`, `FaqTeaserSection`, etc.

**Rule**: Any section that comes after `ValuePropositionsCards` in the home page DOM order must include `className="relative z-20"` to establish proper stacking context.

```tsx
// ✅ Correct - section after ValuePropositionsCards
<Section background="warm" padding="standard" className="relative z-20">
  {/* Content */}
</Section>

// ❌ Incorrect - missing z-index, parallax cards may appear above
<Section background="warm" padding="standard">
  {/* Content */}
</Section>
```

### Text Blocks
Use `ContentBlock` for standardized text blocks:
```tsx
<ContentBlock
  eyebrow="Label"
  title="Section Title"
  description="Section description"
  align="center"
  maxWidth="md"
>
  {/* Optional children */}
</ContentBlock>
```

### Grid Patterns
- Two-column: `grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-16`
- Three-column: `grid gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16`
- Responsive: Use appropriate breakpoints (sm, md, lg)

## Animation Classes

### Hero Animations
- `sgi-animate-fade-in-up` - Primary hero fade-in (0.9s, 0.1s delay)
- `sgi-animate-fade-in-up-delay` - Secondary hero fade-in (1s, 0.22s delay)
- `sgi-animate-soft-orbit` - Subtle ambient glow movement (32s infinite)

### Section Animations
- `sgi-section-fade-1` - Primary section element fade-in (0.8s, 0.05s delay)
- `sgi-section-fade-2` - Secondary section element fade-in (0.85s, 0.16s delay)
- `sgi-section-fade-3` - Tertiary section element fade-in (0.9s, 0.26s delay)

All animations respect `prefers-reduced-motion` and are disabled when motion is reduced.

## Button Styles

### Primary Link Button
- Use `PrimaryLinkButton` for main CTAs
- Styled with brand colors and hover states

### Secondary Link Button
- Use `SecondaryLinkButton` for secondary actions
- Outlined or subtle styling

## Card Styles

### Standard Card
- `rounded-xl` - Rounded corners
- `ring-1 ring-border-card` - Border
- `shadow-xl` - Shadow
- `p-5` or `p-6` - Padding

### Icon Cards
- Use `IconStatCard` component for icon-based cards
- Consistent icon sizing and spacing

## Best Practices

### Color Usage
- ✅ Always use design tokens (`text-text`, `bg-surface`, etc.)
- ❌ Never use hardcoded colors (`text-slate-900`, `bg-white`, etc.)

### Typography
- ✅ Use typography components (`SectionTitle`, `BodyText`, `Eyebrow`)
- ❌ Avoid hardcoded heading/paragraph classes

### Spacing
- ✅ Use consistent spacing values from the spacing system
- ✅ Maintain responsive breakpoints (sm, lg)
- ❌ Avoid arbitrary spacing values

### Components
- ✅ Use standardized components (`Section`, `ContentBlock`)
- ✅ Follow established patterns for consistency
- ❌ Avoid custom section wrappers that duplicate functionality

### Accessibility
- ✅ Ensure sufficient color contrast
- ✅ Use semantic HTML
- ✅ Provide proper ARIA labels when needed
- ✅ Support keyboard navigation

### Responsive Design
- ✅ Mobile-first approach
- ✅ Test at breakpoints: mobile (default), sm (640px), lg (1024px)
- ✅ Use responsive typography and spacing

