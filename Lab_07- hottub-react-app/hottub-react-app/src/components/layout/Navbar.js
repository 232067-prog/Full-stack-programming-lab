import { NavLink } from "react-router-dom";
import { navLinks, quickLinks } from "../../data/siteData";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-layout">
        <div className="nav-links">
          {navLinks.map((item) => (
            <NavLink key={item.label} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-links compact-links">
          {quickLinks.map((item) => (
            <NavLink key={item.label} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
