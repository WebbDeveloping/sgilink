import type { ReactNode } from "react";

type Background = "surface" | "warm" | "blue" | "brand-on" | "bg";
type Padding = "standard" | "hero" | "compact";

export function Section({
  background = "surface",
  padding = "standard",
  className = "",
  children,
}: {
  background?: Background;
  padding?: Padding;
  className?: string;
  children: ReactNode;
}) {
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
  };

  return (
    <section
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
}

