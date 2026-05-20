import Link from "next/link";

export default function CategoryStrip({ categories }) {
  return (
    <section className="page-section">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <h2 className="section-title">Collections</h2>
          <span className="accent-bar" />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {(categories || []).slice(0, 3).map((category) => (
            <Link
              key={category._id || category.slug}
              href={`/category/${category.slug}`}
              className="group rounded-2xl border border-amber-100 bg-white/70 p-5 shadow-soft transition hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-amber-50">
                {category.imageUrl ? (
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-ink-soft">
                    {category.name}
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.15em]">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                {category.description || "Curated by the studio."}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
