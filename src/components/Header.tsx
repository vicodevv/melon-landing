import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [enterpriseOpen, setEnterpriseOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEnterpriseOpen(false);
        setActiveCategory(null);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Smooth scroll functionality for Pricing and FAQ
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Enterprise dropdown items
  const categories = {
    "Private Sector": [
      {
        name: "Impact Investors",
        description: "(DFIs, Private Equity, VCs)",
        link: "/enterprise/impact-investors"
      },
      {
        name: "Research Institutions",
        description: "(Think Tanks, Universities)",
        link: "/enterprise/research-institutions"
      },
      {
        name: "Donors and Institutional Funders",
        description: "",
        link: "/enterprise/donors"
      },
      {
        name: "Corporate Organizations",
        description: "(Utilities, FMCGs, Pharmaceuticals)",
        link: "/enterprise/corporate"
      }
    ],
    "Public Sector": [
      {
        name: "Government Agencies",
        description: "",
        link: "/enterprise/government-agencies"
      },
      {
        name: "Multilateral Agencies",
        description: "",
        link: "/enterprise/multilateral-agencies"
      }
    ]
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image src="/images/melon-logo.svg" alt="Melon" width={131} height={25} className="w-auto filter brightness-0 invert" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {/* Enterprise dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={`cursor-pointer flex items-center text-white hover:text-white/80 ${enterpriseOpen ? 'text-white/80' : ''}`}
              onClick={() => setEnterpriseOpen(!enterpriseOpen)}
            >
              Enterprise
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${enterpriseOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Enterprise Mega Dropdown */}
            {enterpriseOpen && (
              <div className="absolute top-full left-0 mt-1 flex bg-white shadow-lg rounded-md overflow-hidden" style={{ width: '600px' }}>
                {/* Categories column */}
                <div className="w-1/3 border-r border-gray-100">
                  {Object.keys(categories).map((category) => (
                    <button
                      key={category}
                      className={`cursor-pointer block w-full py-3 px-4 text-left hover:bg-gray-50 ${activeCategory === category ? 'bg-gray-100' : ''}`}
                      onClick={() => setActiveCategory(category)}
                      onMouseEnter={() => setActiveCategory(category)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800">{category}</span>
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Subcategories column */}
                <div className="w-2/3 p-4">
                  {activeCategory && (
                    <div className="grid gap-3">
                      {categories[activeCategory as keyof typeof categories].map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          className="block p-3 rounded-md hover:bg-blue-50"
                        >
                          <div className="font-medium text-gray-800">{item.name}</div>
                          {item.description && (
                            <div className="text-sm text-gray-500">{item.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => scrollToSection('product')}
            className="cursor-pointer text-white hover:text-white/80 flex items-center"
          >
            Product
          </button>
          
          <button 
            onClick={() => scrollToSection('pricing')}
            className="cursor-pointer text-white hover:text-white/80"
          >
            Pricing
          </button>
          
          <button
            onClick={() => scrollToSection('faq')}
            className="cursor-pointer text-white hover:text-white/80"
          >
            FAQ
          </button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link href="https://melon.ng/signin" className="hidden md:block text-white hover:text-white/80">
            Sign In
          </Link>
          <Link
            href="/demo"
            className="rounded-md bg-black/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-black/70 border border-white/20"
          >
            Book a demo
          </Link>
          
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;