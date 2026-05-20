import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; <a href="account.html">User Account</a> &gt; My Account</div>
<h2 class="page-title">Edit Billing Address</h2>
<div class="page-card">
  <div class="form-section">
    <p>Please fill the form below to update your Profile details.</p>
    <p class="required-note">*Required Fields</p>
    <form id="billing-form">
      <div class="form-row"><label>First Name <span class="req">*</span></label><input type="text" required></div>
      <div class="form-row"><label>Last Name <span class="req">*</span></label><input type="text" required></div>
      <div class="form-row"><label>Email <span class="req">*</span></label><input type="email" required></div>
      <div class="form-row"><label>Phone <span class="req">*</span></label><input type="tel" required></div>
      <div class="form-row"><label>City <span class="req">*</span></label><input type="text" required></div>
      <div class="form-row"><label>State <span class="req">*</span></label><input type="text" required></div>
      <div class="form-row"><label>Zip Code <span class="req">*</span></label><input type="text" required></div>
      <div class="form-row"><label>Country <span class="req">*</span></label><input type="text" required></div>
      <div style="margin-left:150px;margin-top:10px;">
        <button class="btn-primary" type="button" onclick="if(validateForm('billing-form'))alert('Billing address updated!')">UPDATE ADDRESS</button>
      </div>
    </form>
  </div>
</div>

</div>
</div>
`;

export default function EditBillingPage() {
  return <HtmlBlock html={html} />;
}
