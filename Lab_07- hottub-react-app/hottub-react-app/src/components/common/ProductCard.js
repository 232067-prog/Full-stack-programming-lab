import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <div className="price-line">
        <span className="new-price">${product.price}</span>
        {product.oldPrice ? <span className="old-price">${product.oldPrice}</span> : null}
      </div>
      <div className="card-actions">
        <button type="button">Add to Cart</button>
        <Link to="/product">Details</Link>
      </div>
    </article>
  );
}

export default ProductCard;
