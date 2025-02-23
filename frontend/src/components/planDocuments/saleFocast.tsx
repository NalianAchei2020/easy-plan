import React from 'react';
import { BusinessPlanData } from './types';
import { BarChart3 } from 'lucide-react';

interface Props {
  data: BusinessPlanData;
}

const SalesForecast: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen p-8 border-b">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">Sales Forecast</h2>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4 mb-8">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-semibold">3-Year Sales Projection</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Product
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
                    <td
                      className="px-6 py-4 text-sm font-medium text-gray-900"
                      colSpan={4}
                    >
                      {product.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Revenue</td>
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
                      ${parseInt(product.costOfGoods.yearOne).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">
                      ${parseInt(product.costOfGoods.yearTwo).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">
                      $
                      {parseInt(product.costOfGoods.yearThree).toLocaleString()}
                    </td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 text-sm font-medium text-blue-700">
                      Gross Profit
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-blue-700 text-right">
                      $
                      {(
                        parseInt(product.revenueExpected.yearOne) -
                        parseInt(product.costOfGoods.yearOne)
                      ).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-blue-700 text-right">
                      $
                      {(
                        parseInt(product.revenueExpected.yearTwo) -
                        parseInt(product.costOfGoods.yearTwo)
                      ).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-blue-700 text-right">
                      $
                      {(
                        parseInt(product.revenueExpected.yearThree) -
                        parseInt(product.costOfGoods.yearThree)
                      ).toLocaleString()}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesForecast;
