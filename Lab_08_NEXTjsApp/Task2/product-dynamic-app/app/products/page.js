import ProductList from "../../components/ProductList";
import { products } from "../../data/products";

export default function ProductsPage() {
  return (
    <section>
      <h1>Product List</h1>
      <p>Select a product to open its dynamic details page.</p>
      <ProductList products={products} />
    </section>
  );
}
