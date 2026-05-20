import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; Shopping Cart</div>
<h2 class="page-title">Shopping Cart</h2>
<div class="page-card">
  <h3 style="font-size:13px;font-weight:bold;margin-bottom:10px;">Your Shopping Cart</h3>
  <div class="cart-success">&#10003; The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in &nbsp; was just added to cart.</div>
  <div style="display:flex;justify-content:space-between;margin-bottom:5px;font-size:12px;font-weight:bold;">
    <span>Items added: <a href="account.html" style="color:#cc0000;">user_name</a></span>
    <span>Items total</span>
  </div>
  <table class="cart-table">
    <tbody>
      <tr data-price="9">
        <td><img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=120&h=90&fit=crop&q=80" alt="Spa"></td>
        <td>
          <div class="item-name">The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version</div>
          <div class="item-desc">220 V/50 AMP— 4.5KW Heater 110 V/15 AMP— 1KW Heater!<br>convertible To 220 V / 4KW Heater</div>
          <div class="item-links"><a href="product.html">Remove</a> | <a href="product.html">Edit Your Order</a></div>
        </td>
        <td>
          Quantity: <select onchange="updateQty(this)"><option>10</option><option>1</option><option>2</option><option>5</option></select><br>
          <span class="item-shipping" style="font-size:11px;color:#666;">Standard (7 - 10 business days)</span>
        </td>
        <td><span class="item-total">$9.00</span></td>
      </tr>
      <tr data-price="9">
        <td><img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt="Spa"></td>
        <td>
          <div class="item-name">The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version</div>
          <div class="item-desc">220 V/50 AMP— 4.5KW Heater 110 V/15 AMP— 1KW Heater!<br>convertible To 220 V / 4KW Heater</div>
          <div class="item-links"><a href="product.html">Remove</a> | <a href="product.html">Edit Your Order</a></div>
        </td>
        <td>
          Quantity: <select onchange="updateQty(this)"><option>10</option><option>1</option><option>2</option><option>5</option></select><br>
          <span class="item-shipping" style="font-size:11px;color:#666;">Standard (7 - 10 business days)</span>
        </td>
        <td><span class="item-total">$9.00</span></td>
      </tr>
    </tbody>
  </table>
  <div class="cart-summary">
    Cart summary (2 items)<br>
    Total: <span class="cart-total-val">$21.00</span>
  </div>
  <div class="cart-actions">
    <button class="btn-continue" onclick="location.href='category.html'">CONTINUE SHOPPING</button>
    <button class="btn-checkout" onclick="location.href='payment.html'">PROCEED TO CHECKOUT</button>
  </div>

  <div class="also-viewed" style="margin-top:25px;">
    <h3>Customers Who Viewed This Item Also</h3>
    <div style="position:relative;overflow:hidden;">
      <button class="av-nav prev">&lsaquo;</button>
      <div class="also-viewed-slider" style="padding:0 25px;">
        <div class="av-item"><img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
        <div class="av-item"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
        <div class="av-item"><img src="https://images.unsplash.com/photo-1596178060810-72660ee8b9e2?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
        <div class="av-item"><img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
      </div>
      <button class="av-nav next">&rsaquo;</button>
    </div>
  </div>
</div>

</div>
</div>
`;

export default function CartPage() {
  return <HtmlBlock html={html} />;
}
