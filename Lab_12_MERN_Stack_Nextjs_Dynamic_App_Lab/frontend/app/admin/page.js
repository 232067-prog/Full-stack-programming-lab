"use client";

import { useEffect, useState } from "react";
import AdminGate from "../../components/AdminGate";
import LoadingState from "../../components/LoadingState";
import { useAuth } from "../../context/AuthContext";
import { apiFetch } from "../../lib/api";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ products: 0, categories: 0, orders: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    let active = true;
    async function loadStats() {
      try {
        const [productPayload, categoryPayload, orderPayload] =
          await Promise.all([
            apiFetch("/api/products?all=true", { token: user.token }),
            apiFetch("/api/categories", { token: user.token }),
            apiFetch("/api/orders", { token: user.token })
          ]);

        if (active) {
          setStats({
            products: productPayload.count || productPayload.items?.length || 0,
            categories: Array.isArray(categoryPayload)
              ? categoryPayload.length
              : 0,
            orders: Array.isArray(orderPayload) ? orderPayload.length : 0
          });
        }
      } catch (error) {
        if (active) {
          setStats({ products: 0, categories: 0, orders: 0 });
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadStats();
    return () => {
      active = false;
    };
  }, [user]);

  return (
    <AdminGate>
      <section className="page-section">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-3xl">Admin dashboard</h1>
          {loading ? (
            <LoadingState label="Loading stats" />
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              <div className="glass-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                  Products
                </p>
                <p className="mt-3 text-3xl font-semibold">{stats.products}</p>
              </div>
              <div className="glass-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                  Categories
                </p>
                <p className="mt-3 text-3xl font-semibold">{stats.categories}</p>
              </div>
              <div className="glass-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                  Orders
                </p>
                <p className="mt-3 text-3xl font-semibold">{stats.orders}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </AdminGate>
  );
}
