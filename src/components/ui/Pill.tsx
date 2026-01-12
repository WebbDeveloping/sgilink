import type { ReactNode } from "react";

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded-full border border-border-strong bg-chip-warm px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </span>
  );
}

