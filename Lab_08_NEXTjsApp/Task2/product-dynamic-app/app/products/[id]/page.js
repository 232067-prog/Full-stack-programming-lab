import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <section>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price.toLocaleString()}</p>

      <div className="action-row">
        <Link href="/products" className="btn-link">
          Back to Product List
        </Link>
        <Link href="/" className="btn-link secondary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
