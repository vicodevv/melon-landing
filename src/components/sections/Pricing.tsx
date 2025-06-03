import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card"

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <p className="text-[#878C9A] mb-4 text-sm uppercase tracking-wider font-medium">Pricing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c2331] mb-6">
            Flexibility to Customize<br />your metrics
          </h1>
        </div>

        {/* Pricing cards container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <Card className="border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="px-8 pt-8 pb-4">
              <div className="text-center py-4 mb-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold text-[#1c2331]">STARTER PLAN</h2>
              </div>
              <p className="text-gray-600 text-center">Affordable option to get started</p>
            </CardHeader>
            
            <CardContent className="px-8 flex-1">
              <div className="border-t border-dashed border-gray-300 py-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-[#1c2331]">$200</span>
                  <span className="text-gray-500 ml-2 text-lg">/month</span>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-300 py-6">
                <h3 className="font-semibold mb-6 text-[#1c2331]">Features:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">One (1) User</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">Geospatial Data Access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">Dedicated Customer Support</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="px-8 pb-8 mt-auto">
              <Button className="w-full cursor-pointer bg-[#1c2331] text-white hover:bg-[#2a3441] rounded-lg py-4 font-medium">
                Get started
              </Button>
            </CardFooter>
          </Card>

          {/* Regular Plan */}
          <Card className="border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="px-8 pt-8 pb-4">
              <div className="text-center py-4 mb-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold text-[#1c2331]">REGULAR PLAN</h2>
              </div>
              <p className="text-gray-600 text-center">For growing businesses</p>
            </CardHeader>
            
            <CardContent className="px-8 flex-1">
              <div className="border-t border-dashed border-gray-300 py-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-[#1c2331]">$1200</span>
                  <span className="text-gray-500 ml-2 text-lg">/month</span>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-300 py-6">
                <h3 className="font-semibold mb-6 text-[#1c2331]">Features:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">Two (2) users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">Custom Dashboards & Reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">On-Ground Data Collection via <span className="underline">Galia</span> Agents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">500 Field Surveys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">Project Reporting</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="px-8 pb-8 mt-auto">
              <Button className="w-full cursor-pointer bg-[#1c2331] text-white hover:bg-[#2a3441] rounded-lg py-4 font-medium">
                Get started
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-gradient-to-b from-white to-blue-50 relative">
            {/* Premium badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            </div>
            
            <CardHeader className="px-8 pt-8 pb-4">
              <div className="text-center py-4 mb-6 bg-[#5B94E5] text-white rounded-lg">
                <h2 className="text-xl font-semibold">PREMIUM PLAN</h2>
              </div>
              <p className="text-gray-600 text-center font-medium">Enterprise-grade solutions</p>
            </CardHeader>
            
            <CardContent className="px-8 flex-1">
              <div className="border-t border-dashed border-gray-300 py-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-[#1c2331]">$2500</span>
                  <span className="text-gray-500 ml-2 text-lg">/month</span>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-300 py-6">
                <h3 className="font-semibold mb-6 text-[#1c2331]">Features:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="font-medium text-gray-700">All features of the Regular plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">Multi-User Access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">AI-Powered Geospatial Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">Real-Time Geotagging & Mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">API Access for Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5B94E5] mr-3 text-lg">•</span>
                    <span className="text-gray-700">Predictive Analytics (AI Models for Trend)</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="px-8 pb-8 mt-auto">
              <Button className="w-full cursor-pointer bg-[#5B94E5] text-white hover:bg-[#4A7ABF] rounded-lg py-4 font-medium">
                Get started
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}