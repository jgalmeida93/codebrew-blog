"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-light dark:bg-background-dark shadow-sm transition-colors duration-300 border-b border-border-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-accent-primary">
            CodeBrew Blog
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-hover-dark"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-accent-primary" />
            ) : (
              <Menu className="w-6 h-6 text-accent-primary" />
            )}
          </button>

          {/* Desktop Menu */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/posts"
              className="block text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
            >
              Posts
            </Link>
            <Link
              href="/about"
              className="block text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
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
        )}
      </div>
    </nav>
  );
}
