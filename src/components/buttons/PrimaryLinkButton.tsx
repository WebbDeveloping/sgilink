import type { ReactNode } from "react";
import Link from "next/link";

const primaryButtonClasses =
  "inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold leading-snug text-white shadow-md shadow-slate-900/15 hover:bg-brand-dark whitespace-nowrap min-h-[44px] sm:min-h-0 sm:py-2.5";

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

