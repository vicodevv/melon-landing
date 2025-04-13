/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, Globe, Search, BarChart2, LineChart } from "lucide-react"
import { motion } from "framer-motion"

export default function WhatWeDo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(1)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      id: 0,
      title: "Geospatial Intelligence",
      icon: <Globe className="w-8 h-8 text-white" />,
      description: "Analyze location-based data to uncover spatial patterns and insights.",
      color: "#5B94E5",
    },
    {
      id: 1,
      title: "Research",
      icon: <Search className="w-8 h-8 text-white" />,
      description: "Conduct in-depth analysis to answer complex questions and drive decisions.",
      color: "#5B94E5",
    },
    {
      id: 2,
      title: "Impact Measurement",
      icon: <BarChart2 className="w-8 h-8 text-white" />,
      description: "Quantify and evaluate the effectiveness of initiatives and programs.",
      color: "#5B94E5",
    },
    {
      id: 3,
      title: "Data Visualization & Analytics",
      icon: <LineChart className="w-8 h-8 text-white" />,
      description: "Transform complex data into clear, actionable visual insights.",
      color: "#5B94E5",
    },
  ]

  // Check if section is in viewport to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
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
    hidden: { y: 50, opacity: 0 },
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

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
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
    <div className="w-full min-h-screen" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <p className="text-gray-500 mb-2 uppercase tracking-wider font-medium">Enterprise</p>
          <h1 className="text-5xl font-bold text-[#1c2331] relative inline-block">
            What we do
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Connecting lines between cards */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M 50% 25%, L 50% 75%, M 25% 50% L 75% 50%"
                stroke="#e5e7eb"
                strokeWidth="1"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
              />
            </svg>
          </div>

          {services.map((service) => (
            <motion.div
              key={service.id}
              className="cursor-pointer bg-white border border-gray-100 rounded-lg p-8 relative shadow-sm hover:shadow-lg transition-all duration-300 z-10"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300`}
                  style={{ backgroundColor: service.color }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={hoveredCard === service.id ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {hoveredCard === service.id && (
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className={`w-5 h-5`} style={{ color: service.color }} />
                  </motion.div>
                )}
              </div>

              <h3 className="text-2xl font-medium text-[#1c2331] mt-6 mb-3">{service.title}</h3>

              <motion.p
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={hoveredCard === service.id ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {service.description}
              </motion.p>

              {hoveredCard === service.id && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 w-full"
                  style={{ backgroundColor: service.color }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

