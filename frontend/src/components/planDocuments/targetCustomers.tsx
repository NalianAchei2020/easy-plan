import React from 'react';
import { BusinessPlanData } from './types';
import {
  Building2,
  Target,
  Users,
  BarChart3,
  PieChart as PieChartIcon,
  DollarSign,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  FileText,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface Props {
  data: BusinessPlanData;
}

const TargetCustomers: React.FC<Props> = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
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
      <div className="bg-gray-50 p-6 rounded-lg">
        <PieChart width={400} height={300}>
          <Pie
            data={[
              { name: 'Enterprise', value: 60 },
              { name: 'Mid-Market', value: 30 },
              { name: 'Small Business', value: 10 },
            ]}
            cx={200}
            cy={150}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {COLORS.map((color, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default TargetCustomers;
