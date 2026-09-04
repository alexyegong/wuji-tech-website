import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Wuji Technology official blog — digital TCM insights",
};

export default function EnBlog() {
  const posts = getAllPosts("en");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-500 mb-12">
        Digital TCM insights and technology updates
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No articles yet</p>
          <p className="text-sm mt-2">English content coming soon</p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#0d5e4a]/20 transition-all"
            >
              <Link href={`/en/blog/${post.slug}`}>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
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
                <h2 className="text-xl font-semibold mb-2 hover:text-[#0d5e4a] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
