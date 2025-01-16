import React from 'react';
import { Link } from 'react-router-dom';
import TemplateCard from './TemplateCard';

const Template = () => {
  const templates = [
    {
      id: 1,
      title: 'Startup Business Plan',
      description:
        'A comprehensive business plan template tailored for tech startups seeking investment, including financial projections and market analysis.',
      sections: [
        'Executive Summary',
        'Company Description',
        'Market Analysis',
        'Organization & Management',
        'Financial Projections',
        'Funding Requirements',
      ],
    },
    {
      id: 2,
      title: 'Restaurant Business Plan',
      description:
        'Detailed business plan template for restaurant ventures, including menu planning, location analysis, and operational strategies.',
      sections: [
        'Concept & Menu',
        'Market & Location Analysis',
        'Marketing Strategy',
        'Operations Plan',
        'Management Team',
        'Financial Analysis',
      ],
    },
    {
      id: 3,
      title: 'E-commerce Business Plan',
      description:
        'Strategic business plan template for online retail businesses, focusing on digital marketing and logistics planning.',
      sections: [
        'Business Model',
        'Product Line',
        'Market Research',
        'Marketing Strategy',
        'Operations & Logistics',
        'Financial Planning',
      ],
    },
  ];

  const handleEdit = (id: number) => {
    // In a real app, navigate to the editor with the template ID
    console.log(`Editing template ${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Business Plan Templates
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Choose from our professionally crafted business plan templates. Each
          template includes pre-written sections and guidance to help you create
          a comprehensive business plan.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-medium text-gray-900 text-center mb-8">
          Select a template to get started
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              description={template.description}
              sections={template.sections}
              onEdit={() => handleEdit(template.id)}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link to="/blog">
          <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-500 opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative">Browse More Templates</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Template;
