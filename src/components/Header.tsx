import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-100">
    <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
      <Link href="/" className="flex items-center">
        <Image src="/images/melon-logo.svg" alt="Melon" width={131} height={25} className="w-auto" />
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/enterprise" className="text-gray-800 hover:text-blue-500">
          Enterprise
        </Link>
        <Link href="/product" className="text-gray-800 hover:text-blue-500">
          Product
        </Link>
        <Link href="/pricing" className="text-gray-800 hover:text-blue-500">
          Pricing
        </Link>
        <Link href="/faq" className="text-gray-800 hover:text-blue-500">
          FAQ
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <Link href="/signin" className="hidden md:block text-gray-800 hover:text-blue-500">
          Sign in
        </Link>
        <Link
          href="/demo"
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </header>
  );
};

export default Header;