"use client";

import type React from 'react';

interface AnimatedCloudProps {
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedCloud: React.FC<AnimatedCloudProps> = ({ className, style }) => {
  return (
    <div
      className={`absolute animate-float ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70 drop-shadow-md"
      >
        <circle cx="30" cy="50" r="20" />
        <circle cx="55" cy="40" r="25" />
        <circle cx="85" cy="50" r="20" />
        <rect y="60" width="120" height="20" rx="10"/>
      </svg>
    </div>
  );
};

export default AnimatedCloud;
