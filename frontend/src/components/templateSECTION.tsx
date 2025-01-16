import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import TemplateCard from './TemplateCard';
import { businessPlanTemplates } from './data/businessplanTemplates';
import { BusinessPlanTemplate } from '../types';

const Template: React.FC = () => {
  const handleEdit = (id: number) => {
    // In a real app, this would create a new business plan from the template
    console.log(`Creating new business plan from template ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Professional Business Plan Templates
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Choose from our professionally crafted business plan templates with
            real-world examples, financial projections, and industry-specific
            insights. Each template includes pre-written sections and detailed
            financial models to help you create a comprehensive business plan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Industry-Specific',
              description: 'Templates tailored to your business sector',
              icon: '📊',
            },
            {
              title: 'Financial Models',
              description: 'Pre-built financial projections and metrics',
              icon: '💰',
            },
            {
              title: 'Expert Guidance',
              description: 'Step-by-step instructions and examples',
              icon: '🎯',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Select a template to get started
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessPlanTemplates.map((template: BusinessPlanTemplate) => (
              <TemplateCard
                key={template.id}
                template={template}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/templates"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
          >
            Browse More Templates
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Template;
