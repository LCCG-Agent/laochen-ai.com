'use client';

import Link from "next/link";
import { 
  ArrowLeft,
  Compass,
  Star,
  Target,
  Clock,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  Flag
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { difficultyConfig } from "@/constants/config";

export default function StrategyPage() {
  const strategies = [
    {
      id: 1,
      date: "2026-01-31",
      isNew: true,
      recommendation: "high",
      difficulty: "入门",
      title: "数据分析师AI转型3个月路径",
      description: "为传统数据分析师设计的AI工具掌握路径，从零基础到熟练应用，预计3个月完成转型。",
      duration: "3个月",
      actionPath: [
        { step: 1, title: "第1个月：工具学习期", action: "掌握ChatGPT、Claude基础用法，学习提示词工程", attention: "注意保护数据隐私，不要上传敏感信息", industryCase: "某互联网公司数据团队1个月完成全员AI工具培训" },
        { step: 2, title: "第2个月：实战应用期", action: "在真实工作场景中使用AI工具，建立个人提示词库", attention: "需要验证AI输出结果的准确性", industryCase: "某金融公司分析师使用AI后报表效率提升60%" },
        { step: 3, title: "第3个月：流程优化期", action: "建立标准化AI辅助工作流程，培训团队成员", attention: "关注团队协作和知识沉淀", industryCase: "某电商团队建立AI工具最佳实践手册" }
      ],
      industryComparison: "对标案例：某大型互联网公司数据部门3个月完成AI转型，团队效率提升70%",
      keyMilestones: [
        { month: 1, milestone: "完成工具学习", indicator: "能独立使用3种以上AI工具" },
        { month: 2, milestone: "实战项目落地", indicator: "至少完成5个真实工作任务" },
        { month: 3, milestone: "流程标准化", indicator: "建立团队AI工作流程文档" }
      ]
    },
    {
      id: 2,
      date: "2026-01-28",
      isNew: true,
      recommendation: "high",
      difficulty: "中级",
      title: "企业数据分析AI化改造6个月计划",
      description: "面向企业数据团队的全面AI化改造路径，包括工具选型、培训、落地、优化全流程。",
      duration: "6个月",
      actionPath: [
        { step: 1, title: "第1-2个月：调研与选型", action: "评估团队现状，选择合适的AI工具组合", attention: "考虑成本、安全性、易用性", industryCase: "某制造业企业选择了ChatGPT+自建模型的混合方案" },
        { step: 2, title: "第3-4个月：试点推广", action: "选择1-2个核心业务场景试点，验证效果", attention: "建立效果评估指标体系", industryCase: "某零售企业从销售数据分析场景开始试点" },
        { step: 3, title: "第5-6个月：全面落地", action: "推广到所有数据分析场景，建立最佳实践", attention: "关注长期ROI和团队能力提升", industryCase: "某金融机构6个月后数据分析效率提升85%" }
      ],
      industryComparison: "对标案例：某世界500强企业6个月完成数据团队AI改造，年节省成本500万元",
      keyMilestones: [
        { month: 2, milestone: "完成工具选型", indicator: "确定AI工具技术方案" },
        { month: 4, milestone: "试点验证完成", indicator: "ROI达到预期目标" },
        { month: 6, milestone: "全面推广完成", indicator: "80%以上员工熟练使用" }
      ]
    }
  ];

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3" style={{ background: 'var(--accent-amber)/10', border: '1px solid var(--accent-amber)/20', color: 'var(--accent-amber)' }}>
                <Compass className="w-3.5 h-3.5" />
                <span>行动规划</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>沙盘推演</h1>
              <p style={{ color: 'var(--text-secondary)' }}>可视化展示AI转型的完整路径与关键节点</p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'var(--accent-emerald)/10', border: '1px solid var(--accent-emerald)/20' }}>
                <div className="text-xl font-bold" style={{ color: 'var(--accent-emerald)' }}>2</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>推荐路径</div>
              </div>
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'var(--accent-amber)/10', border: '1px solid var(--accent-amber)/20' }}>
                <div className="text-xl font-bold" style={{ color: 'var(--accent-amber)' }}>3-6</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>月周期</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">
          {strategies.map((strategy) => {
            const difficulty = difficultyConfig[strategy.difficulty as keyof typeof difficultyConfig];

            return (
              <div key={strategy.id} className="rounded-xl border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}>
                <div className="p-5 border-b" style={{ borderColor: 'var(--border-primary)' }}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {strategy.isNew && <span className="px-1.5 py-0.5 text-[10px] font-bold rounded" style={{ background: 'var(--accent-rose)', color: 'white' }}>NEW</span>}
                    <span className="px-2 py-0.5 text-[10px] rounded border" style={{ background: difficulty.bg, color: difficulty.color, borderColor: difficulty.border }}>{strategy.difficulty}</span>
                    <span className="px-2 py-0.5 text-[10px] rounded flex items-center gap-1" style={{ background: 'var(--accent-purple)/10', color: 'var(--accent-purple)' }}><Clock className="w-3 h-3" />{strategy.duration}</span>
                    {strategy.recommendation === 'high' && <span className="px-2 py-0.5 text-[10px] rounded flex items-center gap-1" style={{ background: 'var(--accent-amber)/10', color: 'var(--accent-amber)' }}><Star className="w-3 h-3" />强烈推荐</span>}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{strategy.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{strategy.description}</p>
                </div>

                <div className="p-5 border-b" style={{ borderColor: 'var(--border-primary)' }}>
                  <h4 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <Compass className="w-4 h-4" style={{ color: 'var(--accent-amber)' }} />
                    实施路径
                  </h4>

                  <div className="relative">
                    <div className="hidden md:block absolute top-6 left-8 right-8 h-px" style={{ background: 'var(--border-primary)' }} />
                    <div className="grid md:grid-cols-3 gap-4">
                      {strategy.actionPath.map((step, index) => (
                        <div key={step.step} className="relative">
                          <div className="rounded-lg border p-4" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
                            <div className="flex items-center justify-center w-8 h-8 mx-auto mb-3 rounded-full text-sm font-bold" style={{ background: 'var(--primary-600)', color: 'white' }}>{step.step}</div>
                            <h5 className="text-sm font-medium text-center mb-3" style={{ color: 'var(--text-primary)' }}>{step.title}</h5>
                            <div className="p-2.5 rounded mb-2" style={{ background: 'var(--accent-blue)/10' }}>
                              <div className="text-xs font-medium mb-1 flex items-center gap-1" style={{ color: 'var(--accent-blue)' }}><Target className="w-3 h-3" />关键行动</div>
                              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{step.action}</p>
                            </div>
                            <div className="p-2.5 rounded mb-2" style={{ background: 'var(--accent-amber)/10' }}>
                              <div className="text-xs font-medium mb-1 flex items-center gap-1" style={{ color: 'var(--accent-amber)' }}><AlertTriangle className="w-3 h-3" />注意事项</div>
                              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{step.attention}</p>
                            </div>
                            <div className="p-2.5 rounded" style={{ background: 'var(--accent-emerald)/10' }}>
                              <div className="text-xs font-medium mb-1 flex items-center gap-1" style={{ color: 'var(--accent-emerald)' }}><Lightbulb className="w-3 h-3" />对标案例</div>
                              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{step.industryCase}</p>
                            </div>
                          </div>
                          {index < strategy.actionPath.length - 1 && (
                            <div className="hidden md:block absolute top-6 -right-2" style={{ color: 'var(--border-primary)' }}>
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 border-b" style={{ background: 'var(--primary-900)/10', borderColor: 'var(--border-primary)' }}>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <Flag className="w-4 h-4" style={{ color: 'var(--primary-400)' }} />
                    关键里程碑
                  </h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {strategy.keyMilestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: 'var(--primary-600)', color: 'white' }}>{milestone.month}</div>
                        <div>
                          <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{milestone.milestone}</div>
                          <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{milestone.indicator}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-2 p-3 rounded-lg" style={{ background: 'var(--accent-amber)/10', border: '1px solid var(--accent-amber)/20' }}>
                    <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-amber)' }} />
                    <div>
                      <div className="text-sm font-medium mb-1" style={{ color: 'var(--accent-amber)' }}>行业对标案例</div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{strategy.industryComparison}</p>
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
