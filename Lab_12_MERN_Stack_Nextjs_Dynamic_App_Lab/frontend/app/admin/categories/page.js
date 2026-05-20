"use client";

import { useEffect, useState } from "react";
import AdminGate from "../../../components/AdminGate";
import { useAuth } from "../../../context/AuthContext";
import { apiFetch } from "../../../lib/api";
import LoadingState from "../../../components/LoadingState";

export default function AdminCategoriesPage() {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    imageUrl: "",
    sortOrder: 0
  });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    imageUrl: "",
    sortOrder: 0
  });

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    let active = true;
    async function loadCategories() {
      try {
        const data = await apiFetch("/api/categories", { token: user.token });
        if (active) {
          setCategories(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Failed to load categories");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadCategories();
    return () => {
      active = false;
    };
  }, [user]);

  async function handleCreate(event) {
    event.preventDefault();
    setError("");
    try {
      const created = await apiFetch("/api/categories", {
        method: "POST",
        token: user.token,
        body: { ...form, sortOrder: Number(form.sortOrder) }
      });
      setCategories((prev) => [...prev, created]);
      setForm({ name: "", description: "", imageUrl: "", sortOrder: 0 });
    } catch (err) {
      setError(err.message || "Failed to create category");
    }
  }

  function startEdit(category) {
    setEditingId(category._id);
    setEditForm({
      name: category.name,
      description: category.description,
      imageUrl: category.imageUrl,
      sortOrder: category.sortOrder || 0
    });
  }

  async function handleUpdate(event) {
    event.preventDefault();
    setError("");
    try {
      const updated = await apiFetch(`/api/categories/${editingId}`, {
        method: "PUT",
        token: user.token,
        body: { ...editForm, sortOrder: Number(editForm.sortOrder) }
      });
      setCategories((prev) =>
        prev.map((item) => (item._id === updated._id ? updated : item))
      );
      setEditingId(null);
    } catch (err) {
      setError(err.message || "Failed to update category");
    }
  }

  async function handleDelete(id) {
    await apiFetch(`/api/categories/${id}`, {
      method: "DELETE",
      token: user.token
    });
    setCategories((prev) => prev.filter((item) => item._id !== id));
  }

  return (
    <AdminGate>
      <section className="page-section">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-3xl">Categories</h1>
          {error ? (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}
          {loading ? (
            <LoadingState label="Loading categories" />
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <form
                className="space-y-3 rounded-2xl border border-amber-100 bg-white/80 p-5 shadow-soft"
                onSubmit={handleCreate}
              >
                <h2 className="text-lg font-semibold">Add category</h2>
                <input
                  className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                  placeholder="Name"
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  required
                />
                <input
                  className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
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
                  className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                  placeholder="Image URL"
                  value={form.imageUrl}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, imageUrl: event.target.value }))
                  }
                />
                <input
                  className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                  placeholder="Sort order"
                  type="number"
                  value={form.sortOrder}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, sortOrder: event.target.value }))
                  }
                />
                <button type="submit" className="action-btn">
                  Create category
                </button>
              </form>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div
                    key={category._id}
                    className="rounded-2xl border border-amber-100 bg-white/80 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold">{category.name}</p>
                        <p className="text-sm text-ink-soft">
                          {category.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          className="text-xs uppercase tracking-[0.2em] text-accent"
                          onClick={() => startEdit(category)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="text-xs uppercase tracking-[0.2em] text-ink-soft"
                          onClick={() => handleDelete(category._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {editingId === category._id ? (
                      <form className="mt-4 space-y-2" onSubmit={handleUpdate}>
                        <input
                          className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                          value={editForm.name}
                          onChange={(event) =>
                            setEditForm((prev) => ({
                              ...prev,
                              name: event.target.value
                            }))
                          }
                          required
                        />
                        <input
                          className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                          value={editForm.description}
                          onChange={(event) =>
                            setEditForm((prev) => ({
                              ...prev,
                              description: event.target.value
                            }))
                          }
                        />
                        <input
                          className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                          value={editForm.imageUrl}
                          onChange={(event) =>
                            setEditForm((prev) => ({
                              ...prev,
                              imageUrl: event.target.value
                            }))
                          }
                        />
                        <input
                          className="w-full rounded-xl border border-amber-100 bg-white/80 px-4 py-2 text-sm"
                          type="number"
                          value={editForm.sortOrder}
                          onChange={(event) =>
                            setEditForm((prev) => ({
                              ...prev,
                              sortOrder: event.target.value
                            }))
                          }
                        />
                        <div className="flex gap-2">
                          <button type="submit" className="action-btn">
                            Save
                          </button>
                          <button
                            type="button"
                            className="text-xs uppercase tracking-[0.2em] text-ink-soft"
                            onClick={() => setEditingId(null)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </AdminGate>
  );
}
