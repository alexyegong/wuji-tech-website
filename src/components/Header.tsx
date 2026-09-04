"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/products", label: "产品" },
  { href: "/blog", label: "博客" },
  { href: "/contact", label: "联系" },
];

const enNavLinks = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "About" },
  { href: "/en/products", label: "Products" },
  { href: "/en/blog", label: "Blog" },
  { href: "/en/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const links = isEn ? enNavLinks : navLinks;
  const brand = isEn ? "Wuji Technology" : "无疾科技";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={isEn ? "/en" : "/"} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#0d5e4a] flex items-center justify-center">
            <span className="text-white text-sm font-bold">無</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            {brand}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-600 hover:text-[#0d5e4a] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href={isEn ? "/" : "/en"}
            className="text-xs px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 hover:border-[#0d5e4a] hover:text-[#0d5e4a] transition-colors"
          >
            {isEn ? "中文" : "EN"}
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-gray-600 hover:text-[#0d5e4a]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
