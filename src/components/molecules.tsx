// app/sgi-ui/molecules.tsx
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Eyebrow, SmallMuted } from "./atoms";

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

export function CtaLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-brand hover:text-brand-dark whitespace-nowrap leading-snug ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
    </a>
  );
}

export function OverviewMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <>
      <dt className="text-[11px] uppercase tracking-[0.16em] text-text-muted leading-snug">
        {label}
      </dt>
      <dd className="text-sm font-semibold text-text leading-snug">{value}</dd>
    </>
  );
}

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
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted leading-snug">
          {label}
        </p>

        <p className="mb-1.5 text-sm text-brand leading-snug">{title}</p>

        <p>{body}</p>

        {extra && (
          <div className="mt-2 text-[11px] text-text-muted">{extra}</div>
        )}
      </div>
    </article>
  );
}

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

export function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border-card/80 bg-surface/80 p-3 text-xs leading-relaxed text-text shadow-sm shadow-slate-900/5">
      <Eyebrow className="mb-1">
        {/* strip uppercase transform from children */}
        {title}
      </Eyebrow>
      {children}
    </div>
  );
}
