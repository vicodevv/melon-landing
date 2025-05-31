import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'reports' | 'portfolio' | 'messages' | 'trash'>('overview');

  const tabImages = {
    overview: '/images/dashboard-overview.jpg',
    reports: '/images/dashboard-overview.jpg', 
    portfolio: '/images/dashboard-overview.jpg',
    messages: '/images/dashboard-overview.jpg',
    trash: '/images/dashboard-overview.jpg',
  };

  // Tab configuration
  const tabs: { id: 'overview' | 'reports' | 'portfolio' | 'messages' | 'trash'; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'reports', label: 'Reports' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'messages', label: 'Messages' },
    { id: 'trash', label: 'Trash' },
  ];

  return (
    <section 
      className="pt-24 pb-0 relative"
      style={{
        background: 'linear-gradient(135deg, #7aa6ea 10%, #5b92e5 40%, #6175d1 70%, #6659bc 90%)'
      }}
    >
      <div className="container relative z-10 mx-auto px-6 text-center md:px-12 max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="mx-auto max-w-6xl text-6xl md:text-7xl lg:text-8xl font-[900px] tracking-tight text-white leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}
              className="block"
            >
              Impact Measurement
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="block"
            >
              Beyond Borders
            </motion.span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We provide tools and services to help organizations optimize outcomes through
            effective data management.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              href="/demo"
              className="group relative overflow-hidden rounded-md bg-black/80 backdrop-blur-sm px-8 py-4 text-lg font-medium text-white hover:bg-black/90 transition-all duration-300 flex items-center"
            >
              <span className="relative z-10 flex items-center">
                Sign Up
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>

            <Link
              href="https://melon.ng/signin"
              className="group rounded-md border-2 border-white/30 bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-medium text-white hover:bg-white/30 transition-all duration-300 flex items-center"
            >
              <span className="flex items-center">
                Sign in
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="relative mx-auto max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="rounded-t-2xl bg-white shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gray-50 relative">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Image 
                    src={tabImages[activeTab]} 
                    alt={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dashboard`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tab navigation */}
      <motion.div 
        className="relative z-10 flex justify-center pb-8 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="inline-flex bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 cursor-pointer font-medium transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-gray-700 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;