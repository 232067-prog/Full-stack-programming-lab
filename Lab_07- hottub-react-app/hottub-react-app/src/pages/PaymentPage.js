import PageShell from "../components/common/PageShell";

function PaymentPage() {
  return (
    <PageShell title="Checkout Payment" crumb="Payment">
      <form className="form-grid">
        <label>
          Card Holder Name
          <input type="text" placeholder="Name on card" />
        </label>
        <label>
          Card Number
          <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
        </label>
        <label>
          Expiry Date
          <input type="month" />
        </label>
        <label>
          CVV
          <input type="password" placeholder="CVV" />
        </label>
        <button type="button" className="primary-btn">
          Confirm Payment
        </button>
      </form>
    </PageShell>
  );
}

export default PaymentPage;
