export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl space-y-12 py-16 bg-bg text-text">
      <h1 className="text-center text-4xl font-bold">Contact Us</h1>

      <p className="text-center text-muted">
        For all inquiries regarding SGI-LINK, please reach out using the form
        below.
      </p>

      <form className="space-y-6">
        <input
          className="w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted"
          placeholder="Your Name"
        />

        <input
          className="w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted"
          placeholder="Email"
        />

        <textarea
          className="w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted"
          rows={6}
          placeholder="Message"
        />

        <button className="w-full rounded-xl bg-primary py-3 text-sm font-medium text-white">
          Send Message
        </button>
      </form>
    </main>
  );
}
