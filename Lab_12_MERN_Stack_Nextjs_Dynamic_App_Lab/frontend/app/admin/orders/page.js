"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AdminGate from "../../../components/AdminGate";
import LoadingState from "../../../components/LoadingState";
import { useAuth } from "../../../context/AuthContext";
import { apiFetch } from "../../../lib/api";
import { formatCurrency, formatDate } from "../../../lib/format";

export default function AdminOrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    let active = true;
    async function loadOrders() {
      try {
        const data = await apiFetch("/api/orders", { token: user.token });
        if (active) {
          setOrders(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Failed to load orders");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadOrders();
    return () => {
      active = false;
    };
  }, [user]);

  return (
    <AdminGate>
      <section className="page-section">
        <div className="mx-auto max-w-5xl space-y-4">
          <h1 className="text-3xl">Orders</h1>
          {loading ? (
            <LoadingState label="Loading orders" />
          ) : error ? (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          ) : (
            <div className="space-y-3">
              {orders.map((order) => (
                <Link
                  key={order._id}
                  href={`/admin/orders/${order._id}`}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-100 bg-white/80 p-4 text-sm"
                >
                  <div>
                    <p className="font-semibold">Order #{order._id.slice(-6)}</p>
                    <p className="text-ink-soft">
                      {formatDate(order.createdAt)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-accent">
                      {formatCurrency(order.total)}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                      {order.status}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </AdminGate>
  );
}
