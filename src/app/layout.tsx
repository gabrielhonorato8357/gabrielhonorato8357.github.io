import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Honorato | Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer specializing in AI SaaS, Analytics Platforms, Fintech Dashboards, and SaaS Infrastructure. 8+ years building scalable web applications.",
  keywords: [
    "Senior Full-Stack Engineer",
    "AI SaaS",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Gabriel Honorato" }],
  openGraph: {
    title: "Gabriel Honorato | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer specializing in AI SaaS, Analytics Platforms, Fintech Dashboards, and SaaS Infrastructure.",
    type: "website",
    locale: "en_US",
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
      <body className="min-h-screen flex flex-col bg-slate-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}