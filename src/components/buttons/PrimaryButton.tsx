import type { ReactNode } from "react";

const primaryButtonClasses =
  "inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold leading-snug text-white shadow-md shadow-slate-900/15 hover:bg-brand-dark whitespace-nowrap";

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

