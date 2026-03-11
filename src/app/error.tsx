"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center">
        <h1 className="text-2xl font-bold font-[var(--font-heading)]">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted">An unexpected error occurred.</p>
        <button
          onClick={() => reset()}
          className="mt-5 px-4 py-2 text-sm bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
