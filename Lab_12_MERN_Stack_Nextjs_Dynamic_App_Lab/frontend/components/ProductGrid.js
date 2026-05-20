import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ProductGrid({ title, subtitle, products, actionLabel, actionHref }) {
  return (
    <section className="page-section">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <div>
            <h2 className="section-title">{title}</h2>
            {subtitle ? (
              <p className="mt-2 text-sm text-ink-soft">{subtitle}</p>
            ) : null}
          </div>
          {actionLabel ? (
            <Link
              href={actionHref}
              className="text-xs uppercase tracking-[0.2em] text-accent"
            >
              {actionLabel}
            </Link>
          ) : null}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(products || []).map((product) => (
            <ProductCard key={product._id || product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
