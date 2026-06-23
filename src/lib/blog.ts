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
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((f) => parsePost(f));
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): BlogPost | null {
  try {
    return parsePost(`${slug}.mdx`);
  } catch {
    return null;
  }
}

function parsePost(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: filename.replace(/\.mdx$/, ""),
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    content,
  };
}
