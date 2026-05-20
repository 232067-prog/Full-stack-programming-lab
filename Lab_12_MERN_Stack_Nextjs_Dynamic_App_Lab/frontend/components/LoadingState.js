export default function LoadingState({ label = "Loading" }) {
  return (
    <div className="rounded-2xl border border-amber-200/60 bg-amber-50 p-6 text-sm text-amber-900">
      {label}...
    </div>
  );
}
