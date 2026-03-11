interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <section className="pt-28 pb-12">
      <div className="mx-auto max-w-6xl px-5">
        {badge && (
          <span className="inline-block text-xs font-medium text-accent tracking-wider uppercase mb-3">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-heading)] leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-base text-muted max-w-xl">{description}</p>
        )}
      </div>
    </section>
  );
}
