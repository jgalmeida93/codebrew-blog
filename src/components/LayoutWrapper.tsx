"use client";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

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

interface LayoutWrapperProps {
  children: React.ReactNode;
  posts: Post[];
}

export default function LayoutWrapper({ children, posts }: LayoutWrapperProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className={`w-full ${pathname !== "/about" ? "md:w-2/3" : ""}`}>
        {children}
      </div>
      {pathname !== "/about" && (
        <aside className="hidden md:block md:w-1/3">
          <Sidebar posts={posts} />
        </aside>
      )}
    </div>
  );
}
