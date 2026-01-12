import type { ReactNode } from "react";
import { Eyebrow } from "../typography";

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

