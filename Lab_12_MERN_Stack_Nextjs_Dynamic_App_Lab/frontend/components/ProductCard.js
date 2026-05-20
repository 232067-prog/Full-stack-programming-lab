"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../lib/format";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const id = product._id || product.id || product.slug;
  const slug = product.slug || product._id;

  function handleAdd() {
    addItem({
      id,
      slug,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl
    });
  }

  return (
    <div className="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-soft">
      <Link href={`/product/${slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-amber-50">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-ink-soft">
              No image
            </div>
          )}
        </div>
      </Link>
      <div className="mt-4 space-y-2">
        <Link href={`/product/${slug}`}>
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </Link>
        <p className="text-sm text-ink-soft">
          {product.description || "Signature studio piece."}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-accent">
            {formatCurrency(product.price)}
          </span>
          <button type="button" className="action-btn" onClick={handleAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
