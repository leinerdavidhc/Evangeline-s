import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedCloud from '@/components/baby-shower/AnimatedCloud';
import CountdownTimer from '@/components/baby-shower/CountdownTimer';
import EventDetails from '@/components/baby-shower/EventDetails';
import ImageWithRing from '@/components/baby-shower/ImageWithRing';

export default function BabyShowerPage() {
  
  const getTargetDate = () => {
    const now = new Date();
    let year = now.getFullYear();
    // Check if June 23rd of current year has passed
    // Month is 0-indexed, so June is 5. Day is 1-indexed.
    if (now.getMonth() > 5 || (now.getMonth() === 5 && now.getDate() > 23)) {
      year += 1; // If passed, use next year
    }
    return new Date(year, 5, 23, 16, 30, 0); // June is month 5, 4:30 PM
  };

  const targetDate = getTargetDate();
  const rsvpLink = "https://forms.gle/yourFormIdHere"; // Replace with actual Google Form link

  return (
    <div 
      className="relative flex flex-col items-center justify-start min-h-screen w-full text-center overflow-x-hidden animate-background-pan"
      style={{
        backgroundImage: 'linear-gradient(135deg, hsl(var(--background-start)), hsl(var(--background-mid1)), hsl(var(--background-mid2)), hsl(var(--background-end)))'
      }}
    >
      {/* Animated Clouds - positioned absolutely */}
      <AnimatedCloud className="top-[5%] left-[10%] opacity-50 scale-75 animation-delay-2000" style={{ animationDuration: '12s' }}/>
      <AnimatedCloud className="top-[15%] right-[5%] opacity-40 scale-90" style={{ animationDuration: '15s' }}/>
      <AnimatedCloud className="bottom-[20%] left-[5%] opacity-50" style={{ animationDuration: '10s', animationDelay: '1s' }}/>
      <AnimatedCloud className="bottom-[10%] right-[15%] opacity-40 scale-75 animation-delay-4000" style={{ animationDuration: '13s' }}/>
       <AnimatedCloud className="top-[60%] right-[2%] opacity-30 scale-50" style={{ animationDuration: '16s', animationDelay: '0.5s' }}/>


      <main className="relative z-10 flex flex-col items-center p-4 sm:p-8 max-w-3xl w-full">
        <header className="my-8 animate-fadeIn opacity-0">
          <h1 className="text-6xl sm:text-8xl font-dancing-script text-primary drop-shadow-lg">
            Baby Shower
          </h1>
        </header>

        <ImageWithRing />

        <section className="my-4 animate-fadeIn animation-delay-[900ms] opacity-0">
          <h2 className="text-7xl sm:text-9xl font-dancing-script text-primary drop-shadow-lg">
            Evangeline
          </h2>
        </section>

        <section className="my-6 animate-fadeIn animation-delay-[1200ms] opacity-0">
          <p className="text-3xl sm:text-4xl font-dancing-script text-foreground/90 leading-relaxed">
            Acompáñanos a celebrar la llegada de nuestra bebé
          </p>
        </section>

        {/* EventDetails now has its own animation-delay, parent container delay adjusted */}
        <div className="w-full animate-fadeIn animation-delay-[1500ms] opacity-0">
            <EventDetails />
        </div>
        
        <section className="my-8 w-full max-w-lg animate-fadeIn animation-delay-[1800ms] opacity-0">
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-2 border-white/50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.33168850490964!2d-72.91874614448462!3d11.529820003674528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b63002b9cb6ed%3A0x6d2b79a5796d2a30!2sClub%20Tayrona!5e0!3m2!1ses!2sco!4v1746749192745!5m2!1ses!2sco" 
              className="w-full h-full"
              style={{ border:0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Club Tayrona Location"
            ></iframe>
          </div>
        </section>

        <section className="my-4 w-full animate-fadeIn animation-delay-[2100ms] opacity-0">
          <CountdownTimer targetDate={targetDate} />
        </section>

        <section className="my-8 animate-fadeIn animation-delay-[2400ms] opacity-0">
          <Button 
            size="lg" 
            className="font-dancing-script text-3xl px-10 py-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-xl transform transition-transform hover:scale-110 active:scale-100"
            asChild
          >
            <a href={rsvpLink} target="_blank" rel="noopener noreferrer">
              Confirmar Asistencia
            </a>
          </Button>
        </section>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent/20 rounded-full animate-ping opacity-0 animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-secondary/30 rounded-full animate-ping opacity-0 animation-delay-4000 animation-duration-3000"></div>

      </main>
    </div>
  );
}
