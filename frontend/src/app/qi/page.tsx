"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search,
  Download,
  Clock,
  FileSpreadsheet,
  BarChart3,
  Table,
  FileText,
  CheckSquare,
  Wrench,
  ArrowRight,
  RefreshCw
} from "lucide-react";

/**
 * 器页面 - 模板库
 * 参考：Vercel Templates / Notion Templates 风格
 */
export default function QiPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // 分类
  const categories = [
    { id: "all", label: "全部", count: 6 },
    { id: "chart", label: "出图类", count: 1 },
    { id: "clean", label: "清洗类", count: 1 },
    { id: "summary", label: "汇总类", count: 1 },
    { id: "report", label: "周报/月报", count: 1 },
    { id: "check", label: "对账校验", count: 1 },
    { id: "macro", label: "宏工具箱", count: 1 },
  ];

  // 模板数据
  const templates = [
    {
      slug: "weekly-report",
      category: "report",
      title: "一键周报模板",
      description: "自动汇总周数据，生成标准周报，包含环比分析和下周建议",
      scenario: "每周一早上快速出周报",
      estimatedTime: "2分钟",
      output: "完整周报文档",
      updatedAt: "2026-01-28",
      downloads: 1280,
      icon: FileText,
      color: "var(--accent-blue)",
      bgColor: "rgba(59,130,246,0.15)",
      isPopular: true,
    },
    {
      slug: "data-clean",
      category: "clean",
      title: "数据清洗模板",
      description: "一键去重、格式统一、空值处理、异常值标记",
      scenario: "收到杂乱数据需要整理时",
      estimatedTime: "1分钟",
      output: "清洗后的标准表格",
      updatedAt: "2026-01-25",
      downloads: 956,
      icon: Table,
      color: "var(--accent-emerald)",
      bgColor: "rgba(16,185,129,0.15)",
      isPopular: true,
    },
    {
      slug: "topn-chart",
      category: "chart",
      title: "TopN 出图模板",
      description: "自动识别数据字段，一键生成 Top10/Top20 排行榜图表",
      scenario: "需要快速出排行榜图表",
      estimatedTime: "30秒",
      output: "柱状图 + 数据表",
      updatedAt: "2026-01-30",
      downloads: 734,
      icon: BarChart3,
      color: "var(--accent-amber)",
      bgColor: "rgba(245,158,11,0.15)",
      isPopular: false,
    },
    {
      slug: "monthly-trend",
      category: "summary",
      title: "月份汇总 + 趋势分析模板",
      description: "按月份自动汇总，生成趋势图，计算同比环比",
      scenario: "月度数据分析和汇报",
      estimatedTime: "2分钟",
      output: "趋势图 + 分析结论",
      updatedAt: "2026-01-22",
      downloads: 867,
      icon: FileSpreadsheet,
      color: "var(--accent-purple)",
      bgColor: "rgba(139,92,246,0.15)",
      isPopular: false,
    },
    {
      slug: "reconciliation",
      category: "check",
      title: "对账校验模板",
      description: "两表自动对账，差异高亮显示，生成对账报告",
      scenario: "财务对账、数据核对",
      estimatedTime: "1分钟",
      output: "对账报告 + 差异明细",
      updatedAt: "2026-01-20",
      downloads: 623,
      icon: CheckSquare,
      color: "var(--accent-rose)",
      bgColor: "rgba(244,63,94,0.15)",
      isPopular: false,
    },
    {
      slug: "macro-toolbox",
      category: "macro",
      title: "宏工具箱",
      description: "常用一键操作合集：批量重命名、格式统一、快速筛选等",
      scenario: "日常高频操作提效",
      estimatedTime: "即时",
      output: "20+ 常用宏",
      updatedAt: "2026-01-18",
      downloads: 1456,
      icon: Wrench,
      color: "var(--accent-cyan)",
      bgColor: "rgba(6,182,212,0.15)",
      isPopular: true,
    },
  ];

  // 过滤模板
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = activeCategory === "all" || template.category === activeCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="tag tag-amber">模板</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-tertiary)]">器</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              数分之器
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Office Agent 模板下载：装上就能用。<br />
              选择你需要的模板，一键下载，立即开始。
            </p>
          </div>
        </div>
      </section>

      {/* 搜索和筛选 */}
      <section className="py-8 sticky top-16 z-40 bg-[var(--bg-primary)]/80 backdrop-blur-lg border-b border-[var(--border-primary)]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            {/* 搜索框 */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="搜索模板..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-12"
              />
            </div>
            
            {/* 分类筛选 */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[var(--primary-600)] text-white"
                      : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 模板卡片网格 */}
      <section className="section">
        <div className="container">
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <Link
                  key={template.slug}
                  href={`/qi/templates/${template.slug}`}
                  className="card card-interactive group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: template.bgColor }}
                    >
                      <template.icon className="w-7 h-7" style={{ color: template.color }} />
                    </div>
                    {template.isPopular && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-[var(--accent-amber)] text-[var(--bg-primary)] rounded">
                        热门
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary-400)] transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-sm text-[var(--text-tertiary)] mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  {/* Meta */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-between text-[var(--text-muted)]">
                      <span>适用场景</span>
                      <span className="text-[var(--text-secondary)]">{template.scenario}</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-muted)]">
                      <span>预计耗时</span>
                      <span className="text-[var(--text-secondary)]">{template.estimatedTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-muted)]">
                      <span>输出物</span>
                      <span className="text-[var(--text-secondary)]">{template.output}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-secondary)]">
                    <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" />
                        {template.updatedAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {template.downloads}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--primary-400)] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">没有找到匹配的模板</h3>
              <p className="text-[var(--text-tertiary)]">
                尝试其他关键词或清除筛选条件
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 如何使用 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">如何使用模板</h2>
            <p className="text-[var(--text-tertiary)]">3步上手，立即开始自动化分析</p>
          </div>

          <div className="grid-3">
            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(59,130,246,0.15)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--accent-blue)]">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">下载模板</h3>
              <p className="text-sm text-[var(--text-tertiary)]">
                选择需要的模板，点击下载按钮获取文件
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(16,185,129,0.15)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--accent-emerald)]">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">导入 Office Agent</h3>
              <p className="text-sm text-[var(--text-tertiary)]">
                打开 Office Agent，导入下载的模板文件
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(245,158,11,0.15)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--accent-amber)]">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">输入指令执行</h3>
              <p className="text-sm text-[var(--text-tertiary)]">
                按照模板示例输入指令，自动完成分析
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - 下载 Office Agent */}
      <section className="section">
        <div className="container">
          <div className="card text-center py-12 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-tertiary)]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              还没有 Office Agent？
            </h2>
            <p className="text-[var(--text-tertiary)] mb-8 max-w-xl mx-auto">
              Office Agent 是模板运行的基础环境，免费下载安装即可使用
            </p>
            <button className="btn btn-cta">
              <Download className="w-5 h-5" />
              <span>下载 Office Agent</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
