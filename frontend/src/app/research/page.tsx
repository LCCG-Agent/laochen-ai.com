'use client';

import Link from "next/link";
import { 
  ArrowLeft,
  Search,
  Building2
} from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Radar as RechartsRadar } from 'recharts';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { swotConfig, pestConfig } from "@/constants/config";

export default function ResearchPage() {
  const research = [
    {
      id: 1,
      date: "2026-01-31",
      isNew: true,
      importance: "high",
      title: "AI工具市场SWOT分析",
      description: "基于麦肯锡咨询框架，对当前AI工具在数据分析领域的应用进行全面SWOT分析，识别机遇与挑战。",
      framework: "SWOT",
      source: "麦肯锡",
      modelType: "SWOT",
      modelData: {
        S: ["技术成熟度高", "成本持续下降", "易于上手"],
        W: ["数据隐私风险", "依赖网络连接", "结果需要验证"],
        O: ["市场需求旺盛", "政策支持力度大", "应用场景丰富"],
        T: ["监管政策不确定", "技术更新快", "竞争激烈"]
      },
      sourceInstitution: "麦肯锡咨询",
      category: "行业分析"
    },
    {
      id: 2,
      date: "2026-01-28",
      isNew: true,
      importance: "high",
      title: "数据分析师技能演进趋势",
      description: "德勤发布的数据分析师技能模型显示，AI时代数据分析师需要具备的五大核心能力及其重要性评分。",
      framework: "能力模型",
      source: "德勤",
      modelType: "雷达模型",
      modelData: { ai_tools: 9, data_thinking: 8, business_sense: 9, coding: 7, communication: 8 },
      sourceInstitution: "德勤咨询",
      category: "市场调研"
    },
    {
      id: 3,
      date: "2026-01-25",
      isNew: false,
      importance: "medium",
      title: "AI辅助分析PEST分析",
      description: "从政治、经济、社会、技术四个维度分析AI工具在企业应用的外部环境因素。",
      framework: "PEST",
      source: "波士顿咨询",
      modelType: "PEST",
      modelData: {
        P: ["政府支持AI发展", "数据安全法规"],
        E: ["AI工具价格下降", "ROI显著提升"],
        S: ["企业数字化转型加速", "员工接受度提高"],
        T: ["大模型技术突破", "API生态完善"]
      },
      sourceInstitution: "波士顿咨询",
      category: "趋势研判"
    }
  ];

  const renderSWOT = (data: any) => {
    const quadrants = ['S', 'W', 'O', 'T'] as const;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {quadrants.map((key) => {
          const config = swotConfig[key];
          const Icon = config.icon;
          return (
            <div key={key} className="p-4 rounded-lg border" style={{ background: config.bg, borderColor: config.border }}>
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4" style={{ color: config.color }} />
                <h4 className="text-sm font-medium" style={{ color: config.color }}>{config.label}</h4>
              </div>
              <ul className="space-y-1.5">
                {(data[key] || []).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: config.color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  const renderPEST = (data: any) => {
    const dimensions = ['P', 'E', 'S', 'T'] as const;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {dimensions.map((key) => {
          const config = pestConfig[key];
          const Icon = config.icon;
          return (
            <div key={key} className="p-4 rounded-lg border" style={{ background: config.bg, borderColor: config.border }}>
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4" style={{ color: config.color }} />
                <h4 className="text-sm font-medium" style={{ color: config.color }}>{config.label}</h4>
              </div>
              <ul className="space-y-1.5">
                {(data[key] || []).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: config.color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  const renderRadar = (data: any) => {
    const radarData = [
      { subject: 'AI工具应用', value: data.ai_tools, fullMark: 10 },
      { subject: '数据思维', value: data.data_thinking, fullMark: 10 },
      { subject: '业务理解', value: data.business_sense, fullMark: 10 },
      { subject: '编程能力', value: data.coding, fullMark: 10 },
      { subject: '沟通表达', value: data.communication, fullMark: 10 },
    ];
    return (
      <div className="rounded-lg p-4" style={{ background: 'var(--bg-tertiary)' }}>
        <ResponsiveContainer width="100%" height={240}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="var(--border-primary)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} />
            <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fill: 'var(--text-muted)', fontSize: 9 }} />
            <RechartsRadar name="能力评分" dataKey="value" stroke="var(--accent-emerald)" fill="var(--accent-emerald)" fillOpacity={0.2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Header variant="page" />

      <section className="pt-8 pb-6 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-4 h-4" />
            <span>返回AI洞察看板</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3" style={{ background: 'var(--accent-emerald)/10', border: '1px solid var(--accent-emerald)/20', color: 'var(--accent-emerald)' }}>
                <Search className="w-3.5 h-3.5" />
                <span>深度调研</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>调研洞察</h1>
              <p style={{ color: 'var(--text-secondary)' }}>运用顶级咨询公司分析框架，洞察行业趋势</p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}>
                <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{research.length}</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>调研报告</div>
              </div>
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'var(--accent-rose)/10', border: '1px solid var(--accent-rose)/20' }}>
                <div className="text-xl font-bold" style={{ color: 'var(--accent-rose)' }}>{research.filter(r => r.importance === 'high').length}</div>
                <div className="text-xs" style={{ color: 'var(--accent-rose)' }}>重点报告</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">
          {research.map((item) => (
            <div key={item.id} className="rounded-xl border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}>
              <div className="p-5 border-b" style={{ borderColor: 'var(--border-primary)' }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {item.isNew && <span className="px-1.5 py-0.5 text-[10px] font-bold rounded" style={{ background: 'var(--accent-rose)', color: 'white' }}>NEW</span>}
                      <span className="px-2 py-0.5 text-[10px] rounded" style={{ background: 'var(--accent-purple)/10', color: 'var(--accent-purple)' }}>{item.modelType}</span>
                      <span className="px-2 py-0.5 text-[10px] rounded" style={{ background: 'var(--accent-blue)/10', color: 'var(--accent-blue)' }}>{item.category}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                    <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                    <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{item.sourceInstitution}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-2 rounded-lg text-xs border ${item.importance === 'high' ? 'bg-[var(--accent-rose)/10] text-[var(--accent-rose)] border-[var(--accent-rose)/20]' : 'bg-[var(--accent-amber)/10] text-[var(--accent-amber)] border-[var(--accent-amber)/20]'}`}>
                    {item.importance === 'high' ? '高重要性' : '中等重要性'}
                  </div>
                </div>
              </div>

              <div className="p-5">
                {item.modelType === 'SWOT' && renderSWOT(item.modelData)}
                {item.modelType === '雷达模型' && (
                  <div>
                    <h4 className="text-base font-semibold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>数据分析师核心能力模型</h4>
                    {renderRadar(item.modelData)}
                    <p className="text-center text-xs mt-4" style={{ color: 'var(--text-muted)' }}>数据来源：{item.sourceInstitution}</p>
                  </div>
                )}
                {item.modelType === 'PEST' && renderPEST(item.modelData)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
