import { useTranslations } from "next-intl";
import PostList from "../components/PostList";
import { getAllPosts } from "../lib/api";

import { cookies } from "next/headers";

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

export default function Home() {
  const t = useTranslations("titles");
  const cookieStore = cookies();

  async function getPosts() {
    const locale = (await cookieStore).get("NEXT_LOCALE")?.value || "pt-BR";
    return (await getAllPosts(
      [
        "title",
        "date",
        "slug",
        "excerpt",
        "coverImage",
        "readingTime",
        "category",
        "views",
      ],
      locale
    )) as unknown as Post[];
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-secondary-dark dark:text-accent-primary mb-8">
          {t("latestPosts")}
        </h1>
        <div className="divide-y divide-border-dark">
          {getPosts().then((posts) =>
            posts.map((post) => <PostList key={post.slug} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
}
