import { useTranslations } from "next-intl";
import PostCard from "../../components/PostCard";
import { getAllPosts } from "../../lib/api";
import { cookies } from "next/headers";

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

export default function Posts() {
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
    )) as Post[];
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-secondary-dark dark:text-accent-primary mb-8">
          {t("allPosts")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getPosts().then((posts) =>
            posts.map((post) => (
              <PostCard
                key={post.slug}
                post={{ ...post, readingTime: parseInt(post.readingTime) }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
