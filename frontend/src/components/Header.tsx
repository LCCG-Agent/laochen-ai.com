"use client";

import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface HeaderProps {
  variant?: 'dashboard' | 'page';
}

/**
 * 公共Header组件
 * @param variant - 'dashboard': 显示主题切换和"关于老陈"链接 | 'page': 显示"返回看板"按钮
 */
export default function Header({ variant = 'page' }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header 
      className="sticky top-0 z-50 border-b"
      style={{ 
        background: 'var(--bg-secondary)', 
        borderColor: 'var(--border-primary)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <div className="mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden">
              <Image src="/logo.jpg" alt="老陈AI工坊" fill className="object-cover" />
            </div>
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              老陈AI工坊
            </span>
          </Link>

          {/* Right Side Navigation */}
          {variant === 'dashboard' ? (
            // Dashboard 模式：主题切换 + 关于老陈
            <nav className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg"
                style={{ 
                  background: 'var(--bg-tertiary)', 
                  border: '1px solid var(--border-primary)' 
                }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                ) : (
                  <Moon className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                )}
              </button>
              <Link 
                href="/about" 
                className="text-sm px-4 py-2.5 rounded-lg"
                style={{ 
                  background: 'var(--bg-tertiary)', 
                  border: '1px solid var(--border-primary)',
                  color: 'var(--text-secondary)' 
                }}
              >
                关于老陈
              </Link>
            </nav>
          ) : (
            // Page 模式：返回看板
            <Link 
              href="/dashboard" 
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors"
              style={{ 
                background: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>返回看板</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
