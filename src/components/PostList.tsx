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
      <article className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 p-4 hover:bg-secondary-light rounded-lg transition-all transform hover:scale-[1.02] border border-secondary-light dark:border-border-dark bg-background-semiLight dark:bg-card-dark group">
        <div className="w-full md:w-48 h-48 md:h-32 relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-secondary-dark dark:text-accent-primary dark:group-hover:text-text-semiLight group-hover:text-text-secondary-light">
            {post.title}
          </h2>
          <p className="text-sm md:text-base text-text-light dark:text-text-secondary-dark line-clamp-2 dark:group-hover:text-text-semiLight group-hover:text-text-secondary-light">
            {post.excerpt}
          </p>
          <div className="text-xs md:text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2 dark:group-hover:text-text-semiLight group-hover:text-text-secondary-light">
            {post.date} · {post.readingTime} min read
          </div>
        </div>
      </article>
    </Link>
  );
}
