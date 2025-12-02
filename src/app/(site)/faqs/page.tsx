export default function FAQsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-16 py-16 bg-bg text-text">
      <h1 className="text-center text-4xl font-bold">
        Frequently Asked Questions
      </h1>

      <section className="space-y-8">
        <div>
          <h3 className="font-bold">Is this a passive investment?</h3>
          <p className="text-muted">
            Yes — all trading is fully automated through SGI’s proprietary
            systems.
          </p>
        </div>

        <div>
          <h3 className="font-bold">What returns do you target?</h3>
          <p className="text-muted">
            SGI targets consistent, realistic 20–30% annual performance based on
            prior live data.
          </p>
        </div>

        <div>
          <h3 className="font-bold">What markets do you trade?</h3>
          <p className="text-muted">
            Primarily FX and commodities — highly liquid markets ideal for
            algorithmic strategies.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Minimum investment?</h3>
          <p className="text-muted">
            SGI-LINK is built for accredited and high-net-worth individuals.
            Minimums vary depending on allocation.
          </p>
        </div>
      </section>
    </main>
  );
}
