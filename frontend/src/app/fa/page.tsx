"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowRight,
  FileCheck,
  GitBranch,
  ListChecks,
  FileText,
  Scale,
  ChevronRight,
  BookOpen,
  Clock
} from "lucide-react";

/**
 * 法页面 - 规则标准流程
 * 数据分析的"法"：口径、规范、SOP
 */
export default function FaPage() {
  // 5大核心规范
  const standards = [
    {
      id: "data-standards",
      icon: FileCheck,
      title: "数据标准",
      subtitle: "口径 + 命名 + 类型",
      description: "统一的数据口径定义、命名规范、数据类型标准",
      items: [
        "口径字典：活跃用户/GMV等指标的标准定义",
        "命名规范：字段/表/文件的命名规则",
        "数据类型：日期格式、数值精度、缺失值处理"
      ]
    },
    {
      id: "process-standards",
      icon: GitBranch,
      title: "流程规范",
      subtitle: "SOP + 检查 + 异常",
      description: "标准化的数据处理流程和质量检查",
      items: [
        "数据处理 SOP：收集→清洗→验证→转换→加载",
        "质量检查清单：重复行/日期范围/异常值检查",
        "异常处理流程：发现异常时的标准处理步骤"
      ]
    },
    {
      id: "analysis-standards",
      icon: FileText,
      title: "分析规范",
      subtitle: "模板 + 可视化 + 结论",
      description: "报告和分析的标准化规范",
      items: [
        "报告模板库：周报/月报/专题分析标准模板",
        "可视化规范：配色方案、图表类型选择指南",
        "结论撰写：现象+原因+建议的标准结构"
      ]
    },
    {
      id: "collaboration-standards",
      icon: ListChecks,
      title: "协作规范",
      subtitle: "交接 + 文档 + 版本",
      description: "团队协作的标准化流程",
      items: [
        "数据交接：交接时必须提供的信息清单",
        "文档管理：存放位置、命名规则、版本号规则",
        "知识沉淀：最佳实践的记录和分享机制"
      ]
    },
    {
      id: "evaluation-standards",
      icon: Scale,
      title: "评估标准",
      subtitle: "质量 + 自动化 + 效率",
      description: "数据质量和自动化程度的评估标准",
      items: [
        "数据质量评分卡：完整性/准确性/及时性",
        "自动化等级：手动/半自动/全自动的评估标准",
        "效率指标：处理时间、错误率、复用率"
      ]
    },
  ];

  // 示例文章
  const articles = [
    {
      title: "数据口径字典：如何避免「同名不同义」的坑",
      description: "建立统一的口径定义，让团队对指标有一致的理解，避免重复劳动和理解偏差",
      tags: ["口径", "标准化"],
      readTime: "10分钟",
      isNew: true,
    },
    {
      title: "命名规范手册：字段/表/文件的标准命名法则",
      description: "规范的命名不仅是美观，更是可维护性和可读性的基础",
      tags: ["命名", "规范"],
      readTime: "8分钟",
      isNew: true,
    },
    {
      title: "数据处理 SOP：从收集到交付的标准流程",
      description: "标准操作流程让数据处理可复制、可检查、可追溯",
      tags: ["SOP", "流程"],
      readTime: "12分钟",
      isNew: false,
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
              <span className="tag tag-blue">规范</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-tertiary)]">法</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              数分之法
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              规则、标准、流程的集合。<br />
              建立数据分析的"法律体系"，让分析工作有章可循。
            </p>
          </div>
        </div>
      </section>

      {/* 5大核心规范 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">五大核心规范</h2>
            <p className="text-[var(--text-tertiary)]">
              建立标准化的数据分析规范体系
            </p>
          </div>

          <div className="space-y-6">
            {standards.map((standard, index) => (
              <div
                key={standard.id}
                className="card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center">
                    <standard.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-[var(--color-accent)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold">{standard.title}</h3>
                    </div>
                    <p className="text-[var(--text-secondary)] font-medium mb-3">
                      {standard.subtitle}
                    </p>
                    <p className="text-[var(--text-tertiary)] mb-4">
                      {standard.description}
                    </p>
                    <ul className="space-y-2">
                      {standard.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="text-[var(--color-accent)] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 文章列表 */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">规范文章</h2>
              <p className="text-[var(--text-tertiary)]">深入理解每个规范的设计和实践</p>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            {articles.map((article, index) => (
              <Link 
                key={index} 
                href={`/fa/${index + 1}`}
                className="flex items-center justify-between p-5 md:p-6 rounded-xl border border-[var(--border-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--bg-secondary)] transition-all group min-h-[100px]"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <h4 className="font-medium text-base group-hover:text-[var(--color-accent)] transition-colors">
                      {article.title}
                    </h4>
                    {article.isNew && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-[var(--color-accent)] text-white rounded">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-tertiary)] mb-3">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                    <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all ml-4 hidden md:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 相关阅读 - 替代原来的跳转CTA */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-[var(--text-secondary)]">
              继续探索
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/dao" 
                className="card card-interactive p-6 min-h-[100px]"
              >
                <h3 className="font-semibold mb-2">道：体系框架</h3>
                <p className="text-sm text-[var(--text-tertiary)]">
                  回顾数据分析自动化的整体思维框架
                </p>
              </Link>
              <Link 
                href="/shu" 
                className="card card-interactive p-6 min-h-[100px]"
              >
                <h3 className="font-semibold mb-2">术：技术方法</h3>
                <p className="text-sm text-[var(--text-tertiary)]">
                  探索 Skills、MCP、Agent 的实践方法
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
