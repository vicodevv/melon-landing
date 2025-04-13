"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const AppFeature = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'reports' | 'mapping' | 'settings'>('overview');
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });
  
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
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

  // Check if section is in viewport to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Images for each tab
  const tabImages = {
    overview: '/images/dashboard-overview.jpg',
    analytics: '/images/dashboard-overview.jpg',
    reports: '/images/dashboard-overview.jpg',
    mapping: '/images/dashboard-overview.jpg',
    settings: '/images/dashboard-overview.jpg',
  };

  // Tab configuration with descriptions
  const tabs: { id: 'overview' | 'analytics' | 'reports' | 'mapping' | 'settings'; label: string; description: string }[] = [
    { 
      id: 'overview', 
      label: 'Overview',
      description: 'Get a complete snapshot of all your projects, metrics, and performance indicators at a glance.'
    },
    { 
      id: 'analytics', 
      label: 'Analytics',
      description: 'Dive deep into your data with powerful visualization tools and predictive insights.'
    },
    { 
      id: 'reports', 
      label: 'Reports',
      description: 'Generate comprehensive reports with customizable templates for stakeholders and teams.'
    },
    { 
      id: 'mapping', 
      label: 'Mapping',
      description: 'Visualize geographical data with interactive maps showing trends and patterns.'
    },
    { 
      id: 'settings', 
      label: 'Settings',
      description: 'Configure your workspace, manage user access, and customize your data preferences.'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-4" ref={containerRef}>
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-2">Platform Features</p>
          <h2 className="text-[#1c2331] text-4xl font-bold mb-4">Powerful Dashboard Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our intuitive dashboard gives you all the tools you need to manage your projects efficiently,
            with customized analytics and real-time data visualization.
          </p>
        </motion.div>

        {/* Dashboard preview area */}
        <motion.div 
          className="rounded-3xl border border-gray-200 overflow-hidden shadow-xl mb-10 bg-white"
          variants={itemVariants}
        >
          <div className="w-full relative aspect-[16/9]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={activeTab}
            >
              <Image 
                src={tabImages[activeTab]} 
                alt={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dashboard`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* Feature highlight overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h3>
              <p className="max-w-xl">
                {tabs.find(tab => tab.id === activeTab)?.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tab navigation */}
        <motion.div className="flex justify-center" variants={itemVariants}>
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
                className={`px-6 py-3 cursor-pointer font-medium transition-all duration-200 flex items-center ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-1"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Additional features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Real-time Updates</h3>
            <p className="text-gray-600 text-sm">Receive instant notifications and updates as your data changes, ensuring you always have the latest information.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Easy Integration</h3>
            <p className="text-gray-600 text-sm">Seamlessly connect with your existing tools and systems through our extensive API and pre-built integrations.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Enterprise Security</h3>
            <p className="text-gray-600 text-sm">Your data is protected with enterprise-grade security features, including encryption, role-based access, and compliance controls.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AppFeature;