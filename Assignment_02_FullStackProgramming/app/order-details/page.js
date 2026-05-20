import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; <a href="account.html">User Account</a> &gt; Order details</div>
<h2 class="page-title">Order Details</h2>
<div class="page-card">
  <div class="order-meta">
    Order <span>#304</span> was placed on <span>December 21th, 2014</span> and currently is on <span>hold</span>.
  </div>
  <div class="order-block">
    <h3>Yor Order Details</h3>
    <table class="order-table">
      <thead><tr><th>Product</th><th>Quantity</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td><a href="product.html">Five person hottube spa with green light inside</a></td><td>1</td><td>$ 699.00</td></tr>
        <tr><td><a href="product.html">Five person hottube spa with green light inside</a></td><td>1</td><td>$ 699.00</td></tr>
        <tr class="subtotal-row"><td colspan="2" style="text-align:right;">Cart Subtotal:</td><td>$ 1400.00</td></tr>
        <tr><td colspan="2" style="text-align:right;">Shipping:</td><td>Free Shippment</td></tr>
        <tr><td colspan="2" style="text-align:right;">Payment method:</td><td>Direct Bank Transfer</td></tr>
        <tr class="subtotal-row"><td colspan="2" style="text-align:right;">Total with shipping:</td><td>$ 1400.00</td></tr>
      </tbody>
    </table>
  </div>
  <div class="order-block">
    <h3>Yor Bank details</h3>
    <table style="font-size:12px;color:#555;">
      <tr><td style="width:80px;font-weight:bold;">Bank :</td><td>Your Bank Name</td></tr>
      <tr><td style="font-weight:bold;">Acc# :</td><td>December 21 2014</td></tr>
      <tr><td style="font-weight:bold;">BIC :</td><td>$2500</td></tr>
    </table>
  </div>
  <div class="three-col">
    <div>
      <h4>Customer details</h4>
      <table><tr><td style="font-weight:bold;width:100px;">Customer Name</td><td>Farukh Javaid</td></tr><tr><td style="font-weight:bold;">Email</td><td>email@hotubdirect.com</td></tr><tr><td style="font-weight:bold;">Phone</td><td>0888 7578 787</td></tr></table>
    </div>
    <div>
      <h4>Billing address</h4>
      <p>Farukh Javaid<br>Hottub Spas<br>Plot 10 Tech Society<br>California, CA 20112<br>United State</p>
    </div>
    <div>
      <h4>Shipping address</h4>
      <p>Farukh Javaid<br>Hottub Spas<br>Plot 10 Tech Society<br>California, CA 20112<br>United State</p>
    </div>
  </div>
</div>

</div>
</div>
`;

export default function OrderDetailsPage() {
  return <HtmlBlock html={html} />;
}
