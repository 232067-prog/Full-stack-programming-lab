import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Product List" }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link href="/" className="brand">
          Next Lab Task 2
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
