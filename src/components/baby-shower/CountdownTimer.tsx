"use client";

import { useState, useEffect } from 'react';
import type React from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Calculate initial time left on client mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  if (timeLeft === null) {
    // Placeholder for server render or initial client render before hydration
    return (
      <div className="flex justify-center items-center space-x-2 sm:space-x-4 my-8 text-center w-full flex-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-2 sm:p-4 bg-white/30 rounded-lg shadow-md backdrop-blur-sm min-w-[60px] sm:min-w-[80px]">
            <div className="text-2xl sm:text-4xl font-bold text-primary animate-pulse">--</div>
            <div className="text-xs sm:text-sm uppercase text-foreground/80">Loading</div>
          </div>
        ))}
      </div>
    );
  }
  
  const timerComponents = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center items-stretch space-x-2 sm:space-x-3 my-8 text-center w-full flex-nowrap max-w-md mx-auto px-2">
      {timerComponents.map((component, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-2 py-3 sm:p-3 bg-white/30 rounded-lg shadow-md backdrop-blur-sm flex-1 min-w-[calc(25%-0.75rem)] aspect-[3/4] sm:aspect-square"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <span className="text-xl sm:text-3xl font-bold text-primary tabular-nums">
            {component.value < 10 ? `0${component.value}` : component.value}
          </span>
          <span className="text-[0.6rem] sm:text-xs uppercase text-foreground/80 mt-1">
            {component.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
