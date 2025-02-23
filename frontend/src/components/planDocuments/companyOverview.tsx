import React from 'react';
import { BusinessPlanData } from './types';

interface Props {
  data: BusinessPlanData;
}

const CompanyOverview: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen p-8 border-b">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">
        Company Overview
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Company Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-700">Legal Structure</p>
              <p className="text-gray-600">{data.legalInformation}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Business Type</p>
              <p className="text-gray-600">{data.businessType}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Industry</p>
              <p className="text-gray-600">{data.industry}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Operating Status</p>
              <p className="text-gray-600">{data.isOperating}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Mission & Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-medium text-blue-800 mb-2">
                Mission Statement
              </p>
              <p className="text-gray-700">{data.mission}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-medium text-blue-800 mb-2">Vision Statement</p>
              <p className="text-gray-700">{data.vision}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Key Problem & Solution</h3>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-6">
              <p className="font-medium text-gray-700 mb-2">
                Problem We're Solving
              </p>
              <p className="text-gray-600">{data.problemSolving}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 mb-2">Our Solution</p>
              <p className="text-gray-600">{data.solutionDescription}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Company Leadership</h3>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500">
                  {data.ceoName.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-700">{data.ceoName}</p>
                <p className="text-gray-600">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
