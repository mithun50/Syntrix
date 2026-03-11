import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-2xl glass overflow-hidden border border-transparent hover:border-cyan/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan/5">
        <div className="aspect-[16/9] bg-gradient-to-br from-cyan/10 via-purple/10 to-magenta/10 relative">
          <div className="absolute inset-0 flex items-center justify-center text-muted/50 text-sm">
            {post.title}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 text-xs text-muted mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={12} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.readingTime}
            </span>
          </div>
          <h3 className="font-semibold font-[var(--font-heading)] mb-2 group-hover:text-cyan transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted line-clamp-2">{post.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
