import PageShell from "../components/common/PageShell";

function OrderDetailsPage() {
  return (
    <PageShell title="Order Details" crumb="Order Details">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Emerald Bay XL Hot Tub</td>
            <td>1</td>
            <td>$1979</td>
          </tr>
          <tr>
            <td>Cabaret 3 Person Plug and Play</td>
            <td>1</td>
            <td>$999</td>
          </tr>
        </tbody>
      </table>
      <div className="cart-summary">Grand Total: $2978</div>
    </PageShell>
  );
}

export default OrderDetailsPage;
