export default function LiveResultsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-12 py-16 bg-bg text-text">
      <h1 className="text-center text-4xl font-bold">Live Results</h1>

      <p className="mx-auto max-w-xl text-center text-muted">
        This page displays live or daily-updated performance metrics to provide
        transparency. The data below is placeholder content for now.
      </p>

      {/* Placeholder cards */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="font-bold">YTD Return</h3>
          <p className="text-muted">+00.0%</p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="font-bold">Current Drawdown</h3>
          <p className="text-muted">0.0%</p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="font-bold">Win Rate</h3>
          <p className="text-muted">00%</p>
        </div>
      </section>

      <div className="flex h-64 items-center justify-center rounded-xl border border-border bg-surface p-6">
        <p className="text-muted">Equity Curve Graph Placeholder</p>
      </div>
    </main>
  );
}
