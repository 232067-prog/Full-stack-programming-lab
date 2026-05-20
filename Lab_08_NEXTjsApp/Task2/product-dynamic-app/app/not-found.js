import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section>
      <h1>Page Not Found</h1>
      <p>The product or page you requested does not exist.</p>
      <Link href="/" className="btn-link">
        Return Home
      </Link>
    </section>
  );
}
