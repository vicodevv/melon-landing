/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import AppFeature from '@/components/sections/AppFeature';
import WhatWeDo from '@/components/sections/WhatWeDo';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/Footer';
import Solutions from '@/components/sections/Solutions';
import Pricing from '@/components/sections/Pricing';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className="grid-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="product">
        <AppFeature />
        </div>
        <WhatWeDo />
        <Solutions />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a 
            href="/demo" 
            className="flex items-center bg-[#5B94E5] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#4A7ABF] transition-colors"
          >
            <span className="mr-2">Sign up</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 z-50 p-3 bg-white rounded-full shadow-lg border border-gray-200 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Page;