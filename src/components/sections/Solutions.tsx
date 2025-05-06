/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, MapPin, LineChart, BarChart2, Database } from "lucide-react"
import { motion } from "framer-motion"

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  // Solution cards data with proper content
  const solutionCards = [
    {
      id: 0,
      title: "Geospatial Mapping",
      icon: <MapPin className="w-10 h-10 text-[#5B94E5]" />,
      description: "Advanced mapping solutions to visualize location-based data across regions."
    },
    {
      id: 1,
      title: "Market Insights",
      icon: <LineChart className="w-10 h-10 text-[#5B94E5]" />,
      description: "Real-time analytics of market trends to inform strategic decisions."
    },
    {
      id: 2,
      title: "Geospatial Mapping",
      icon: <MapPin className="w-10 h-10 text-[#5B94E5]" />,
      description: "Advanced mapping solutions to visualize location-based data across regions."
    },
    {
      id: 3,
      title: "Market Insights",
      icon: <LineChart className="w-10 h-10 text-[#5B94E5]" />,
      description: "Real-time analytics of market trends to inform strategic decisions."
    },
    {
      id: 4,
      title: "Data Collection",
      icon: <Database className="w-10 h-10 text-[#5B94E5]" />,
      description: "Comprehensive on-ground data collection through our nationwide agent network."
    },
    {
      id: 5,
      title: "Impact Analytics",
      icon: <BarChart2 className="w-10 h-10 text-[#5B94E5]" />,
      description: "Measure and visualize the impact of your initiatives with advanced analytics."
    },
    {
      id: 6,
      title: "Data Collection",
      icon: <Database className="w-10 h-10 text-[#5B94E5]" />,
      description: "Comprehensive on-ground data collection through our nationwide agent network."
    },
    {
      id: 7,
      title: "Impact Analytics",
      icon: <BarChart2 className="w-10 h-10 text-[#5B94E5]" />,
      description: "Measure and visualize the impact of your initiatives with advanced analytics."
    },
  ]

  // Check if section is in viewport to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

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
  }

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
  }

  return (
    <div className="w-full py-16" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        {/* First solution section - Text left, Grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-2">Melon Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c2331] mb-4">
              Data-Driven Insights, Smarter Decisions
            </h2>
            <p className="text-gray-600">
              Unlock real-time geospatial intelligence and analytics for informed decision-making in public health, 
              agriculture, energy, and other key sectors.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {solutionCards.slice(0, 4).map((card) => (
              <motion.div
                key={card.id}
                className="bg-white border border-gray-100 rounded-lg p-6 h-full relative shadow-sm hover:shadow-md transition-all duration-300"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-medium text-[#1c2331] mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>

                {hoveredCard === card.id && (
                  <motion.div 
                    className="absolute right-4 bottom-4 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-5 h-5 text-[#5B94E5]" />
                  </motion.div>
                )}
                
                {hoveredCard === card.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 w-full bg-[#5B94E5]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second solution section - Grid left, Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {solutionCards.slice(4, 8).map((card) => (
              <motion.div
                key={card.id}
                className="bg-white border border-gray-100 rounded-lg p-6 h-full relative shadow-sm hover:shadow-md transition-all duration-300"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-medium text-[#1c2331] mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>

                {hoveredCard === card.id && (
                  <motion.div 
                    className="absolute right-4 bottom-4 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-5 h-5 text-[#5B94E5]" />
                  </motion.div>
                )}
                
                {hoveredCard === card.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 w-full bg-[#5B94E5]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center order-1 lg:order-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-2">Melon Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c2331] mb-4">
              Mapping the Future, One Data Point at a Time
            </h2>
            <p className="text-gray-600">
              Leverage AI-powered mapping to visualize disease patterns, market trends, and infrastructure gaps across Africa.
            </p>
          </motion.div>
        </div>
        {/* Third solution section - Text left, Grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-2">Melon Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c2331] mb-4">
              On-the-Ground Data, At Your Fingertips
            </h2>
            <p className="text-gray-600">
            With a sophisticated field agents nationwide, we collect, verify, and deliver hyper-local data that traditional surveys miss.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {solutionCards.slice(0, 4).map((card) => (
              <motion.div
                key={card.id}
                className="bg-white border border-gray-100 rounded-lg p-6 h-full relative shadow-sm hover:shadow-md transition-all duration-300"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-medium text-[#1c2331] mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>

                {hoveredCard === card.id && (
                  <motion.div 
                    className="absolute right-4 bottom-4 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-5 h-5 text-[#5B94E5]" />
                  </motion.div>
                )}
                
                {hoveredCard === card.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 w-full bg-[#5B94E5]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action section */}
        <motion.div 
          className="text-center py-16 bg-gray-50 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c2331] mb-4">
            Ready to transform your data strategy?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team of experts is ready to help you unlock the full potential of your data with customized solutions.
          </p>
          <motion.button 
            className="px-8 py-3 bg-[#5B94E5] text-white rounded-md font-medium hover:bg-[#4A7ABF] transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}