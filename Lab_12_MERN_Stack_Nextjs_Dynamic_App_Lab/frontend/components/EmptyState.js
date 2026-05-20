export default function EmptyState({ title, description, action }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm text-ink-soft">{description}</p>
      ) : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
