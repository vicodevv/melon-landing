"use client";
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';

const Page = () => {
  return (
    <GridBackground>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WhatWeDo />
          {/* <Solutions /> */}
          {/* <Pricing /> */}
          {/* <AppFeature />
          */}
          <FAQ /> 
        </main>
        <Footer />
      </div>
    </GridBackground>
  );
};

export default Page;