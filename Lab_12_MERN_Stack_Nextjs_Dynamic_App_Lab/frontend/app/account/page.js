"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { apiFetch } from "../../lib/api";
import { formatDate, formatCurrency } from "../../lib/format";
import LoadingState from "../../components/LoadingState";
import EmptyState from "../../components/EmptyState";

export default function AccountPage() {
  const { user, loading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      return;
    }

    let active = true;
    async function loadOrders() {
      setBusy(true);
      try {
        const data = await apiFetch("/api/orders/mine", {
          token: user.token
        });
        if (active) {
          setOrders(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Failed to load orders");
        }
      } finally {
        if (active) {
          setBusy(false);
        }
      }
    }

    loadOrders();
    return () => {
      active = false;
    };
  }, [user]);

  if (loading) {
    return (
      <section className="page-section">
        <div className="mx-auto max-w-4xl">
          <LoadingState label="Loading account" />
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="page-section">
        <div className="mx-auto max-w-4xl">
          <EmptyState
            title="Sign in to view your account"
            description="Access order history and saved details."
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
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="glass-card p-6">
          <h1 className="text-3xl">Welcome, {user.name}</h1>
          <p className="mt-2 text-sm text-ink-soft">{user.email}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-soft">
            {user.role}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Recent orders</h2>
          {busy ? (
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
      </div>
    </section>
  );
}
