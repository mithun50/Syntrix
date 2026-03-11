"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      )}
    >
      <div className="mx-auto max-w-6xl px-5 flex items-center justify-between h-16">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3.5 py-1.5 text-sm rounded-lg transition-colors",
                pathname === item.href
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-4 py-1.5 text-sm font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get Started
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-muted hover:text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2.5 text-sm rounded-lg transition-colors",
                  pathname === item.href ? "text-accent bg-accent/5" : "text-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
