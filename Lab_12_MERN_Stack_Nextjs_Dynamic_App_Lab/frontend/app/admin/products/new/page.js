"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminGate from "../../../../components/AdminGate";
import { useAuth } from "../../../../context/AuthContext";
import { apiFetch } from "../../../../lib/api";

export default function AdminNewProductPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    imageUrl: "",
    category: "",
    featured: false,
    countInStock: 5,
    description: "",
    tags: ""
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      return;
    }
    apiFetch("/api/categories", { token: user.token })
      .then((data) => setCategories(Array.isArray(data) ? data : []))
      .catch(() => setCategories([]));
  }, [user]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      const created = await apiFetch("/api/products", {
        method: "POST",
        token: user.token,
        body: {
          ...form,
          price: Number(form.price),
          countInStock: Number(form.countInStock),
          tags: form.tags
            ? form.tags.split(",").map((item) => item.trim())
            : []
        }
      });
      router.push(`/admin/products/${created._id}/edit`);
    } catch (err) {
      setError(err.message || "Failed to create product");
    }
  }

  return (
    <AdminGate>
      <section className="page-section">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl">New product</h1>
          {error ? (
            <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              placeholder="Product name"
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              required
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
                placeholder="Price"
                type="number"
                value={form.price}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, price: event.target.value }))
                }
                required
              />
              <input
                className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
                placeholder="Count in stock"
                type="number"
                value={form.countInStock}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    countInStock: event.target.value
                  }))
                }
              />
            </div>
            <input
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              placeholder="Image URL"
              value={form.imageUrl}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, imageUrl: event.target.value }))
              }
            />
            <select
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              value={form.category}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, category: event.target.value }))
              }
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              placeholder="Description"
              value={form.description}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  description: event.target.value
                }))
              }
            />
            <input
              className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              placeholder="Tags (comma separated)"
              value={form.tags}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, tags: event.target.value }))
              }
            />
            <label className="flex items-center gap-2 text-sm text-ink-soft">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, featured: event.target.checked }))
                }
              />
              Featured product
            </label>
            <button type="submit" className="action-btn">
              Create product
            </button>
          </form>
        </div>
      </section>
    </AdminGate>
  );
}
