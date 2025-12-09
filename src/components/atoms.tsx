// app/sgi-ui/atoms.tsx
import type { ReactNode } from "react";
import Link from "next/link";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.18em] text-text-muted leading-snug ${className}`}
    >
      {children}
    </p>
  );
}

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
      className={`text-2xl font-semibold text-slate-900 leading-snug sm:text-3xl ${className}`}
    >
      {children}
    </Component>
  );
}

export function BodyText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm text-text leading-relaxed sm:text-base ${className}`}
    >
      {children}
    </p>
  );
}

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

const primaryButtonClasses =
  "inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold leading-snug text-white shadow-md shadow-slate-900/15 hover:bg-brand-dark whitespace-nowrap";

const secondaryButtonClasses =
  "inline-flex items-center justify-center rounded-full border border-border-card bg-surface/80 px-6 py-2.5 text-sm font-medium leading-snug text-text backdrop-blur-sm hover:border-brand-soft whitespace-nowrap";

export function PrimaryButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      type="button"
      {...props}
      className={`${primaryButtonClasses} ${className}`}
    >
      {children}
    </button>
  );
}

export function PrimaryLinkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${primaryButtonClasses} ${className}`}>
      {children}
    </Link>
  );
}

export function SecondaryLinkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${secondaryButtonClasses} ${className}`}>
      {children}
    </Link>
  );
}

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
