'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { 
  ArrowLeft,
  Wrench,
  Download,
  AlertCircle
} from "lucide-react";
import { resourcesAPI, Resource } from '@/lib/api';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categoryConfig } from "@/constants/config";

export default function ResourcesPage() {
  const [allResources, setAllResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await resourcesAPI.getAll();
        if (data.length > 0) setAllResources(data);
      } catch (err) {
        console.error('Failed to fetch resources:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const resourceCategories = [
    {
      id: "prompts" as const,
      title: "AI提示词模板",
      description: "经过实战验证的AI提示词，开箱即用",
      resources: [
        { id: 1, name: "数据分析报告生成提示词", problem: "数据报告撰写耗时长，缺乏结构化思路", description: "输入原始数据和分析目标，AI自动生成结构化报告，包含数据摘要、趋势分析、洞察结论和建议。", type: "提示词模板", format: "TXT", example: true },
        { id: 2, name: "SQL查询优化审查提示词", problem: "SQL查询效率低，不知如何优化", description: "将SQL语句提交给AI，获得性能优化建议、索引建议和查询逻辑优化方案。", type: "提示词模板", format: "TXT", example: true },
        { id: 3, name: "数据洞察提炼提示词", problem: "面对大量数据无从下手，难以发现有价值洞察", description: "上传数据摘要，AI帮助识别关键趋势、异常点和因果关系，提供多角度分析思路。", type: "提示词模板", format: "TXT", example: true }
      ]
    },
    {
      id: "code" as const,
      title: "代码模板",
      description: "常用数据处理代码，可直接复用",
      resources: [
        { id: 4, name: "Excel数据清洗VBA宏", problem: "重复的数据清洗工作效率低，容易出错", description: "一键清洗Excel数据：去除空白行/列、统一格式、处理缺失值、删除重复项。", type: "VBA代码", format: "VBA", example: true },
        { id: 5, name: "Python数据分析基础脚本", problem: "不熟悉Python，难以快速进行数据分析", description: "包含常用数据操作：读取文件、数据筛选、分组统计、数据透视、简单可视化。", type: "Python脚本", format: "PY", example: true },
        { id: 6, name: "Power Query数据整合模板", problem: "多源数据整合复杂，重复工作多", description: "预设Power Query查询模板，支持合并多个Excel文件、追加数据、清洗转换。", type: "M语言代码", format: "PQ", example: true }
      ]
    },
    {
      id: "plugins" as const,
      title: "实用插件/工具",
      description: "提升效率的插件和小工具",
      resources: [
        { id: 7, name: "Excel数据分析加载项", problem: "Excel原生功能不足，需要更强大的分析能力", description: "提供高级数据分析功能：一键生成描述性统计、相关性分析、趋势预测、异常值检测。", type: "Excel插件", format: "XLAM", example: true },
        { id: 8, name: "ChatGPT桌面快捷工具", problem: "频繁切换浏览器使用ChatGPT，影响工作流", description: "桌面小工具，支持快捷键唤起ChatGPT对话窗口，可直接输入选中的文本或数据。", type: "桌面工具", format: "EXE", example: true },
        { id: 9, name: "数据可视化配色方案工具", problem: "图表配色不专业，缺乏设计感", description: "提供20+专业配色方案，包含商务、科技、清新等多种风格。一键复制色值，可直接应用到Excel、Power BI、Tableau等工具。", type: "在线工具", format: "WEB", example: true }
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3" style={{ background: 'var(--accent-purple)/10', border: '1px solid var(--accent-purple)/20', color: 'var(--accent-purple)' }}>
                <Wrench className="w-3.5 h-3.5" />
                <span>实用工具</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>工具资源</h1>
              <p style={{ color: 'var(--text-secondary)' }}>提示词模板、代码工具，助力数据分析效率提升</p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'var(--accent-blue)/10', border: '1px solid var(--accent-blue)/20' }}>
                <div className="text-xl font-bold" style={{ color: 'var(--accent-blue)' }}>3</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>提示词模板</div>
              </div>
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'var(--accent-emerald)/10', border: '1px solid var(--accent-emerald)/20' }}>
                <div className="text-xl font-bold" style={{ color: 'var(--accent-emerald)' }}>3</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>代码工具</div>
              </div>
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'var(--accent-purple)/10', border: '1px solid var(--accent-purple)/20' }}>
                <div className="text-xl font-bold" style={{ color: 'var(--accent-purple)' }}>3</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>实用插件</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          {resourceCategories.map((category) => {
            const config = categoryConfig[category.id];
            const Icon = config.icon;

            return (
              <div key={category.id} className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ background: config.bg, borderColor: config.border, color: config.color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{category.title}</h2>
                    <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.resources.map((resource) => (
                    <div key={resource.id} className="rounded-xl border p-4 transition-all" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{resource.name}</h3>
                        {resource.example && <span className="px-1.5 py-0.5 text-[10px] rounded" style={{ background: 'var(--accent-amber)/10', color: 'var(--accent-amber)' }}>示例</span>}
                      </div>

                      <div className="p-2.5 rounded-lg mb-3" style={{ background: config.bg, border: `1px solid var(${config.border})` }}>
                        <div className="text-xs font-medium mb-1 flex items-center gap-1" style={{ color: config.color }}>
                          <AlertCircle className="w-3 h-3" />
                          解决什么问题
                        </div>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{resource.problem}</p>
                      </div>

                      <p className="text-xs mb-4 line-clamp-2" style={{ color: 'var(--text-tertiary)' }}>{resource.description}</p>

                      <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-[10px] rounded" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)' }}>{resource.type}</span>
                          <span className="px-2 py-0.5 text-[10px] rounded" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)' }}>{resource.format}</span>
                        </div>
                        <button className="flex items-center gap-1 px-2.5 py-1 text-[10px] rounded-lg cursor-not-allowed" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }} disabled>
                          <Download className="w-3 h-3" />
                          暂无下载
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="p-5 rounded-xl border" style={{ background: 'var(--accent-amber)/5', borderColor: 'var(--accent-amber)/20' }}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-amber)/10' }}>
                <AlertCircle className="w-4 h-4" style={{ color: 'var(--accent-amber)' }} />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--accent-amber)' }}>资源说明</h3>
                <div className="text-xs space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <p>• 当前展示的资源均为<strong style={{ color: 'var(--text-primary)' }}>模拟示例</strong>，用于展示资源类型和价值定位</p>
                  <p>• 每个资源都明确说明了<strong style={{ color: 'var(--text-primary)' }}>解决的问题</strong>和<strong style={{ color: 'var(--text-primary)' }}>使用场景</strong></p>
                  <p>• 未来将逐步提供真实可用的资源文件</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
