"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PostCardProps {
  post: {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    readingTime: number;
    category: string;
    views: number;
  };
}

export default function PostCard({ post }: PostCardProps) {
  const [views, setViews] = useState(post.views);

  useEffect(() => {
    fetch(`/api/views/${post.slug}`)
      .then((res) => res.json())
      .then((data) => setViews(data.views));
  }, [post.slug]);

  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="hover:bg-secondary-light rounded-lg transition-all transform hover:scale-[1.02] border border-secondary-light dark:border-border-dark bg-background-semiLight dark:bg-card-dark group">
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>

        <div className="p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-secondary-dark dark:text-accent-primary dark:group-hover:text-text-semiLight group-hover:text-text-secondary-light">
            {post.title}
          </h2>

          <p className="text-sm md:text-base text-text-light dark:text-text-secondary-dark line-clamp-2 dark:group-hover:text-text-semiLight group-hover:text-text-secondary-light">
            {post.excerpt}
          </p>

          <div className="text-xs md:text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2 dark:group-hover:text-text-semiLight group-hover:text-text-secondary-light">
            {new Date(post.date).toLocaleDateString()} · {post.readingTime} min
            read · {views} views
          </div>
        </div>
      </article>
    </Link>
  );
}
