"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { apiFetch } from "../../../lib/api";
import { formatCurrency, formatDate } from "../../../lib/format";
import LoadingState from "../../../components/LoadingState";
import EmptyState from "../../../components/EmptyState";

export default function OrderDetailPage({ params }) {
  const { user } = useAuth();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    let active = true;
    async function loadOrder() {
      try {
        const data = await apiFetch(`/api/orders/${params.id}`, {
          token: user.token
        });
        if (active) {
          setOrder(data);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Failed to load order");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadOrder();
    return () => {
      active = false;
    };
  }, [params.id, user]);

  if (!user) {
    return (
      <section className="page-section">
        <div className="mx-auto max-w-4xl">
          <EmptyState
            title="Sign in to view this order"
            description="Log in to access order details."
          />
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="page-section">
        <div className="mx-auto max-w-4xl">
          <LoadingState label="Loading order" />
        </div>
      </section>
    );
  }

  if (error || !order) {
    return (
      <section className="page-section">
        <div className="mx-auto max-w-4xl">
          <EmptyState
            title="Order not found"
            description={error || "Unable to load this order."}
          />
        </div>
      </section>
    );
  }

  const paymentLabel =
    order.paymentMethod === "mock-card" ? "Mock card" : order.paymentMethod;

  return (
    <section className="page-section">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="glass-card p-6">
          <h1 className="text-3xl">Order #{order._id.slice(-6)}</h1>
          <p className="mt-2 text-sm text-ink-soft">
            Placed on {formatDate(order.createdAt)}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-soft">
            Status: {order.status}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-soft">
            Payment: {order.isPaid ? "Paid" : "Pending"} ({paymentLabel})
          </p>
          {order.paymentRef ? (
            <p className="mt-1 text-xs text-ink-soft">
              Payment ref: {order.paymentRef}
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-white/80 p-4"
              >
                <div className="h-20 w-24 overflow-hidden rounded-xl bg-amber-50">
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
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-ink-soft">
                    Qty {item.qty} x {formatCurrency(item.price)}
                  </p>
                </div>
                <div className="text-sm font-semibold">
                  {formatCurrency(item.qty * item.price)}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Order summary</h2>
            <div className="mt-4 space-y-2 text-sm text-ink-soft">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(order.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>{formatCurrency(order.shipping)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax</span>
                <span>{formatCurrency(order.tax)}</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-ink">
                <span>Total</span>
                <span>{formatCurrency(order.total)}</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-ink-soft">
              <p>{order.shippingAddress?.fullName}</p>
              <p>{order.shippingAddress?.address}</p>
              <p>
                {order.shippingAddress?.city} {order.shippingAddress?.postalCode}
              </p>
              <p>{order.shippingAddress?.country}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
