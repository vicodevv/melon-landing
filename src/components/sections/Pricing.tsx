import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card"

export default function Pricing() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full px-4">
        {/* Basic Plan */}
        <Card className="flex-1 border rounded-lg overflow-hidden shadow-sm">
          <CardHeader className="px-8 pt-8 pb-4">
            <h2 className="text-2xl font-medium">Basic</h2>
            <p className="text-gray-600 mt-1">Fastest way to automate your reciving operations.</p>
          </CardHeader>
          <CardContent className="px-8">
            <div className="border-t border-dotted border-gray-200 py-6">
              <div className="flex items-baseline">
                <span className="text-6xl font-semibold">$20</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mt-2">For developers and early-stage startups</p>
            </div>

            <div className="border-t border-dotted border-gray-200 py-6">
              <h3 className="font-medium mb-4">Features:</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-300 mr-3 flex-shrink-0"></span>
                    <span>Users</span>
                  </div>
                  <span>3 people</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-300 mr-3 flex-shrink-0"></span>
                    <span>Storage space</span>
                  </div>
                  <span>500 MB</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-300 mr-3 flex-shrink-0"></span>
                    <span>Contacts</span>
                  </div>
                  <span>Unlimited</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-300 mr-3 flex-shrink-0"></span>
                    <span>Report Feedback</span>
                  </div>
                  <span></span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="px-8 pb-8">
            <Button className="w-full bg-[#0f141e] text-white hover:bg-[#1a2436] rounded-md py-6">
              Start free trial
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="flex-1 border rounded-lg overflow-hidden shadow-sm">
          <CardHeader className="px-8 pt-8 pb-4">
            <h2 className="text-2xl font-medium">Pro</h2>
            <p className="text-gray-600 mt-1">Fastest way to automate your reciving operations.</p>
          </CardHeader>
          <CardContent className="px-8">
            <div className="border-t border-dotted border-gray-200 py-6">
              <div className="flex items-baseline">
                <span className="text-6xl font-semibold">$100</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mt-2">For developers and early-stage startups</p>
            </div>

            <div className="border-t border-dotted border-gray-200 py-6">
              <h3 className="font-medium mb-4">Features:</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-300 mr-3 flex-shrink-0"></span>
                    <span>Users</span>
                  </div>
                  <span>5 people</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-300 mr-3 flex-shrink-0"></span>
                    <span>Storage space</span>
                  </div>
                  <span>20 GB</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-300 mr-3 flex-shrink-0"></span>
                    <span>Contacts</span>
                  </div>
                  <span>Unlimited</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-300 mr-3 flex-shrink-0"></span>
                    <span>Report Feedback</span>
                  </div>
                  <span></span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-300 mr-3 flex-shrink-0"></span>
                    <span>Pictures</span>
                  </div>
                  <span></span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="px-8 pb-8">
            <Button className="w-full bg-[#0f141e] text-white hover:bg-[#1a2436] rounded-md py-6">
              Start free trial
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

