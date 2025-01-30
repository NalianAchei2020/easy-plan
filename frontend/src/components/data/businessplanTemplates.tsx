import { BusinessPlanTemplate } from '../../types';

export const businessPlanTemplates: BusinessPlanTemplate[] = [
  {
    id: 1,
    title: 'Tech Startup Business Plan',
    description:
      'A comprehensive business plan template tailored for tech startups seeking Series A funding.',
    sections: [
      {
        type: 'section',
        title: 'Executive Summary',
        content: {
          executive_summary: {
            mission_statement:
              'To revolutionize customer service through AI-powered automation while maintaining the human touch',
            business_objectives: [
              'Achieve $15M ARR by Year 3',
              'Expand to international markets',
              'Develop enterprise partnerships',
              'Reach 1000 enterprise customers by 2025',
            ],
            product_overview:
              'Enterprise-grade AI platform for customer service automation with proprietary NLP technology',
            financial_highlights: {
              projected_revenue: 15000000,
              funding_needed: 5000000,
              key_metrics: {
                target_market_size: '$50B by 2025',
                burn_rate: '$250,000/month',
                runway: '18 months',
                projected_growth: '150% YoY',
              },
            },
          },
        },
      },
      {
        type: 'section',
        title: 'Company Description',
        content: {
          company_description: {
            business_name: 'TechVision AI Solutions',
            location: 'San Francisco, CA',
            legal_structure: 'Delaware C-Corporation',
            history:
              'Founded in 2023 by AI industry veterans with combined 50+ years of experience',
            vision:
              'To become the global leader in AI-powered customer service solutions',
            mission:
              'To revolutionize customer service through AI-powered automation while maintaining the human touch',
            unique_value:
              'Our proprietary NLP technology achieves 99.9% accuracy in customer intent recognition, reducing resolution time by 75% while maintaining high customer satisfaction',
          },
        },
      },
      {
        type: 'section',
        title: 'Market Analysis',
        content: {
          market_analysis: {
            market_size: {
              total: 50000000000,
              serviceable: 15000000000,
              obtainable: 1500000000,
            },
            target_demographics: {
              age_range: '25-55',
              income_level: '$100K+',
              location: 'Global',
              other_characteristics: [
                'Enterprise businesses',
                'High customer service volume',
                'Digital-first companies',
              ],
            },
            competitors: [
              {
                name: 'Legacy CRM Co',
                market_share: 35,
                strengths: ['Established brand', 'Large customer base'],
                weaknesses: ['Outdated technology', 'High costs'],
              },
              {
                name: 'AI Service Now',
                market_share: 15,
                strengths: ['Modern tech stack', 'Good UI/UX'],
                weaknesses: ['Limited features', 'Small market presence'],
              },
            ],
            industry_growth: {
              current_rate: 25,
              projected_rate: 35,
              key_trends: [
                'Increasing adoption of AI in enterprise',
                'Rising customer service costs',
                'Demand for 24/7 support',
                'Shift towards personalized automated solutions',
              ],
            },
          },
        },
      },
      {
        type: 'section',
        title: 'Organization and Management',
        content: {
          organization: {
            leadership_team: [
              {
                name: 'Sarah Chen',
                position: 'CEO',
                bio: 'Former VP of AI at Oracle, 15 years in enterprise software',
                experience: ['Oracle', 'Salesforce', 'MIT PhD in AI'],
              },
              {
                name: 'Michael Rodriguez',
                position: 'CTO',
                bio: 'Ex-Google AI researcher, built scalable NLP systems',
                experience: ['Google', 'OpenAI', 'Stanford MS in CS'],
              },
            ],
            organizational_chart: {
              departments: [
                {
                  name: 'Engineering',
                  head: 'Michael Rodriguez',
                  roles: ['ML Engineers', 'Backend Developers', 'DevOps'],
                },
                {
                  name: 'Sales',
                  head: 'James Wilson',
                  roles: [
                    'Enterprise Sales',
                    'Sales Engineers',
                    'Account Managers',
                  ],
                },
              ],
            },
            ownership_structure: {
              type: 'C-Corporation',
              shareholders: [
                { name: 'Founders', percentage: 65 },
                { name: 'Seed Investors', percentage: 25 },
                { name: 'Employee Pool', percentage: 10 },
              ],
            },
          },
        },
      },
      {
        type: 'section',
        title: 'Products and Services',
        content: {
          products_services: {
            offerings: [
              {
                name: 'AI Customer Service Platform',
                description:
                  'Enterprise-grade AI platform for automated customer service',
                features: [
                  'Natural Language Processing',
                  'Multi-language Support',
                  'Integration APIs',
                  'Analytics Dashboard',
                ],
                benefits: [
                  '75% reduction in resolution time',
                  '40% cost savings',
                  '24/7 availability',
                ],
                pricing: 100000,
              },
            ],
            unique_selling_proposition:
              'Industry-leading accuracy with human-like interactions',
            product_lifecycle: {
              stage: 'Growth',
              next_steps: ['International expansion', 'New vertical markets'],
            },
            research_development: {
              current_projects: ['Emotion detection', 'Voice integration'],
              timeline: {
                'Q2 2024': 'Emotion detection release',
                'Q4 2024': 'Voice integration beta',
              },
              budget: 2000000,
            },
          },
        },
      },
      {
        type: 'section',
        title: 'Marketing and Sales Strategy',
        content: {
          marketing_strategy: {
            pricing_strategy: {
              model: 'Enterprise SaaS',
              pricing_tiers: {
                Basic: 50000,
                Professional: 100000,
                Enterprise: 250000,
              },
              positioning: 'Premium enterprise solution',
            },
            distribution_channels: [
              {
                type: 'Direct Sales',
                description: 'Enterprise sales team',
                cost: 1000000,
              },
              {
                type: 'Channel Partners',
                description: 'System integrators',
                cost: 500000,
              },
            ],
            marketing_channels: [
              {
                platform: 'LinkedIn',
                strategy: 'Thought leadership',
                budget: 200000,
                expected_roi: 300,
              },
              {
                platform: 'Industry Events',
                strategy: 'Speaking engagements',
                budget: 300000,
                expected_roi: 250,
              },
            ],
            sales_strategy: {
              approach: 'Enterprise consultative selling',
              team_structure: 'Regional teams with industry focus',
              targets: {
                'Year 1': 5000000,
                'Year 2': 10000000,
              },
              partnerships: ['Major consulting firms', 'Technology partners'],
            },
          },
        },
      },
      {
        type: 'section',
        title: 'Operational Plan',
        content: {
          operational_plan: {
            facilities: {
              location: 'San Francisco HQ',
              size: '15,000 sq ft',
              lease_terms: '5-year lease with expansion option',
              equipment: [
                'Development workstations',
                'Cloud infrastructure',
                'Testing environments',
              ],
            },
            technology_stack: [
              'Cloud infrastructure (AWS)',
              'Machine Learning frameworks',
              'Microservices architecture',
            ],
            production_process: [
              {
                stage: 'Development',
                description: 'Agile development cycles',
                duration: '2-week sprints',
                resources_needed: ['Engineers', 'Product Managers', 'QA'],
              },
            ],
            supply_chain: {
              suppliers: ['AWS', 'Third-party API providers'],
              logistics: 'Cloud-based deployment',
              inventory_management: 'Automated scaling',
            },
          },
        },
      },
      {
        type: 'section',
        title: 'Financial Plan',
        content: {
          financial_plan: {
            income_statement: [
              {
                year: 2024,
                revenue: 5000000,
                expenses: {
                  'R&D': 2000000,
                  Sales: 1500000,
                  Marketing: 1000000,
                  Operations: 1000000,
                },
                profit: -500000,
              },
              {
                year: 2025,
                revenue: 15000000,
                expenses: {
                  'R&D': 3000000,
                  Sales: 2500000,
                  Marketing: 1500000,
                  Operations: 1500000,
                },
                profit: 6500000,
              },
            ],
            cash_flow: [
              {
                year: 2024,
                operating: -500000,
                investing: -1000000,
                financing: 5000000,
                net_cash_flow: 3500000,
              },
            ],
            balance_sheet: {
              assets: {
                Cash: 3500000,
                Equipment: 500000,
              },
              liabilities: {
                'Accounts Payable': 500000,
              },
              equity: {
                'Investor Capital': 5000000,
              },
            },
            break_even: {
              point: 10000000,
              timeline: '18 months',
              assumptions: ['40% gross margin', '20% monthly growth'],
            },
            funding: {
              amount_needed: 5000000,
              use_of_funds: {
                'R&D': 2000000,
                Sales: 1500000,
                Marketing: 1000000,
                Operations: 500000,
              },
              return_projection: '10x in 5 years',
            },
          },
        },
      },
    ],
  },
];
