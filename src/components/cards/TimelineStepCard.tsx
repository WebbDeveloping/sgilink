import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function TimelineStepCard({
  icon: Icon,
  label,
  title,
  body,
  extra,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  body: string;
  extra?: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`relative rounded-2xl border border-border-card/80 bg-surface/70 p-5 text-xs leading-relaxed text-text shadow-sm shadow-slate-900/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-surface hover:shadow-md sm:pl-12 ${className}`}
    >
      {/* ICON — mobile on top, desktop positioned left */}
      <div
        className="
        mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-border-blue bg-chip-blue text-brand shadow-sm
        sm:absolute sm:left-3 sm:top-5 sm:mx-0 sm:mb-0 sm:h-8 sm:w-8
      "
      >
        <Icon className="h-4 w-4" />
      </div>

      {/* TEXT BLOCK */}
      <div className="text-center sm:text-left">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted leading-snug sm:text-left">
          {label}
        </p>

        <p className="mb-1.5 text-sm text-brand leading-snug sm:text-left">
          {title}
        </p>

        <p>{body}</p>

        {extra && (
          <div className="mt-2 text-[11px] text-text-muted sm:text-left">
            {extra}
          </div>
        )}
      </div>
    </article>
  );
}

