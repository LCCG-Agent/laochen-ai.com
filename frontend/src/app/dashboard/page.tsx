"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Newspaper, 
  Search, 
  Target, 
  Compass,
  Wrench,
  Flame,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  Zap
} from "lucide-react";
import Header from "@/components/Header";

// ============================================
// 硬编码真实数据 - 后期改API
// ============================================

const DASHBOARD_DATA = {
  cases: [
    { id: 1, title: "ChatGPT驱动报表自动化革命，效率提升87%", is_new: true, priority: "high", date: "01-31", ai_summary: "麦肯锡报告：周报生成从2小时缩短至15分钟", impact: "高" },
    { id: 2, title: "Claude助力复杂SQL查询生成，准确率达92%", is_new: true, priority: "high", date: "01-30", ai_summary: "德勤案例：业务团队3分钟完成原半天查询工作", impact: "高" },
    { id: 3, title: "AI驱动的数据清洗自动化实践案例", is_new: true, priority: "medium", date: "01-28", ai_summary: "一键清洗Excel，节省80%数据准备时间", impact: "中" },
    { id: 4, title: "Copilot加速数据分析代码编写指南", is_new: false, priority: "medium", date: "01-25", ai_summary: "GitHub数据：编码速度提升55%，bug率降低40%", impact: "中" },
    { id: 5, title: "AI辅助数据可视化设计最佳实践", is_new: false, priority: "low", date: "01-22", ai_summary: "自动生成配色和布局，客户满意度提升30%", impact: "低" },
  ],
  research: [
    { id: 1, title: "AI工具市场SWOT分析报告", is_new: true, importance: "high", date: "01-31", ai_summary: "技术成熟度高，市场需求旺盛，但数据隐私存在风险", impact: "高" },
    { id: 2, title: "数据分析师技能演进趋势2026", is_new: true, importance: "high", date: "01-28", ai_summary: "AI工具应用能力成为核心技能，评分9/10", impact: "高" },
    { id: 3, title: "AI辅助分析PEST分析框架", is_new: false, importance: "medium", date: "01-25", ai_summary: "政策支持力度大，企业数字化转型加速", impact: "中" },
    { id: 4, title: "大模型在数据分析领域应用白皮书", is_new: false, importance: "medium", date: "01-20", ai_summary: "预测2026年70%分析师将使用AI工具", impact: "中" },
  ],
  strategy: [
    { id: 1, title: "数据分析师AI转型3个月路径", is_new: true, recommendation: "high", date: "01-31", ai_summary: "零基础到熟练应用，预计效率提升70%", impact: "高" },
    { id: 2, title: "企业数据分析AI化改造6个月计划", is_new: true, recommendation: "high", date: "01-28", ai_summary: "全面AI化改造，年节省成本500万元", impact: "高" },
    { id: 3, title: "Excel+ChatGPT最佳实践路径", is_new: false, recommendation: "medium", date: "01-24", ai_summary: "从简单公式到复杂自动化逐步进阶", impact: "中" },
    { id: 4, title: "Python数据分析AI化转型方案", is_new: false, recommendation: "medium", date: "01-20", ai_summary: "Copilot辅助编码，pandas效率翻倍", impact: "中" },
  ],
  competitor: [
    { id: 1, title: "OpenAI发布ChatGPT数据分析专业版", is_new: true, risk_level: "高", date: "01-31", ai_summary: "⚠️ 新增Python执行、Excel直连，可能替代轻量BI工具", impact: "高" },
    { id: 2, title: "Google Gemini Analytics正式推出", is_new: true, risk_level: "高", date: "01-28", ai_summary: "⚠️ 深度集成BigQuery，对企业级市场形成冲击", impact: "高" },
    { id: 3, title: "Tableau AI Copilot功能更新", is_new: false, risk_level: "中", date: "01-25", ai_summary: "自然语言生成图表，传统BI开始AI化转型", impact: "中" },
    { id: 4, title: "微软PowerBI Copilot内测启动", is_new: false, risk_level: "中", date: "01-22", ai_summary: "Office生态深度整合，值得关注", impact: "中" },
  ],
  resources: [
    { id: 1, name: "数据分析报告生成提示词模板", is_new: true, is_example: true, date: "01-31", ai_summary: "输入数据目标，AI自动生成结构化报告框架" },
    { id: 2, name: "Excel数据清洗VBA宏代码", is_new: true, is_example: true, date: "01-29", ai_summary: "一键清洗：去空白、统一格式、处理缺失值" },
    { id: 3, name: "SQL查询优化提示词合集", is_new: false, is_example: true, date: "01-24", ai_summary: "多表关联、复杂筛选、性能优化建议" },
    { id: 4, name: "Python数据可视化代码片段", is_new: false, is_example: false, date: "01-20", ai_summary: "Matplotlib/Seaborn/Plotly常用图表模板" },
  ],
};

const MODULES_CONFIG = [
  { 
    id: "cases",
    title: "资讯捕捉", 
    subtitle: "追风向",
    desc: "AI工具应用案例与行业资讯",
    href: "/cases",
    icon: Newspaper,
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.1)",
    priorityField: "priority",
    priorityValue: "high"
  },
  { 
    id: "research",
    title: "调研洞察", 
    subtitle: "挖本质",
    desc: "市场分析框架与趋势研判",
    href: "/research",
    icon: Search,
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.1)",
    priorityField: "importance",
    priorityValue: "high"
  },
  { 
    id: "strategy",
    title: "沙盘推演", 
    subtitle: "定策略",
    desc: "最佳实践路径对比分析",
    href: "/strategy",
    icon: Compass,
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.1)",
    priorityField: "recommendation",
    priorityValue: "high"
  },
  { 
    id: "competitor",
    title: "竞品雷达", 
    subtitle: "知对手",
    desc: "关键产品动态追踪分析",
    href: "/competitor",
    icon: Target,
    color: "#f43f5e",
    bgColor: "rgba(244, 63, 94, 0.1)",
    priorityField: "attention_level",
    priorityValue: "high"
  },
  { 
    id: "resources",
    title: "工具资源", 
    subtitle: "提效率",
    desc: "提示词模板与代码工具",
    href: "/resources",
    icon: Wrench,
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.1)",
    priorityField: "is_example",
    priorityValue: true
  }
];

// ============================================
// 轮播组件
// ============================================
function NewsTicker({ items, color }: { items: any[], color: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);
  
  const currentItem = items[currentIndex];
  
  return (
    <div className="relative overflow-hidden">
      <div 
        className="rounded-lg p-2.5 transition-all duration-500"
        style={{ background: currentItem?.is_new ? `${color}08` : 'var(--bg-tertiary)' }}
      >
        {/* 标签行 */}
        <div className="flex items-center gap-2 mb-2">
          {currentItem?.is_new && (
            <span 
              className="text-[10px] font-bold px-1.5 py-0.5 rounded"
              style={{ background: color, color: 'white' }}
            >
              NEW
            </span>
          )}
          {(currentItem?.priority === 'high' || currentItem?.importance === 'high' || currentItem?.risk_level === '高') && (
            <span 
              className="text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5"
              style={{ background: 'rgba(244, 63, 94, 0.9)', color: 'white' }}
            >
              <Zap className="w-2.5 h-2.5" />
              高优
            </span>
          )}
          {currentItem?.risk_level === '高' && (
            <span 
              className="text-[10px] font-bold px-1.5 py-0.5 rounded"
              style={{ background: 'rgba(239, 68, 68, 0.9)', color: 'white' }}
            >
              ⚠️ 紧急
            </span>
          )}
          <span className="text-[10px] ml-auto" style={{ color: 'var(--text-muted)' }}>
            {currentItem?.date}
          </span>
        </div>
        
        {/* 标题 */}
        <p 
          className="text-sm font-medium mb-1.5 line-clamp-1"
          style={{ color: 'var(--text-primary)' }}
        >
          {currentItem?.title || currentItem?.name}
        </p>
        
        {/* AI摘要 */}
        <div className="flex items-start gap-1.5">
          <Sparkles className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color }} />
          <p className="text-xs line-clamp-1" style={{ color: 'var(--text-secondary)' }}>
            {currentItem?.ai_summary}
          </p>
        </div>
      </div>
      
      {/* 指示器 */}
      {items.length > 1 && (
        <div className="flex justify-center gap-1 mt-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{ 
                background: idx === currentIndex ? color : 'var(--border-primary)'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// 统计数字组件
// ============================================
function StatNumber({ value, label, color, icon: Icon }: { value: number, label: string, color: string, icon: any }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: `${color}15` }}>
      <Icon className="w-3.5 h-3.5" style={{ color }} />
      <span className="text-sm font-bold" style={{ color }}>{value}</span>
      <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{label}</span>
    </div>
  );
}

// ============================================
// 模块卡片组件
// ============================================
function ModuleCard({ module, data }: { module: typeof MODULES_CONFIG[0], data: any[] }) {
  const Icon = module.icon;
  const highCount = data.filter((item: any) => 
    item.priority === 'high' || item.importance === 'high' || item.risk_level === '高'
  ).length;
  const newCount = data.filter((item: any) => item.is_new).length;
  
  return (
    <Link href={module.href} className="group block h-full">
      <div 
        className="h-full rounded-xl border p-4 transition-all duration-300 hover:shadow-xl"
        style={{ 
          background: 'var(--bg-secondary)',
          borderColor: highCount > 0 ? `${module.color}50` : 'var(--border-primary)',
        }}
      >
        {/* 头部 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: module.bgColor, color: module.color }}
            >
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                {module.title}
              </h3>
              <span 
                className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                style={{ background: module.bgColor, color: module.color }}
              >
                {module.subtitle}
              </span>
            </div>
          </div>
          
          {/* 右上角统计 */}
          <div className="flex flex-col items-end gap-1">
            {newCount > 0 && (
              <div className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-sm font-bold text-orange-500">{newCount}</span>
              </div>
            )}
            {highCount > 0 && (
              <div className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-sm font-bold text-rose-500">{highCount}</span>
              </div>
            )}
            {!newCount && !highCount && (
              <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                {data.length} 条
              </span>
            )}
          </div>
        </div>
        
        {/* 描述 */}
        <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
          {module.desc}
        </p>
        
        {/* 轮播内容 */}
        <div className="mb-3">
          <NewsTicker items={data.slice(0, 3)} color={module.color} />
        </div>
        
        {/* 底部 */}
        <div 
          className="pt-2 border-t flex items-center justify-between"
          style={{ borderColor: 'var(--border-secondary)' }}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" style={{ color: module.color }} />
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              AI 解读 {data.length} 条
            </span>
          </div>
          <div 
            className="flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2"
            style={{ color: module.color }}
          >
            <span>查看全部</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

// ============================================
// 主页面
// ============================================
export default function Dashboard() {
  
  // 计算统计数据
  const allItems = Object.values(DASHBOARD_DATA).flat();
  const totalNew = allItems.filter(item => item.is_new).length;
  const totalHigh = allItems.filter(item => 
    item.priority === 'high' || item.importance === 'high' || item.risk_level === '高'
  ).length;
  const totalUrgent = allItems.filter(item => item.risk_level === '高').length;

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Header variant="dashboard" />

      {/* 主内容 */}
      <main className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* 页面标题区 */}
          <div className="mb-8">
            {/* 顶部标签 */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div 
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ 
                  background: totalNew > 0 ? 'rgba(244, 63, 94, 0.1)' : 'var(--bg-tertiary)', 
                  border: `1px solid ${totalNew > 0 ? 'rgba(244, 63, 94, 0.3)' : 'var(--border-primary)'}`, 
                  color: totalNew > 0 ? 'var(--accent-rose)' : 'var(--text-secondary)' 
                }}
              >
                <Flame className="w-4 h-4" />
                <span>{totalNew > 0 ? `${totalNew} 条新内容` : '实时更新'}</span>
              </div>
              
              <span style={{ color: 'var(--text-muted)' }}>|</span>
              
              <div 
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ 
                  background: 'rgba(79, 70, 229, 0.1)', 
                  border: '1px solid rgba(79, 70, 229, 0.25)', 
                  color: '#6366f1' 
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                <span>聚焦数据分析洞察</span>
              </div>
            </div>
            
            {/* 主标题 */}
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">AI洞察看板</h1>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  五大核心板块，全面掌握数据分析领域动态
                </p>
              </div>
              
              {/* 统计概览 */}
              <div className="flex items-center gap-3">
                {totalNew > 0 && (
                  <StatNumber value={totalNew} label="最新" color="#f97316" icon={Flame} />
                )}
                {totalHigh > 0 && (
                  <StatNumber value={totalHigh} label="高优" color="#f43f5e" icon={Zap} />
                )}
                {totalUrgent > 0 && (
                  <StatNumber value={totalUrgent} label="紧急" color="#ef4444" icon={AlertCircle} />
                )}
              </div>
            </div>
          </div>

          {/* 5卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES_CONFIG.map((module) => (
              <div key={module.id} className="h-[300px]">
                <ModuleCard 
                  module={module} 
                  data={DASHBOARD_DATA[module.id as keyof typeof DASHBOARD_DATA]} 
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
