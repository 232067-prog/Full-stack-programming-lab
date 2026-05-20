const updates = [
  {
    title: "Layered textures for cozy bedrooms",
    description:
      "How the Rustik Plank studio layers natural fibers and warm wood tones.",
    imageUrl:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Craftsmanship behind our dining sets",
    description:
      "An inside look at the artisans finishing our flagship tables.",
    imageUrl:
      "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lighting your lounge the studio way",
    description:
      "Tips for blending metal accents with rustic statement pieces.",
    imageUrl:
      "https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function LatestUpdates() {
  return (
    <section className="page-section">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <h2 className="section-title">Latest updates</h2>
          <span className="accent-bar" />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {updates.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-amber-50">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
              <button type="button" className="mt-4 text-xs uppercase tracking-[0.2em] text-accent">
                Read more
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
