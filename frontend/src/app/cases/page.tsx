'use client';

import Link from "next/link";
import { 
  ArrowLeft,
  TrendingUp,
  Building2,
  Flame
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { priorityConfig, authorityConfig } from "@/constants/config";

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      date: "2026-01-31",
      isNew: true,
      priority: "high",
      title: "ChatGPT驱动报表自动化革命",
      description: "麦肯锡最新报告显示，使用ChatGPT等AI工具可将数据分析师的报表制作时间缩短87%。",
      tools: ["ChatGPT", "Excel", "Python"],
      category: "AI应用案例",
      impact: "效率提升87%",
      source: "麦肯锡研究报告",
      authorityLevel: "权威"
    },
    {
      id: 2,
      date: "2026-01-30",
      isNew: true,
      priority: "high",
      title: "Claude助力复杂SQL查询生成",
      description: "德勤数字化团队发布案例研究，Claude在SQL查询生成任务中准确率达92%。",
      tools: ["Claude", "PostgreSQL"],
      category: "技术创新",
      impact: "查询速度提升300%",
      source: "德勤数字化报告",
      authorityLevel: "权威"
    },
    {
      id: 3,
      date: "2026-01-28",
      isNew: false,
      priority: "medium",
      title: "AI驱动的数据清洗自动化",
      description: "TechCrunch报道，一家创业公司使用AI工具将Excel数据清洗流程自动化。",
      tools: ["ChatGPT", "Python", "Pandas"],
      category: "效率工具",
      impact: "时间节省80%",
      source: "TechCrunch",
      authorityLevel: "一般"
    },
    {
      id: 4,
      date: "2026-01-25",
      isNew: false,
      priority: "medium",
      title: "Copilot加速数据分析代码编写",
      description: "GitHub官方数据显示，使用Copilot的数据分析师编码速度提升55%。",
      tools: ["GitHub Copilot", "Python"],
      category: "开发工具",
      impact: "开发效率提升55%",
      source: "GitHub官方博客",
      authorityLevel: "官方"
    },
    {
      id: 5,
      date: "2026-01-20",
      isNew: false,
      priority: "low",
      title: "AI辅助数据可视化设计",
      description: "某数据团队分享经验，使用AI工具自动生成图表配色方案和布局建议。",
      tools: ["ChatGPT", "Tableau"],
      category: "可视化",
      impact: "满意度提升30%",
      source: "Medium博客",
      authorityLevel: "一般"
    }
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ background: 'var(--bg-primary)' }}
    >
      <Header variant="page" />

      {/* 页面标题区 */}
      <section className="pt-8 pb-6 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm mb-4 transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回AI洞察看板</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3"
                style={{ 
                  background: 'var(--accent-blue)/10',
                  border: '1px solid var(--accent-blue)/20',
                  color: 'var(--accent-blue)'
                }}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>实时更新</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>资讯捕捉</h1>
              <p style={{ color: 'var(--text-secondary)' }}>追踪AI工具在数据分析领域的最新动态</p>
            </div>
            
            <div className="flex gap-3">
              <div 
                className="px-4 py-2 rounded-lg text-center"
                style={{ 
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{cases.filter(c => c.isNew).length}</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>今日更新</div>
              </div>
              <div 
                className="px-4 py-2 rounded-lg text-center"
                style={{ 
                  background: 'var(--accent-rose)/10',
                  border: '1px solid var(--accent-rose)/20'
                }}
              >
                <div className="text-xl font-bold" style={{ color: 'var(--accent-rose)' }}>{cases.filter(c => c.priority === 'high').length}</div>
                <div className="text-xs" style={{ color: 'var(--accent-rose)' }}>高优先级</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 内容区 */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3">
            {cases.map((item) => {
              const priority = priorityConfig[item.priority as keyof typeof priorityConfig];
              const authority = authorityConfig[item.authorityLevel as keyof typeof authorityConfig];

              return (
                <div 
                  key={item.id}
                  className="group rounded-xl border transition-all duration-200"
                  style={{ 
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                    e.currentTarget.style.background = 'var(--bg-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-primary)';
                    e.currentTarget.style.background = 'var(--bg-card)';
                  }}
                >
                  <div className="flex items-start gap-4 p-4">
                    {/* 左侧：优先级标识 */}
                    <div className="flex flex-col items-center gap-2 w-12 flex-shrink-0">
                      <div 
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: priority.dot }}
                      />
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.date.slice(5)}</span>
                    </div>

                    {/* 右侧：内容 */}
                    <div className="flex-1 min-w-0">
                      {/* 标题行 */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 
                          className="text-base font-semibold transition-colors"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {item.title}
                        </h3>
                        {item.isNew && (
                          <span 
                            className="px-1.5 py-0.5 text-[10px] font-bold rounded"
                            style={{ 
                              background: 'var(--accent-rose)',
                              color: 'white'
                            }}
                          >
                            NEW
                          </span>
                        )}
                        <span 
                          className="px-2 py-0.5 text-[10px] rounded border"
                          style={{ 
                            background: authority.bg,
                            color: authority.text,
                            borderColor: authority.border
                          }}
                        >
                          {item.authorityLevel}
                        </span>
                      </div>

                      {/* 描述 */}
                      <p 
                        className="text-sm mb-3 line-clamp-1"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {item.description}
                      </p>

                      {/* 底部信息 */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                            <Building2 className="w-3 h-3" />
                            {item.source}
                          </span>
                          <span 
                            className="text-xs px-2 py-0.5 rounded border"
                            style={{ 
                              background: `var(${priority.bg})`,
                              color: `var(${priority.color})`,
                              borderColor: `var(${priority.border})`
                            }}
                          >
                            {priority.label}
                          </span>
                          <span className="text-xs flex items-center gap-1" style={{ color: 'var(--accent-emerald)' }}>
                            <TrendingUp className="w-3 h-3" />
                            {item.impact}
                          </span>
                        </div>
                        
                        {/* 工具标签 */}
                        <div className="flex items-center gap-1.5">
                          {item.tools.slice(0, 2).map((tool, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-0.5 text-[10px] rounded"
                              style={{ 
                                background: 'var(--bg-tertiary)',
                                color: 'var(--text-tertiary)'
                              }}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
