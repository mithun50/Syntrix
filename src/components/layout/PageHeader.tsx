interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative">
        {badge && (
          <span className="inline-block font-mono text-[11px] text-accent tracking-widest uppercase mb-4 animate-fade-up">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] leading-[1.05] tracking-tight animate-fade-up delay-1">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-muted max-w-2xl leading-relaxed animate-fade-up delay-2">
            {description}
          </p>
        )}

        {/* Design rule */}
        <div className="design-rule mt-12 animate-fade-in delay-3" />
      </div>
    </section>
  );
}
