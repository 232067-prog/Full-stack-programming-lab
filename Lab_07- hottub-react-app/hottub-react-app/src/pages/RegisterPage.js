import PageShell from "../components/common/PageShell";

function RegisterPage() {
  return (
    <PageShell title="Register" crumb="Create Account">
      <form className="form-grid">
        <label>
          Full Name
          <input type="text" placeholder="Enter full name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Create password" />
        </label>
        <button type="button" className="primary-btn">
          Register
        </button>
      </form>
    </PageShell>
  );
}

export default RegisterPage;
