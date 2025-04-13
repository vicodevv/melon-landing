"use client";

import React from 'react';
import Image from 'next/image';

const BackgroundPattern = ({ children, className = "", patternPath = "/images/background-pattern.png" }: { children: React.ReactNode; className?: string; patternPath?: string; }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={patternPath} 
            alt="Background Pattern" 
            fill
            style={{ objectFit: 'cover' }}
            quality={90}
            priority
            className="opacity-20"
          />
        </div>
      </div>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundPattern;