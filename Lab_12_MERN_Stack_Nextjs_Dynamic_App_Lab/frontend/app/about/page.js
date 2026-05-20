export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-4xl">About Rustik Plank</h1>
        <p className="text-sm text-ink-soft">
          Rustik Plank is a design studio focused on sculpted timber, artisan
          joinery, and comfortable silhouettes. Each piece is hand finished by a
          small team of makers.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold">Studio Craft</h2>
            <p className="mt-2 text-sm text-ink-soft">
              We source reclaimed hardwoods and apply natural oils to create a
              warm, durable finish.
            </p>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold">Sustainable Focus</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Every collection is built to last with an emphasis on repairable
              construction and low waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
