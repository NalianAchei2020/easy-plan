import React from 'react';
import { BusinessPlanData } from './types';
import { Package } from 'lucide-react';

interface Props {
  data: BusinessPlanData;
}

type YearKey = 'yearOne' | 'yearTwo' | 'yearThree';

const ProductOverview: React.FC<Props> = ({ data }) => {
  const getYearKey = (year: number): YearKey => {
    const keys: YearKey[] = ['yearOne', 'yearTwo', 'yearThree'];
    return keys[year - 1];
  };

  return (
    <div className="min-h-screen p-8 border-b">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">
        Product Overview
      </h2>

      {data.products.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Package className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold">{product.name}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Cost of Goods</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Year 1:</span>
                  <span className="font-medium">
                    ${parseInt(product.costOfGoods.yearOne).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Year 2:</span>
                  <span className="font-medium">
                    ${parseInt(product.costOfGoods.yearTwo).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Year 3:</span>
                  <span className="font-medium">
                    ${parseInt(product.costOfGoods.yearThree).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Expected Revenue</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Year 1:</span>
                  <span className="font-medium text-green-600">
                    $
                    {parseInt(product.revenueExpected.yearOne).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Year 2:</span>
                  <span className="font-medium text-green-600">
                    $
                    {parseInt(product.revenueExpected.yearTwo).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Year 3:</span>
                  <span className="font-medium text-green-600">
                    $
                    {parseInt(
                      product.revenueExpected.yearThree
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Profit Margins</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((year) => {
                const yearKey = getYearKey(year);
                const cost = parseInt(product.costOfGoods[yearKey]);
                const revenue = parseInt(product.revenueExpected[yearKey]);
                const margin = (((revenue - cost) / revenue) * 100).toFixed(1);

                return (
                  <div key={year} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Year {year} Margin</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {margin}%
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductOverview;
