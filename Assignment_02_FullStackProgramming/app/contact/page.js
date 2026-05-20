import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; Customer Support &gt; Contact Us</div>
<h2 class="page-title">Contact Us</h2>
<div class="page-card">
  <div class="form-section">
    <h3>Contact Our Customer Support</h3>
    <p>To create a new account, please fill in the required information below. Passwords are case sensitive and must be 6 to 20 characters long</p>
    <h3 style="margin-top:15px;">Online Sales &amp; Customer Support</h3>
    <p><strong>Call Us:</strong> 020 78989845</p>
    <div class="contact-info">
      <div class="contact-col">
        <h4>Retail Store Location</h4>
        <p>Hottub Store Loc<br>5000N, Ford avenue<br>Newyourk, NY 20145<br>888.123.1234</p>
      </div>
      <div style="border-left:1px solid #ddd;margin:0 10px;"></div>
      <div class="contact-col">
        <h4>Services</h4>
        <p>Hottub Store Loc<br>5000N, Ford avenue<br>Newyourk, NY 20145<br>888.123.1234</p>
      </div>
    </div>

    <h3 style="margin-top:20px;">Contact Us</h3>
    <form id="contact-form">
      <div class="form-row"><label>First name <span class="req">*</span></label><input type="text" required></div>
      <div class="form-row"><label>Email <span class="req">*</span></label><input type="email" required></div>
      <div class="form-row"><label>Subject <span class="req">*</span></label><input type="text" required></div>
      <div class="form-row"><label>Your Message</label><textarea style="max-width:350px;height:100px;"></textarea></div>
      <div style="margin-left:150px;margin-top:10px;">
        <button class="btn-primary" type="button" onclick="if(validateForm('contact-form'))alert('Message sent! We will get back to you shortly.')">SUBMIT</button>
      </div>
    </form>
  </div>
</div>

</div>
</div>
`;

export default function ContactPage() {
  return <HtmlBlock html={html} />;
}
