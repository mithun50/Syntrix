import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — AI Agency, Marketing & Software Tools`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/assets/logo/syntrix-logo.jpg",
    apple: "/assets/logo/syntrix-logo.jpg",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/assets/logo/syntrix-logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/assets/logo/syntrix-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
