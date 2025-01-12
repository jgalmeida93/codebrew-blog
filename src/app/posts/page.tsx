import PostCard from "../../components/PostCard";
import { getAllPosts } from "../../lib/api";

interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  views: number;
  category: string;
  tags: string[];
  author: {
    name: string;
    picture: string;
  };
}

export default async function Posts() {
  const posts = (await getAllPosts([
    "title",
    "date",
    "slug",
    "excerpt",
    "coverImage",
    "readingTime",
    "views",
    "category",
    "tags",
    "author",
  ])) as Post[];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-accent-primary mb-8">
          Todos os posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              post={{ ...post, readingTime: parseInt(post.readingTime) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
