import ProductGrid from "../../components/ProductGrid";
import EmptyState from "../../components/EmptyState";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

async function getSearchResults(query) {
  const response = await fetch(
    `${API_BASE}/api/products?search=${encodeURIComponent(query)}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    return [];
  }
  const payload = await response.json();
  return payload.items || [];
}

export default async function SearchPage({ searchParams }) {
  const query = searchParams?.query || "";

  if (!query) {
    return (
      <section className="page-section">
        <div className="mx-auto max-w-4xl">
          <EmptyState
            title="Search the catalog"
            description="Enter a keyword in the search bar to discover products."
          />
        </div>
      </section>
    );
  }

  const products = await getSearchResults(query);

  return (
    <ProductGrid
      title={`Search results for "${query}"`}
      subtitle={`${products.length} items found`}
      products={products}
    />
  );
}
