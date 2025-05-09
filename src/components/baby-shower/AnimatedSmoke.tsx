
"use client";
import type React from 'react';

interface AnimatedSmokeProps {
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedSmoke: React.FC<AnimatedSmokeProps> = ({ className, style }) => {
  return (
    <div
      className={`absolute animate-float ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        width="100"
        height="70"
        viewBox="0 0 100 70"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm" // Default opacity can be overridden by className prop
      >
        {/* Using a group to apply a base fill and opacity that can be overridden if needed by parent styles */}
        <g fill="white" opacity="0.6"> 
          <circle cx="20" cy="50" r="15" opacity="0.7"/>
          <circle cx="40" cy="35" r="25" opacity="0.8"/>
          <circle cx="65" cy="45" r="20" opacity="0.75"/>
          <circle cx="80" cy="55" r="12" opacity="0.6"/>
          <ellipse cx="50" cy="55" rx="30" ry="15" opacity="0.65" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSmoke;
