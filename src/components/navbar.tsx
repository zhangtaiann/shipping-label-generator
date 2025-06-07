'use client';

import { Package } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-s border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Shipping Label Generator
              </h1>
              <p className="text-sm text-gray-500">
                Label Size 4x6 Inches
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <span className="text-sm text-gray-400">
                v0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}