import React, { useEffect, useState } from 'react';
import { BusinessPlanData } from './types';
import { summaryPrompt } from '../AIPrompts/prompts';
import { AIchatSessionForSummary } from '../AIPrompts/summary';

interface Props {
  data: BusinessPlanData;
}

const ExecutiveSummary: React.FC<Props> = ({ data }) => {
  const [summary, setSummary] = useState('');

  const generateSummary = async () => {
    const promptParams = {
      comName: data.companyName,
      productService: data.products[0]?.name,
      targetCustomers: JSON.stringify(data.customerDetails), // Convert to string if needed
      city: data.city,
      objective: data.objective,
      expectedRevenueYr1: parseFloat(data.products[0].revenueExpected.yearOne), // Ensure this is a number
      expectedRevenueYr2: parseFloat(data.products[0].revenueExpected.yearTwo),
      expectedRevenueYr3: parseFloat(
        data.products[0].revenueExpected.yearThree
      ),
      currencySymbol: data.products[0].currency,
      month: data.startMonth,
      year: Number(data.startYear), // Convert to a number
    };

    const prompt = summaryPrompt(promptParams);
    const result = await AIchatSessionForSummary.sendMessage(prompt);
    const response = result.response.text();
    console.log(response);
  };

  useEffect(() => {
    generateSummary();
  }, []);
  return (
    <div className="min-h-screen p-8 border-b">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">
        Executive Summary
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Company Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            {data.companyName} is a {data.companyType} company operating in the{' '}
            {data.industry} sector. Founded in {data.startMonth}{' '}
            {data.startYear}, we are positioned to become a leading player in
            providing innovative solutions to enterprise clients.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Mission</h3>
          <p className="text-gray-700 leading-relaxed">{data.mission}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Vision</h3>
          <p className="text-gray-700 leading-relaxed">{data.vision}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Problem & Solution</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Problem:</strong> {data.problemSolving}
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Solution:</strong> {data.solutionDescription}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Financial Highlights</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Current Revenue</p>
              <p className="text-xl font-semibold">{data.revenue}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Cash Balance</p>
              <p className="text-xl font-semibold">{data.cashBalance}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Net Profit</p>
              <p className="text-xl font-semibold">{data.netProfit}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Funding Needed</p>
              <p className="text-xl font-semibold">{data.loanDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
