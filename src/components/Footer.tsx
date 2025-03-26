import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#212631] text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="flex items-start">
            <Image src="/images/melon-logo.svg" alt="Melon Logo" width={131} height={25} />
          </div>

          {/* Melon Column */}
          <div>
            <h3 className="text-white text-xl font-medium mb-4">Melon</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/home" className="hover:text-white text-[#464D5C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white text-[#464D5C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reach-out" className="hover:text-white text-[#464D5C] transition-colors">
                  Reach Out
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white text-xl font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/donor" className="hover:text-white text-[#464D5C] transition-colors">
                  Donor
                </Link>
              </li>
              <li>
                <Link href="/guarantee-ngo" className="hover:text-white text-[#464D5C] transition-colors">
                  Guarantee/NGO
                </Link>
              </li>
              <li>
                <Link href="/government" className="hover:text-white text-[#464D5C] transition-colors">
                  Government
                </Link>
              </li>
              <li>
                <Link href="/investor" className="hover:text-white text-[#464D5C] transition-colors">
                  Investor
                </Link>
              </li>
              <li>
                <Link href="/private-company" className="hover:text-white text-[#464D5C] transition-colors">
                  Private Company
                </Link>
              </li>
              <li>
                <Link href="/venture-capital" className="hover:text-white text-[#464D5C] transition-colors">
                  Venture Capital
                </Link>
              </li>
            </ul>
          </div>

          {/* Application Column */}
          <div>
            <h3 className="text-white text-xl font-medium mb-4">Application</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/onboarding" className="hover:text-white text-[#464D5C] transition-colors">
                  Onboarding
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-white text-[#464D5C] transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white text-[#464D5C] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white text-[#464D5C] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h3 className="text-white text-xl font-medium mb-4">Socials</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://instagram.com" className="hover:text-white text-[#464D5C] transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/melonsolutions/" className="hover:text-white text-[#464D5C] transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" className="hover:text-white text-[#464D5C] transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://x.com/melon__ng" className="hover:text-white text-[#464D5C] transition-colors">
                  X (Formerly Twitter)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p className="text-[#464D5C]">{currentYear} - MelonApp by Melon Data Services Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
