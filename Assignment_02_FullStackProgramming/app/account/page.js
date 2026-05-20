import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; User Account &gt; My Account</div>
<h2 class="page-title">User Profile Details</h2>
<div class="page-card">
  <div class="account-section">
    <h3>User profile</h3>
    <p>Hellow User name! From your account you can view your recent orders, manage your shipping and billing addresses.<br>
    <a href="edit-account.html">edit your password and account details.</a></p>

    <h3 style="margin-top:20px;">Recent Orders</h3>
    <table class="orders-table">
      <thead>
        <tr><th>Order</th><th>Date</th><th>Status</th><th>Total</th><th>Options</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="order-details.html">#303</a></td>
          <td>December 18, 2014</td>
          <td>On hold</td>
          <td>$ 699.00</td>
          <td><button class="btn-view-order" onclick="location.href='order-details.html'">VIEW ORDERS</button></td>
        </tr>
        <tr>
          <td><a href="order-details.html">#307</a></td>
          <td>December 18, 2014</td>
          <td>On hold</td>
          <td>$ 799.00</td>
          <td><button class="btn-view-order" onclick="location.href='order-details.html'">VIEW ORDERS</button></td>
        </tr>
      </tbody>
    </table>

    <h3 style="margin-top:20px;">My Addresses</h3>
    <p>The following addressess will be used on the checkout page by default</p>
    <div class="addresses-grid">
      <div class="address-card">
        <h4>Billing address</h4>
        <p>Farukh Javaid<br>Hottub Spas<br>Plot 10 Tech Society<br>California, CA 20112<br>United State</p>
        <button class="btn-edit-addr" onclick="location.href='edit-billing.html'">EDIT ADRESSES</button>
      </div>
      <div class="address-card">
        <h4>Billing address</h4>
        <p>Farukh Javaid<br>Hottub Spas<br>Plot 10 Tech Society<br>California, CA 20112<br>United State</p>
        <button class="btn-edit-addr" onclick="location.href='edit-shipping.html'">EDIT ADRESSES</button>
      </div>
    </div>
  </div>
</div>

</div>
</div>
`;

export default function AccountPage() {
  return <HtmlBlock html={html} />;
}
