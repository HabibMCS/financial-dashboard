// components/dashboard/GraphsSection.tsx
'use client';

import React, { ReactElement, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type Period = '3M' | '6M' | '1Y' | 'ALL';

interface DataPoint {
  month: string;
  value: number;
  users: number;
  retention: number;
}

const generateSampleData = (months: number): DataPoint[] => {
  return Array.from({ length: months }, (_, i) => ({
    month: `${(i % 12) + 1}/23`,
    value: Math.floor(Math.random() * 1000),
    users: Math.floor(Math.random() * 500),
    retention: Math.floor(Math.random() * 100)
  }));
};

interface PeriodSelectorProps {
  activePeriod: Period;
  onChange: (period: Period) => void;
}

const PeriodSelector = ({ activePeriod, onChange }: PeriodSelectorProps) => {
  const periods: { value: Period; label: string }[] = [
    { value: '3M', label: '3M' },
    { value: '6M', label: '6M' },
    { value: '1Y', label: '1Y' },
    { value: 'ALL', label: 'ALL' },
  ];

  return (
    <div className="flex space-x-1">
      {periods.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`px-2 py-1 text-xs rounded ${
            activePeriod === value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

interface GraphCardProps {
  title: string;
  children: (data: DataPoint[]) => ReactElement;
}

const GraphCard = ({ title, children }: GraphCardProps) => {
  const [period, setPeriod] = useState<Period>('ALL');
  const [data, setData] = useState<DataPoint[]>(() => generateSampleData(24));

  const handlePeriodChange = (newPeriod: Period) => {
    setPeriod(newPeriod);
    const monthsMap: Record<Period, number> = {
      '3M': 3,
      '6M': 6,
      '1Y': 12,
      'ALL': 24
    };
    setData(generateSampleData(monthsMap[newPeriod]));
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <PeriodSelector activePeriod={period} onChange={handlePeriodChange} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {children(data)}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const GraphsSection = () => {
  return (
    <div className="space-y-6">
      {/* Cohort Behavior Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Cohort Behavior</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border rounded-md">All Cohorts</button>
            <button className="px-3 py-1 text-sm border rounded-md">-1</button>
            <button className="px-3 py-1 text-sm border rounded-md">12</button>
            <button className="px-3 py-1 text-sm border rounded-md">6</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GraphCard title="Revenue">
            {(data) => (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0EA5E9" />
              </BarChart>
            )}
          </GraphCard>

          <GraphCard title="Number of Customers">
            {(data) => (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#0EA5E9" />
              </BarChart>
            )}
          </GraphCard>

          <GraphCard title="Month over Month Revenue Change">
            {(data) => (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#10B981" />
              </BarChart>
            )}
          </GraphCard>
        </div>
      </div>

      {/* Retention Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Retention</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GraphCard title="Revenue Retention">
            {(data) => (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="retention" stroke="#0EA5E9" dot={false} />
              </LineChart>
            )}
          </GraphCard>

          <GraphCard title="Customer Retention">
            {(data) => (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="retention" stroke="#0EA5E9" dot={false} />
              </LineChart>
            )}
          </GraphCard>

          <GraphCard title="Revenue MoM Retention">
            {(data) => (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="retention" stroke="#10B981" dot={false} />
              </LineChart>
            )}
          </GraphCard>
        </div>
      </div>
    </div>
  );
};

export default GraphsSection;