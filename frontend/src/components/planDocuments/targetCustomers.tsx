import React from 'react';
import { BusinessPlanData } from './types';
import { Users } from 'lucide-react';

interface Props {
  data: BusinessPlanData;
}

const TargetCustomers: React.FC<Props> = ({ data }) => {
  const relevantCustomerDetails = Object.entries(data.targetCustomers)
    .filter(([key, value]) => value)
    .map(([key]) => ({
      category: key.charAt(0).toUpperCase() + key.slice(1),
      detail: data.customerDetails[key as keyof typeof data.customerDetails],
    }));

  return (
    <div className="min-h-screen p-8 border-b">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">
        Target Customers
      </h2>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4 mb-8">
          <Users className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-semibold">Customer Segments</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relevantCustomerDetails.map(({ category, detail }, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                {category}
              </h4>
              <p className="text-gray-700">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetCustomers;
