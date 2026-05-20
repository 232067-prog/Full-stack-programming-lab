import Hero from "../components/Hero";
import CategoryStrip from "../components/CategoryStrip";
import ProductGrid from "../components/ProductGrid";
import PromoRow from "../components/PromoRow";
import LatestUpdates from "../components/LatestUpdates";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

async function getHomeData() {
  const [categoryRes, featuredRes, productsRes] = await Promise.all([
    fetch(`${API_BASE}/api/categories`, { cache: "no-store" }),
    fetch(`${API_BASE}/api/products?featured=true&limit=6`, {
      cache: "no-store"
    }),
    fetch(`${API_BASE}/api/products?limit=9`, { cache: "no-store" })
  ]);

  const categories = categoryRes.ok ? await categoryRes.json() : [];
  const featuredPayload = featuredRes.ok ? await featuredRes.json() : {};
  const productsPayload = productsRes.ok ? await productsRes.json() : {};

  return {
    categories: Array.isArray(categories) ? categories : [],
    featured: featuredPayload.items || [],
    products: productsPayload.items || []
  };
}

export default async function HomePage() {
  const { categories, featured, products } = await getHomeData();
  const highlight = featured[0] || products[0];

  return (
    <>
      <Hero product={highlight} />
      <CategoryStrip categories={categories} />
      <ProductGrid
        title="Featured"
        subtitle="Signature pieces curated by the studio."
        products={featured.length ? featured : products.slice(0, 6)}
        actionLabel="See all"
        actionHref="/search"
      />
      <ProductGrid
        title="Special"
        subtitle="Limited run collections in small batches."
        products={products.slice(0, 3)}
        actionLabel="Browse"
        actionHref="/search"
      />
      <ProductGrid
        title="Popular"
        subtitle="Best sellers from recent drops."
        products={products.slice(3, 6)}
        actionLabel="Explore"
        actionHref="/search"
      />
      <PromoRow />
      <LatestUpdates />
    </>
  );
}
