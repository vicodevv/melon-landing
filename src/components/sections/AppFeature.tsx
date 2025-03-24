"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const AppFeature = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });
  
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  
  // Update indicator when active tab changes
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const activeTabElement = tabRefs.current[activeTab];
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  // Images for each tab
  const tabImages = {
    overview: '/images/dashboard-overview.jpg',
    report: '/images/dashboard-overview.jpg',
    portfolio: '/images/dashboard-overview.jpg',
    messages: '/images/dashboard-overview.jpg',
    trash: '/images/dashboard-overview.jpg',
  };

  // Tab configuration
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'report', label: 'Report' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'messages', label: 'Messages' },
    { id: 'trash', label: 'Trash' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#000000] text-4xl font-bold mb-4">Powerful Dashboard Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our intuitive dashboard gives you all the tools you need to manage your projects efficiently.
          </p>
        </div>

        {/* Dashboard preview area - full rounded box */}
        <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-lg mb-6">
          <div className="w-full relative aspect-[16/9]">
            {activeTab === 'overview' && (
              <Image 
                src={tabImages.overview} 
                alt="Dashboard Overview"
                fill
                className="object-cover"
                priority
              />
            )}
            {activeTab === 'report' && (
              <Image 
                src={tabImages.report} 
                alt="Reports Dashboard"
                fill
                className="object-cover"
                priority
              />
            )}
            {activeTab === 'portfolio' && (
              <Image 
                src={tabImages.portfolio} 
                alt="Portfolio Dashboard"
                fill
                className="object-cover"
                priority
              />
            )}
            {activeTab === 'messages' && (
              <Image 
                src={tabImages.messages} 
                alt="Messages Dashboard"
                fill
                className="object-cover"
                priority
              />
            )}
            {activeTab === 'trash' && (
              <Image 
                src={tabImages.trash} 
                alt="Trash Dashboard"
                fill
                className="object-cover"
                priority
              />
            )}
            
            {/* Fallback if images aren't available yet */}
            {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <p>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} View</p>
            </div> */}
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center">
          <div className="inline-flex bg-gray-900 rounded-lg overflow-hidden relative">
            {/* Sliding indicator */}
            <div 
              className="absolute bottom-0 bg-blue-500 h-1 transition-all duration-300 ease-in-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />
            
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current[tab.id] = el;
                }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 cursor-pointer font-medium transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeature;