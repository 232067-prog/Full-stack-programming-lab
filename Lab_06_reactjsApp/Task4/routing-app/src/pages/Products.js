import React, { useState } from 'react';

function Products() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, title: 'Wireless Mouse', description: 'Ergonomic mouse with smooth tracking.' },
    { id: 2, title: 'Mechanical Keyboard', description: 'RGB keyboard with tactile keys.' },
    { id: 3, title: 'HD Monitor', description: '24-inch display suitable for study and work.' },
  ];

  const addToCart = (title) => {
    setCartCount((prevCount) => prevCount + 1);
    window.alert(`${title} added to cart.`);
  };

  return (
    <section className="page-card">
      <div className="products-header">
        <h2>Products</h2>
        <p className="cart-pill">Cart Items: {cartCount}</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button className="primary-btn" onClick={() => addToCart(product.title)}>
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
