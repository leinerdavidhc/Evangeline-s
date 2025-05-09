import type React from 'react';

const EventDetails: React.FC = () => {
  return (
    <div className="my-6 w-full animate-fadeIn animation-delay-[1200ms] opacity-0">
      <div className="flex flex-row justify-center items-center text-center space-x-2 sm:space-x-4 text-sm sm:text-lg text-foreground font-list-script flex-nowrap overflow-x-auto py-2">
        <div className="flex flex-col items-center whitespace-nowrap">
          <span>4:30 PM</span>
        </div>
        <span className="text-primary text-xl sm:text-2xl opacity-50">|</span>
        <div className="flex flex-col items-center whitespace-nowrap">
          <span>23</span>
          <span className="text-xs sm:text-sm -mt-1">Junio</span>
        </div>
        <span className="text-primary text-xl sm:text-2xl opacity-50">|</span>
        <div className="flex flex-col items-center whitespace-nowrap">
          <span>Club Tayrona</span>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
