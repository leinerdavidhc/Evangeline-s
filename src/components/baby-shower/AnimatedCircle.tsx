
"use client";
import type React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCircleProps {
  className?: string;
  style?: React.CSSProperties;
  colorClass?: string; // e.g., "fill-primary", "fill-secondary/50"
  radius?: number; // Optional radius, defaults to 25
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ 
  className, 
  style, 
  colorClass = "fill-white/30", 
  radius = 25 
}) => {
  const viewBoxSize = radius * 2 + 4; // Add a little padding for potential stroke or effects
  return (
    <div
      className={cn(`absolute animate-float`, className)} // Removed drop-shadow-md as it might be too much for many small circles
      style={style}
      aria-hidden="true"
    >
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          cx={viewBoxSize / 2} 
          cy={viewBoxSize / 2} 
          r={radius} 
          className={cn(colorClass)} 
        />
      </svg>
    </div>
  );
};

export default AnimatedCircle;
