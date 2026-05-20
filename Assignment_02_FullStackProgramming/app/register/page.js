import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; Register</div>
<h2 class="page-title">Create New Account</h2>
<div class="page-card">
  <div class="form-section">
    <h3>User Account Details</h3>
    <p>To create a new account, please fill in the required information below. Passwords are case sensitive and must be 6 to 20 characters long</p>
    <p class="required-note">*Required Fields</p>
    <form id="reg-form">
      <div class="form-row"><label>Email Address <span class="req">*</span></label><input type="email" name="email" required></div>
      <div class="form-row"><label>Password <span class="req">*</span></label><input type="password" name="new_password" required></div>
      <div class="form-row"><label>Re-enter Password <span class="req">*</span></label><input type="password" name="re_password" required></div>
      <div class="form-row"><label>First Name</label><input type="text" name="first_name"></div>
      <div class="form-row"><label>Last Name</label><input type="text" name="last_name"></div>
      <div class="remember-row" style="margin-left:150px;"><input type="checkbox" id="newsletter"><label for="newsletter">Yes, I want to receive email about new products and specials!</label></div>
      <div style="margin-left:150px;margin-top:10px;display:flex;align-items:center;gap:15px;">
        <button class="btn-primary" type="button" onclick="if(validateForm('reg-form'))location.href='account.html'">CREATE ACCOUNT</button>
        <a href="forgot.html" class="forgot-link">Forgor your password?</a>
      </div>
    </form>
  </div>
</div>

</div>
</div>
`;

export default function RegisterPage() {
  return <HtmlBlock html={html} />;
}
