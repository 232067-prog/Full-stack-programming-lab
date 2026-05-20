import Link from "next/link";
import { formatCurrency } from "../lib/format";

export default function Hero({ product }) {
  return (
    <section className="page-section">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-amber-100 blur-2xl lg:block" />
          <div className="glass-card relative overflow-hidden px-8 py-10">
            <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full border border-amber-200" />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1">
                <div className="pill">Handcrafted highlight</div>
                <h1 className="mt-4 text-4xl leading-tight lg:text-5xl">
                  Sculpted comfort for modern living.
                </h1>
                <p className="mt-4 text-sm text-ink-soft">
                  Inspired by the Rustik Plank studio lounge, this piece blends
                  curved oak ribs with a relaxed ergonomic profile.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-3xl font-semibold text-accent">
                    {product ? formatCurrency(product.price) : "$129.99"}
                  </span>
                  <Link href={product ? `/product/${product.slug}` : "/"}>
                    <span className="action-btn">Shop now</span>
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50 shadow-soft">
                  {product?.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-ink-soft">
                      Hero preview
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-amber-400 to-transparent" />
          </div>
        </div>
        <div className="space-y-6">
          <div className="glass-card px-8 py-6 animate-float-in">
            <h2 className="text-xl font-semibold">Signature Collections</h2>
            <p className="mt-3 text-sm text-ink-soft">
              Explore three curated lines inspired by the original Rustik Plank
              studio catalog.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {["Chairs", "Beds", "Tables"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-amber-100 bg-white/80 p-4 text-center text-xs uppercase tracking-[0.2em]"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card px-8 py-6 animate-float-in">
            <h3 className="text-lg font-semibold">Studio Promise</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Crafted with sustainable timber, natural oils, and a lifetime of
              repair care.
            </p>
            <Link href="/about" className="mt-4 inline-flex text-sm text-accent">
              Read our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
