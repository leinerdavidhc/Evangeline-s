import Image from 'next/image';
import type React from 'react';

const ImageWithRing: React.FC = () => {
  return (
    <div className="my-8 flex justify-center items-center animate-fadeIn animation-delay-[600ms] opacity-0">
      <div className="relative p-2 w-52 h-52 sm:w-64 sm:h-64">
        {/* The Ring SVG */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full animate-spin-ring" // Uses new animation
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="48" // Radius of the circle, adjust for ring size relative to image
            fill="none"
            stroke="hsl(var(--primary))" // Use primary color for the ring
            strokeWidth="3" // Thickness of the ring
            strokeDasharray="3 7" // Creates a dotted ("bolitas") effect: 3 units dash, 7 units gap
            strokeLinecap="round" // Makes the dashes appear as dots
          />
        </svg>
        {/* The Image Container - no longer spins */}
        <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-xl relative z-10 bg-background"> 
          {/* Added bg-background to prevent image transparency issues if any */}
          <Image
            src="https://picsum.photos/seed/babyshower/300/300"
            alt="Baby Evangeline or Parents"
            width={300}
            height={300}
            className="object-cover w-full h-full"
            data-ai-hint="baby parents floral"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithRing;
