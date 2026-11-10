import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { basics } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${basics.name} | ${basics.headline}`;

export const metadata: Metadata = {
  title,
  description: basics.tagline,
  authors: [{ name: basics.name }],
  keywords: [
    basics.name,
    "Software Engineer",
    "Portfolio",
    "UT Dallas",
    "Full-Stack Developer",
    "Machine Learning",
  ],
  openGraph: {
    title,
    description: basics.tagline,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description: basics.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
