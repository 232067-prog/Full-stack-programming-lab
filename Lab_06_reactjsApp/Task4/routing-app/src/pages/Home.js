import React from 'react';

function Home() {
  return (
    <section className="page-card">
      <h2>Welcome to Smart Picks</h2>
      <p className="lead-text">
        Discover curated tech essentials designed for everyday productivity and comfort.
      </p>
      <div className="feature-grid">
        <article className="feature-item">
          <h3>Top Quality</h3>
          <p>Carefully selected products with reliable performance and modern design.</p>
        </article>
        <article className="feature-item">
          <h3>Fast Support</h3>
          <p>Friendly customer care and quick response for all your purchase queries.</p>
        </article>
        <article className="feature-item">
          <h3>Great Value</h3>
          <p>Affordable pricing with transparent details for every listed product.</p>
        </article>
      </div>
    </section>
  );
}

export default Home;
