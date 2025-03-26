"use client";
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import AppFeature from '@/components/sections/AppFeature';
import WhatWeDo from '@/components/sections/WhatWeDo';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/Footer';
import Solutions from '@/components/sections/Solutions';
import Pricing from '@/components/sections/Pricing';
// import GridBackground from '@/components/GridBackground';

const Page = () => {
  return (
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <AppFeature />
          <WhatWeDo />
          <Solutions />
          <Pricing />
          <FAQ /> 
        </main>
        <Footer />
      </div>
  );
};

export default Page;