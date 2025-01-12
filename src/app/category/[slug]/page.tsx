import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/api";

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

interface Props {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const posts = (await getAllPosts([
    "title",
    "date",
    "slug",
    "excerpt",
    "coverImage",
    "readingTime",
    "category",
    "views",
  ])) as Post[];

  const decodedSlug = decodeURIComponent(slug).toLowerCase();

  const filteredPosts = posts.filter(
    (post) => post.category.toLowerCase() === decodedSlug
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-accent-primary">
        {decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1)}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
