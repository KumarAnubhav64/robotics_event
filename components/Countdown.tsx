'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const targetDate = new Date('2026-03-14T10:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {units.map((unit) => (
        <div key={unit.label} className="relative group">
          {/* Decorative Corner Accents */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-blue-500/50" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blue-500/50" />

          <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-900 px-4 py-3 md:px-8 md:py-6 text-center min-w-[80px] md:min-w-[120px]">
            <div className="text-3xl md:text-5xl font-black text-white font-accent tracking-tighter glow-text">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-blue-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-2 opacity-70">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
