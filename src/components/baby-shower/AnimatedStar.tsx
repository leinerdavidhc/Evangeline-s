
"use client";
import type React from 'react';

interface AnimatedStarProps {
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedStar: React.FC<AnimatedStarProps> = ({ className, style }) => {
  return (
    <div
      className={`absolute animate-float ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70 drop-shadow-md"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.966-7.417 3.966 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
    </div>
  );
};

export default AnimatedStar;
