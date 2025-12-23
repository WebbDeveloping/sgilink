import type { LucideIcon } from "lucide-react";

export function TechLayerCard({
  icon: Icon,
  label,
  body,
}: {
  icon: LucideIcon;
  label: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-card/80 bg-surface p-5 text-xs leading-relaxed text-text shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-lg">
      <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-chip-blue text-brand shadow-sm">
          <Icon className="h-3.5 w-3.5" />
        </span>
        {label}
      </p>
      <p>{body}</p>
    </div>
  );
}

