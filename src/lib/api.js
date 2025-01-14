import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), `content/posts/`);

export async function getAllPosts(fields = [], language = "pt-BR") {
  try {
    const languageStr = String(language || "pt-BR").trim();
    const languageDirectory = path.join(postsDirectory, languageStr);

    if (!fs.existsSync(languageDirectory)) {
      fs.mkdirSync(languageDirectory, { recursive: true });
    }

    const slugs = fs.readdirSync(languageDirectory);
    const posts = slugs
      .map((slug) => getPostBySlug(slug, fields, languageStr))
      .filter(Boolean)
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return [];
  }
}

export function getPostBySlug(slug, fields = [], language = "pt-BR") {
  try {
    const realSlug = String(slug).replace(/\.mdx$/, "").trim();
    const languageStr = String(language || "pt-BR").trim();

    const fullPath = path.join(postsDirectory, languageStr, `${realSlug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items = {
      author: {
        name: "Jona G.",
        picture: "/me.jpeg",
      },
    };

    const fieldsArray = Array.isArray(fields) ? fields : [fields];
    fieldsArray.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content") {
        items[field] = content;
      }
      if (data[field]) {
        items[field] = data[field];
      }
    });

    return items;
  } catch (error) {
    console.error(`Error getting post by slug: ${slug}`, error);
    return null;
  }
}
