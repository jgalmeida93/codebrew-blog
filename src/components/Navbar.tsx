"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function Navbar({ posts }: { posts: Post[] }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [...new Set(posts.map((post) => post.category))];
  const popularPosts = posts.sort((a, b) => b.views - a.views).slice(0, 5);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-semiLight dark:bg-background-dark shadow-sm transition-colors duration-300 border-b border-accent-primary dark:border-border-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-accent-primary">
            <Image
              src={
                theme === "light"
                  ? "/images/codebrew-dark.svg"
                  : "/images/codebrew-light.svg"
              }
              alt="CodeBrew Logo"
              width={150}
              height={40}
              priority
              className="transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/posts"
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
            >
              Posts
            </Link>
            <Link
              href="/about"
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
            >
              About
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-hover-dark transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-accent-secondary" />
              ) : (
                <Sun className="w-5 h-5 text-accent-secondary" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-hover-dark transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-accent-primary" />
              ) : (
                <Sun className="w-5 h-5 text-accent-primary" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-hover-dark"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-accent-primary" />
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        <div className="md:hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isMenuOpen ? 0 : "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-y-0 right-0 w-80 bg-background-semiLight dark:bg-background-dark shadow-xl z-50"
          >
            <div className="h-full overflow-y-auto px-6 py-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-text-secondary-light dark:text-accent-primary">
                  Menu
                </h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6 text-accent-primary" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-6 mb-8">
                <Link
                  href="/"
                  className="block text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/posts"
                  className="block text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
                >
                  Posts
                </Link>
                <Link
                  href="/about"
                  className="block text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
                >
                  About
                </Link>
              </div>

              {/* Categories Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-text-secondary-light dark:text-accent-primary mb-4">
                  Categories
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/category/${category}`}
                      className="p-3 bg-background-light dark:bg-background-dark rounded-lg text-center text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Posts Section */}
              <div>
                <h3 className="text-xl font-semibold text-text-secondary-light dark:text-accent-primary mb-4">
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/posts/${post.slug}`}
                      className="block p-4 bg-background-light dark:bg-background-dark rounded-lg hover:ring-1 hover:ring-accent-primary transition-all"
                    >
                      <h4 className="font-medium text-text-secondary-light dark:text-text-secondary-dark">
                        {post.title}
                      </h4>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                        {post.views} views
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
