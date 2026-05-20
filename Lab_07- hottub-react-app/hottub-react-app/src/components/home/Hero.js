import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-slider content-box">
      <div className="hero-text">
        <h1>Barrier Reef 158 Jet Super Spa</h1>
        <p>Extra large and deep 8-person spa with premium jet package and entertainment options.</p>
        <div className="hero-price">$4899.00</div>
        <Link to="/product" className="hero-btn">
          More Details
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=320&fit=crop&q=85"
        alt="Hot tub showcase"
      />
    </section>
  );
}

export default Hero;
