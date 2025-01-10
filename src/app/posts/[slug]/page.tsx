import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "../../../lib/api";
import Image from "next/image";

interface Post {
  title: string;
  date: string;
  slug: string;
  content: string;
  coverImage: string;
  readingTime: string;
}

type PostParams = Promise<{ slug: string }>;

const Post = async ({ params }: { params: PostParams }) => {
  const { slug } = await params;
  const post = (await getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
    "readingTime",
  ])) as Post;

  return (
    <main className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
          {post.title}
        </h1>

        <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark mb-8">
          <time>{new Date(post.date).toLocaleDateString()}</time>
          <span className="mx-2">•</span>
          <span>{post.readingTime} min read</span>
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

        <div className="prose prose-lg dark:prose-invert">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
};

export default Post;
