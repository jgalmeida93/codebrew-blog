import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "../../../lib/api";
import Image from "next/image";
import { cookies } from "next/headers";

interface Post {
  title: string;
  date: string;
  slug: string;
  content: string;
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

const Post = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const cookieStore = await cookies();
  const language: string = cookieStore.get("NEXT_LOCALE")?.value || "pt-BR";

  const { slug } = await params;
  const post = (await getPostBySlug(
    slug,
    [
      "title",
      "date",
      "slug",
      "content",
      "coverImage",
      "readingTime",
      "views",
      "category",
      "tags",
      "author",
    ],
    language
  )) as Post;

  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/views/${slug}`, {
    method: "POST",
  });

  const views = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/views/${slug}`)
    .then((res) => res.json())
    .then((data) => data.views);

  return (
    <main className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
          {post.title}
        </h1>

        <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark mb-4">
          <time>{new Date(post.date).toLocaleDateString()}</time>
          <span className="mx-2">•</span>
          <span>{post.readingTime} min read</span>
          <span className="mx-2">•</span>
          <span>{views} views</span>
          <span className="mx-2">•</span>
          <span className="text-accent-primary">{post.category}</span>
        </div>

        <div className="flex items-center mb-8">
          <Image
            src={post.author.picture}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full mr-4"
          />
          <span className="font-medium">{post.author.name}</span>
        </div>

        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent-secondary px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
};

export default Post;
