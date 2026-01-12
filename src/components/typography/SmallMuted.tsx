import type { ReactNode } from "react";

export function SmallMuted({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[11px] leading-relaxed text-text-muted ${className}`}>
      {children}
    </p>
  );
}

