import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="brand">HOTSPRING</span>
          <span className="sub">Portable Spas</span>
        </Link>
        <div className="cart-area">
          <Link to="/cart" className="cart-icon">
            My Cart
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
