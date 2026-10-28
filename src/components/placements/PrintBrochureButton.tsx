"use client";

export function PrintBrochureButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#142b27] transition hover:bg-[#e5eddf]"
    >
      Print / Save as PDF
    </button>
  );
}