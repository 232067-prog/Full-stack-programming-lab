import PageShell from "../components/common/PageShell";
import ProductCard from "../components/common/ProductCard";
import { products } from "../data/products";

function CategoryPage() {
  return (
    <PageShell title="Top Product Listing" crumb="Category">
      <div className="category-layout">
        <aside className="sidebar">
          <h3>Shopping Options</h3>
          <ul>
            <li>2 - 4 People</li>
            <li>5 - 7 People</li>
            <li>8 People and More</li>
            <li>Plug and Play 110 Volt</li>
            <li>TV Stereo Spas</li>
          </ul>
        </aside>
        <div className="products-area">
          <div className="toolbar">6 Items</div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={`cat-${product.id}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export default CategoryPage;
