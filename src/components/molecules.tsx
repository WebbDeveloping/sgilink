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
      <dd className="text-sm font-semibold text-slate-900 leading-snug">
        {value}
      </dd>
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
    <article className="group relative overflow-hidden rounded-2xl border border-white/60 bg-surface/80 p-5 text-xs leading-relaxed text-text-muted shadow-sm shadow-slate-900/10 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-surface hover:shadow-lg hover:shadow-slate-900/15">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-soft via-brand to-brand-soft opacity-0 transition group-hover:opacity-100" />
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-chip-blue text-brand">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mb-1.5 text-sm font-semibold text-slate-900 leading-snug">
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
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  body: string;
  extra?: ReactNode;
}) {
  return (
    <article className="relative rounded-2xl border border-border-card/80 bg-surface/70 p-4 pl-10 text-xs leading-relaxed text-text shadow-sm shadow-slate-900/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-surface hover:shadow-md sm:p-5 sm:pl-12">
      <div className="absolute left-2 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border-blue bg-chip-blue text-brand shadow-sm">
        <Icon className="h-4 w-4" />
      </div>

      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted leading-snug">
        {label}
      </p>
      <p className="mb-1.5 text-sm text-brand leading-snug">{title}</p>
      <p>{body}</p>
      {extra ? (
        <div className="mt-2 text-[11px] text-text-muted">{extra}</div>
      ) : null}
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
    <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-surface/80 p-5 text-xs leading-relaxed text-text shadow-sm shadow-slate-900/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-surface hover:shadow-lg">
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
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group relative overflow-hidden rounded-2xl border border-border bg-surface/95 p-4 text-sm leading-relaxed text-text shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-warm via-brand/40 to-accent-warm opacity-0 transition group-open:opacity-100" />
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium leading-snug text-slate-800">
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
