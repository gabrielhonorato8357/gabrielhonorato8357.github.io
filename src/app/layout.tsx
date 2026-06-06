import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Honorato — Product Engineering & Architecture",
  description:
    "Senior Full-Stack Engineer building AI SaaS platforms, analytics infrastructure, fintech systems, and automation engines at scale. Product-minded engineering leadership.",
  keywords: [
    "Senior Full-Stack Engineer",
    "AI SaaS",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "AWS",
    "System Architecture",
    "Product Engineering",
  ],
  authors: [{ name: "Gabriel Honorato" }],
  openGraph: {
    title: "Gabriel Honorato — Product Engineering & Architecture",
    description:
      "Senior Full-Stack Engineer building AI SaaS platforms, analytics infrastructure, fintech systems, and automation engines at scale.",
    type: "website",
    locale: "en_US",
    siteName: "Gabriel Honorato",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-300">
        {children}
      </body>
    </html>
  );
}