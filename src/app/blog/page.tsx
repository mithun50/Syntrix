import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI, marketing, software, and building the future.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        badge="Blog"
        title="Insights & ideas"
        description="Thoughts on AI, marketing, software, and building the future."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {posts.length === 0 ? (
            <p className="text-sm text-muted">No posts yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group relative p-7 rounded-2xl border border-border bg-card card-glow overflow-hidden animate-fade-up delay-${(i % 3) + 1}`}
                >
                  <div className="flex items-center gap-4 font-mono text-[10px] text-muted mb-4 tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="font-bold font-[var(--font-heading)] tracking-tight group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-border text-muted tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-7 right-7 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={16} className="text-accent" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
