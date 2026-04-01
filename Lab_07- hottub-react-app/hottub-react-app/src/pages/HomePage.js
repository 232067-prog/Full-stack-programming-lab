import Hero from "../components/home/Hero";
import PromoRow from "../components/home/PromoRow";
import ProductCard from "../components/common/ProductCard";
import { products } from "../data/products";

function HomePage() {
  return (
    <>
      <Hero />
      <PromoRow />
      <section className="content-box products-section">
        <h3 className="section-title">New Products</h3>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
