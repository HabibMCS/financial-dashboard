// components/Navbar.tsx
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="text-xl font-bold text-gray-800">
              Deepdive
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
              Sample Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
              Learn
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
              Support
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
              Create Account
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;