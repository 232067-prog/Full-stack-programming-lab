export default function TermsPage() {
  return (
    <section className="page-section">
      <div className="mx-auto max-w-4xl space-y-5">
        <h1 className="text-4xl">Terms and conditions</h1>
        <p className="text-sm text-ink-soft">
          These terms summarize the Rustik Plank ordering and delivery policy for
          the lab demo application.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-sm text-ink-soft">
          <li>Orders are processed within 2 business days.</li>
          <li>Delivery is scheduled after order confirmation.</li>
          <li>Custom items are non-refundable.</li>
        </ul>
      </div>
    </section>
  );
}
