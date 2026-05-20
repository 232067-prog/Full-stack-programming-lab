"use client";

import { useEffect, useState } from "react";

const apiBase =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProducts() {
      try {
        const response = await fetch(`${apiBase}/api/products`);
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        if (active) {
          setProducts(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <p className="text-slate-500">Loading products...</p>;
  }

  if (error) {
    return (
      <div className="rounded-md bg-red-50 p-4 text-red-700">{error}</div>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-slate-500">
        No products yet. Seed the database to get started.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const priceLabel =
          typeof product.price === "number"
            ? product.price.toFixed(2)
            : product.price;

        return (
          <div
            key={product._id || product.name}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="aspect-[3/2] w-full overflow-hidden rounded-md bg-slate-100">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  No image
                </div>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-slate-600">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">${priceLabel}</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    product.inStock
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
