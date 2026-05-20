"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { apiFetch } from "../../lib/api";
import { formatCurrency } from "../../lib/format";
import EmptyState from "../../components/EmptyState";

export default function CheckoutPage() {
  const { user } = useAuth();
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
    paymentMethod: "mock-card",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });
  const isCardPayment = form.paymentMethod === "mock-card";

  if (!user) {
    return (
      <section className="page-section">
        <div className="mx-auto max-w-4xl">
          <EmptyState
            title="Sign in to continue"
            description="Checkout is available after you log in."
            action={
              <Link href="/login" className="action-btn">
                Sign in
              </Link>
            }
          />
        </div>
      </section>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (
      isCardPayment &&
      (!form.cardName ||
        !form.cardNumber ||
        !form.cardExpiry ||
        !form.cardCvc)
    ) {
      setError("Card details are required for mock payment.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      let paymentResult = null;
      if (isCardPayment) {
        paymentResult = await apiFetch("/api/payments/mock", {
          method: "POST",
          token: user.token,
          body: {
            amount: total,
            cardName: form.cardName,
            cardNumber: form.cardNumber,
            expiry: form.cardExpiry,
            cvc: form.cardCvc
          }
        });
      }

      const order = await apiFetch("/api/orders", {
        method: "POST",
        token: user.token,
        body: {
          items: items.map((item) => ({
            product: item.id,
            name: item.name,
            qty: item.qty,
            price: item.price,
            imageUrl: item.imageUrl
          })),
          shippingAddress: {
            fullName: form.fullName,
            address: form.address,
            city: form.city,
            postalCode: form.postalCode,
            country: form.country,
            phone: form.phone
          },
          paymentMethod: form.paymentMethod,
          paymentProvider: isCardPayment ? "mock" : "cash",
          paymentStatus: isCardPayment ? "paid" : "pending",
          paymentRef: paymentResult?.paymentId || ""
        }
      });
      clearCart();
      router.push(`/orders/${order._id}`);
    } catch (err) {
      setError(err.message || "Failed to place order");
    } finally {
      setSaving(false);
    }
  }

  const shipping = subtotal >= 200 ? 0 : 18;
  const tax = Number((subtotal * 0.08).toFixed(2));
  const total = subtotal + shipping + tax;

  return (
    <section className="page-section">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-soft"
        >
          <h1 className="text-2xl font-semibold">Checkout</h1>
          {error ? (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}
          <input
            className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
            placeholder="Full name"
            value={form.fullName}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, fullName: event.target.value }))
            }
            required
          />
          <input
            className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
            placeholder="Address"
            value={form.address}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, address: event.target.value }))
            }
            required
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              placeholder="City"
              value={form.city}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, city: event.target.value }))
              }
              required
            />
            <input
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              placeholder="Postal code"
              value={form.postalCode}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, postalCode: event.target.value }))
              }
              required
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              placeholder="Country"
              value={form.country}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, country: event.target.value }))
              }
              required
            />
            <input
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              placeholder="Phone"
              value={form.phone}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, phone: event.target.value }))
              }
            />
          </div>
          <div className="space-y-2 text-sm text-ink-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-ink">
              Payment
            </p>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="mock-card"
                checked={isCardPayment}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    paymentMethod: event.target.value
                  }))
                }
              />
              Mock card payment (sandbox)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={form.paymentMethod === "cash"}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    paymentMethod: event.target.value
                  }))
                }
              />
              Cash on delivery
            </label>
          </div>
          {isCardPayment ? (
            <div className="rounded-2xl border border-amber-100 bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-ink">
                Card details
              </p>
              <div className="mt-3 space-y-3">
                <input
                  className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                  placeholder="Cardholder name"
                  value={form.cardName}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      cardName: event.target.value
                    }))
                  }
                  required={isCardPayment}
                />
                <input
                  className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                  placeholder="Card number (use any 12+ digits)"
                  value={form.cardNumber}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      cardNumber: event.target.value
                    }))
                  }
                  required={isCardPayment}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                    placeholder="MM/YY"
                    value={form.cardExpiry}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        cardExpiry: event.target.value
                      }))
                    }
                    required={isCardPayment}
                  />
                  <input
                    className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                    placeholder="CVC"
                    value={form.cardCvc}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        cardCvc: event.target.value
                      }))
                    }
                    required={isCardPayment}
                  />
                </div>
                <p className="text-xs text-ink-soft">
                  This is a sandbox UI. No real payment is processed.
                </p>
              </div>
            </div>
          ) : null}
          <button
            type="submit"
            className="action-btn w-full justify-center"
            disabled={saving}
          >
            {saving ? "Placing order..." : "Place order"}
          </button>
        </form>
        <div className="rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm text-ink-soft">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>{formatCurrency(shipping)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax</span>
              <span>{formatCurrency(tax)}</span>
            </div>
            <div className="flex items-center justify-between font-semibold text-ink">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
