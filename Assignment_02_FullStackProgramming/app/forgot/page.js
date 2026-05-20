import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; My Account</div>
<h2 class="page-title">Forget Your Password</h2>
<div class="page-card">
  <div class="form-section">
    <h3>User Account Details</h3>
    <p>Please enter your email address below to retrieve your password.</p>
    <p class="required-note">*Required Fields</p>
    <div class="form-row"><label>Email <span class="req">*</span></label><input type="email" required></div>
    <div class="remember-row" style="margin-left:150px;"><input type="checkbox" id="rem2"><label for="rem2">Remember me th next time I visit</label></div>
    <div style="margin-left:150px;margin-top:10px;">
      <button class="btn-primary" onclick="alert('Password reset link sent to your email!')">SUBMIT</button>
    </div>
  </div>
</div>

</div>
</div>
`;

export default function ForgotPage() {
  return <HtmlBlock html={html} />;
}
