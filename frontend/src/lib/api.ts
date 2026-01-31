/**
 * API服务层 - 统一管理后端API调用
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * 通用fetch封装
 */
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// ============ 案例相关API ============

export interface Case {
  id: number;
  date: string;
  is_new: boolean;
  priority: string;
  title: string;
  description: string;
  tools: string[];
  category: string;
  impact: string;
  created_at: string;
  updated_at?: string;
}

export const casesAPI = {
  getAll: () => fetchAPI<Case[]>('/api/cases/'),
  getById: (id: number) => fetchAPI<Case>(`/api/cases/${id}/`),
};

// ============ 调研相关API ============

export interface Research {
  id: number;
  date: string;
  is_new: boolean;
  importance: string;
  title: string;
  description: string;
  framework: string;
  source: string;
}

export const researchAPI = {
  getAll: () => fetchAPI<Research[]>('/api/research/'),
};

// ============ 策略相关API ============

export interface Strategy {
  id: number;
  date: string;
  is_new: boolean;
  recommendation: string;
  difficulty: string;
  title: string;
  description: string;
  duration: string;
  steps: string[];
}

export const strategiesAPI = {
  getAll: () => fetchAPI<Strategy[]>('/api/strategies/'),
};

// ============ 竞品相关API ============

export interface Competitor {
  id: number;
  date: string;
  is_new: boolean;
  attention_level: string;
  title: string;
  description: string;
  company: string;
  impact: string;
  source: string;
}

export const competitorsAPI = {
  getAll: () => fetchAPI<Competitor[]>('/api/competitors/'),
};

// ============ 资源相关API ============

export interface Resource {
  id: number;
  name: string;
  problem: string;
  description: string;
  type: string;
  format: string;
  category: string;
  file_url?: string;
  is_example: boolean;
}

export const resourcesAPI = {
  getAll: () => fetchAPI<Resource[]>('/api/resources/'),
};
