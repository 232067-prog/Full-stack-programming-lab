"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { apiFetch } from "../../lib/api";
import { formatCurrency, formatDate } from "../../lib/format";
import LoadingState from "../../components/LoadingState";
import EmptyState from "../../components/EmptyState";

export default function OrdersPage() {
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
        const data = await apiFetch("/api/orders/mine", { token: user.token });
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

  if (!user) {
    return (
      <section className="page-section">
        <div className="mx-auto max-w-4xl">
          <EmptyState
            title="Sign in to view orders"
            description="Log in to see your order history."
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

  return (
    <section className="page-section">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl">My orders</h1>
        {loading ? (
          <div className="mt-4">
            <LoadingState label="Loading orders" />
          </div>
        ) : error ? (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        ) : orders.length === 0 ? (
          <div className="mt-4">
            <EmptyState
              title="No orders yet"
              description="Start shopping to see orders here."
              action={
                <Link href="/search" className="action-btn">
                  Browse products
                </Link>
              }
            />
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {orders.map((order) => (
              <Link
                key={order._id}
                href={`/orders/${order._id}`}
                className="flex flex-wrap items-center justify-between rounded-2xl border border-amber-100 bg-white/80 p-4 text-sm"
              >
                <div>
                  <p className="font-semibold">Order #{order._id.slice(-6)}</p>
                  <p className="text-ink-soft">{formatDate(order.createdAt)}</p>
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
  );
}
