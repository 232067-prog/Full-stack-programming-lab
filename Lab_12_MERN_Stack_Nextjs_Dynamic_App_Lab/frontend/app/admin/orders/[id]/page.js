"use client";

import { useEffect, useState } from "react";
import AdminGate from "../../../../components/AdminGate";
import LoadingState from "../../../../components/LoadingState";
import { useAuth } from "../../../../context/AuthContext";
import { apiFetch } from "../../../../lib/api";
import { formatCurrency, formatDate } from "../../../../lib/format";

const statuses = ["pending", "paid", "shipped", "delivered", "cancelled"];

export default function AdminOrderDetailPage({ params }) {
  const { user } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("pending");

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
          setStatus(data.status || "pending");
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

  async function updateStatus() {
    if (!user) {
      return;
    }
    try {
      const updated = await apiFetch(`/api/orders/${params.id}/status`, {
        method: "PUT",
        token: user.token,
        body: { status }
      });
      setOrder(updated);
    } catch (err) {
      setError(err.message || "Failed to update order");
    }
  }

  const paymentLabel =
    order?.paymentMethod === "mock-card" ? "Mock card" : order?.paymentMethod;

  return (
    <AdminGate>
      <section className="page-section">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-3xl">Order detail</h1>
          {loading ? (
            <LoadingState label="Loading order" />
          ) : error ? (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          ) : order ? (
            <div className="space-y-4">
              <div className="glass-card p-6">
                <p className="text-sm text-ink-soft">
                  Order #{order._id.slice(-6)} - {formatDate(order.createdAt)}
                </p>
                <p className="mt-2 text-lg font-semibold">
                  {order.user?.name} ({order.user?.email})
                </p>
                <p className="mt-2 text-sm text-ink-soft">
                  {order.shippingAddress?.address}, {order.shippingAddress?.city}
                </p>
                <p className="mt-2 text-sm text-ink-soft">
                  Payment: {order.isPaid ? "Paid" : "Pending"} ({paymentLabel})
                </p>
                {order.paymentRef ? (
                  <p className="text-sm text-ink-soft">
                    Payment ref: {order.paymentRef}
                  </p>
                ) : null}
              </div>
              <div className="glass-card p-6">
                <h2 className="text-lg font-semibold">Items</h2>
                <div className="mt-3 space-y-2">
                  {order.items.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="flex items-center justify-between text-sm"
                    >
                      <span>
                        {item.name} x {item.qty}
                      </span>
                      <span>{formatCurrency(item.price)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6">
                <h2 className="text-lg font-semibold">Status</h2>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                    className="rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                  >
                    {statuses.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <button type="button" className="action-btn" onClick={updateStatus}>
                    Update status
                  </button>
                </div>
                <div className="mt-4 text-sm text-ink-soft">
                  <p>Subtotal: {formatCurrency(order.subtotal)}</p>
                  <p>Shipping: {formatCurrency(order.shipping)}</p>
                  <p>Tax: {formatCurrency(order.tax)}</p>
                  <p className="font-semibold text-ink">
                    Total: {formatCurrency(order.total)}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </AdminGate>
  );
}
