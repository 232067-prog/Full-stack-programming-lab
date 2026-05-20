export default function PromoRow() {
  return (
    <section className="page-section">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            Elite collection
          </p>
          <h3 className="mt-3 text-2xl font-semibold">Design furniture</h3>
          <p className="mt-2 text-sm text-ink-soft">
            Limited studio run with crafted joinery.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white">
              35% sale off
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
              In store only
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-amber-100 bg-gradient-to-r from-white/80 to-amber-50 p-6 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            Reclaimed and handcrafted
          </p>
          <h3 className="mt-3 text-2xl font-semibold">Sale off 50%</h3>
          <p className="mt-2 text-sm text-ink-soft">
            Exclusive accent pieces for the season.
          </p>
        </div>
      </div>
    </section>
  );
}
