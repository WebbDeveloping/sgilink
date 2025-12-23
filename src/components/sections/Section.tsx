import { forwardRef, type ReactNode } from "react";

type Background = "surface" | "warm" | "blue" | "brand-on" | "bg";
type Padding = "standard" | "hero" | "compact" | "large";

export const Section = forwardRef<
  HTMLElement,
  {
    background?: Background;
    padding?: Padding;
    className?: string;
    children: ReactNode;
  }
>(function Section(
  {
    background = "surface",
    padding = "standard",
    className = "",
    children,
  },
  ref
) {
  const backgroundClasses: Record<Background, string> = {
    surface: "bg-surface",
    warm: "bg-section-warm",
    blue: "bg-section-blue",
    "brand-on": "bg-brand-on",
    bg: "bg",
  };

  const paddingClasses: Record<Padding, string> = {
    standard: "py-24 sm:py-32",
    hero: "py-24 sm:py-32 lg:py-40",
    compact: "py-16 sm:py-20",
    large: "py-32 sm:py-40 lg:py-48",
  };

  return (
    <section
      ref={ref}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
});

