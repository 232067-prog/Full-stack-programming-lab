import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; My Account</div>
<h2 class="page-title">Login Or Creat Account</h2>
<div class="page-card">
  <div class="auth-layout">
    <div class="auth-col" style="padding-right:20px;border-right:1px solid #ddd;">
      <div class="form-section">
        <h3>User Login Details</h3>
        <p>Please sign in below with your login information.</p>
        <p class="required-note">*Required Fields</p>
        <div class="form-row"><label>Email <span class="req">*</span></label><input type="email" name="email" required></div>
        <div class="form-row"><label>Password <span class="req">*</span></label><input type="password" name="password" required></div>
        <div class="remember-row"><input type="checkbox" id="rem"><label for="rem">Remember me th next time I visit</label></div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:8px;">
          <button class="btn-signin" onclick="if(validateForm('login-form'))location.href='account.html'">SIGN IN</button>
          <a href="forgot.html" class="forgot-link">Forgor your password?</a>
        </div>
      </div>
    </div>
    <div class="auth-col" style="padding-left:20px;">
      <div class="form-section">
        <h3>New Customer</h3>
        <div class="new-customer-info">
          <p>As a registered Abt.com customer you can:</p>
          <ul>
            <li>Store billing &amp; shipping information</li>
            <li>Check your order status</li>
            <li>Track your delivery Status</li>
            <li>View your order history</li>
          </ul>
        </div>
        <button class="btn-create" onclick="location.href='register.html'">CREATE NEW ACCOUNT</button>
      </div>
    </div>
  </div>
</div>
<div class="also-viewed">
  <h3>Customers Who Viewed This Item Also</h3>
  <div style="position:relative;overflow:hidden;">
    <button class="av-nav prev">&lsaquo;</button>
    <div class="also-viewed-slider" style="padding:0 25px;">
      <div class="av-item"><img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
      <div class="av-item"><img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
      <div class="av-item"><img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
      <div class="av-item"><img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
    </div>
    <button class="av-nav next">&rsaquo;</button>
  </div>
</div>

</div>
</div>
`;

export default function LoginPage() {
  return <HtmlBlock html={html} />;
}
