/**
 * 全局配置文件 - 统一管理各页面的配置对象
 */

import {
  Shield,
  AlertTriangle,
  Lightbulb,
  Crosshair,
  TrendingUp,
  Target,
  FileText,
  Code2,
  Puzzle
} from "lucide-react";

// 优先级配置（资讯捕捉页面）
export const priorityConfig = {
  high: { 
    color: 'var(--accent-rose)', 
    bg: 'var(--accent-rose)/10', 
    border: 'var(--accent-rose)/20',
    dot: 'var(--accent-rose)',
    label: '高优先级'
  },
  medium: { 
    color: 'var(--accent-amber)', 
    bg: 'var(--accent-amber)/10', 
    border: 'var(--accent-amber)/20',
    dot: 'var(--accent-amber)',
    label: '中优先级'
  },
  low: { 
    color: 'var(--accent-emerald)', 
    bg: 'var(--accent-emerald)/10', 
    border: 'var(--accent-emerald)/20',
    dot: 'var(--accent-emerald)',
    label: '低优先级'
  }
};

// 权威性配置（资讯捕捉页面）
export const authorityConfig = {
  '官方': { bg: 'var(--accent-blue)/10', text: 'var(--accent-blue)', border: 'var(--accent-blue)/20' },
  '权威': { bg: 'var(--accent-purple)/10', text: 'var(--accent-purple)', border: 'var(--accent-purple)/20' },
  '一般': { bg: 'var(--text-muted)/10', text: 'var(--text-muted)', border: 'var(--text-muted)/20' }
};

// SWOT分析配置（调研洞察页面）
export const swotConfig = {
  S: { label: '优势', color: 'var(--accent-emerald)', bg: 'var(--accent-emerald)/10', border: 'var(--accent-emerald)/20', icon: Shield },
  W: { label: '劣势', color: 'var(--accent-rose)', bg: 'var(--accent-rose)/10', border: 'var(--accent-rose)/20', icon: AlertTriangle },
  O: { label: '机会', color: 'var(--accent-blue)', bg: 'var(--accent-blue)/10', border: 'var(--accent-blue)/20', icon: Lightbulb },
  T: { label: '威胁', color: 'var(--accent-amber)', bg: 'var(--accent-amber)/10', border: 'var(--accent-amber)/20', icon: Crosshair }
};

// PEST分析配置（调研洞察页面）
export const pestConfig = {
  P: { label: '政治', color: 'var(--accent-purple)', bg: 'var(--accent-purple)/10', border: 'var(--accent-purple)/20', icon: Shield },
  E: { label: '经济', color: 'var(--accent-emerald)', bg: 'var(--accent-emerald)/10', border: 'var(--accent-emerald)/20', icon: TrendingUp },
  S: { label: '社会', color: 'var(--accent-blue)', bg: 'var(--accent-blue)/10', border: 'var(--accent-blue)/20', icon: Target },
  T: { label: '技术', color: 'var(--accent-amber)', bg: 'var(--accent-amber)/10', border: 'var(--accent-amber)/20', icon: Lightbulb }
};

// 难度配置（沙盘推演页面）
export const difficultyConfig = {
  "入门": { color: 'var(--accent-emerald)', bg: 'var(--accent-emerald)/10', border: 'var(--accent-emerald)/20' },
  "中级": { color: 'var(--accent-amber)', bg: 'var(--accent-amber)/10', border: 'var(--accent-amber)/20' },
  "高级": { color: 'var(--accent-rose)', bg: 'var(--accent-rose)/10', border: 'var(--accent-rose)/20' }
};

// 风险等级配置（竞品雷达页面）
export const riskConfig = {
  "高": { color: 'var(--accent-rose)', bg: 'var(--accent-rose)/10', border: 'var(--accent-rose)/20', icon: AlertTriangle },
  "中": { color: 'var(--accent-amber)', bg: 'var(--accent-amber)/10', border: 'var(--accent-amber)/20', icon: Target },
  "低": { color: 'var(--accent-emerald)', bg: 'var(--accent-emerald)/10', border: 'var(--accent-emerald)/20', icon: Shield }
};

// 资源类别配置（工具资源页面）
export const categoryConfig = {
  prompts: { 
    icon: FileText,
    color: 'var(--accent-blue)', 
    bg: 'var(--accent-blue)/10', 
    border: 'var(--accent-blue)/20' 
  },
  code: { 
    icon: Code2,
    color: 'var(--accent-emerald)', 
    bg: 'var(--accent-emerald)/10', 
    border: 'var(--accent-emerald)/20' 
  },
  plugins: { 
    icon: Puzzle,
    color: 'var(--accent-purple)', 
    bg: 'var(--accent-purple)/10', 
    border: 'var(--accent-purple)/20' 
  }
};
