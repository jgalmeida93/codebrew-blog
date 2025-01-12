type Author = {
  name: string;
  picture: string;
};

type Post = {
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  readingTime: number;
  views: number;
  category: string;
  tags: string[];
  author: Author;
  content: string;
  slug: string;
};

export type { Post, Author };
