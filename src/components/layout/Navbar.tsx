"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : ""
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-[72px]">
        <Logo />

        <nav className="hidden md:flex items-center gap-0.5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
                pathname === item.href
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0.5 left-4 right-4 h-px bg-accent" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 group flex items-center gap-1.5 px-5 py-2 text-[13px] font-semibold bg-accent text-background rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            Get Started
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-4 py-3 text-sm rounded-lg transition-all duration-300",
                  pathname === item.href
                    ? "text-accent bg-accent/5"
                    : "text-muted hover:text-foreground hover:bg-white/[0.02]"
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold bg-accent text-background rounded-full"
              >
                Get Started
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
