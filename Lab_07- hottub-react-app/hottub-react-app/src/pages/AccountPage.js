import { Link } from "react-router-dom";
import PageShell from "../components/common/PageShell";

function AccountPage() {
  return (
    <PageShell title="User Profile Details" crumb="My Account">
      <section className="stack">
        <h3>User Profile</h3>
        <p>
          Hello user! From your account you can view your recent orders and manage shipping and
          billing addresses.
        </p>
        <p>
          <Link to="/edit-account">Edit your password and account details</Link>
        </p>
      </section>

      <section className="stack">
        <h3>Recent Orders</h3>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#303</td>
              <td>December 18, 2014</td>
              <td>On hold</td>
              <td>$699</td>
              <td>
                <Link to="/order-details">View</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="address-grid">
        <article className="address-card">
          <h4>Billing Address</h4>
          <p>Farukh Javaid, California, US</p>
          <Link to="/edit-billing">Edit address</Link>
        </article>
        <article className="address-card">
          <h4>Shipping Address</h4>
          <p>Farukh Javaid, California, US</p>
          <Link to="/edit-shipping">Edit address</Link>
        </article>
      </section>
    </PageShell>
  );
}

export default AccountPage;
