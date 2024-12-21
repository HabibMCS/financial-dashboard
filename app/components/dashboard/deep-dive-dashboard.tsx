// components/dashboard/deep-dive-dashboard.tsx
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';  // Updated import path
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, ArrowDownRight, ArrowUpRight } from 'lucide-react';

// Sample data
const data = {
  months: ['02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10', '2023-11', '2023-12'],
  metrics: {
    REVENUE: ['43', '$65,574', '$82,819', '$97,502', '$109,857', '$138,413', '$143,700', '$148,863', '$158,228', '$167,589', '$178,708'],
    COGS: ['12', '$13,049', '$13,499', '$12,344', '$12,902', '$15,004', '$14,270', '$24,268', '$20,032', '$15,117', '$14,498'],
    'S&M': ['66', '$67,958', '$86,201', '$91,045', '$103,634', '$173,903', '$125,058', '$98,002', '$73,654', '$86,957', '$100,611'],
    'G&A': ['113', '$77,738', '$74,693', '$104,091', '$111,652', '$76,290', '$139,566', '$170,204', '$216,536', '$210,913', '$212,460'],
    EBITDA: ['708', '-$93,172', '-$101,575', '-$129,978', '-$118,381', '-$126,785', '-$135,188', '-$143,591', '-$151,994', '-$155,398', '-$148,861']
  }
};

const DeepDiveDashboard = () => {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Deepdive Demo</h1>
        <div className="flex gap-2">
          <button 
            className={`px-4 py-2 rounded-full ${activeTab === 'summary' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('summary')}
          >
            Summary
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeTab === 'metrics' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('metrics')}
          >
            Metrics
          </button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profit & Loss</CardTitle>
        </CardHeader>
        <CardContent>
          {/* P&L Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">MONTH</th>
                  {data.months.map(month => (
                    <th key={month} className="text-left px-4 py-2">{month}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(data.metrics).map(([metric, values]) => (
                  <tr key={metric} className="border-t">
                    <td className="px-4 py-2 font-medium">{metric}</td>
                    {values.map((value, idx) => (
                      <td 
                        key={idx} 
                        className={`px-4 py-2 ${value.startsWith('-') ? 'text-red-600' : ''}`}
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

      {/* Add other sections here */}
    </div>
  );
};

export default DeepDiveDashboard;