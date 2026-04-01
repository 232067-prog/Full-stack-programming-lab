import { Link } from "react-router-dom";
import { accountLinks } from "../../data/siteData";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="support">
          Call for Customer support: <span>020 38989565</span>
        </div>
        <div className="top-links">
          {accountLinks.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
