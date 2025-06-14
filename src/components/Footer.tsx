import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#212631] text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image src="/images/melon-logo.svg" alt="Melon Logo" width={131} height={25} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming geospatial data into actionable intelligence for Africa and beyond.
            </p>
          </div>

          {/* Melon Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Melon</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/home" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reach-out" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Reach Out
                </Link>
              </li>
            </ul>
          </div>

          {/* Private Sector Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Private Sector</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://melon.ng/signin" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Impact Investors
                </Link>
              </li>
              <li>
                <Link href="https://melon.ng/signin" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Research Institutions
                </Link>
              </li>
              <li>
                <Link href="https://melon.ng/signin" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Donors and Funders
                </Link>
              </li>
              <li>
                <Link href="https://melon.ng/signin" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Corporate Organizations
                </Link>
              </li>
            </ul>
          </div>

          {/* Public Sector Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Public Sector</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://melon.ng/signin" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Government Agencies
                </Link>
              </li>
              <li>
                <Link href="https://melon.ng/signin" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Multilateral Agencies
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Socials Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <Link href="/onboarding" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Onboarding
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
            
            {/* Socials section */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://instagram.com" className="w-10 h-10 bg-gray-700 hover:bg-[#5B94E5] rounded-lg flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/melonsolutions/" className="w-10 h-10 bg-gray-700 hover:bg-[#5B94E5] rounded-lg flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link href="https://facebook.com" className="w-10 h-10 bg-gray-700 hover:bg-[#5B94E5] rounded-lg flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://x.com/melon__ng" className="w-10 h-10 bg-gray-700 hover:bg-[#5B94E5] rounded-lg flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {currentYear} - MelonApp by Melon Data Services Ltd. All Rights Reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/terms-of-use" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}