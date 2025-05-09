import type React from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <div className="my-8 w-full max-w-lg mx-auto animate-fadeIn animation-delay-[1200ms] opacity-0 px-4 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center p-4 bg-white/40 dark:bg-black/20 rounded-xl shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-xl">
          <CalendarDays className="w-10 h-10 text-primary mb-3" strokeWidth={1.5} />
          <h3 className="text-3xl text-primary mb-1">Fecha</h3>
          <p className="text-xl text-foreground/90">23 de Junio</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white/40 dark:bg-black/20 rounded-xl shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-xl">
          <Clock className="w-10 h-10 text-primary mb-3" strokeWidth={1.5} />
          <h3 className="text-3xl text-primary mb-1">Hora</h3>
          <p className="text-xl text-foreground/90">4:30 PM</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white/40 dark:bg-black/20 rounded-xl shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-xl">
          <MapPin className="w-10 h-10 text-primary mb-3" strokeWidth={1.5} />
          <h3 className="text-3xl text-primary mb-1">Lugar</h3>
          <p className="text-xl text-foreground/90">Club Tayrona</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
