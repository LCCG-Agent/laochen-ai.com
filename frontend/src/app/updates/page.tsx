"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Box,
  Wrench,
  Compass,
  Bug,
  Sparkles,
  Clock
} from "lucide-react";

/**
 * 更新日志页面
 * 参考：Linear Changelog 风格
 */
export default function UpdatesPage() {
  // 更新记录数据
  const updates = [
    {
      date: "2026-01-30",
      items: [
        {
          type: "new",
          category: "模板",
          title: "新增：TopN 出图模板",
          description: "支持自动识别数据字段，一键生成 Top10/Top20 排行榜图表，支持柱状图和条形图两种样式",
          icon: Box,
          color: "var(--accent-blue)",
          bgColor: "rgba(59,130,246,0.15)",
        },
      ],
    },
    {
      date: "2026-01-28",
      items: [
        {
          type: "update",
          category: "模板",
          title: "更新：一键周报模板 v1.2.0",
          description: "新增下周建议模块，优化图表样式，周报输出更加专业美观",
          icon: Box,
          color: "var(--accent-blue)",
          bgColor: "rgba(59,130,246,0.15)",
        },
      ],
    },
    {
      date: "2026-01-25",
      items: [
        {
          type: "update",
          category: "工具",
          title: "更新：数据清洗 Skill 优化",
          description: "新增空值智能填充、异常值标记功能，处理速度提升 40%，支持更多数据类型",
          icon: Wrench,
          color: "var(--accent-emerald)",
          bgColor: "rgba(16,185,129,0.15)",
        },
        {
          type: "new",
          category: "模板",
          title: "更新：数据清洗模板 v2.0.0",
          description: "配合 Skill 更新，新增智能空值填充和异常值检测功能",
          icon: Box,
          color: "var(--accent-blue)",
          bgColor: "rgba(59,130,246,0.15)",
        },
      ],
    },
    {
      date: "2026-01-22",
      items: [
        {
          type: "fix",
          category: "模板",
          title: "修复：月份汇总模板日期识别问题",
          description: "修复了跨年日期识别错误的问题，现已支持多种日期格式，包括 YYYY-MM-DD、YYYY/MM/DD、DD/MM/YYYY 等",
          icon: Bug,
          color: "var(--accent-rose)",
          bgColor: "rgba(244,63,94,0.15)",
        },
        {
          type: "new",
          category: "框架",
          title: "新增：口径标准化指南",
          description: "详解如何建立统一的数据口径规范，避免「同名不同义」的坑，提供完整的口径文档模板",
          icon: Compass,
          color: "var(--accent-purple)",
          bgColor: "rgba(139,92,246,0.15)",
        },
      ],
    },
    {
      date: "2026-01-20",
      items: [
        {
          type: "new",
          category: "模板",
          title: "新增：对账校验模板",
          description: "支持两表自动对账，差异高亮显示，生成对账报告，适用于财务对账和数据核对场景",
          icon: Box,
          color: "var(--accent-blue)",
          bgColor: "rgba(59,130,246,0.15)",
        },
      ],
    },
    {
      date: "2026-01-18",
      items: [
        {
          type: "update",
          category: "模板",
          title: "更新：宏工具箱 v3.0.0",
          description: "新增5个常用宏，优化执行速度，修复部分兼容性问题",
          icon: Wrench,
          color: "var(--accent-cyan)",
          bgColor: "rgba(6,182,212,0.15)",
        },
      ],
    },
    {
      date: "2026-01-15",
      items: [
        {
          type: "new",
          category: "工具",
          title: "新增：自动化 MCP",
          description: "支持定时执行、触发器、任务编排，让你的数据分析工作流完全自动化运行",
          icon: Sparkles,
          color: "var(--accent-emerald)",
          bgColor: "rgba(16,185,129,0.15)",
        },
        {
          type: "update",
          category: "模板",
          title: "更新：一键周报模板 v1.1.0",
          description: "支持自定义周报模板，新增环比分析功能",
          icon: Box,
          color: "var(--accent-blue)",
          bgColor: "rgba(59,130,246,0.15)",
        },
      ],
    },
    {
      date: "2026-01-10",
      items: [
        {
          type: "update",
          category: "模板",
          title: "更新：数据清洗模板 v1.5.0",
          description: "支持更多日期格式，优化去重算法",
          icon: Box,
          color: "var(--accent-blue)",
          bgColor: "rgba(59,130,246,0.15)",
        },
      ],
    },
    {
      date: "2026-01-08",
      items: [
        {
          type: "update",
          category: "模板",
          title: "更新：月份汇总模板 v1.2.0",
          description: "支持同比环比计算，新增趋势判断功能",
          icon: Box,
          color: "var(--accent-blue)",
          bgColor: "rgba(59,130,246,0.15)",
        },
      ],
    },
    {
      date: "2026-01-05",
      items: [
        {
          type: "new",
          category: "模板",
          title: "新增：对账校验模板 v1.0.0",
          description: "首次发布，支持基础的两表对账功能",
          icon: Box,
          color: "var(--accent-blue)",
          bgColor: "rgba(59,130,246,0.15)",
        },
      ],
    },
    {
      date: "2026-01-01",
      items: [
        {
          type: "new",
          category: "全站",
          title: "老陈AI工坊正式上线！",
          description: "经过精心准备，老陈AI工坊正式与大家见面。首批上线6个模板、12个工具、完整的体系框架文档。让我们一起开启数据分析自动化之旅！",
          icon: Sparkles,
          color: "var(--accent-amber)",
          bgColor: "rgba(245,158,11,0.15)",
        },
      ],
    },
  ];

  // 获取类型标签样式
  const getTypeStyle = (type: string) => {
    switch (type) {
      case "new":
        return { label: "新增", className: "bg-[var(--accent-emerald)] text-white" };
      case "update":
        return { label: "更新", className: "bg-[var(--accent-blue)] text-white" };
      case "fix":
        return { label: "修复", className: "bg-[var(--accent-rose)] text-white" };
      default:
        return { label: "其他", className: "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]" };
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              更新日志
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              持续迭代，不断优化。这里记录了每一次更新和改进。
            </p>
          </div>
        </div>
      </section>

      {/* 更新列表 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {updates.map((dateGroup, groupIndex) => (
              <div key={groupIndex} className="mb-12 last:mb-0">
                {/* 日期标题 */}
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-[var(--text-muted)]" />
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    {dateGroup.date}
                  </h2>
                </div>

                {/* 更新项 */}
                <div className="space-y-4 pl-8 border-l border-[var(--border-primary)]">
                  {dateGroup.items.map((item, itemIndex) => {
                    const typeStyle = getTypeStyle(item.type);
                    return (
                      <div key={itemIndex} className="card relative">
                        {/* 时间线圆点 */}
                        <div 
                          className="absolute -left-[calc(2rem+12px)] top-6 w-4 h-4 rounded-full border-2 border-[var(--bg-secondary)]"
                          style={{ background: item.color }}
                        />
                        
                        <div className="flex items-start gap-4">
                          <div 
                            className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ background: item.bgColor }}
                          >
                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-2 py-0.5 text-xs font-medium rounded ${typeStyle.className}`}>
                                {typeStyle.label}
                              </span>
                              <span className="tag text-xs">{item.category}</span>
                            </div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-[var(--text-tertiary)]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
