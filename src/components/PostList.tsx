import Image from "next/image";
import Link from "next/link";

interface PostListProps {
  post: {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    readingTime: number;
  };
}

export default function PostList({ post }: PostListProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="flex gap-6 mb-8 p-4 hover:bg-secondary-light rounded-lg transition-colors border border-secondary-light dark:border-border-dark">
        <div className="flex-shrink-0 w-48 h-32 relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2 text-accent-secondary hover:text-accent-primary">
            {post.title}
          </h2>
          <p className="text-text-light dark:text-text-secondary-dark line-clamp-2">
            {post.excerpt}
          </p>
          <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
            {post.date} · {post.readingTime} min read
          </div>
        </div>
      </article>
    </Link>
  );
}
