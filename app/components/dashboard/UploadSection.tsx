// components/dashboard/UploadSection.tsx
'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Upload, X } from 'lucide-react';

const UploadSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    }
  };

  return (
    <div className="relative">
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <label htmlFor="file-upload" className="flex items-center space-x-4 cursor-pointer">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Upload className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Upload CSV File</h3>
                  <p className="text-sm text-gray-500">
                    Upload your financial data in CSV format
                  </p>
                </div>
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
            {fileName && (
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-md">
                <span className="text-sm text-gray-600">{fileName}</span>
                <button 
                  onClick={() => setFileName(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-white border border-gray-200 shadow-lg rounded-lg p-4 z-50 animate-slide-down">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.485 2.495a2.5 2.5 0 013.03 0l6.28 5.84a2.5 2.5 0 01.83 2.74l-2.42 7.25a2.5 2.5 0 01-2.38 1.68H6.145a2.5 2.5 0 01-2.38-1.68l-2.42-7.25a2.5 2.5 0 01.83-2.74l6.28-5.84zm1.515 5.5a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0V8zm-.75 5.75a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                Backend Not Connected
              </p>
              <p className="text-sm text-gray-500">
                This is a demo version. Backend integration is not available.
              </p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSection;