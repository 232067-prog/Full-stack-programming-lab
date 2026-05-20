import PageShell from "../components/common/PageShell";

function ContactPage() {
  return (
    <PageShell title="Contact Us" crumb="Contact">
      <form className="form-grid">
        <label>
          Full Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea rows="4" placeholder="How can we help?" />
        </label>
        <button type="button" className="primary-btn">
          Send Message
        </button>
      </form>
    </PageShell>
  );
}

export default ContactPage;
