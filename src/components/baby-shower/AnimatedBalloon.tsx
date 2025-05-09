
"use client";
import type React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBalloonProps {
  className?: string;
  style?: React.CSSProperties;
  colorClass?: string; // e.g., "fill-primary", "fill-secondary"
}

const AnimatedBalloon: React.FC<AnimatedBalloonProps> = ({ className, style, colorClass = "fill-white" }) => {
  // If using fill-white, we still want opacity to be controlled by the parent className
  // The overall SVG will have an opacity set via className (e.g., opacity-70)
  // The colorClass will determine the base fill color.
  return (
    <div
      className={`absolute animate-float ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        width="60"
        height="80"
        viewBox="0 0 60 80"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md" // Opacity will be handled by the passed 'className' prop to the div
      >
        <ellipse cx="30" cy="35" rx="28" ry="33" className={cn(colorClass)} />
        <path d="M25 68 Q30 75 35 68 L30 65 Z" className={cn(colorClass)} />
      </svg>
    </div>
  );
};

export default AnimatedBalloon;
