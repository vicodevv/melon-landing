/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, LineChart, BarChart2, Database } from 'lucide-react';
import Image from 'next/image';

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<string | number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* First solution section - Text left, Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-4">Melon Solutions</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c2331] mb-6">
              Data-Driven Insights, Smarter Decisions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Unlock real-time geospatial intelligence and analytics for informed decision-making in public health, 
              agriculture, energy, and other key sectors.
            </p>
          </motion.div>

          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-xl"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/satellite.jpg"
                alt="Geospatial mapping satellite imagery"
                className="w-full h-full object-cover"
                width={800}
                height={600}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Second solution section - Image left, Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/satellite.jpg"
                alt="Market intelligence satellite imagery"
                className="w-full h-full object-cover"
                width={800}
                height={600}
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center order-1 lg:order-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-4">Melon Solutions</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c2331] mb-6">
              Mapping the Future, One Data Point at a Time
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Leverage AI-powered mapping to visualize disease patterns, market trends, and infrastructure gaps across Africa.
            </p>
          </motion.div>
        </div>

        {/* Third solution section - Text left, Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-4">Melon Solutions</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c2331] mb-6">
              On-the-Ground Data, At Your Fingertips
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With sophisticated field agents nationwide, we collect, verify, and deliver hyper-local data that traditional surveys miss.
            </p>
          </motion.div>

          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-xl"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/satellite-2.jpg"
                alt="Data collection satellite imagery"
                className="w-full h-full object-cover"
                width={800}
                height={600}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Call to action section */}
        <motion.div 
          className="text-center py-16 bg-white rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c2331] mb-6">
            Ready to transform your data strategy?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Our team of experts is ready to help you unlock the full potential of your data with customized solutions.
          </p>
          <motion.button 
            className="px-8 py-4 bg-[#5B94E5] text-white rounded-lg font-medium hover:bg-[#4A7ABF] transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}