import PageShell from "../components/common/PageShell";

function ForgotPage() {
  return (
    <PageShell title="Forgot Password" crumb="Forgot Password">
      <form className="form-grid">
        <label>
          Enter your email
          <input type="email" placeholder="you@example.com" />
        </label>
        <button type="button" className="primary-btn">
          Send Reset Link
        </button>
      </form>
    </PageShell>
  );
}

export default ForgotPage;
