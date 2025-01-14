"use client";
import { createContext, useState, useContext } from "react";

const DEFAULT_FIELDS = [
  "title",
  "date",
  "slug",
  "excerpt",
  "coverImage",
  "readingTime",
  "category",
  "views",
] as const;

interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  readingTime: number;
  category: string;
  views: number;
  tags?: string[];
  author?: {
    name: string;
    picture: string;
  };
}

interface PostsContextType {
  posts: Post[];
  getAllPosts: () => Promise<Post[]>;
  getPostBySlug: (slug: string) => Promise<Post | null>;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export function PostsProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);

  const getAllPosts = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/posts?fields=${DEFAULT_FIELDS.join(
        ","
      )}`
    );
    const posts = await response.json();
    setPosts(posts);
    return posts;
  };

  const getPostBySlug = async (slug: string) => {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_URL
      }/api/posts/${slug}?fields=${DEFAULT_FIELDS.join(",")}`
    );
    if (!response.ok) return null;
    const post = await response.json();
    return post;
  };

  return (
    <PostsContext.Provider value={{ posts, getAllPosts, getPostBySlug }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
}
