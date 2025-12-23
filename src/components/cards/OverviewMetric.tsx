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

