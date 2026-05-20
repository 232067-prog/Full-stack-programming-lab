"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../lib/format";
import QuantityPicker from "../../components/QuantityPicker";
import EmptyState from "../../components/EmptyState";

export default function CartPage() {
  const { items, subtotal, updateQty, removeItem } = useCart();
  const router = useRouter();
  const shipping = subtotal >= 200 ? 0 : 18;
  const tax = Number((subtotal * 0.08).toFixed(2));
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <section className="page-section">
        <div className="mx-auto max-w-4xl">
          <EmptyState
            title="Your cart is empty"
            description="Browse the catalog to add handcrafted pieces."
            action={
              <Link href="/search" className="action-btn">
                Browse products
              </Link>
            }
          />
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-soft sm:flex-row"
            >
              <div className="h-28 w-36 overflow-hidden rounded-xl bg-amber-50">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-ink-soft">
                    No image
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-ink-soft">
                  {formatCurrency(item.price)}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <QuantityPicker
                    value={item.qty}
                    onChange={(next) => updateQty(item.id, next)}
                  />
                  <button
                    type="button"
                    className="text-xs uppercase tracking-[0.2em] text-accent"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm text-ink-soft">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Estimated shipping</span>
              <span>{formatCurrency(shipping)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Estimated tax</span>
              <span>{formatCurrency(tax)}</span>
            </div>
            <div className="flex items-center justify-between font-semibold text-ink">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
          <button
            type="button"
            className="action-btn mt-6 w-full justify-center"
            onClick={() => router.push("/checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
}
