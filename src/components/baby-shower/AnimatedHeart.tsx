
"use client";
import type React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeartProps {
  className?: string;
  style?: React.CSSProperties;
  colorClass?: string; // e.g., "fill-primary", "fill-red-500/70"
  width?: number;
  height?: number;
}

const AnimatedHeart: React.FC<AnimatedHeartProps> = ({ 
  className, 
  style, 
  colorClass = "fill-red-500/70", // Default to a semi-transparent red
  width = 50, 
  height = 50 
}) => {
  return (
    <div
      className={cn(`absolute animate-float`, className)} // Added drop-shadow-sm for a subtle effect
      style={style}
      aria-hidden="true"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24" // Standard heart viewBox
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <path 
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          className={cn(colorClass)} 
        />
      </svg>
    </div>
  );
};

export default AnimatedHeart;
