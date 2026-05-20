export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-4xl">Contact us</h1>
          <p className="mt-3 text-sm text-ink-soft">
            Have a question about a piece or a custom order? Send us a message
            and we will respond within two business days.
          </p>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
            />
            <button type="button" className="action-btn">
              Send message
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold">Studio showroom</h2>
            <p className="mt-2 text-sm text-ink-soft">
              18 Timber Lane, Ruston City
            </p>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold">Phone</h2>
            <p className="mt-2 text-sm text-ink-soft">07584 031409</p>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="mt-2 text-sm text-ink-soft">hello@rustikplank.co</p>
          </div>
        </div>
      </div>
    </section>
  );
}
