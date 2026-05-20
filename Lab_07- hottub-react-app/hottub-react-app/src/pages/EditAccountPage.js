import PageShell from "../components/common/PageShell";

function EditAccountPage() {
  return (
    <PageShell title="Edit Account" crumb="Edit Account">
      <form className="form-grid">
        <label>
          Full Name
          <input type="text" placeholder="Enter full name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="New password" />
        </label>
        <button type="button" className="primary-btn">
          Save Changes
        </button>
      </form>
    </PageShell>
  );
}

export default EditAccountPage;
