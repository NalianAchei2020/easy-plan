import React from 'react';
import { BusinessPlanData } from './types';
import { DollarSign, PiggyBank, TrendingUp, Wallet } from 'lucide-react';

interface Props {
  data: BusinessPlanData;
}

const FinancialOverview: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">
        Financial Overview
      </h2>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <DollarSign className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">
              Current Financial Position
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Company Balance</p>
              <p className="text-2xl font-bold text-blue-600">
                {data.companyBalance}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Yearly Expenses</p>
              <p className="text-2xl font-bold text-blue-600">
                {data.yearlyExpenses}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Current Revenue</p>
              <p className="text-2xl font-bold text-blue-600">{data.revenue}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <PiggyBank className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">Investment & Funding</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Owner's Investment</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Contributions:</span>
                  <span className="font-medium">{data.ownerContributions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Withdrawals:</span>
                  <span className="font-medium">{data.ownerWithdrawals}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">External Funding</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount Needed:</span>
                  <span className="font-medium">{data.loanDetails}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">{data.interestType}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Expected Date:</span>
                  <span className="font-medium">
                    {data.expectedFundMonth} {data.expectedFundYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">Profit & Loss Forecast</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Item
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">
                    Year 1
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">
                    Year 2
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">
                    Year 3
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.products.map((product, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Revenue
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-right">
                        $
                        {parseInt(
                          product.revenueExpected.yearOne
                        ).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-right">
                        $
                        {parseInt(
                          product.revenueExpected.yearTwo
                        ).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-right">
                        $
                        {parseInt(
                          product.revenueExpected.yearThree
                        ).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Cost of Goods
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-right">
                        $
                        {parseInt(product.costOfGoods.yearOne).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-right">
                        $
                        {parseInt(product.costOfGoods.yearTwo).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-right">
                        $
                        {parseInt(
                          product.costOfGoods.yearThree
                        ).toLocaleString()}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                <tr className="bg-green-50">
                  <td className="px-6 py-4 text-sm font-medium text-green-700">
                    Net Profit
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-green-700 text-right">
                    $
                    {data.products
                      .reduce(
                        (sum, product) =>
                          sum +
                          (parseInt(product.revenueExpected.yearOne) -
                            parseInt(product.costOfGoods.yearOne)),
                        0
                      )
                      .toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-green-700 text-right">
                    $
                    {data.products
                      .reduce(
                        (sum, product) =>
                          sum +
                          (parseInt(product.revenueExpected.yearTwo) -
                            parseInt(product.costOfGoods.yearTwo)),
                        0
                      )
                      .toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-green-700 text-right">
                    $
                    {data.products
                      .reduce(
                        (sum, product) =>
                          sum +
                          (parseInt(product.revenueExpected.yearThree) -
                            parseInt(product.costOfGoods.yearThree)),
                        0
                      )
                      .toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Wallet className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">Assets Overview</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Asset Name
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
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm font-medium text-blue-700">
                    Total Assets
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-blue-700 text-right">
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

export default FinancialOverview;
