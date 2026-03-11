import Link from "next/link";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Logo } from "./Logo";

const footerLinks = {
  pages: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Agency", href: "/services/ai-agency" },
    { label: "Digital Marketing", href: "/services/marketing" },
    { label: "Software Tools", href: "/services/software-tools" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* CTA band */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] text-accent tracking-widest uppercase mb-2">
              Ready to start?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] leading-tight">
              Let&apos;s build something<br className="hidden sm:block" /> remarkable together.
            </h3>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-7 py-3 text-sm font-semibold bg-accent text-background rounded-full hover:bg-accent/90 transition-all duration-300 flex-shrink-0"
          >
            Start a project
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-sm text-muted max-w-sm leading-relaxed">
              AI Agency + Marketing + Software Tools. Building intelligent
              solutions that drive real growth for modern businesses.
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="mailto:syntrixagency01@gmail.com"
                className="group flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border group-hover:border-accent/30 transition-colors duration-300">
                  <Mail size={14} />
                </span>
                syntrixagency01@gmail.com
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border group-hover:border-accent/30 transition-colors duration-300">
                  <Instagram size={14} />
                </span>
                @syntrixagency
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-mono text-[11px] text-muted tracking-widest uppercase mb-5">
              Pages
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.pages.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] text-muted tracking-widest uppercase mb-5">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-muted tracking-wide">
            &copy; {new Date().getFullYear()} Syntrix. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted/50 tracking-wide">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
