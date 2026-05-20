import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="../index.html">Home</a> &gt; About Us</div>
<h2 class="page-title">About Us</h2>
<div class="page-card">
  <h3 style="font-size:14px;font-weight:bold;color:#333;border-bottom:1px solid #eee;padding-bottom:6px;margin-bottom:12px;">Welcome to the Company</h3>
  <div style="overflow:hidden;">
    <div class="about-img">
      <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=300&h=220&fit=crop&q=80" alt="Company">
    </div>
    <p class="about-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. This is Photoshop's version of Lorem Ipsum.</p>
    <p class="about-text" style="margin-top:10px;">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.</p>
  </div>

  <h3 style="font-size:14px;font-weight:bold;color:#333;border-bottom:1px solid #eee;padding-bottom:6px;margin:20px 0 10px;">Our Company members</h3>
  <p class="about-text" style="margin-bottom:15px;">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
  <div class="team-grid">
    <div class="team-card">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80" alt="Jennifer Lawrence">
      <div class="t-name">Jennifer lawrence</div>
      <div class="t-role">Business Consultant</div>
      <div class="t-desc">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor.</div>
    </div>
    <div class="team-card">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80" alt="Jennifer Lawrence">
      <div class="t-name">Jennifer lawrence</div>
      <div class="t-role">Business Consultant</div>
      <div class="t-desc">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor.</div>
    </div>
    <div class="team-card">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80" alt="Jennifer Lawrence">
      <div class="t-name">Jennifer lawrence</div>
      <div class="t-role">Business Consultant</div>
      <div class="t-desc">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor.</div>
    </div>
    <div class="team-card">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80" alt="Jennifer Lawrence">
      <div class="t-name">Jennifer lawrence</div>
      <div class="t-role">Business Consultant</div>
      <div class="t-desc">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor.</div>
    </div>
  </div>
</div>

</div>
</div>
`;

export default function AboutPage() {
  return <HtmlBlock html={html} />;
}
