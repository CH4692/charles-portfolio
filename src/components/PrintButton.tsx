'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border-primary/50 hover:border-primary focus-ring inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-white/5"
    >
      Print / Save as PDF
    </button>
  );
}
