"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AdminGate from "../../../components/AdminGate";
import LoadingState from "../../../components/LoadingState";
import { useAuth } from "../../../context/AuthContext";
import { apiFetch } from "../../../lib/api";
import { formatCurrency } from "../../../lib/format";

export default function AdminProductsPage() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    let active = true;
    async function loadProducts() {
      try {
        const payload = await apiFetch("/api/products?all=true", {
          token: user.token
        });
        if (active) {
          setProducts(payload.items || []);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Failed to load products");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProducts();
    return () => {
      active = false;
    };
  }, [user]);

  async function handleDelete(id) {
    if (!user) {
      return;
    }
    await apiFetch(`/api/products/${id}`, {
      method: "DELETE",
      token: user.token
    });
    setProducts((prev) => prev.filter((item) => item._id !== id));
  }

  return (
    <AdminGate>
      <section className="page-section">
        <div className="mx-auto max-w-5xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl">Products</h1>
            <Link href="/admin/products/new" className="action-btn">
              Add product
            </Link>
          </div>
          {loading ? (
            <LoadingState label="Loading products" />
          ) : error ? (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          ) : (
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-100 bg-white/80 p-4"
                >
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-ink-soft">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/products/${product._id}/edit`}
                      className="text-xs uppercase tracking-[0.2em] text-accent"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(product._id)}
                      className="text-xs uppercase tracking-[0.2em] text-ink-soft"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </AdminGate>
  );
}
