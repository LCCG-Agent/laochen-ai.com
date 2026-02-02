"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  Target,
  Database,
  FileCheck,
  Workflow,
  ShieldCheck,
  FolderArchive,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Clock
} from "lucide-react";

/**
 * 道页面 - 数分自动化体系框架
 * 参考：知识库 hub 页面结构
 */
export default function DaoPage() {
  // 6块体系地图数据
  const frameworkBlocks = [
    {
      id: "goal",
      icon: Target,
      title: "目标",
      subtitle: "你要交付什么",
      description: "周报/月报/看板/策略建议",
      color: "var(--accent-blue)",
      bgColor: "rgba(59,130,246,0.15)",
    },
    {
      id: "source",
      icon: Database,
      title: "数据源",
      subtitle: "数据从哪里来",
      description: "手工表/导出表/第三方平台",
      color: "var(--accent-emerald)",
      bgColor: "rgba(16,185,129,0.15)",
    },
    {
      id: "standard",
      icon: FileCheck,
      title: "标准化",
      subtitle: "字段/口径/命名/版本",
      description: "避免「同名不同义」",
      color: "var(--accent-amber)",
      bgColor: "rgba(245,158,11,0.15)",
    },
    {
      id: "automation",
      icon: Workflow,
      title: "自动化流程",
      subtitle: "采集 → 清洗 → 汇总 → 可视化 → 结论",
      description: "端到端自动化链路",
      color: "var(--accent-purple)",
      bgColor: "rgba(139,92,246,0.15)",
    },
    {
      id: "quality",
      icon: ShieldCheck,
      title: "质量控制",
      subtitle: "异常检测/对账/抽样/回滚",
      description: "保证数据准确可靠",
      color: "var(--accent-rose)",
      bgColor: "rgba(244,63,94,0.15)",
    },
    {
      id: "reuse",
      icon: FolderArchive,
      title: "复用资产",
      subtitle: "模板/宏/指令库/最佳实践库",
      description: "沉淀越多越省事",
      color: "var(--accent-cyan)",
      bgColor: "rgba(6,182,212,0.15)",
    },
  ];

  // 道栏目文章列表
  const articles = [
    {
      title: "从0搭建数分自动化：一张图讲清体系",
      description: "完整的数据分析自动化体系全景图，从目标定义到复用沉淀的全流程指南",
      tags: ["体系", "入门"],
      readTime: "15分钟",
      isNew: true,
    },
    {
      title: "口径与标准化：为什么你做不出可复用的报表",
      description: "深入剖析「同名不同义」问题的根源，以及如何建立统一的数据口径规范",
      tags: ["标准化", "进阶"],
      readTime: "12分钟",
      isNew: true,
    },
    {
      title: "交付物思维：把「分析」变成「可验收的结果」",
      description: "从产出导向思考数据分析，让每次分析都有明确的交付物和验收标准",
      tags: ["方法论", "进阶"],
      readTime: "10分钟",
      isNew: false,
    },
  ];

  // 推荐路线
  const learningPaths = [
    {
      duration: "7天",
      title: "快速入门",
      description: "了解体系框架，上手第一个模板",
      steps: ["阅读体系全景图", "下载并运行一个模板", "完成第一次自动化分析"],
    },
    {
      duration: "14天",
      title: "系统学习",
      description: "掌握标准化规范，构建工具箱",
      steps: ["建立数据口径规范", "配置3个常用模板", "搭建个人指令库"],
    },
    {
      duration: "30天",
      title: "深度实践",
      description: "完成端到端自动化，沉淀最佳实践",
      steps: ["实现完整的周报自动化", "建立质量检查流程", "沉淀可复用的资产库"],
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
              <span className="tag tag-blue">体系</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-tertiary)]">道</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              数分之道
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              从0搭体系：自动化数分的框架、流程、标准。<br />
              这里是你构建数据分析自动化能力的起点。
            </p>
          </div>
        </div>
      </section>

      {/* 框架总览 - 6块体系地图 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">数分自动化体系地图</h2>
            <p className="text-[var(--text-tertiary)]">
              6大核心模块，构建完整的数据分析自动化能力
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworkBlocks.map((block, index) => (
              <div
                key={block.id}
                className="card card-interactive group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: block.bgColor }}
                >
                  <block.icon className="w-6 h-6" style={{ color: block.color }} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold" style={{ color: block.color }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-bold">{block.title}</h3>
                </div>
                <p className="text-[var(--text-secondary)] font-medium mb-2">
                  {block.subtitle}
                </p>
                <p className="text-sm text-[var(--text-tertiary)]">
                  {block.description}
                </p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">框架文章</h2>
              <p className="text-[var(--text-tertiary)]">深入理解每个模块的方法论</p>
            </div>
          </div>

          <div className="space-y-4">
            {articles.map((article, index) => (
              <Link 
                key={index} 
                href={`/dao/${index + 1}`}
                className="card flex items-start gap-6 hover:border-[var(--border-hover)] cursor-pointer group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.15)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-[var(--accent-blue)]" />
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

      {/* 推荐学习路线 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">推荐学习路线</h2>
            <p className="text-[var(--text-tertiary)]">
              根据你的时间安排，选择合适的学习节奏
            </p>
          </div>

          <div className="grid-3">
            {learningPaths.map((path, index) => (
              <div key={index} className="card">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {path.duration}
                </div>
                <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                <p className="text-[var(--text-tertiary)] mb-6">
                  {path.description}
                </p>
                <div className="space-y-3">
                  {path.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent-emerald)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-secondary)]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card text-center py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              准备好开始了吗？
            </h2>
            <p className="text-[var(--text-tertiary)] mb-8 max-w-xl mx-auto">
              从下载第一个模板开始，体验数据分析自动化的魅力
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/qi" className="btn btn-primary">
                <span>下载模板</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/shu" className="btn btn-secondary">
                <span>查看工具清单</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
