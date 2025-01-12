import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import "@/styles/fonts.css";
import Navbar from "@/components/Navbar";
import { getAllPosts } from "@/lib/api";
import LayoutWrapper from "@/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codebrew Labs Blog",
  description: "A blog by Codebrew Labs",
  icons: {
    icon: "/favicon.png",
  },
};

interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  readingTime: number;
  category: string;
  views: number;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = (await getAllPosts([
    "title",
    "date",
    "slug",
    "excerpt",
    "coverImage",
    "readingTime",
    "category",
    "views",
  ])) as Post[];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light dark:bg-background-dark`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar posts={posts} />
          <main className="flex-grow container mx-auto px-4 py-8">
            <LayoutWrapper posts={posts}>{children}</LayoutWrapper>
          </main>

          <footer className="border-t border-secondary-light dark:border-secondary-dark bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4 py-6 text-center text-text-light dark:text-text-dark">
              CodeBrew Blog © {new Date().getFullYear()}
            </div>
          </footer>
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
