import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">
              AI Agency + Marketing + Software Tools.
              Building intelligent solutions for modern businesses.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-muted hover:text-accent transition-colors"
            >
              <Instagram size={16} /> @syntrixagency
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 font-[var(--font-heading)]">Pages</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 font-[var(--font-heading)]">Services</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "AI Agency", href: "/services/ai-agency" },
                { label: "Digital Marketing", href: "/services/marketing" },
                { label: "Software Tools", href: "/services/software-tools" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Syntrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
