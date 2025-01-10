import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  post: {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    readingTime: number;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="bg-card-light dark:bg-card-dark rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>

        <div className="prose p-6">
          <h2 className="text-2xl font-bold mb-2 text-accent-primary">
            {post.title}
          </h2>

          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center text-sm text-accent-primary">
            <time>{new Date(post.date).toLocaleDateString()}</time>
            <span className="mx-2">•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
