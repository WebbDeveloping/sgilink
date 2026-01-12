import type { ReactNode } from "react";

export function SectionTitle({
  as: Component = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}) {
  return (
    <Component
      className={`text-2xl font-semibold text-text leading-snug sm:text-3xl ${className}`}
    >
      {children}
    </Component>
  );
}
