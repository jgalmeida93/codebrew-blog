"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
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
    <nav className="sticky top-0 z-50 bg-background-light dark:bg-background-dark shadow-sm transition-colors duration-300 border-b border-border-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-accent-primary">
            CodeBrew Blog
          </Link>

          <div className="flex items-center space-x-6">
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
              className="p-2 rounded-full hover:bg-hover.dark dark:hover:bg-hover.dark transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-accent-primary" />
              ) : (
                <Sun className="w-5 h-5 text-accent-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
