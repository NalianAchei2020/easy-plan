import React, { useState } from 'react';
import {
  Share2,
  Download,
  Edit2,
  Heart,
  FileText,
  File,
  ChevronRight,
} from 'lucide-react';
import { BusinessPlanTemplate } from '../types';

interface TemplateCardProps {
  template: BusinessPlanTemplate;
  onEdit: (id: number) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onEdit }) => {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const { title, description, sections } = template;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleDownload = (format: 'docx' | 'pdf' | 'gdoc') => {
    alert(`Downloading ${title} as ${format.toUpperCase()}`);
    setShowDownloadOptions(false);
  };

  // Get key sections
  const executiveSummary = sections.find(
    (section) => section.title === 'Executive Summary'
  )?.content.executive_summary;

  const financialPlan = sections.find(
    (section) => section.title === 'Financial Plan'
  )?.content.financial_plan;

  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Document Preview */}
      <div className="relative aspect-[8.5/11] bg-white border-b">
        <div className="absolute inset-0 p-8 flex flex-col">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-sm text-gray-500">Professional Business Plan</p>
          </div>

          {/* Document Content Preview */}
          <div className="flex-1 overflow-hidden">
            {/* Executive Summary Section */}
            {executiveSummary && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  Executive Summary
                  <ChevronRight className="w-4 h-4 ml-1 text-blue-500" />
                </h2>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {executiveSummary.mission_statement}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(
                      executiveSummary.financial_highlights.key_metrics
                    )
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg"
                        >
                          <div className="text-xs font-medium text-gray-600 capitalize">
                            {key.replace(/_/g, ' ')}
                          </div>
                          <div className="text-sm font-semibold text-gray-900"></div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* Table of Contents */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Key Sections
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {sections
                  .filter((section) => section.title)
                  .map((section, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs text-gray-600 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <p className="truncate">{section.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center text-xs text-gray-400">
              <div>Professional Template</div>
              <div>{sections.length} Sections</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer with Actions */}
      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex justify-between items-center">
          <button
            onClick={() => onEdit(template.id)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-sm hover:shadow group"
          >
            <Edit2 size={16} />
            <span>Use Template</span>
            <ChevronRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleShare}
              className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              title="Share"
            >
              <Share2 size={16} className="text-gray-700" />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                title="Download"
              >
                <Download size={16} className="text-gray-700" />
              </button>
              {showDownloadOptions && (
                <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  <button
                    onClick={() => handleDownload('docx')}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                  >
                    <FileText size={16} />
                    Word Document (.docx)
                  </button>
                  <button
                    onClick={() => handleDownload('pdf')}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                  >
                    <File size={16} />
                    PDF Document (.pdf)
                  </button>
                  <button
                    onClick={() => handleDownload('gdoc')}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                  >
                    <FileText size={16} />
                    Google Doc
                  </button>
                </div>
              )}
            </div>
            <button
              className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              title="Like"
            >
              <Heart size={16} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
