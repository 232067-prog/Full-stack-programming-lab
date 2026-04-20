import Link from "next/link";
import { products } from "../data/products";

export default function HomePage() {
  return (
    <section>
      <h1>Welcome to Product Explorer</h1>
      <p>
        Navigate through the product list and open any product details page using
        dynamic routing.
      </p>
      <div className="action-row">
        <Link href="/products" className="btn-link">
          Browse Product List
        </Link>
        <Link href={`/products/${products[0].id}`} className="btn-link secondary">
          View Featured Product
        </Link>
      </div>
    </section>
  );
}
