import PostList from "../components/PostList";
import { getAllPosts } from "../lib/api";

interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  readingTime: number;
}

export default async function Home() {
  const posts = (await getAllPosts([
    "title",
    "date",
    "slug",
    "excerpt",
    "coverImage",
    "readingTime",
  ])) as Post[];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-secondary-dark dark:text-accent-primary mb-8">
          Últimos posts
        </h1>
        <div className="divide-y divide-border-dark">
          {posts.map((post) => (
            <PostList key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
