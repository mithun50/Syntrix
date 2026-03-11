import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Agency", href: "/services/ai-agency" },
      { label: "Marketing", href: "/services/marketing" },
      { label: "Software Tools", href: "/services/software-tools" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
