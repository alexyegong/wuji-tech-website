import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="text-sm text-gray-500 hover:text-[#0d5e4a] mb-8 inline-block"
      >
        &larr; 返回博客
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            <time>{post.date}</time>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full bg-[#0d5e4a]/5 text-[#0d5e4a] text-xs"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        </header>

        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
