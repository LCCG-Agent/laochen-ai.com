"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap, Newspaper, Search, GitCompare, Target, Wrench, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  
  const features = [
    { icon: Sparkles, text: "AI 驱动洞察" },
    { icon: TrendingUp, text: "实时趋势追踪" },
    { icon: Shield, text: "专业数据验证" },
    { icon: Zap, text: "决策效率提升" },
  ];

  const modules = [
    { 
      title: "资讯捕捉", 
      desc: "AI工具应用案例与行业资讯", 
      href: "/cases",
      icon: Newspaper,
      color: "var(--accent-blue)"
    },
    { 
      title: "调研洞察", 
      desc: "市场分析框架与趋势研判", 
      href: "/research",
      icon: Search,
      color: "var(--accent-emerald)"
    },
    { 
      title: "沙盘推演", 
      desc: "最佳实践路径对比分析", 
      href: "/strategy",
      icon: GitCompare,
      color: "var(--accent-amber)"
    },
    { 
      title: "竞品雷达", 
      desc: "关键产品动态追踪分析", 
      href: "/competitor",
      icon: Target,
      color: "var(--accent-rose)"
    },
    { 
      title: "工具资源", 
      desc: "提示词模板与代码工具", 
      href: "/resources",
      icon: Wrench,
      color: "var(--accent-purple)"
    }
  ];

  return (
    <div 
      className="relative min-h-screen"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="bg-glow" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* 导航栏 */}
      <header className="relative z-50 fixed top-0 left-0 right-0 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-secondary)]">
        <div className="mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image src="/logo.jpg" alt="老陈AI工坊" fill className="object-cover" />
              </div>
              <span className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                老陈AI工坊
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                href="/about" 
                className="text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                关于老陈
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl"
                style={{ 
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero 内容 */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* 主标题 */}
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
            style={{ color: 'var(--text-primary)', lineHeight: 1.1 }}
          >
            AI 洞察
            <br />
            <span style={{ color: 'var(--primary-400)' }}>
              智赢未来
            </span>
          </h1>

          {/* 副标题 */}
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            实时捕捉行业资讯，洞察市场趋势，推演实践路径
            <br className="hidden md:block" />
            追踪竞品动态，汇聚专业工具资源
          </p>

          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg transition-all hover:scale-105"
              style={{ 
                background: 'var(--primary-600)',
                color: 'white'
              }}
            >
              <span>开始探索之旅</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* 特性标签 */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <feature.icon className="w-4 h-4" style={{ color: 'var(--primary-400)' }} />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 底部滚动提示 */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'var(--text-muted)' }}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--text-muted), transparent)' }} />
        </div>
      </main>

      {/* 功能板块预览 */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              五大核心板块
            </h2>
            <p 
              className="text-lg max-w-xl mx-auto"
              style={{ color: 'var(--text-tertiary)' }}
            >
              全方位洞察数据分析领域，助力决策
            </p>
          </div>
          
          {/* 5卡片网格布局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Link
                key={index}
                href={module.href}
                className="group p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = module.color;
                  e.currentTarget.style.boxShadow = `0 8px 30px -10px ${module.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* 图标 */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ 
                    background: `${module.color}15`,
                    color: module.color
                  }}
                >
                  <module.icon className="w-6 h-6" />
                </div>
                
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {module.title}
                </h3>
                <p 
                  className="text-sm mb-4"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {module.desc}
                </p>
                
                <div className="flex items-center gap-1 text-sm font-medium" style={{ color: module.color }}>
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 底部信息 */}
      <footer className="relative z-10 py-16 px-6 border-t" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                <Image src="/logo.jpg" alt="老陈AI工坊" fill className="object-cover" />
              </div>
              <span>© 2026 老陈AI工坊. All rights reserved.</span>
            </div>
            <p className="font-medium">聚焦数据分析 · AI赋能决策</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
