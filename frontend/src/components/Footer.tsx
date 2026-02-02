import Link from "next/link";
import Image from "next/image";

/**
 * 全局页脚组件
 * Linear 风格 - 极简克制
 */
export default function Footer() {
  const footerLinks = [
    { label: "道", href: "/dao" },
    { label: "法", href: "/fa" },
    { label: "术", href: "/shu" },
    { label: "器", href: "/qi" },
    { label: "动态", href: "/updates" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="border-t border-[var(--border-primary)] bg-[var(--bg-primary)]">
      <div className="container">
        <div className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="老陈AI工坊"
                  width={32}
                  height={32}
                  className="rounded-lg object-cover"
                />
              </div>
              <span className="font-semibold text-[var(--text-primary)]">
                老陈AI工坊
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-sm text-[var(--text-muted)]">
              © 2026 老陈AI工坊
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
