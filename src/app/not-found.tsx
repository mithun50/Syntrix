import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="text-center relative">
        <span className="font-mono text-[11px] text-muted tracking-widest uppercase">
          Error 404
        </span>
        <h1 className="mt-4 text-7xl md:text-9xl font-extrabold font-[var(--font-heading)] tracking-tighter gradient-text">
          404
        </h1>
        <p className="mt-4 text-base text-muted max-w-sm mx-auto">
          This page doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 mt-8 px-7 py-3 text-sm font-semibold bg-accent text-background rounded-full hover:bg-accent/90 transition-all duration-300"
        >
          Back to home
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
