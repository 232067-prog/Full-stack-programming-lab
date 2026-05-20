import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="content-box not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or was moved.</p>
      <Link to="/" className="primary-btn link-btn">
        Go Back Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
