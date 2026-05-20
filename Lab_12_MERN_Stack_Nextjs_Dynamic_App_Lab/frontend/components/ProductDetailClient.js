"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../lib/format";
import QuantityPicker from "./QuantityPicker";

export default function ProductDetailClient({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  function handleAdd() {
    addItem(
      {
        id: product._id || product.slug,
        slug: product.slug,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl
      },
      qty
    );
  }

  return (
    <div className="page-section">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-soft">
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
        </div>
        <div className="space-y-6">
          <div>
            <p className="pill">{product.category?.name || "Collection"}</p>
            <h1 className="mt-4 text-4xl">{product.name}</h1>
            <p className="mt-3 text-sm text-ink-soft">{product.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-semibold text-accent">
              {formatCurrency(product.price)}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
              {product.countInStock > 0 ? "In stock" : "Made to order"}
            </span>
          </div>
          <QuantityPicker value={qty} onChange={setQty} />
          <button type="button" className="action-btn" onClick={handleAdd}>
            Add to cart
          </button>
          <div className="rounded-2xl border border-amber-100 bg-white/70 p-5 text-sm text-ink-soft">
            <p>Hand-finished timber with natural wax coating.</p>
            <p className="mt-2">Ships within 14 days for bespoke orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
