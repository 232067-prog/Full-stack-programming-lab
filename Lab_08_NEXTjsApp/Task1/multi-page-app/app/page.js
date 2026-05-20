import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Welcome to Task 1 Home</h1>
      <p>
        This is a simple multi-page Next.js app with shared Header and Footer.
      </p>
      <div className="action-row">
        <Link href="/about" className="btn-link">
          Go to About
        </Link>
        <Link href="/contact" className="btn-link secondary">
          Go to Contact
        </Link>
      </div>
    </section>
  );
}
