import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="price">${product.price.toLocaleString()}</p>
          <Link href={`/products/${product.id}`} className="btn-link">
            View Details
          </Link>
        </article>
      ))}
    </div>
  );
}
