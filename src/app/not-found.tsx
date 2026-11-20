import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-wash flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-extrabold text-ink">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted">
        That category or page does not exist. Head back to NeonGulf Console Gear
        Hub and pick a comparison.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/category/ssd" className="btn-buy">
          Shop SSD picks
        </Link>
        <Link href="/" className="btn-secondary">
          Back home
        </Link>
      </div>
    </div>
  );
}
