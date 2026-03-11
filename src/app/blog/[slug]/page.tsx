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

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted mb-8 pb-6 border-b border-border">
            <span className="flex items-center gap-1"><User size={12} /> {post.meta.author}</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(post.meta.date)}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.meta.readingTime}</span>
          </div>

          <article
            className="
              [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-3 [&>h1]:font-[var(--font-heading)]
              [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:mb-2.5 [&>h2]:font-[var(--font-heading)]
              [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-5 [&>h3]:mb-2 [&>h3]:font-[var(--font-heading)]
              [&>p]:text-sm [&>p]:text-muted [&>p]:leading-relaxed [&>p]:mb-3
              [&>ul]:my-3 [&>ul]:ml-5 [&>ul]:list-disc [&>ul>li]:text-sm [&>ul>li]:text-muted [&>ul>li]:mb-1.5 [&>ul>li]:leading-relaxed
              [&>ol]:my-3 [&>ol]:ml-5 [&>ol]:list-decimal [&>ol>li]:text-sm [&>ol>li]:text-muted [&>ol>li]:mb-1.5 [&>ol>li]:leading-relaxed
              [&>hr]:my-8 [&>hr]:border-border
              [&>blockquote]:border-l-2 [&>blockquote]:border-accent [&>blockquote]:pl-4 [&>blockquote]:my-4 [&>blockquote]:text-sm [&>blockquote]:text-muted [&>blockquote]:italic
              [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2
              [&_strong]:text-foreground [&_strong]:font-semibold
              [&_code]:text-accent [&_code]:text-xs [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
              [&>pre]:bg-white/[0.03] [&>pre]:border [&>pre]:border-border [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:my-4 [&>pre]:overflow-x-auto [&>pre]:text-xs
              [&>p>em]:text-muted/80
            "
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="flex flex-wrap gap-1.5 mt-8 pt-6 border-t border-border">
            {post.meta.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-lg border border-border text-muted">{tag}</span>
            ))}
          </div>

          <Link href="/blog" className="inline-flex items-center gap-2 mt-6 text-sm text-muted hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Back to blog
          </Link>
        </div>
      </section>
    </>
  );
}
