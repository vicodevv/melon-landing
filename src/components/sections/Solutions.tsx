"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const solutionCards = [
    {
      id: 0,
      title: "",
      icon: "",
    },
    {
      id: 1,
      title: "",
      icon: "",
    },
    {
      id: 2,
      title: "",
      icon: "",
    },
    {
      id: 3,
      title: "",
      icon: "",
    },
  ]

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* First solution section - Text left, Grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 mb-2">Melon Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c2331] mb-4">
            Data-Driven Insights, Smarter Decisions
            </h2>
            <p className="text-gray-600">Unlock real-time geospatial intelligence and analytics for informed decision-making in public health, Agriculture, Energy and other key sectors</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {solutionCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-gray-100 rounded-lg p-6 h-[230px] w-[230px] relative shadow-sm hover:shadow-md transition-shadow"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {card.icon}
                <h3 className="text-xl font-medium text-[#1c2331] mt-4">{card.title}</h3>

                {hoveredCard === card.id && card.id === 1 && (
                  <div className="absolute right-4 top-4 flex items-center">
                    <ChevronRight className="w-5 h-5 text-white" />
                    <div className="bg-[#f0b95e] text-white text-sm px-2 py-1 rounded">Effect Hovered</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Second solution section - Grid left, Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {solutionCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-gray-100 rounded-lg p-6 h-[230px] w-[230px] relative shadow-sm hover:shadow-md transition-shadow"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {card.icon}
                <h3 className="text-xl font-medium text-[#1c2331] mt-4">{card.title}</h3>

                {hoveredCard === card.id && card.id === 1 && (
                  <div className="absolute right-4 top-4 flex items-center">
                    <ChevronRight className="w-5 h-5 text-white" />
                    <div className="bg-[#f0b95e] text-white text-sm px-2 py-1 rounded">Effect Hovered</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2">
            <p className="text-gray-500 mb-2">Melon Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c2331] mb-4">
              Mapping the Future, One Data Point at a Time
            </h2>
            <p className="text-gray-600">Leverage AI-powered mapping to visualize disease patterns, market trends, and infrastructure gaps across Africa.</p>
          </div>
        </div>

        {/* Third solution section - Text left, Grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 mb-2">Melon Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c2331] mb-4">
              On-the-Ground Data, At Your Fingertips
            </h2>
            <p className="text-gray-600">With a sophisticated field agents nationwide, we collect, verify, and deliver hyper-local data that traditional surveys miss.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {solutionCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-gray-100 rounded-lg p-6 h-[230px] w-[230px] relative shadow-sm hover:shadow-md transition-shadow"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {card.icon}
                <h3 className="text-xl font-medium text-[#1c2331] mt-4">{card.title}</h3>

                {hoveredCard === card.id && card.id === 1 && (
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
    </div>
  )
}

