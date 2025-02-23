import React from 'react';
import { BusinessPlanData } from './types';
import { ArrowDownUp } from 'lucide-react';

interface Props {
  data: BusinessPlanData;
}

const CashFlow: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">
        Cash Flow Statement
      </h2>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4 mb-8">
          <ArrowDownUp className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-semibold">Projected Cash Flow</h3>
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
              {/* Operating Activities */}
              <tr className="bg-blue-50">
                <td
                  colSpan={4}
                  className="px-6 py-3 text-sm font-semibold text-blue-700"
                >
                  Operating Activities
                </td>
              </tr>
              {data.products.map((product, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Revenue from {product.name}
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
                    <td className="px-6 py-4 text-sm text-gray-700 text-right text-red-600">
                      (${parseInt(product.costOfGoods.yearOne).toLocaleString()}
                      )
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right text-red-600">
                      (${parseInt(product.costOfGoods.yearTwo).toLocaleString()}
                      )
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right text-red-600">
                      ($
                      {parseInt(product.costOfGoods.yearThree).toLocaleString()}
                      )
                    </td>
                  </tr>
                </React.Fragment>
              ))}
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Operating Expenses
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right text-red-600">
                  ($
                  {parseInt(
                    data.yearlyExpenses.replace(/[^0-9]/g, '')
                  ).toLocaleString()}
                  )
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right text-red-600">
                  ($
                  {(
                    parseInt(data.yearlyExpenses.replace(/[^0-9]/g, '')) * 1.1
                  ).toLocaleString()}
                  )
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right text-red-600">
                  ($
                  {(
                    parseInt(data.yearlyExpenses.replace(/[^0-9]/g, '')) * 1.2
                  ).toLocaleString()}
                  )
                </td>
              </tr>

              {/* Investing Activities */}
              <tr className="bg-blue-50">
                <td
                  colSpan={4}
                  className="px-6 py-3 text-sm font-semibold text-blue-700"
                >
                  Investing Activities
                </td>
              </tr>
              {data.assets.map((asset, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Purchase of {asset.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-right text-red-600">
                    (${parseInt(asset.cost).toLocaleString()})
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-right">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-right">
                    -
                  </td>
                </tr>
              ))}

              {/* Financing Activities */}
              <tr className="bg-blue-50">
                <td
                  colSpan={4}
                  className="px-6 py-3 text-sm font-semibold text-blue-700"
                >
                  Financing Activities
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Owner's Investment
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right text-green-600">
                  {data.ownerContributions}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
                  -
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">
                  External Funding
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right text-green-600">
                  {data.loanDetails}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
                  -
                </td>
              </tr>

              {/* Net Cash Flow */}
              <tr className="bg-gray-50 font-semibold">
                <td className="px-6 py-4 text-sm text-gray-700">
                  Net Cash Flow
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
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
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
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
                <td className="px-6 py-4 text-sm text-gray-700 text-right">
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
    </div>
  );
};

export default CashFlow;
