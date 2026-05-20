"use client";

export default function QuantityPicker({ value, onChange }) {
  function update(next) {
    if (next < 1) {
      return;
    }
    onChange(next);
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className="rounded-full border border-amber-200 px-3 py-1 text-sm"
        onClick={() => update(value - 1)}
      >
        -
      </button>
      <span className="min-w-[2rem] text-center text-sm font-semibold">
        {value}
      </span>
      <button
        type="button"
        className="rounded-full border border-amber-200 px-3 py-1 text-sm"
        onClick={() => update(value + 1)}
      >
        +
      </button>
    </div>
  );
}
