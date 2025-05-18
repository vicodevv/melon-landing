import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"
import { ChevronRight, ArrowRight } from "lucide-react"

const Hero: React.FC = () => {
  return (
        <section className="py-16 md:py-24">
        <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="mx-auto max-w-4xl text-5xl font-regular tracking-tight text-gray-900 md:text-6xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
              Impact Measurement
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-[#5B94E5] bg-clip-text"
            >
              Beyond Borders
            </motion.span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We provide tools and services to help organizations optimize outcomes through effective data management.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              href="/demo"
              className="group relative overflow-hidden rounded-md bg-[#5B94E5] px-6 py-3 text-base font-medium text-white hover:bg-[#4A7ABF] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Sign up
                <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }}>
                  <ArrowRight size={18} />
                </motion.span>
              </span>
              <motion.span
                className="absolute inset-0 z-0 bg-blue-700 opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <Link
              href="https://melon.ng/signin"
              className="group rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 transition-all duration-300"
            >
              <span className="flex items-center">
                Sign in
                <motion.span
                  className="ml-2 opacity-0 group-hover:opacity-100"
                  initial={{ x: -5 }}
                  whileHover={{ x: 0 }}
                >
                  <ChevronRight size={18} />
                </motion.span>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
          </section>
  );
};

export default Hero;