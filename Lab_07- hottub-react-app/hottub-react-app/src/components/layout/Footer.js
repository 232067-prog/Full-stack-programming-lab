import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Contact Us</h4>
          <p>yoursitename.com</p>
          <p>Call 24/7: 888 - 201 - 8899</p>
          <p>servicemail@yoursitename.com</p>
        </div>
        <div>
          <h4>Information</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <div>
          <h4>My Account</h4>
          <Link to="/login">Sign In</Link>
          <Link to="/cart">View Cart</Link>
          <Link to="/account">Wishlist</Link>
        </div>
      </div>
      <div className="footer-bottom">Copyright 2014 Hottubspaservice.com. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
