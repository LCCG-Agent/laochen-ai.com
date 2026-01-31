'use client';

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft,
  User,
  Mail,
  MessageCircle,
  Code2,
  Sparkles,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const modules = [
    { name: "资讯捕捉", color: 'var(--accent-blue)', bg: 'var(--accent-blue)/10' },
    { name: "调研洞察", color: 'var(--accent-emerald)', bg: 'var(--accent-emerald)/10' },
    { name: "沙盘推演", color: 'var(--accent-amber)', bg: 'var(--accent-amber)/10' },
    { name: "竞品雷达", color: 'var(--accent-rose)', bg: 'var(--accent-rose)/10' },
    { name: "工具资源", color: 'var(--accent-purple)', bg: 'var(--accent-purple)/10' }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Header variant="page" />

      <section className="pt-8 pb-6 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-4 h-4" />
            <span>返回AI洞察看板</span>
          </Link>

          <div className="text-center mb-10">
            <div className="relative w-24 h-24 mx-auto mb-5 rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 0 4px var(--border-primary)' }}>
              <Image src="/logo.jpg" alt="老陈AI工坊" fill className="object-cover" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>关于老陈</h1>
            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>8年数据分析经验，专注AI在数据分析中的应用探索</p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary-600)/10' }}>
                <User className="w-4 h-4" style={{ color: 'var(--primary-400)' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>个人背景</h2>
            </div>
            <div className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <p>我是老陈，一名数据分析师，深耕数据分析领域8年。从传统的Excel报表到AI驱动的智能分析，见证并参与了数据分析工作方式的巨大变革。</p>
              <p>在实际工作中，我发现AI工具（如Deepseek，Kimi等）能够显著提升数据分析效率，从报告撰写到数据洞察提炼，AI正在重新定义数据分析师的工作方式。</p>
            </div>
          </div>

          <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-purple)/10' }}>
                <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-purple)' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>老陈AI工坊</h2>
            </div>
            <div className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <p>老陈AI工坊是一个专注于数据分析领域AI应用的信息分享平台。通过<strong style={{ color: 'var(--text-primary)' }}>资讯捕捉、调研洞察、沙盘推演、竞品雷达、工具资源</strong>五大板块，为数据分析师提供全方位的信息支持。</p>
              <p>本站所有内容均为示例展示，旨在呈现AI在数据分析中的应用场景和价值。</p>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-5">
              {modules.map((item) => (
                <div key={item.name} className="p-2 rounded-lg text-center text-xs font-medium" style={{ background: item.bg, color: item.color }}>{item.name}</div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border p-5" style={{ background: 'var(--primary-900)/10', borderColor: 'var(--primary-600)/20' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary-600)/20' }}>
                <Mail className="w-4 h-4" style={{ color: 'var(--primary-400)' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>联系方式</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary-600)' }}>
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>邮箱</div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>contact@laochen-ai.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-emerald)' }}>
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>公众号</div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>老陈AI工坊</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--text-muted)' }}>
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>GitHub</div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>github.com/laochen-ai</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-3" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
              <Zap className="w-4 h-4" style={{ color: 'var(--accent-amber)' }} />
              <span style={{ color: 'var(--text-secondary)' }}>愿景</span>
            </div>
            <p className="text-lg font-light" style={{ color: 'var(--text-secondary)' }}>让每位数据分析师都能善用AI，提升效率，创造价值</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
