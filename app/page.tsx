// app/page.tsx
'use client';

import Navbar from './components/Navbar';
import { ProfitLossTable } from './components/dashboard/profit-loss-table';
import GraphsSection from './components/dashboard/GraphsSection';
import UploadSection from './components/dashboard/UploadSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Deepdive Demo</h1>
          <a href="/" className="text-blue-500 hover:underline">
            deepdive.headline.com
          </a>
        </div>

        {/* Upload Section */}
        <UploadSection />

        {/* Dashboard Info */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <h5 className="font-medium">Created on</h5>
              <p className="text-gray-600">2022-04-12</p>
              <p className="text-gray-600">5:03 PM</p>
            </div>
            <div>
              <h5 className="font-medium">Standard Transaction CSV</h5>
            </div>
            <div>
              <h5 className="font-medium">Transactions from</h5>
              <p className="text-gray-600">2019-07-01 to</p>
              <p className="text-gray-600">2020-12-31</p>
            </div>
            <div>
              <h5 className="font-medium">Notes</h5>
              <p className="text-gray-600">SMB Demo</p>
            </div>
          </div>
        </div>
        
        {/* Profit & Loss Table */}
        <div className="mb-8">
          <ProfitLossTable />
        </div>

        {/* Graphs Section */}
        <GraphsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}