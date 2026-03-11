import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-[var(--font-heading)] gradient-text">404</h1>
        <p className="mt-3 text-sm text-muted">Page not found.</p>
        <Link href="/" className="inline-block mt-5 px-4 py-2 text-sm bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors">
          Back to home
        </Link>
      </div>
    </div>
  );
}
