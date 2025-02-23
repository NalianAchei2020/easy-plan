import React from 'react';
import { BusinessPlanData } from './types';
import { Target, TrendingUp, Shield } from 'lucide-react';

interface Props {
  data: BusinessPlanData;
}

const MarketingPlan: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen p-8 border-b">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">Marketing Plan</h2>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Target className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">Business Objective</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{data.objective}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">Strategic Steps</h3>
          </div>
          <div className="space-y-4">
            {data.strategicSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">Competitive Advantage</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {data.competitiveAdvantage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingPlan;
