// components/dashboard/profit-loss-table.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface PLTableProps {
  data?: {
    months: string[];
    metrics: {
      [key: string]: string[];
    };
  };
}

// Sample data
const sampleData = {
  months: ['02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10', '2023-11', '2023-12'],
  metrics: {
    REVENUE: ['43', '$65,574', '$82,819', '$97,502', '$109,857', '$138,413', '$143,700', '$148,863', '$158,228', '$167,589', '$178,708'],
    COGS: ['12', '$13,049', '$13,499', '$12,344', '$12,902', '$15,004', '$14,270', '$24,268', '$20,032', '$15,117', '$14,498'],
    'S&M': ['66', '$67,958', '$86,201', '$91,045', '$103,634', '$173,903', '$125,058', '$98,002', '$73,654', '$86,957', '$100,611'],
    'G&A': ['113', '$77,738', '$74,693', '$104,091', '$111,652', '$76,290', '$139,566', '$170,204', '$216,536', '$210,913', '$212,460'],
    EBITDA: ['708', '-$93,172', '-$101,575', '-$129,978', '-$118,381', '-$126,785', '-$135,188', '-$143,591', '-$151,994', '-$155,398', '-$148,861']
  }
};

export const ProfitLossTable: React.FC<PLTableProps> = ({ data = sampleData }) => {
  return (
    <Card className="w-full bg-white shadow-lg rounded-lg">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Profit & Loss</CardTitle>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md">Summary</button>
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-md">Metrics</button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">MONTH</th>
                {data.months.map(month => (
                  <th key={month} className="text-left px-6 py-4 font-semibold text-gray-600">
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Object.entries(data.metrics).map(([metric, values]) => (
                <tr key={metric} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {metric}
                  </td>
                  {values.map((value, idx) => (
                    <td 
                      key={idx} 
                      className={`px-6 py-4 ${value.startsWith('-') ? 'text-red-600' : 'text-gray-900'}`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};