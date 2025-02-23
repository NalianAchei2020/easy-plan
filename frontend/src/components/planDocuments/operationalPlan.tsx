import React from 'react';
import { BusinessPlanData } from './types';
import { Clock, CreditCard, Wallet } from 'lucide-react';

interface Props {
  data: BusinessPlanData;
}

const OperationalPlan: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen p-8 border-b">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">
        Operational Plan
      </h2>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Clock className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">Payment Terms</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Bill Payment Terms</p>
              <p className="text-2xl font-bold text-blue-600">
                {data.billPaymentDays} Days
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Customer Credit Terms</p>
              <p className="text-2xl font-bold text-blue-600">
                {data.customerCreditDays} Days
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Credit Customers</p>
              <p className="text-2xl font-bold text-blue-600">
                {data.creditCustomerPercentage}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <CreditCard className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">Supplier Credit Terms</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(data.supplierCreditDays).map(
              ([year, days], index) => (
                <div key={year} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Year {index + 1}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {days} Days
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Wallet className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">Assets</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Asset
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.assets.map((asset, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {asset.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">
                      ${parseInt(asset.cost).toLocaleString()}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-4 text-sm text-gray-700">Total</td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-right">
                    $
                    {data.assets
                      .reduce((sum, asset) => sum + parseInt(asset.cost), 0)
                      .toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalPlan;
