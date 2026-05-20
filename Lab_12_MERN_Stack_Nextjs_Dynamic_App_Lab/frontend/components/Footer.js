import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 bg-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            Rustik Plank
          </h3>
          <p className="mt-3 text-sm text-ink-soft">
            Artisan furniture crafted with natural timber, soft finishes, and
            mindful details.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">
            Informations
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/terms" className="hover:text-ink">
                Terms and conditions
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-ink">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">
            My account
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/account" className="hover:text-ink">
                Your account
              </Link>
            </li>
            <li>
              <Link href="/orders" className="hover:text-ink">
                Orders
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-ink">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">
            Help and more
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>Delivery</li>
            <li>Service</li>
            <li>Gift cards</li>
            <li>Manufacturers</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-amber-100 py-6 text-center text-xs text-ink-soft">
        2026 Rustik Plank Furniture. All rights reserved.
      </div>
    </footer>
  );
}
