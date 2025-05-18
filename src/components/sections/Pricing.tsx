import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card"

export default function Pricing() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-6xl w-full px-4">
        {/* Header section */}
        <div className="text-center mb-16">
          <h3 className="text-[#878C9A] mb-2">Pricing</h3>
          <h1 className="text-5xl font-semibold mb-8">
            Flexibility to Customize<br />your metrics
          </h1>
        </div>

        {/* Pricing cards container - Horizontal layout */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Starter Plan */}
          <Card className="flex-1 border rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <CardHeader className="px-8 pt-0 pb-4">
              <div className="text-center py-3 mx-[-2rem] mb-6">
                <h2 className="text-xl font-medium">STARTER PLAN</h2>
              </div>
              <p className="text-gray-600 mt-1">Affordable option to get started</p>
            </CardHeader>
            
            <CardContent className="px-8 flex-1">
              <div className="border-t border-dashed border-gray-600 py-6">
                <div className="flex items-baseline">
                  <span className="text-6xl font-semibold">$200</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-600 py-6">
                <h3 className="font-medium mb-4">Features:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>One (1) User</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>Geospatial Data Access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>Dedicated Customer Support</span>
                  </li>
                  <li className="invisible h-32 md:h-48 lg:h-64"></li>
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="px-8 pb-8 mt-auto">
              <Button className="w-full cursor-pointer bg-[#0f141e] text-white hover:bg-[#1a2436] rounded-md py-4">
                Get started
              </Button>
            </CardFooter>
          </Card>

          {/* Regular Plan */}
          <Card className="flex-1 border rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <CardHeader className="px-8 pt-0 pb-4">
              <div className="text-center py-3 mx-[-2rem] mb-6">
                <h2 className="text-xl font-medium">REGULAR PLAN</h2>
              </div>
              <p className="text-gray-600 mt-1">For growing businesses</p>
            </CardHeader>
            
            <CardContent className="px-8 flex-1">
              <div className="border-t border-dashed border-gray-600 py-6">
                <div className="flex items-baseline">
                  <span className="text-6xl font-semibold">$1200</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-600 py-6">
                <h3 className="font-medium mb-4">Features:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>Two (2) users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>Custom Dashboards & Reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>On-Ground Data Collection via <span className="underline">Galia</span> Agents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>500 Field Surveys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>Project Reporting</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="px-8 pb-8 mt-auto">
              <Button className="w-full cursor-pointer bg-[#0f141e] text-white hover:bg-[#1a2436] rounded-md py-4">
                Get started
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="flex-1 border rounded-2xl overflow-hidden shadow-sm flex flex-col bg-gradient-to-b from-white to-blue-50">
            <CardHeader className="px-8 pt-0 pb-4">
              <div className="text-center py-3 mx-[-2rem] mb-6 bg-[#5B94E5] text-white">
                <h2 className="text-xl font-medium">PREMIUM PLAN</h2>
              </div>
              <p className="mt-1 font-medium">Enterprise-grade solutions</p>
            </CardHeader>
            
            <CardContent className="px-8 flex-1">
              <div className="border-t border-dashed border-gray-600 py-6">
                <div className="flex items-baseline">
                  <span className="text-6xl font-semibold">$2500</span>
                  <span className="ml-2">/month</span>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-600 py-6">
                <h3 className="font-medium mb-4">Features:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-xl mr-3 text-blue-500">•</span>
                    <span className="font-medium">All features of the Regular plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>Multi-User Access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>AI-Powered Geospatial Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>Real-Time Geotagging & Mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>API Access for Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <span>Predictive Analytics (AI Models for Trend)</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="px-8 pb-8 mt-auto">
              <Button className="w-full cursor-pointer bg-[#5B94E5] text-white hover:bg-[#4A7ABF] rounded-md py-4">
                Get started
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}