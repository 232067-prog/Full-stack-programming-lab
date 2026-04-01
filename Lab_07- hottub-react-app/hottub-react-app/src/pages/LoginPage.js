import { Link } from "react-router-dom";
import PageShell from "../components/common/PageShell";

function LoginPage() {
  return (
    <PageShell title="Sign In" crumb="Login">
      <form className="form-grid">
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter password" />
        </label>
        <button type="button" className="primary-btn">
          Login
        </button>
      </form>
      <p>
        <Link to="/forgot">Forgot password?</Link>
      </p>
      <p>
        New user? <Link to="/register">Create account</Link>
      </p>
    </PageShell>
  );
}

export default LoginPage;
