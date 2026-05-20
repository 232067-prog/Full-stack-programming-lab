import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; Payments</div>
<h2 class="page-title">Secure Checkouts</h2>
<div class="page-card">
  <h3 style="font-size:13px;font-weight:bold;color:#333;margin-bottom:15px;">Payment Information</h3>
  <div class="payment-layout">
    <div class="payment-left">
      <div class="payment-step-title">Step 1. &nbsp; <span>Billing Address</span></div>
      <form id="payment-form">
        <div class="form-row"><label>First Name <span class="req">*</span></label><input type="text" required></div>
        <div class="form-row"><label>Last Name <span class="req">*</span></label><input type="text" required></div>
        <div class="form-row"><label>Email <span class="req">*</span></label><input type="email" required></div>
        <div class="form-row"><label>Phone <span class="req">*</span></label><input type="tel" required></div>
        <div class="form-row"><label>Address <span class="req">*</span></label><input type="text" required></div>
        <div class="form-row"><label>City <span class="req">*</span></label><select style="flex:1;max-width:300px;padding:5px;border:1px solid #ccc;font-size:12px;"><option>New York</option></select></div>
        <div class="form-row"><label>State <span class="req">*</span></label><input type="text" value="New York" required></div>
        <div class="form-row"><label>Zip Code <span class="req">*</span></label><input type="text" required></div>
        <div class="form-row"><label>Country <span class="req">*</span></label><select style="flex:1;max-width:300px;padding:5px;border:1px solid #ccc;font-size:12px;"><option>United States</option></select></div>
        <div style="margin-left:150px;"><a class="ship-to-diff" onclick="document.getElementById('ship-fields').style.display=document.getElementById('ship-fields').style.display=='none'?'block':'none'">&#9744; Ship to a different address</a></div>
        <div id="ship-fields" style="display:none;margin-top:10px;">
          <div class="form-row"><label>First Name <span class="req">*</span></label><input type="text"></div>
          <div class="form-row"><label>Last Name <span class="req">*</span></label><input type="text"></div>
          <div class="form-row"><label>Email <span class="req">*</span></label><input type="email"></div>
          <div class="form-row"><label>Phone <span class="req">*</span></label><input type="tel"></div>
          <div class="form-row"><label>Address <span class="req">*</span></label><input type="text"></div>
          <div class="form-row"><label>City <span class="req">*</span></label><select style="flex:1;max-width:300px;padding:5px;border:1px solid #ccc;font-size:12px;"><option>New York</option></select></div>
          <div class="form-row"><label>State <span class="req">*</span></label><input type="text" value="New York"></div>
          <div class="form-row"><label>Zip Code <span class="req">*</span></label><input type="text"></div>
          <div class="form-row"><label>Country <span class="req">*</span></label><select style="flex:1;max-width:300px;padding:5px;border:1px solid #ccc;font-size:12px;"><option>United States</option></select></div>
        </div>
      </form>
    </div>
    <div class="payment-right">
      <div class="payment-step-title">Step 2. &nbsp; <span>Card Details</span></div>
      <form id="card-form">
        <div class="card-row"><label>Card Type <span class="req">*</span></label><input type="text" placeholder="Master Card" required style="flex:1;"></div>
        <div class="card-row"><label>Card Number <span class="req">*</span></label><input type="text" placeholder="1234 5678 9123 4567" required style="flex:1;"></div>
        <div class="card-row"><label>Expiration <span class="req">*</span></label>
          <select style="width:50px;padding:4px;border:1px solid #ccc;font-size:11px;"><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option></select>
          <select style="width:90px;padding:4px;border:1px solid #ccc;font-size:11px;"><option>December</option><option>January</option></select>
          <select style="width:55px;padding:4px;border:1px solid #ccc;font-size:11px;"><option>2015</option><option>2016</option><option>2017</option></select>
        </div>
        <div class="card-row"><label>Secure Code <span class="req">*</span></label><input type="text" required style="flex:1;"></div>
        <p style="font-size:11px;color:#666;margin:8px 0;">Note: Please ensure the billing address you enter matches your credit card billing address.</p>
        <div style="margin-bottom:10px;"><label style="font-size:11px;color:#cc0000;"><input type="checkbox"> I accept terms and <a href="terms.html" style="color:#cc0000;">Conditions</a></label></div>
        <div class="payment-step-title" style="margin-top:15px;">Step 3. &nbsp; <span>Review Your Order</span></div>
        <table class="review-table">
          <thead><tr><th>Item name</th><th>price</th><th>Quantity</th><th>Total</th></tr></thead>
          <tbody>
            <tr><td>XS SCYVA X SERIES 119</td><td>$ 699</td><td>1000</td><td>12000</td></tr>
          </tbody>
        </table>
        <div style="text-align:right;font-size:12px;margin-bottom:10px;">Total with shipping: &nbsp; <strong>$ 699.00</strong></div>
        <div style="text-align:right;">
          <button class="btn-place-order" type="button" onclick="if(validateForm('payment-form')&&validateForm('card-form'))location.href='order-summary.html'">&#128274; Place Your Order &#9658;</button>
        </div>
      </form>
      <div style="margin-top:15px;border-top:1px solid #ddd;padding-top:10px;text-align:right;font-size:12px;">
        Cart summary (2 items)<br>Total: $21.00<br>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:8px;">
          <button class="btn-continue" onclick="location.href='category.html'">Continue shopping</button>
          <button class="btn-checkout">Proceed to checkout</button>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
</div>
`;

export default function PaymentPage() {
  return <HtmlBlock html={html} />;
}
