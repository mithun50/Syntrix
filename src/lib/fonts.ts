import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
