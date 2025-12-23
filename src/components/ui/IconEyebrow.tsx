import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function IconEyebrow({
  icon: Icon,
  label,
  className = "",
  iconClassName = "",
}: {
  icon: LucideIcon;
  label: ReactNode;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted leading-snug ${className}`}
    >
      <Icon className={`h-3.5 w-3.5 text-brand ${iconClassName}`} />
      <span>{label}</span>
    </p>
  );
}

