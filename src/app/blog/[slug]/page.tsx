import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { marked } from "marked";
import { PageHeader } from "@/components/layout/PageHeader";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.description };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked(post.content);

  return (
    <>
      <PageHeader badge="Blog" title={post.meta.title} description={post.meta.description} />

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Post meta */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-muted tracking-wider mb-10 pb-8 border-b border-border animate-fade-up delay-1">
            <span className="flex items-center gap-1.5">
              <User size={12} /> {post.meta.author}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted/50" />
            <span className="flex items-center gap-1.5">
              <Calendar size={12} /> {formatDate(post.meta.date)}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted/50" />
            <span className="flex items-center gap-1.5">
              <Clock size={12} /> {post.meta.readingTime}
            </span>
          </div>

          {/* Article content */}
          <article
            className="
              animate-fade-up delay-2
              [&>h1]:text-2xl [&>h1]:font-extrabold [&>h1]:mt-10 [&>h1]:mb-4 [&>h1]:font-[var(--font-heading)] [&>h1]:tracking-tight
              [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:font-[var(--font-heading)] [&>h2]:tracking-tight
              [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-2 [&>h3]:font-[var(--font-heading)] [&>h3]:tracking-tight
              [&>p]:text-sm [&>p]:text-muted [&>p]:leading-[1.8] [&>p]:mb-4
              [&>ul]:my-4 [&>ul]:ml-5 [&>ul]:list-disc [&>ul>li]:text-sm [&>ul>li]:text-muted [&>ul>li]:mb-2 [&>ul>li]:leading-[1.8]
              [&>ol]:my-4 [&>ol]:ml-5 [&>ol]:list-decimal [&>ol>li]:text-sm [&>ol>li]:text-muted [&>ol>li]:mb-2 [&>ol>li]:leading-[1.8]
              [&>hr]:my-10 [&>hr]:border-border
              [&>blockquote]:border-l-2 [&>blockquote]:border-accent [&>blockquote]:pl-5 [&>blockquote]:my-6 [&>blockquote]:text-sm [&>blockquote]:text-muted [&>blockquote]:italic
              [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-accent/30 [&_a:hover]:decoration-accent
              [&_strong]:text-foreground [&_strong]:font-semibold
              [&_code]:text-accent [&_code]:text-xs [&_code]:bg-white/5 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-md [&_code]:font-mono
              [&>pre]:bg-white/[0.03] [&>pre]:border [&>pre]:border-border [&>pre]:rounded-xl [&>pre]:p-5 [&>pre]:my-5 [&>pre]:overflow-x-auto [&>pre]:text-xs [&>pre]:font-mono
              [&>p>em]:text-muted/80
            "
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
            {post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 mt-8 text-sm text-muted hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to blog
          </Link>
        </div>
      </section>
    </>
  );
}
