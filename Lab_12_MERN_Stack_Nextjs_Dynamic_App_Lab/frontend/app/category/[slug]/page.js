import { notFound } from "next/navigation";
import ProductGrid from "../../../components/ProductGrid";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

async function getCategory(slug) {
  const response = await fetch(`${API_BASE}/api/categories/slug/${slug}`, {
    cache: "no-store"
  });
  if (!response.ok) {
    return null;
  }
  return response.json();
}

async function getProducts(slug) {
  const response = await fetch(`${API_BASE}/api/products?category=${slug}`, {
    cache: "no-store"
  });
  if (!response.ok) {
    return [];
  }
  const payload = await response.json();
  return payload.items || [];
}

export default async function CategoryPage({ params }) {
  const category = await getCategory(params.slug);
  if (!category) {
    notFound();
  }
  const products = await getProducts(params.slug);

  return (
    <ProductGrid
      title={category.name}
      subtitle={category.description}
      products={products}
    />
  );
}
