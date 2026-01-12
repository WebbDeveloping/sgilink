import type { ReactNode } from "react";
import Link from "next/link";

const secondaryButtonClasses =
  "inline-flex items-center justify-center rounded-full border border-border-card bg-surface/80 px-6 py-3 text-sm font-medium leading-snug text-text backdrop-blur-sm hover:border-brand-soft whitespace-nowrap min-h-[44px] sm:min-h-0 sm:py-2.5";

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

