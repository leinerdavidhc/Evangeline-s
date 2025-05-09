import Image from 'next/image';
import type React from 'react';

const ImageWithRing: React.FC = () => {
  return (
    <div className="my-8 flex justify-center items-center animate-fadeIn animation-delay-[600ms] opacity-0">
      <div className="relative p-1"> {/* Adjusted padding for better visual on rotation */}
        <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-300 hover:scale-105 animate-spin-slow">
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