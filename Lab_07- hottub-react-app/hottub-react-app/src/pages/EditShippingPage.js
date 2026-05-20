import PageShell from "../components/common/PageShell";

function EditShippingPage() {
  return (
    <PageShell title="Edit Shipping Address" crumb="Edit Shipping">
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
          Save Shipping Address
        </button>
      </form>
    </PageShell>
  );
}

export default EditShippingPage;
