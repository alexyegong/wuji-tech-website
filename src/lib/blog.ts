import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "src", "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  lang: "zh" | "en";
};

export function getAllPosts(locale: "zh" | "en" = "zh"): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  const posts = files
    .map((f) => parsePost(f))
    .filter((p) => p.lang === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPost(slug: string, locale: "zh" | "en" = "zh"): BlogPost | null {
  try {
    const post = parsePost(`${slug}.mdx`);
    return post.lang === locale ? post : null;
  } catch {
    return null;
  }
}

function parsePost(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
  const { data, content } = matter(raw);
  const lang: "zh" | "en" = (data.lang as string) === "en" ? "en" : "zh";
  return {
    slug: filename.replace(/\.mdx$/, ""),
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    content,
    lang,
  };
}
