'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border-primary/60 hover:border-primary focus-ring rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-white/5"
    >
      Print / Save as PDF
    </button>
  );
}
