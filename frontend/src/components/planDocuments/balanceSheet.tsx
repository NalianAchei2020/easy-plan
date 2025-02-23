import React from 'react';
import { BusinessPlanData } from './types';
import { Scale } from 'lucide-react';

interface Props {
  data: BusinessPlanData;
}

const BalanceSheet: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen p-8 border-b">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">Balance Sheet</h2>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4 mb-8">
          <Scale className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-semibold">Projected Balance Sheet</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Item
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Assets */}
              <tr className="bg-blue-50">
                <td
                  colSpan={2}
                  className="px-6 py-3 text-sm font-semibold text-blue-700"
                >
                  Assets
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Cash Balance
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
                  {data.cashBalance}
                </td>
              </tr>
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
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-700">
                  Total Assets
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-700 text-right">
                  $
                  {(
                    parseInt(data.cashBalance.replace(/[^0-9]/g, '')) +
                    data.assets.reduce(
                      (sum, asset) => sum + parseInt(asset.cost),
                      0
                    )
                  ).toLocaleString()}
                </td>
              </tr>

              {/* Liabilities */}
              <tr className="bg-blue-50">
                <td
                  colSpan={2}
                  className="px-6 py-3 text-sm font-semibold text-blue-700"
                >
                  Liabilities
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Expected Investment
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
                  {data.loanDetails}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-700">
                  Total Liabilities
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-700 text-right">
                  {data.loanDetails}
                </td>
              </tr>

              {/* Equity */}
              <tr className="bg-blue-50">
                <td
                  colSpan={2}
                  className="px-6 py-3 text-sm font-semibold text-blue-700"
                >
                  Equity
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Owner's Investment
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
                  {data.ownerContributions}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Owner's Withdrawals
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
                  ({data.ownerWithdrawals})
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-700">
                  Total Equity
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-700 text-right">
                  $
                  {(
                    parseInt(data.ownerContributions.replace(/[^0-9]/g, '')) -
                    parseInt(data.ownerWithdrawals.replace(/[^0-9]/g, ''))
                  ).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
