import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; <a href="account.html">User Account</a> &gt; Edit profile details</div>
<h2 class="page-title">Edit Profile details</h2>
<div class="page-card">
  <div class="form-section">
    <p>Please fill the form below to update your Profile details.</p>
    <p class="required-note">*Required Fields</p>
    <form id="edit-form">
      <div class="form-row"><label>First Name <span class="req">*</span></label><input type="text" name="first_name" required></div>
      <div class="form-row"><label>Last Name <span class="req">*</span></label><input type="text" name="last_name" required></div>
      <div class="form-row"><label>Email <span class="req">*</span></label><input type="email" name="email" required></div>
      <div class="form-row"><label>Current Password <span class="req">*</span></label><input type="password" name="current_password" required></div>
      <div class="form-row"><label>New Password <span class="req">*</span></label><input type="password" name="new_password" required></div>
      <div class="form-row"><label>Confirm Password <span class="req">*</span></label><input type="password" name="confirm_password" required></div>
      <div style="margin-left:150px;margin-top:10px;">
        <button class="btn-green" type="button" onclick="if(validateForm('edit-form'))alert('Profile updated successfully!')">UPDATE DETAILS</button>
      </div>
    </form>
    <p style="margin-top:15px;font-size:12px;color:#cc0000;cursor:pointer;" onclick="history.back()">Back</p>
  </div>
</div>

</div>
</div>
`;

export default function EditAccountPage() {
  return <HtmlBlock html={html} />;
}
