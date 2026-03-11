import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
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
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5">
          {posts.length === 0 ? (
            <p className="text-sm text-muted">No posts yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-5 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors"
                >
                  <div className="flex items-center gap-3 text-[10px] text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} /> {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {post.readingTime}
                    </span>
                  </div>
                  <h3 className="font-semibold font-[var(--font-heading)] text-sm group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed line-clamp-2">{post.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-muted">{tag}</span>
                    ))}
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
