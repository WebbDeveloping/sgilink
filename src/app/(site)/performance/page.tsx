export default function PerformanceHistoryPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-16 py-16 bg-bg text-text">
      <h1 className="text-center text-4xl font-bold">Performance History</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Annual Returns</h2>
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="text-muted">Placeholder for historical return data.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Monthly Breakdown</h2>
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="text-muted">Monthly chart placeholder.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Risk Metrics</h2>
        <ul className="space-y-2 text-text">
          <li className="text-muted">• Maximum Drawdown</li>
          <li className="text-muted">• Sharpe Ratio</li>
          <li className="text-muted">• Sortino Ratio</li>
          <li className="text-muted">• Volatility</li>
        </ul>
      </section>
    </main>
  );
}
