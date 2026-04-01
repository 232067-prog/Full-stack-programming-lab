import PageShell from "../components/common/PageShell";
import { products } from "../data/products";

function ProductPage() {
  const product = products[0];

  return (
    <PageShell title={product.name} crumb="Product Details">
      <div className="product-details-grid">
        <img src={product.image} alt={product.name} className="product-main-image" />
        <div>
          <p className="product-caption">Model: B22CS309NSS</p>
          <p>{product.description}</p>
          <p>Capacity: {product.capacity}</p>
          <p>Jets: {product.jets}</p>
          <div className="price-line">
            <span className="new-price">${product.price}</span>
            <span className="old-price">${product.oldPrice}</span>
          </div>
          <button type="button" className="primary-btn">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="tab-box">
        <h4>Product Details</h4>
        <p>
          Energy efficient shell, hydrotherapy seating and premium accessories inspired by your
          Assignment 01 product page layout.
        </p>
      </div>
    </PageShell>
  );
}

export default ProductPage;
