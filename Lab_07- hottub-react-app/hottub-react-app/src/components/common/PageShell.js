import { Link } from "react-router-dom";

function PageShell({ title, crumb, children }) {
  return (
    <section className="content-box">
      {crumb ? (
        <div className="breadcrumb">
          <Link to="/">Home</Link> / {crumb}
        </div>
      ) : null}
      {title ? <h2 className="page-title">{title}</h2> : null}
      <div className="page-card">{children}</div>
    </section>
  );
}

export default PageShell;
