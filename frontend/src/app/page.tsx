"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  Compass, 
  Wrench, 
  BookOpen,
  Puzzle,
  ChevronRight
} from "lucide-react";

/**
 * 首页 - 老陈AI工坊
 * 设计风格：Linear + Vercel - 克制、专业、极简
 * 定位：知识分享型网站
 */
export default function HomePage() {
  // 打字机效果 - 循环播放（打完后清空重新打）
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "一句话，我帮你";
  
  useEffect(() => {
    let currentIndex = displayedText.length;
    
    const timeout = setTimeout(() => {
      if (currentIndex < fullText.length) {
        // 打字阶段
        setDisplayedText(fullText.slice(0, currentIndex + 1));
      } else {
        // 打完后暂停3秒，然后清空重新开始
        setTimeout(() => {
          setDisplayedText("");
        }, 3000);
      }
    }, 150); // 打字速度150ms
    
    return () => clearTimeout(timeout);
  }, [displayedText]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      
      {/* Hero Section - 极简版 */}
      <section className="relative pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* 主标题 - 打字机效果，移动端缩小字号防止换行 */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight whitespace-nowrap">
              <span className="text-gradient">{displayedText}</span>
              <span className="text-[var(--color-gray-400)]">|</span>
            </h1>
            
            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              数据分析就是这么简单
            </p>

            {/* CTA 按钮组 - 移动端优化 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/dao" className="btn btn-primary text-base px-8 py-4 min-h-[52px] w-full sm:w-auto">
                <span>了解我们的理念</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/qi" className="btn btn-secondary text-base px-8 py-4 min-h-[52px] w-full sm:w-auto">
                <Puzzle className="w-5 h-5" />
                <span>认识 Office Agent</span>
              </Link>
            </div>

            {/* 示例展示 - 更克制 */}
            <div className="max-w-2xl mx-auto">
              <div className="card bg-[var(--bg-secondary)] border border-[var(--border-primary)] p-6 text-left">
                <p className="text-sm text-[var(--text-tertiary)] mb-2">比如在 Excel 中：</p>
                <p className="text-base text-[var(--text-primary)] mb-3">
                  "按月份汇总销售额，生成折线图"
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Office Agent 插件帮你一步完成
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 道法术器 - 四宫格布局 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              道法术器
            </h2>
            <p className="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
              系统化知识体系，从理念到工具的完整路径
            </p>
          </div>

          {/* 2x2 网格布局 - 移动端优化点击区域 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* 道 */}
            <Link href="/dao" className="card card-interactive card-featured group p-6 md:p-8 min-h-[160px]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-accent)]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold">道</h3>
                    <span className="text-xs text-[var(--text-tertiary)]">Philosophy</span>
                  </div>
                  <p className="text-sm md:text-base text-[var(--text-tertiary)]">体系框架</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] text-sm md:text-base">
                数据分析自动化的整体思维框架
              </p>
            </Link>

            {/* 法 */}
            <Link href="/fa" className="card card-interactive card-featured group p-6 md:p-8 min-h-[160px]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-accent)]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold">法</h3>
                    <span className="text-xs text-[var(--text-tertiary)]">Standards</span>
                  </div>
                  <p className="text-sm md:text-base text-[var(--text-tertiary)]">规则标准</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] text-sm md:text-base">
                口径定义、命名规范、标准化流程
              </p>
            </Link>

            {/* 术 */}
            <Link href="/shu" className="card card-interactive card-featured group p-6 md:p-8 min-h-[160px]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-accent)]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold">术</h3>
                    <span className="text-xs text-[var(--text-tertiary)]">Techniques</span>
                  </div>
                  <p className="text-sm md:text-base text-[var(--text-tertiary)]">技术方法</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] text-sm md:text-base">
                Skills、MCP、Agent 的实践方法
              </p>
            </Link>

            {/* 器 */}
            <Link href="/qi" className="card card-interactive card-featured group p-6 md:p-8 min-h-[160px]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center shrink-0">
                  <Puzzle className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-accent)]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold">器</h3>
                    <span className="text-xs text-[var(--text-tertiary)]">Tools</span>
                  </div>
                  <p className="text-sm md:text-base text-[var(--text-tertiary)]">Office Agent</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] text-sm md:text-base">
                Excel 本地 AI 插件的能力介绍
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 最近动态 - 列表形式 */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl font-bold mb-2">最近动态</h2>
                <p className="text-[var(--text-tertiary)]">记录分享和探索的过程</p>
              </div>
              <Link 
                href="/updates" 
                className="text-sm text-[var(--color-accent)] font-medium hover:underline flex items-center gap-1"
              >
                <span>查看更多</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {/* 动态1 - 移动端增大点击区域 */}
              <Link 
                href="/updates" 
                className="flex items-center justify-between p-5 md:p-4 rounded-xl border border-[var(--border-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--bg-secondary)] transition-all group min-h-[80px]"
              >
                <div className="flex-1">
                  <h4 className="font-medium mb-1 text-base group-hover:text-[var(--color-accent)] transition-colors">
                    Office Agent 插件架构思考
                  </h4>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    如何用 VSTO 实现「一句话执行」工作流引擎？
                  </p>
                </div>
                <span className="text-xs text-[var(--text-muted)] ml-4 shrink-0">今天</span>
              </Link>

              {/* 动态2 */}
              <Link 
                href="/updates" 
                className="flex items-center justify-between p-5 md:p-4 rounded-xl border border-[var(--border-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--bg-secondary)] transition-all group min-h-[80px]"
              >
                <div className="flex-1">
                  <h4 className="font-medium mb-1 text-base group-hover:text-[var(--color-accent)] transition-colors">
                    数据清洗 Skills 实践总结
                  </h4>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    整理了10个常用的数据清洗 Skills
                  </p>
                </div>
                <span className="text-xs text-[var(--text-muted)] ml-4 shrink-0">3天前</span>
              </Link>

              {/* 动态3 */}
              <Link 
                href="/updates" 
                className="flex items-center justify-between p-5 md:p-4 rounded-xl border border-[var(--border-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--bg-secondary)] transition-all group min-h-[80px]"
              >
                <div className="flex-1">
                  <h4 className="font-medium mb-1 text-base group-hover:text-[var(--color-accent)] transition-colors">
                    Office Agent v1.2 功能介绍
                  </h4>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    新增侧边栏对话模式，优化选区识别逻辑
                  </p>
                </div>
                <span className="text-xs text-[var(--text-muted)] ml-4 shrink-0">1周前</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
