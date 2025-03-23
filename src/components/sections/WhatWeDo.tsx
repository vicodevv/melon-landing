"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function WhatWeDo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(1)

  const services = [
    {
      id: 0,
      title: "Impact Reporting",
      icon: <div className="w-12 h-12 bg-[#1c2331] rounded-md" />,
    },
    {
      id: 1,
      title: "Data Visualization & Analysis",
      icon: <div className="w-12 h-12 bg-[#1c2331] rounded-md" />,
    },
    {
      id: 2,
      title: "Monitoring & Evaluation",
      icon: <div className="w-12 h-12 bg-[#1c2331] rounded-md" />,
    },
    {
      id: 3,
      title: "Due diligence",
      icon: <div className="w-12 h-12 bg-[#1c2331] rounded-md" />,
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-gray-500 mb-2">Enterprise</p>
          <h1 className="text-5xl font-bold text-[#1c2331]">What we do</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Timeline dots */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:flex flex-col items-center justify-between">
            <div className="w-4 h-4 bg-white border-4 border-gray-100 rounded-full"></div>
            <div className="w-4 h-4 bg-white border-4 border-gray-100 rounded-full"></div>
            <div className="w-4 h-4 bg-white border-4 border-gray-100 rounded-full"></div>
          </div>

          {/* Horizontal timeline dots */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden md:flex items-center justify-between">
            <div className="w-4 h-4 bg-white border-4 border-gray-100 rounded-full"></div>
            <div className="w-4 h-4 bg-white border-4 border-gray-100 rounded-full"></div>
            <div className="w-4 h-4 bg-white border-4 border-gray-100 rounded-full"></div>
          </div>

          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-100 rounded-lg p-8 relative"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(1)}
            >
              {service.icon}
              <h3 className="text-2xl font-medium text-[#1c2331] mt-6">{service.title}</h3>

              {hoveredCard === service.id && service.id === 1 && (
                <div className="absolute right-4 top-4 flex items-center">
                  <ChevronRight className="w-5 h-5 text-white" />
                  <div className="bg-[#f0b95e] text-white text-sm px-2 py-1 rounded">Effect Hovered</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

