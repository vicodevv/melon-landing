import React from 'react';

interface GridBackgroundProps {
  children: React.ReactNode;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* SVG Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 900" 
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {/* Horizontal Lines */}
          {/* Top horizontal line */}
          <line x1="0" y1="160" x2="148" y2="160" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="172" y1="160" x2="378" y2="160" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="402" y1="160" x2="608" y2="160" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="632" y1="160" x2="838" y2="160" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="862" y1="160" x2="1068" y2="160" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="1092" y1="160" x2="1440" y2="160" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          
          {/* Second horizontal line */}
          <line x1="0" y1="390" x2="148" y2="390" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="172" y1="390" x2="378" y2="390" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="402" y1="390" x2="608" y2="390" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="632" y1="390" x2="838" y2="390" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="862" y1="390" x2="1068" y2="390" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="1092" y1="390" x2="1440" y2="390" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          
          {/* Third horizontal line */}
          <line x1="0" y1="620" x2="148" y2="620" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="172" y1="620" x2="378" y2="620" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="402" y1="620" x2="608" y2="620" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="632" y1="620" x2="838" y2="620" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="862" y1="620" x2="1068" y2="620" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="1092" y1="620" x2="1440" y2="620" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          
          {/* Bottom horizontal line */}
          <line x1="0" y1="850" x2="148" y2="850" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="172" y1="850" x2="378" y2="850" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="402" y1="850" x2="608" y2="850" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="632" y1="850" x2="838" y2="850" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="862" y1="850" x2="1068" y2="850" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="1092" y1="850" x2="1440" y2="850" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          
          {/* Vertical Lines */}
          {/* Leftmost vertical line */}
          <line x1="160" y1="0" x2="160" y2="148" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="160" y1="172" x2="160" y2="378" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="160" y1="402" x2="160" y2="608" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="160" y1="632" x2="160" y2="838" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="160" y1="862" x2="160" y2="900" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          
          {/* Second vertical line */}
          <line x1="390" y1="0" x2="390" y2="148" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="390" y1="172" x2="390" y2="378" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="390" y1="402" x2="390" y2="608" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="390" y1="632" x2="390" y2="838" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="390" y1="862" x2="390" y2="900" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          
          {/* Third vertical line */}
          <line x1="620" y1="0" x2="620" y2="148" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="620" y1="172" x2="620" y2="378" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="620" y1="402" x2="620" y2="608" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="620" y1="632" x2="620" y2="838" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="620" y1="862" x2="620" y2="900" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          
          {/* Fourth vertical line */}
          <line x1="850" y1="0" x2="850" y2="148" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="850" y1="172" x2="850" y2="378" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="850" y1="402" x2="850" y2="608" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="850" y1="632" x2="850" y2="838" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="850" y1="862" x2="850" y2="900" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          
          {/* Rightmost vertical line */}
          <line x1="1080" y1="0" x2="1080" y2="148" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="1080" y1="172" x2="1080" y2="378" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="1080" y1="402" x2="1080" y2="608" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="1080" y1="632" x2="1080" y2="838" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          <line x1="1080" y1="862" x2="1080" y2="900" stroke="rgba(229, 231, 235, 0.2)" strokeWidth="1" />
          
          {/* Large Corner Circles */}
          <circle cx="0" cy="0" r="12" fill="white" stroke="rgba(229, 231, 235, 0.5)" strokeWidth="0.5" />
          <circle cx="1440" cy="0" r="12" fill="white" stroke="rgba(229, 231, 235, 0.5)" strokeWidth="0.5" />
          <circle cx="0" cy="850" r="12" fill="white" stroke="rgba(229, 231, 235, 0.5)" strokeWidth="0.5" />
          <circle cx="1440" cy="850" r="12" fill="white" stroke="rgba(229, 231, 235, 0.5)" strokeWidth="0.5" />
          
          {/* Small Grid Intersection Circles */}
          {/* Top row */}
          <circle cx="160" cy="0" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="390" cy="0" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="620" cy="0" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="850" cy="0" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="1080" cy="0" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          
          {/* First row */}
          <circle cx="0" cy="160" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="160" cy="160" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="390" cy="160" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="620" cy="160" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="850" cy="160" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="1080" cy="160" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="1440" cy="160" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          
          {/* Second row */}
          <circle cx="0" cy="390" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="160" cy="390" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="390" cy="390" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="620" cy="390" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="850" cy="390" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="1080" cy="390" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="1440" cy="390" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          
          {/* Third row */}
          <circle cx="0" cy="620" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="160" cy="620" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="390" cy="620" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="620" cy="620" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="850" cy="620" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="1080" cy="620" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="1440" cy="620" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          
          {/* Bottom row */}
          <circle cx="160" cy="850" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="390" cy="850" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="620" cy="850" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="850" cy="850" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
          <circle cx="1080" cy="850" r="2" fill="white" stroke="rgba(229, 231, 235, 0.4)" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;