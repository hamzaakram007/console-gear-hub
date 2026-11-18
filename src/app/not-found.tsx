import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero-wash flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-cyan-50">
        Page not found
      </h1>
      <p className="mt-3 text-teal-100/60">
        That category or page does not exist in this MVP.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md border border-cyan-300/40 bg-cyan-400/15 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/25"
      >
        Back to Console Gear Hub
      </Link>
    </div>
  );
}
