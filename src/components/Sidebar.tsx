import { useTranslations } from "next-intl";

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

interface SidebarProps {
  posts: Post[];
}

export default function Sidebar({ posts }: SidebarProps) {
  const t = useTranslations("sidebar");
  const categories = [...new Set(posts.map((post) => post.category))];
  const popularPosts = posts.sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <div className="sticky top-20 space-y-8">
      <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg border border-secondary-light dark:border-border-dark">
        <h2 className="text-4xl font-bold text-secondary-dark dark:text-accent-primary mb-4">
          {t("categories")}
        </h2>
        <ul className="space-y-2 divide-y divide-border-dark">
          {categories.map((category) => (
            <li key={category} className="py-2">
              <a
                href={`/category/${category}`}
                className="text-text-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg border border-secondary-light dark:border-border-dark">
        <h2 className="text-4xl font-bold text-secondary-dark dark:text-accent-primary mb-4">
          {t("popularPosts")}
        </h2>
        <ul className="space-y-4 divide-y divide-border-dark">
          {popularPosts.map((post) => (
            <li key={post.slug} className="py-2">
              <a
                href={`/posts/${post.slug}`}
                className="text-text-light dark:text-text-secondary-dark hover:text-accent-primary transition-colors duration-200"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
