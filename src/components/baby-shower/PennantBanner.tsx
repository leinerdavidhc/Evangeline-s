
"use client";

import type React from 'react';
import { cn } from '@/lib/utils';

interface PennantBannerProps {
  className?: string;
  style?: React.CSSProperties;
  pennantCount?: number;
  colors?: string[]; // Tailwind fill classes e.g., 'fill-primary'
  pennantWidth?: number;
  pennantHeight?: number;
  pennantSpacing?: number; // Spacing between the top edges of pennants
  stringY?: number; // Y-coordinate of the string's highest point (attachment points)
  stringCurve?: number; // How much the string curves down from its ends to the middle
  stringOverhang?: number; // How much the string extends horizontally beyond the first/last pennant attachment point
  stringStrokeWidth?: number;
  stringColorClass?: string;
}

const DefaultPennantColors = ['fill-primary', 'fill-secondary', 'fill-accent', 'fill-muted'];

const PennantBanner: React.FC<PennantBannerProps> = ({
  className,
  style,
  pennantCount = 6,
  colors = DefaultPennantColors,
  pennantWidth = 25,
  pennantHeight = 35,
  pennantSpacing = 5, 
  stringY = 10,
  stringCurve = 8,
  stringOverhang = 10,
  stringStrokeWidth = 2,
  stringColorClass = 'stroke-foreground/40',
}) => {
  // Distance between the center attachment points of adjacent pennants
  const distanceBetweenPennantCenters = pennantWidth + pennantSpacing;

  // Horizontal span from the center of the first pennant to the center of the last pennant
  const spanBetweenOuterPennantCenters = (pennantCount - 1) * distanceBetweenPennantCenters;

  // Total width required for the string, including overhangs
  const svgWidth = spanBetweenOuterPennantCenters + (2 * stringOverhang);
  
  // Total height for the SVG
  const svgHeight = stringY + stringCurve + pennantHeight + stringStrokeWidth;

  // String path: M x1 y1 Q cx cy x2 y2
  // x1 = 0 (relative to viewBox)
  // x2 = svgWidth (relative to viewBox)
  // cx = svgWidth / 2
  const stringPath = `M 0,${stringY} Q ${svgWidth / 2},${stringY + stringCurve} ${svgWidth},${stringY}`;

  return (
    <div className={cn("pointer-events-none", className)} style={style} aria-hidden="true">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm overflow-visible"
      >
        <path
          d={stringPath}
          className={cn(stringColorClass)}
          strokeWidth={stringStrokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        {Array.from({ length: pennantCount }).map((_, index) => {
          // xAttach is the X-coordinate where the center-top of the pennant attaches to the string
          const xAttach = stringOverhang + index * distanceBetweenPennantCenters;
          const color = colors[index % colors.length];
          
          // Pennant points relative to its attachment point (xAttach, stringY on the curved string)
          // For simplicity, we attach to the initial Y of the string here.
          // A more complex calculation would find the Y on the curve at xAttach.
          // However, for small curves, attaching to stringY is visually acceptable.
          const points = `M ${-pennantWidth / 2},0 L ${pennantWidth / 2},0 L 0,${pennantHeight} Z`;
          
          return (
            <g key={index} transform={`translate(${xAttach}, ${stringY})`}>
              <path d={points} className={cn(color)} />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PennantBanner;
