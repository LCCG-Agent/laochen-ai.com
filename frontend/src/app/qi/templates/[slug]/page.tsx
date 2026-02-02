"use client";

import { use } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowLeft,
  Download,
  Clock,
  FileSpreadsheet,
  BarChart3,
  Table,
  FileText,
  CheckSquare,
  Wrench,
  CheckCircle2,
  Copy,
  RefreshCw,
  ChevronRight
} from "lucide-react";

// 模板数据（实际项目中应该从API或数据库获取）
const templatesData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  scenario: string;
  estimatedTime: string;
  output: string;
  updatedAt: string;
  downloads: number;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  examples: string[];
  steps: string[];
  changelog: { version: string; date: string; changes: string[] }[];
}> = {
  "weekly-report": {
    title: "一键周报模板",
    description: "自动汇总周数据，生成标准周报，包含环比分析和下周建议",
    longDescription: "这个模板可以自动将你的周数据汇总成标准格式的周报。只需要输入简单的指令，就能自动完成数据汇总、环比分析、趋势判断，并生成专业的周报文档，包含可视化图表和下周工作建议。",
    scenario: "每周一早上快速出周报",
    estimatedTime: "2分钟",
    output: "完整周报文档",
    updatedAt: "2026-01-28",
    downloads: 1280,
    icon: FileText,
    color: "var(--accent-blue)",
    bgColor: "rgba(59,130,246,0.15)",
    examples: [
      "生成本周销售周报",
      "汇总上周运营数据并出周报",
      "做一份本周用户增长周报",
    ],
    steps: [
      "准备本周的原始数据表格",
      "在 Office Agent 中导入此模板",
      "输入指令，如「生成本周销售周报」",
      "等待2分钟，获取完整周报",
    ],
    changelog: [
      { version: "1.2.0", date: "2026-01-28", changes: ["新增下周建议模块", "优化图表样式"] },
      { version: "1.1.0", date: "2026-01-15", changes: ["支持自定义周报模板", "新增环比分析"] },
      { version: "1.0.0", date: "2026-01-01", changes: ["初始版本发布"] },
    ],
  },
  "data-clean": {
    title: "数据清洗模板",
    description: "一键去重、格式统一、空值处理、异常值标记",
    longDescription: "数据清洗是数据分析的第一步，这个模板可以自动完成常见的数据清洗任务：去除重复行、统一日期和数字格式、智能填充空值、标记异常值。让你的数据变得干净整洁，为后续分析打好基础。",
    scenario: "收到杂乱数据需要整理时",
    estimatedTime: "1分钟",
    output: "清洗后的标准表格",
    updatedAt: "2026-01-25",
    downloads: 956,
    icon: Table,
    color: "var(--accent-emerald)",
    bgColor: "rgba(16,185,129,0.15)",
    examples: [
      "去除重复行，统一日期格式",
      "清洗这份数据，处理空值",
      "标记异常值并统一格式",
    ],
    steps: [
      "准备需要清洗的数据表格",
      "在 Office Agent 中导入此模板",
      "输入清洗指令，描述你的需求",
      "获取清洗后的数据和处理日志",
    ],
    changelog: [
      { version: "2.0.0", date: "2026-01-25", changes: ["新增智能空值填充", "异常值检测算法优化"] },
      { version: "1.5.0", date: "2026-01-10", changes: ["支持更多日期格式"] },
      { version: "1.0.0", date: "2025-12-15", changes: ["初始版本发布"] },
    ],
  },
  "topn-chart": {
    title: "TopN 出图模板",
    description: "自动识别数据字段，一键生成 Top10/Top20 排行榜图表",
    longDescription: "需要快速出一个排行榜？这个模板可以自动识别你数据中的数值字段和维度字段，一键生成专业的 Top10/Top20 排行榜图表。支持柱状图、条形图等多种样式，还可以自定义颜色和标题。",
    scenario: "需要快速出排行榜图表",
    estimatedTime: "30秒",
    output: "柱状图 + 数据表",
    updatedAt: "2026-01-30",
    downloads: 734,
    icon: BarChart3,
    color: "var(--accent-amber)",
    bgColor: "rgba(245,158,11,0.15)",
    examples: [
      "出一个销售额 Top10 图",
      "生成产品销量排行榜",
      "做一个用户活跃度前20名的图",
    ],
    steps: [
      "准备包含数值数据的表格",
      "在 Office Agent 中导入此模板",
      "输入出图指令，如「出销售额Top10图」",
      "获取排行榜图表和数据表",
    ],
    changelog: [
      { version: "1.1.0", date: "2026-01-30", changes: ["新增条形图样式", "支持自定义颜色"] },
      { version: "1.0.0", date: "2026-01-15", changes: ["初始版本发布"] },
    ],
  },
  "monthly-trend": {
    title: "月份汇总 + 趋势分析模板",
    description: "按月份自动汇总，生成趋势图，计算同比环比",
    longDescription: "这个模板专门用于月度数据分析。它可以自动将数据按月份汇总，生成趋势折线图，并计算同比和环比增长率。还会自动识别增长或下降趋势，给出简要的分析结论。",
    scenario: "月度数据分析和汇报",
    estimatedTime: "2分钟",
    output: "趋势图 + 分析结论",
    updatedAt: "2026-01-22",
    downloads: 867,
    icon: FileSpreadsheet,
    color: "var(--accent-purple)",
    bgColor: "rgba(139,92,246,0.15)",
    examples: [
      "按月份汇总销售额并生成折线图",
      "分析近12个月的用户增长趋势",
      "出一个月度营收趋势图加结论",
    ],
    steps: [
      "准备包含日期和数值的数据表",
      "在 Office Agent 中导入此模板",
      "输入分析指令，描述你的需求",
      "获取趋势图、汇总表和分析结论",
    ],
    changelog: [
      { version: "1.3.0", date: "2026-01-22", changes: ["修复跨年日期识别问题", "新增自动结论生成"] },
      { version: "1.2.0", date: "2026-01-08", changes: ["支持同比环比计算"] },
      { version: "1.0.0", date: "2025-12-20", changes: ["初始版本发布"] },
    ],
  },
  "reconciliation": {
    title: "对账校验模板",
    description: "两表自动对账，差异高亮显示，生成对账报告",
    longDescription: "财务对账、数据核对必备工具。这个模板可以自动比对两份数据表，找出差异项并高亮显示，生成详细的对账报告。支持多种匹配方式，可以处理字段名称不同但含义相同的情况。",
    scenario: "财务对账、数据核对",
    estimatedTime: "1分钟",
    output: "对账报告 + 差异明细",
    updatedAt: "2026-01-20",
    downloads: 623,
    icon: CheckSquare,
    color: "var(--accent-rose)",
    bgColor: "rgba(244,63,94,0.15)",
    examples: [
      "对比这两份表格，找出差异",
      "做一个财务对账报告",
      "核对系统导出和人工统计的差异",
    ],
    steps: [
      "准备需要对比的两份数据表",
      "在 Office Agent 中导入此模板",
      "输入对账指令，指明对比方式",
      "获取对账报告和差异明细表",
    ],
    changelog: [
      { version: "1.1.0", date: "2026-01-20", changes: ["支持字段映射", "新增差异汇总统计"] },
      { version: "1.0.0", date: "2026-01-05", changes: ["初始版本发布"] },
    ],
  },
  "macro-toolbox": {
    title: "宏工具箱",
    description: "常用一键操作合集：批量重命名、格式统一、快速筛选等",
    longDescription: "这不是单个模板，而是一个工具合集。包含20+个日常高频使用的一键操作：批量重命名工作表、统一单元格格式、快速筛选特定条件、批量替换内容等。安装后随时调用，大幅提升日常操作效率。",
    scenario: "日常高频操作提效",
    estimatedTime: "即时",
    output: "20+ 常用宏",
    updatedAt: "2026-01-18",
    downloads: 1456,
    icon: Wrench,
    color: "var(--accent-cyan)",
    bgColor: "rgba(6,182,212,0.15)",
    examples: [
      "批量重命名所有工作表",
      "统一所有数字格式为两位小数",
      "快速筛选出金额大于10000的行",
    ],
    steps: [
      "下载并安装宏工具箱",
      "在 Office Agent 中启用工具箱",
      "输入操作指令或从菜单选择",
      "即时完成批量操作",
    ],
    changelog: [
      { version: "3.0.0", date: "2026-01-18", changes: ["新增5个常用宏", "优化执行速度"] },
      { version: "2.5.0", date: "2026-01-02", changes: ["新增批量替换功能"] },
      { version: "2.0.0", date: "2025-12-10", changes: ["重构架构，提升稳定性"] },
    ],
  },
};

/**
 * 模板详情页
 */
export default function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const template = templatesData[slug];

  // 如果模板不存在
  if (!template) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Header />
        <div className="container pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">模板不存在</h1>
          <p className="text-[var(--text-tertiary)] mb-8">
            你访问的模板可能已被移除或链接有误
          </p>
          <Link href="/qi" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" />
            <span>返回模板库</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = template.icon;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Link href="/qi" className="hover:text-[var(--text-primary)] transition-colors">
              器
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/qi" className="hover:text-[var(--text-primary)] transition-colors">
              模板库
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[var(--text-secondary)]">{template.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Info */}
            <div className="flex-1">
              <div 
                className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
                style={{ background: template.bgColor }}
              >
                <Icon className="w-10 h-10" style={{ color: template.color }} />
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{template.title}</h1>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                {template.longDescription}
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="card py-4">
                  <div className="text-sm text-[var(--text-muted)] mb-1">适用场景</div>
                  <div className="font-medium">{template.scenario}</div>
                </div>
                <div className="card py-4">
                  <div className="text-sm text-[var(--text-muted)] mb-1">预计耗时</div>
                  <div className="font-medium">{template.estimatedTime}</div>
                </div>
                <div className="card py-4">
                  <div className="text-sm text-[var(--text-muted)] mb-1">输出物</div>
                  <div className="font-medium">{template.output}</div>
                </div>
                <div className="card py-4">
                  <div className="text-sm text-[var(--text-muted)] mb-1">下载次数</div>
                  <div className="font-medium">{template.downloads.toLocaleString()}</div>
                </div>
              </div>

              {/* Download Button */}
              <button className="btn btn-cta w-full sm:w-auto">
                <Download className="w-5 h-5" />
                <span>下载模板</span>
              </button>
            </div>

            {/* Right: Examples */}
            <div className="lg:w-[400px]">
              <div className="card">
                <h3 className="font-semibold mb-4">一句话示例</h3>
                <div className="space-y-3">
                  {template.examples.map((example, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-[var(--bg-tertiary)] rounded-lg group cursor-pointer hover:bg-[var(--bg-card-hover)] transition-colors"
                    >
                      <div className="flex-1 text-sm text-[var(--text-secondary)]">
                        "{example}"
                      </div>
                      <Copy className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使用步骤 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">安装/使用步骤</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {template.steps.map((step, index) => (
              <div key={index} className="card">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary-600)] flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-[var(--text-secondary)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 输出示例 */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">输出示例</h2>
          <div className="card">
            <div className="aspect-video bg-[var(--bg-tertiary)] rounded-lg flex items-center justify-center">
              <div className="text-center text-[var(--text-muted)]">
                <Icon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>输出示例截图</p>
                <p className="text-sm mt-1">实际使用中会显示生成的结果</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 版本更新记录 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">版本更新记录</h2>
          <div className="space-y-4">
            {template.changelog.map((log, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-[var(--primary-600)] text-white text-sm font-medium rounded">
                    v{log.version}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                    <RefreshCw className="w-4 h-4" />
                    {log.date}
                  </span>
                </div>
                <ul className="space-y-2">
                  {log.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)] shrink-0 mt-0.5" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card text-center py-12">
            <h2 className="text-2xl font-bold mb-4">准备好使用这个模板了吗？</h2>
            <p className="text-[var(--text-tertiary)] mb-8">
              点击下载，立即开始自动化数据分析
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn btn-cta">
                <Download className="w-5 h-5" />
                <span>下载模板</span>
              </button>
              <Link href="/qi" className="btn btn-secondary">
                <span>浏览更多模板</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
