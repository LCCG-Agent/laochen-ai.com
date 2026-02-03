"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  MessageSquare,
  Wrench,
  Shield,
  Zap,
  Table,
  BarChart3,
  FileText,
  CheckSquare,
  Sparkles,
  Settings,
  ArrowRight
} from "lucide-react";

/**
 * 工具页面 - Office Agent 介绍
 * 原"器"页面，改名避免封建迷信词汇
 */
export default function ToolsPage() {
  // Office Agent 核心特性
  const coreFeatures = [
    {
      icon: MessageSquare,
      title: "侧边栏对话",
      description: "在 Excel 中打开侧边栏，用自然语言描述需求，AI 理解并执行",
    },
    {
      icon: Table,
      title: "选区即上下文",
      description: "选中任意区域，AI 自动理解表格结构、字段含义、数据特征",
    },
    {
      icon: Wrench,
      title: "30+ 标准化工具",
      description: "数据清洗、格式转换、公式生成、图表绘制等常用操作一键完成",
    },
    {
      icon: Shield,
      title: "本地化部署",
      description: "数据不离开本地，隐私安全可控，适合企业敏感数据场景",
    },
  ];

  // 工具分类展示
  const toolCategories = [
    {
      category: "数据清洗",
      icon: Sparkles,
      color: "var(--accent-emerald)",
      bgColor: "rgba(16,185,129,0.15)",
      tools: ["去重", "格式统一", "空值处理", "异常值标记", "类型转换"],
    },
    {
      category: "数据分析",
      icon: BarChart3,
      color: "var(--accent-blue)",
      bgColor: "rgba(59,130,246,0.15)",
      tools: ["透视表生成", "同比环比计算", "趋势分析", "排名统计", "分组汇总"],
    },
    {
      category: "可视化",
      icon: FileText,
      color: "var(--accent-purple)",
      bgColor: "rgba(139,92,246,0.15)",
      tools: ["柱状图", "折线图", "饼图", "散点图", "组合图表"],
    },
    {
      category: "质量检查",
      icon: CheckSquare,
      color: "var(--accent-amber)",
      bgColor: "rgba(245,158,11,0.15)",
      tools: ["数据校验", "对账核对", "完整性检查", "一致性检查", "差异高亮"],
    },
  ];

  // 使用场景示例
  const useCases = [
    {
      scenario: "周报制作",
      before: "手动汇总数据、做图、写结论，耗时 2 小时",
      after: "选中数据区域，说「生成本周销售周报」，2 分钟完成",
    },
    {
      scenario: "数据清洗",
      before: "逐列检查格式、去重、处理空值，反复操作",
      after: "选中数据，说「清洗这份数据」，一键完成所有处理",
    },
    {
      scenario: "对账核对",
      before: "两张表逐行比对，标记差异，容易遗漏",
      after: "选中两个区域，说「对账并标记差异」，差异自动高亮",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="tag tag-amber">工具</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-tertiary)]">产品</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Office Agent
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Excel 本地 AI 插件，让数据分析回归简单。<br />
              选中数据，说出需求，剩下的交给 AI。
            </p>
          </div>
        </div>
      </section>

      {/* 核心特性 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">核心特性</h2>
            <p className="text-[var(--text-tertiary)]">
              专为数据分析场景设计的 Excel AI 插件
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="card p-6 md:p-8 min-h-[140px]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm md:text-base text-[var(--text-tertiary)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工具能力 */}
      <section className="section">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">工具能力</h2>
            <p className="text-[var(--text-tertiary)]">
              30+ 标准化工具，覆盖数据分析全流程
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {toolCategories.map((cat, index) => (
              <div key={index} className="card p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: cat.bgColor }}
                  >
                    <cat.icon className="w-6 h-6" style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex} 
                      className="px-3 py-1.5 text-sm bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使用场景 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">使用场景</h2>
            <p className="text-[var(--text-tertiary)]">
              看看 Office Agent 如何改变日常工作
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {useCases.map((useCase, index) => (
              <div key={index} className="card p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: "var(--color-accent)" }}>
                  {useCase.scenario}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                    <p className="text-xs text-[var(--text-muted)] mb-2">以前</p>
                    <p className="text-sm text-[var(--text-secondary)]">{useCase.before}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--color-accent-light)]">
                    <p className="text-xs text-[var(--color-accent)] mb-2">现在</p>
                    <p className="text-sm text-[var(--text-primary)]">{useCase.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术架构说明 */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">技术说明</h2>
              <p className="text-[var(--text-tertiary)]">
                基于 VSTO 框架开发，深度集成 Excel
              </p>
            </div>

            <div className="card p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-[var(--color-accent)]" />
                    技术栈
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li>• VSTO (Visual Studio Tools for Office)</li>
                    <li>• C# / .NET Framework</li>
                    <li>• Excel Interop API</li>
                    <li>• 本地 LLM API 调用</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[var(--color-accent)]" />
                    特点
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li>• 本地部署，数据不上传</li>
                    <li>• 支持 Excel 2016 及以上版本</li>
                    <li>• 对话 + 工具双模式</li>
                    <li>• 可扩展的工具架构</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 相关阅读 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-[var(--text-secondary)]">
              继续探索
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/methods" 
                className="card card-interactive p-6 min-h-[100px]"
              >
                <h3 className="font-semibold mb-2">方法：技术技巧</h3>
                <p className="text-sm text-[var(--text-tertiary)]">
                  了解 Skills、MCP、Agent 的实践方法
                </p>
              </Link>
              <Link 
                href="/framework" 
                className="card card-interactive p-6 min-h-[100px]"
              >
                <h3 className="font-semibold mb-2">理念：体系框架</h3>
                <p className="text-sm text-[var(--text-tertiary)]">
                  回顾数据分析自动化的整体思维框架
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
