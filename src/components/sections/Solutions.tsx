import React from 'react';

export default function Solutions() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Content grid */}
      <div className="relative z-10 grid grid-cols-3 min-h-screen">
        {/* Left column with text content */}
        <div className="p-8 flex flex-col justify-center">
          <div className="max-w-md">
            <p className="text-gray-500 mb-4">Melon Solutions</p>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Boost your Organizations Productivity
            </h1>
            <p className="text-gray-700">Built to measure, manage and demonstrate the impact of an Investment</p>
          </div>
        </div>

        {/* Middle column with cards */}
        <div className="p-4 flex flex-col justify-between">
          <div className="h-1/2 p-4 flex items-center justify-center">
            <div className="w-[230px] h-[230px] rounded-lg border border-gray-100 shadow-sm"></div>
          </div>
          <div className="h-1/2 p-4 flex items-center justify-center">
            <div className="w-[230px] h-[230px] rounded-lg border border-gray-100 shadow-sm"></div>
          </div>
        </div>

        {/* Right column with cards */}
        <div className="p-4 flex flex-col justify-between">
          <div className="h-1/2 p-4 flex items-center justify-center">
            <div className="w-[230px] h-[230px] rounded-lg border border-gray-100 shadow-sm"></div>
          </div>
          <div className="h-1/2 p-4 flex items-center justify-center">
            <div className="w-[230px] h-[230px] rounded-lg border border-gray-100 shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

