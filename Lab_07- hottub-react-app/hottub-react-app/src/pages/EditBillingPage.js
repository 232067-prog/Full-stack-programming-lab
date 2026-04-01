import PageShell from "../components/common/PageShell";

function EditBillingPage() {
  return (
    <PageShell title="Edit Billing Address" crumb="Edit Billing">
      <form className="form-grid">
        <label>
          Address Line 1
          <input type="text" placeholder="House number and street" />
        </label>
        <label>
          City
          <input type="text" placeholder="City" />
        </label>
        <label>
          State
          <input type="text" placeholder="State" />
        </label>
        <label>
          Zip Code
          <input type="text" placeholder="Zip" />
        </label>
        <button type="button" className="primary-btn">
          Save Billing Address
        </button>
      </form>
    </PageShell>
  );
}

export default EditBillingPage;
