import type { ReactNode } from "react";

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

