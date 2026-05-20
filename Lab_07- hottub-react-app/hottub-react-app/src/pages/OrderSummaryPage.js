import { Link } from "react-router-dom";
import PageShell from "../components/common/PageShell";

function OrderSummaryPage() {
  return (
    <PageShell title="Order Summary" crumb="Order Summary">
      <div className="stack">
        <p>Order #303 has been successfully placed.</p>
        <p>Items: 2</p>
        <p>Total: $2978</p>
        <Link to="/order-details">View full order details</Link>
      </div>
    </PageShell>
  );
}

export default OrderSummaryPage;
