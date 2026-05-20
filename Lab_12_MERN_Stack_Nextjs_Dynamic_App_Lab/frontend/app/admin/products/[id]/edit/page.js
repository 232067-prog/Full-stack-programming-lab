"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminGate from "../../../../../components/AdminGate";
import { useAuth } from "../../../../../context/AuthContext";
import { apiFetch } from "../../../../../lib/api";

export default function AdminEditProductPage({ params }) {
  const { user } = useAuth();
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    imageUrl: "",
    category: "",
    featured: false,
    countInStock: 0,
    description: "",
    tags: ""
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      return;
    }
    let active = true;

    async function loadData() {
      try {
        const [product, categoryList] = await Promise.all([
          apiFetch(`/api/products/${params.id}`, { token: user.token }),
          apiFetch("/api/categories", { token: user.token })
        ]);
        if (!active) {
          return;
        }
        setCategories(Array.isArray(categoryList) ? categoryList : []);
        setForm({
          name: product.name || "",
          price: product.price || "",
          imageUrl: product.imageUrl || "",
          category: product.category?.slug || product.category || "",
          featured: Boolean(product.featured),
          countInStock: product.countInStock || 0,
          description: product.description || "",
          tags: product.tags ? product.tags.join(", ") : ""
        });
      } catch (err) {
        if (active) {
          setError(err.message || "Failed to load product");
        }
      }
    }

    loadData();
    return () => {
      active = false;
    };
  }, [params.id, user]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      await apiFetch(`/api/products/${params.id}`, {
        method: "PUT",
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
      router.push("/admin/products");
    } catch (err) {
      setError(err.message || "Failed to update product");
    }
  }

  return (
    <AdminGate>
      <section className="page-section">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl">Edit product</h1>
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
              Save changes
            </button>
          </form>
        </div>
      </section>
    </AdminGate>
  );
}
