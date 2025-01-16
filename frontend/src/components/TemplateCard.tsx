import React from 'react';
import { Share2, Download, Edit2, Heart } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
  sections: string[];
  onEdit: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  description,
  sections,
  onEdit,
}) => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleDownload = () => {
    alert('Download started!');
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative p-6">
        {/* Document Preview */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b">
            {title}
          </h3>
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex-shrink-0" />
                <p className="text-sm text-gray-600">{section}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={onEdit}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Edit2 size={16} />
            Edit Template
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleShare}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              title="Share"
            >
              <Share2 size={16} className="text-gray-700" />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              title="Download"
            >
              <Download size={16} className="text-gray-700" />
            </button>
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
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
