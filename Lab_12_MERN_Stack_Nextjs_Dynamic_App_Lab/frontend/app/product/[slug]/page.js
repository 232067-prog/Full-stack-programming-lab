import { notFound } from "next/navigation";
import ProductDetailClient from "../../../components/ProductDetailClient";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

async function getProduct(slug) {
  const response = await fetch(`${API_BASE}/api/products/slug/${slug}`, {
    cache: "no-store"
  });
  if (!response.ok) {
    return null;
  }
  return response.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug);
  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
