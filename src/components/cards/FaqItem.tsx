import { ArrowRight } from "lucide-react";
import { SmallMuted } from "../typography";

export function FaqItem({
  question,
  answer,
  className,
}: {
  question: string;
  answer: string;
  className?: string;
}) {
  return (
    <details
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface/95 p-4 text-sm leading-relaxed text-text shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      {/* Solid SGI Blue Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 transition group-open:opacity-100" />

      <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium leading-snug text-text">
        <span>{question}</span>
        <ArrowRight className="h-4 w-4 shrink-0 text-text-muted transition-transform group-open:rotate-90" />
      </summary>

      <SmallMuted className="mt-2">{answer}</SmallMuted>
    </details>
  );
}

