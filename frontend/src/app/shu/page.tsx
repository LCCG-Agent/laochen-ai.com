"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search,
  ArrowRight,
  Sparkles,
  Plug,
  Bot,
  Lightbulb,
  ChevronRight,
  Clock,
  Star,
  ExternalLink
} from "lucide-react";

/**
 * 术页面 - 工具清单库
 * 参考：Raycast Store 的可搜索/可筛选结构
 */
export default function ShuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // 分类
  const categories = [
    { id: "all", label: "全部", count: 12 },
    { id: "skills", label: "Skills", count: 4 },
    { id: "mcp", label: "MCP", count: 3 },
    { id: "agent", label: "Agent 工作流", count: 3 },
    { id: "tips", label: "小技巧", count: 2 },
  ];

  // 工具卡片数据
  const tools = [
    // Skills
    {
      id: "skill-chart",
      category: "skills",
      title: "出图 Skill",
      description: "一句话生成各类图表：柱状图、折线图、饼图、散点图等",
      usage: "出图类",
      stars: 128,
      isNew: true,
      tags: ["出图", "可视化"],
    },
    {
      id: "skill-clean",
      category: "skills",
      title: "数据清洗 Skill",
      description: "自动去重、格式统一、空值处理、异常标记",
      usage: "清洗类",
      stars: 96,
      isNew: true,
      tags: ["清洗", "预处理"],
    },
    {
      id: "skill-summary",
      category: "skills",
      title: "汇总分析 Skill",
      description: "按维度汇总、同比环比计算、趋势判断",
      usage: "汇总类",
      stars: 85,
      isNew: false,
      tags: ["汇总", "分析"],
    },
    {
      id: "skill-conclusion",
      category: "skills",
      title: "结论生成 Skill",
      description: "基于数据自动生成3-5条分析结论和建议",
      usage: "写结论",
      stars: 72,
      isNew: false,
      tags: ["结论", "AI"],
    },
    // MCP
    {
      id: "mcp-datasource",
      category: "mcp",
      title: "数据源 MCP",
      description: "连接各类数据源：Excel、CSV、数据库、API",
      usage: "信息源",
      stars: 156,
      isNew: false,
      tags: ["数据源", "连接"],
    },
    {
      id: "mcp-automation",
      category: "mcp",
      title: "自动化 MCP",
      description: "定时执行、触发器、任务编排",
      usage: "自动化",
      stars: 134,
      isNew: true,
      tags: ["自动化", "调度"],
    },
    {
      id: "mcp-content",
      category: "mcp",
      title: "内容生产 MCP",
      description: "自动生成报告、周报、邮件内容",
      usage: "内容生产",
      stars: 89,
      isNew: false,
      tags: ["内容", "生成"],
    },
    // Agent 工作流
    {
      id: "agent-weekly",
      category: "agent",
      title: "周报生成工作流",
      description: "从需求到交付：数据收集 → 分析 → 报告生成 → 发送",
      usage: "完整流程",
      stars: 201,
      isNew: true,
      tags: ["周报", "工作流"],
    },
    {
      id: "agent-dashboard",
      category: "agent",
      title: "看板更新工作流",
      description: "自动更新数据看板：拉取 → 计算 → 刷新 → 通知",
      usage: "完整流程",
      stars: 167,
      isNew: false,
      tags: ["看板", "自动更新"],
    },
    {
      id: "agent-alert",
      category: "agent",
      title: "数据预警工作流",
      description: "异常检测 → 判断 → 预警 → 推送相关人",
      usage: "完整流程",
      stars: 145,
      isNew: false,
      tags: ["预警", "监控"],
    },
    // 小技巧
    {
      id: "tip-excel",
      category: "tips",
      title: "Excel 快捷键大全",
      description: "提升效率的50个Excel快捷键，附记忆技巧",
      usage: "效率提升",
      stars: 234,
      isNew: false,
      tags: ["Excel", "效率"],
    },
    {
      id: "tip-check",
      category: "tips",
      title: "数据校验检查清单",
      description: "10个必做的数据质量检查项，避免低级错误",
      usage: "质量控制",
      stars: 178,
      isNew: false,
      tags: ["检查", "质量"],
    },
  ];

  // 文章列表
  const articles = [
    {
      title: "Skills 清单：最常用的10条「一句话指令」",
      description: "精选最实用的数据分析指令，复制即用，效率翻倍",
      tags: ["Skills", "实战"],
      readTime: "8分钟",
      isNew: true,
    },
    {
      title: "MCP 入门：把工具串起来的最小工作流",
      description: "从0搭建你的第一个自动化工作流，让工具协同工作",
      tags: ["MCP", "入门"],
      readTime: "12分钟",
      isNew: true,
    },
    {
      title: "Agent 工作流：从需求到交付的标准步骤",
      description: "详解完整的数据分析工作流设计，从需求理解到结果交付",
      tags: ["Agent", "进阶"],
      readTime: "15分钟",
      isNew: false,
    },
  ];

  // 过滤工具
  const filteredTools = tools.filter((tool) => {
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // 获取分类图标
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "skills": return Sparkles;
      case "mcp": return Plug;
      case "agent": return Bot;
      case "tips": return Lightbulb;
      default: return Sparkles;
    }
  };

  // 获取分类颜色
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "skills": return { color: "var(--accent-blue)", bg: "rgba(59,130,246,0.15)" };
      case "mcp": return { color: "var(--accent-emerald)", bg: "rgba(16,185,129,0.15)" };
      case "agent": return { color: "var(--accent-purple)", bg: "rgba(139,92,246,0.15)" };
      case "tips": return { color: "var(--accent-amber)", bg: "rgba(245,158,11,0.15)" };
      default: return { color: "var(--accent-blue)", bg: "rgba(59,130,246,0.15)" };
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="tag tag-emerald">工具</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-tertiary)]">术</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              数分之术
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Skills / MCP / Agent 的拿来就用清单与教程。<br />
              搜索你需要的工具，直接上手使用。
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
                placeholder="搜索工具、技巧或关键词..."
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
                  <span className="ml-2 opacity-60">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 工具卡片网格 */}
      <section className="section">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-xl font-semibold">
              {activeCategory === "all" ? "全部工具" : categories.find(c => c.id === activeCategory)?.label}
              <span className="ml-2 text-[var(--text-muted)] font-normal">
                ({filteredTools.length})
              </span>
            </h2>
          </div>

          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => {
                const Icon = getCategoryIcon(tool.category);
                const colors = getCategoryColor(tool.category);
                
                return (
                  <div
                    key={tool.id}
                    className="card card-interactive group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ background: colors.bg }}
                      >
                        <Icon className="w-6 h-6" style={{ color: colors.color }} />
                      </div>
                      {tool.isNew && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-[var(--accent-emerald)] text-white rounded">
                          NEW
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--primary-400)] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-[var(--text-tertiary)] mb-4 line-clamp-2">
                      {tool.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {tool.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="tag text-xs">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Star className="w-3 h-3" />
                        <span>{tool.stars}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">没有找到匹配的工具</h3>
              <p className="text-[var(--text-tertiary)]">
                尝试其他关键词或清除筛选条件
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 教程文章 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">实战教程</h2>
              <p className="text-[var(--text-tertiary)]">手把手教你上手使用</p>
            </div>
          </div>

          <div className="space-y-4">
            {articles.map((article, index) => (
              <Link 
                key={index} 
                href={`/shu/${index + 1}`}
                className="card flex items-start gap-6 hover:border-[var(--border-hover)] cursor-pointer group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[rgba(16,185,129,0.15)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6 text-[var(--accent-emerald)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-[var(--primary-400)] transition-colors">
                      {article.title}
                    </h3>
                    {article.isNew && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-[var(--accent-emerald)] text-white rounded">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--text-tertiary)] mb-3 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                    <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 self-center">
                  <ChevronRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card text-center py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              工具只是手段，模板才是捷径
            </h2>
            <p className="text-[var(--text-tertiary)] mb-8 max-w-xl mx-auto">
              直接下载配置好的模板，开箱即用
            </p>
            <Link href="/qi" className="btn btn-cta">
              <span>去下载模板</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
