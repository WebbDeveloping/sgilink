import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

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

