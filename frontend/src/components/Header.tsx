"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

/**
 * 全局导航栏组件
 * Linear 风格 - 极简克制
 */
export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/framework", label: "理念" },
    { href: "/standards", label: "规范" },
    { href: "/methods", label: "方法" },
    { href: "/tools", label: "工具" },
    { href: "/updates", label: "动态" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8 shrink-0">
              <Image
                src="/logo.jpg"
                alt="老陈AI工坊"
                width={32}
                height={32}
                className="rounded-lg object-cover"
                priority
              />
            </div>
            <span className="font-semibold text-base text-[var(--text-primary)]">
              老陈AI工坊
            </span>
          </Link>

          {/* Desktop Navigation - 极简 */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - 增大点击区域 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 -mr-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--text-primary)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--text-primary)]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - 优化点击区域 */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--border-primary)]">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-4 rounded-lg text-base font-medium transition-colors min-h-[52px] flex items-center ${
                    isActive(item.href)
                      ? "bg-[var(--bg-tertiary)] text-[var(--color-accent)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
