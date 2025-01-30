export interface User {
  id: string;
  email: string;
  full_name: string;
}

export interface BusinessPlan {
  id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  owner_id: string;
  is_public: boolean;
}

export interface FinancialData {
  id: string;
  plan_id: string;
  year: number;
  month: number;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface TeamMember {
  id: string;
  plan_id: string;
  user_id: string;
  role: 'editor' | 'viewer';
  joined_at: string;
}

export interface BusinessPlanTemplate {
  id: number;
  title: string;
  description: string;
  sections: {
    type: 'header' | 'section';
    title?: string;
    content: Record<string, any>;
  }[];
}
