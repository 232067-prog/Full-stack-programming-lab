import PageShell from "../components/common/PageShell";

function TermsPage() {
  return (
    <PageShell title="Terms and Conditions" crumb="Terms">
      <div className="stack">
        <p>1. Product availability and pricing may change without prior notice.</p>
        <p>2. Orders are confirmed after payment authorization.</p>
        <p>3. Shipping timelines vary by location and customization.</p>
        <p>4. Warranty and service are covered as per official policy documents.</p>
      </div>
    </PageShell>
  );
}

export default TermsPage;
