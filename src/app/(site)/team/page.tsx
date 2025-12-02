export default function TeamPage() {
  return (
    <main className="py-16 max-w-4xl mx-auto space-y-16">
      <h1 className="text-4xl font-bold text-center">Our Team</h1>

      <section className="grid md:grid-cols-2 gap-12">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Founder</h3>
          <p className="text-gray-700">
            Experienced in building, testing, and managing FX and commodities
            trading systems with a focus on risk-controlled automation.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Risk & Compliance</h3>
          <p className="text-gray-700">
            Oversees system behavior, exposure, and safeguards to ensure
            long-term stability and transparency.
          </p>
        </div>
      </section>
    </main>
  );
}
