import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 text-center md:px-6">
              <h1 className="mx-auto max-w-4xl text-5xl font-regular tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Impact Measurement
                <br />
                Beyond Borders
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                We provide tools and services to help organizations optimize outcomes through effective data management.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/demo"
                  className="rounded-md bg-[#5B94E5] px-6 py-3 text-base font-medium text-white hover:bg-[#4A7ABF]"
                >
                  Book a demo
                </Link>
                <Link
                  href="/signin"
                  className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-800 hover:bg-gray-50"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </section>
  );
};

export default Hero;