import type { LucideIcon } from "lucide-react";

export function IconStatCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border-card/80 bg-surface p-5 text-xs leading-relaxed text-text-muted shadow-sm shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/15">
      {/* Solid blue top rule accent on hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-brand opacity-0 transition group-hover:opacity-100" />

      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-chip-blue text-brand">
        <Icon className="h-4 w-4" />
      </div>

      <h3 className="mb-1.5 text-sm font-semibold text-text leading-snug">
        {title}
      </h3>

      <p>{body}</p>
    </article>
  );
}

