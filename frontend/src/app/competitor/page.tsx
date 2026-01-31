'use client';

import Link from "next/link";
import { 
  ArrowLeft,
  Radar,
  Building2,
  Calendar,
  Zap
} from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Radar as RechartsRadar } from 'recharts';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { riskConfig } from "@/constants/config";

export default function CompetitorPage() {
  const competitors = [
    {
      id: 1,
      date: "2026-01-31",
      isNew: true,
      title: "ChatGPT Plus推出数据分析专业版",
      description: "OpenAI发布ChatGPT数据分析专业版，新增Python代码执行、数据可视化、Excel直连等功能。",
      company: "OpenAI",
      impact: "可能替代部分轻量级数据分析工具，对数据分析工作流产生重大影响。",
      source: "OpenAI官方博客",
      productName: "ChatGPT Data Analyst Pro",
      riskLevel: "高",
      counterStrategy: "关注其API能力，考虑集成到现有工作流；加强团队培训，将其作为辅助工具而非替代工具；重点关注数据安全和隐私保护。",
      keyMetrics: { "功能完整度": 9, "易用性": 9, "价格竞争力": 7, "数据安全": 6, "生态完整度": 8, "技术先进性": 9 }
    },
    {
      id: 2,
      date: "2026-01-28",
      isNew: true,
      title: "Google推出Gemini Analytics",
      description: "Google发布专门面向数据分析的Gemini Analytics，深度集成BigQuery和Google Workspace。",
      company: "Google",
      impact: "对企业级数据分析市场形成冲击，尤其是已使用Google云服务的客户。",
      source: "Google Cloud Blog",
      productName: "Gemini Analytics",
      riskLevel: "高",
      counterStrategy: "评估与现有技术栈的兼容性；关注其企业版的定价策略；考虑多云策略，避免供应商锁定。",
      keyMetrics: { "功能完整度": 8, "易用性": 8, "价格竞争力": 6, "数据安全": 8, "生态完整度": 9, "技术先进性": 8 }
    },
    {
      id: 3,
      date: "2026-01-25",
      isNew: false,
      title: "Tableau推出AI Copilot功能",
      description: "Salesforce旗下Tableau发布AI Copilot，用自然语言生成可视化图表，降低BI工具使用门槛。",
      company: "Salesforce",
      impact: "传统BI工具开始AI化转型，对数据分析师的技能要求发生变化。",
      source: "Tableau官网",
      productName: "Tableau AI Copilot",
      riskLevel: "中",
      counterStrategy: "跟踪其AI功能的成熟度；评估是否需要升级现有Tableau许可；培训团队使用新功能。",
      keyMetrics: { "功能完整度": 7, "易用性": 8, "价格竞争力": 5, "数据安全": 9, "生态完整度": 8, "技术先进性": 7 }
    }
  ];

  const prepareRadarData = (metrics: Record<string, number>) => {
    return Object.entries(metrics).map(([key, value]) => ({ metric: key, value, fullMark: 10 }));
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Header variant="page" />

      {/* 页面标题区 */}
      <section className="pt-8 pb-6 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-4 h-4" />
            <span>返回AI洞察看板</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3"
                style={{ background: 'var(--accent-rose)/10', border: '1px solid var(--accent-rose)/20', color: 'var(--accent-rose)' }}
              >
                <Radar className="w-3.5 h-3.5" />
                <span>实时监控</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>竞品雷达</h1>
              <p style={{ color: 'var(--text-secondary)' }}>多维度追踪关键产品动态，评估风险并制定应对策略</p>
            </div>
            
            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'var(--accent-rose)/10', border: '1px solid var(--accent-rose)/20' }}>
                <div className="text-xl font-bold" style={{ color: 'var(--accent-rose)' }}>{competitors.filter(c => c.riskLevel === '高').length}</div>
                <div className="text-xs" style={{ color: 'var(--accent-rose)' }}>高风险</div>
              </div>
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'var(--accent-amber)/10', border: '1px solid var(--accent-amber)/20' }}>
                <div className="text-xl font-bold" style={{ color: 'var(--accent-amber)' }}>{competitors.filter(c => c.riskLevel === '中').length}</div>
                <div className="text-xs" style={{ color: 'var(--accent-amber)' }}>中风险</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 内容区 */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">
          {competitors.map((item) => {
            const risk = riskConfig[item.riskLevel as keyof typeof riskConfig];
            const radarData = prepareRadarData(item.keyMetrics);
            const RiskIcon = risk.icon;

            return (
              <div 
                key={item.id}
                className="rounded-xl border overflow-hidden"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                {/* 头部 */}
                <div className="p-5 border-b" style={{ borderColor: 'var(--border-primary)' }}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        {item.isNew && (
                          <span className="px-1.5 py-0.5 text-[10px] font-bold rounded" style={{ background: 'var(--accent-rose)', color: 'white' }}>NEW</span>
                        )}
                        <span className="px-2 py-0.5 text-[10px] rounded border flex items-center gap-1" style={{ background: risk.bg, color: risk.color, borderColor: risk.border }}>
                          <RiskIcon className="w-3 h-3" />
                          {item.riskLevel}风险
                        </span>
                        <span className="px-2 py-0.5 text-[10px] rounded" style={{ background: 'var(--accent-blue)/10', color: 'var(--accent-blue)' }}>{item.company}</span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                      <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>

                      <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{item.productName}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{item.date}</span>
                        <span>来源：{item.source}</span>
                      </div>
                    </div>

                    {/* 雷达图 */}
                    <div className="lg:w-72 flex-shrink-0">
                      <div className="rounded-lg p-3" style={{ background: 'var(--bg-tertiary)' }}>
                        <h4 className="text-xs font-medium mb-2 text-center" style={{ color: 'var(--text-secondary)' }}>能力评估</h4>
                        <ResponsiveContainer width="100%" height={180}>
                          <RadarChart data={radarData}>
                            <PolarGrid stroke="var(--border-primary)" />
                            <PolarAngleAxis dataKey="metric" tick={{ fill: 'var(--text-tertiary)', fontSize: 9 }} />
                            <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fill: 'var(--text-muted)', fontSize: 8 }} />
                            <RechartsRadar name={item.productName} dataKey="value" stroke="var(--primary-500)" fill="var(--primary-500)" fillOpacity={0.2} />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 影响分析 */}
                <div className="p-4 border-b" style={{ background: risk.bg, borderColor: risk.border }}>
                  <div className="flex items-start gap-2">
                    <RiskIcon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: risk.color }} />
                    <div>
                      <div className="text-xs font-medium mb-1" style={{ color: risk.color }}>潜在影响分析</div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.impact}</p>
                    </div>
                  </div>
                </div>

                {/* 应对策略 */}
                <div className="p-5">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-emerald)/10' }}>
                      <Zap className="w-3 h-3" style={{ color: 'var(--accent-emerald)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium mb-1" style={{ color: 'var(--accent-emerald)' }}>应对策略建议</div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.counterStrategy}</p>
                    </div>
                  </div>

                  {/* 指标详情 */}
                  <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                    <h4 className="text-xs font-medium mb-3" style={{ color: 'var(--text-tertiary)' }}>关键指标评分</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {Object.entries(item.keyMetrics).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-2 rounded" style={{ background: 'var(--bg-tertiary)' }}>
                          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{key}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border-primary)' }}>
                              <div className="h-full rounded-full" style={{ width: `${value * 10}%`, background: 'var(--primary-500)' }} />
                            </div>
                            <span className="text-xs font-medium w-5 text-right" style={{ color: 'var(--text-primary)' }}>{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
