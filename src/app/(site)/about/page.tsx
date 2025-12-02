export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-16 py-16 bg-bg text-text">
      <h1 className="text-center text-4xl font-bold">About SGI-LINK</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Who We Are</h2>
        <p className="text-muted">
          SGI-LINK is a specialized investment fund deploying capital into SGI’s
          proprietary algorithmic trading systems. After years of testing and
          refining multiple FX and commodities algorithms, SGI developed a
          stable, durable set of systems capable of producing consistent,
          data-driven annual returns in the 20–30% range.
        </p>

        <p className="text-muted">
          Our philosophy centers on transparency, conservative portfolio
          management, and a commitment to long-term, repeatable outcomes. We
          build systems that put discipline ahead of emotion.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Mission Statement</h2>
        <p className="text-muted">
          Our mission is to provide investors with reliable, technology-powered
          returns by leveraging SGI’s proprietary algorithmic systems to deliver
          stable performance through diversification, automation, and rigorous
          quantitative oversight.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Who We Serve</h2>
        <p className="text-muted">
          SGI-LINK is designed for accredited investors and high-net-worth
          individuals seeking a passive, systematic investment approach without
          the noise, hype, or emotional bias that typically impacts market
          performance.
        </p>
      </section>
    </main>
  );
}
