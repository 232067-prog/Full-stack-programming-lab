"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { apiFetch } from "../lib/api";

const fallbackCategories = [
  { name: "Beds", slug: "beds" },
  { name: "Cabinets", slug: "cabinets" },
  { name: "Bookcases", slug: "bookcases" },
  { name: "Boxes", slug: "boxes" },
  { name: "Chairs", slug: "chairs" },
  { name: "Tables", slug: "tables" }
];

export default function Header() {
  const { count } = useCart();
  const { user, logout } = useAuth();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState(fallbackCategories);

  useEffect(() => {
    let active = true;
    async function loadCategories() {
      try {
        const data = await apiFetch("/api/categories");
        if (active && Array.isArray(data) && data.length > 0) {
          setCategories(data);
        }
      } catch (error) {
        if (active) {
          setCategories(fallbackCategories);
        }
      }
    }
    loadCategories();
    return () => {
      active = false;
    };
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      return;
    }
    router.push(`/search?query=${encodeURIComponent(trimmed)}`);
    setQuery("");
  }

  return (
    <header className="w-full">
      <div className="bg-white/90 backdrop-blur border-b border-amber-100 shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-2 text-[0.7rem] uppercase tracking-[0.24em] text-ink">
          <div className="flex flex-wrap items-center gap-5">
            <span>Handcrafted furniture studio</span>
            <span className="hidden sm:inline">Call: 07584 031409</span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/account" className="hover:text-ink">
              My account
            </Link>
            {user ? (
              <button
                type="button"
                onClick={logout}
                className="hover:text-ink"
              >
                Sign out
              </button>
            ) : (
              <>
                <Link href="/login" className="hover:text-ink">
                  Login
                </Link>
                <Link href="/register" className="hover:text-ink">
                  Register
                </Link>
              </>
            )}
            <Link href="/cart" className="hover:text-ink">
              Cart ({count})
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-6 lg:grid-cols-[1.1fr_2fr_1fr]">
        <div className="flex flex-col">
          <Link href="/" className="text-3xl font-semibold">
            Rustik <span className="text-accent">Plank</span>
          </Link>
          <span className="text-xs uppercase tracking-[0.25em] text-ink-soft">
            Crafted furniture
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-7 text-[0.78rem] uppercase tracking-[0.26em] text-ink font-semibold">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <Link href="/about" className="hover:text-ink">
            About us
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
          <Link href="/account" className="hover:text-ink">
            Account
          </Link>
          <Link href="/admin" className="hover:text-ink">
            Admin
          </Link>
        </nav>

        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-2 shadow-sm"
        >
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search furniture"
            className="w-full bg-transparent text-sm outline-none"
          />
          <button type="submit" className="text-xs font-semibold text-accent">
            Search
          </button>
        </form>
      </div>

      <div className="border-y border-amber-100 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 py-4 text-[0.7rem] uppercase tracking-[0.26em] text-ink font-semibold">
          {categories.map((category) => (
            <Link
              key={category._id || category.slug}
              href={`/category/${category.slug}`}
              className="hover:text-ink"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
