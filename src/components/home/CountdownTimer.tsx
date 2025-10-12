'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const futureTime = new Date('2025-12-31 23:59:59').getTime();

    const interval = setInterval(() => {
      const nowTime = new Date().getTime();
      const newTime = futureTime - nowTime;

      if (newTime < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(newTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((newTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((newTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((newTime % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center gap-4 font-semibold text-sm text-black">
      <div className="flex flex-col items-center justify-center bg-gray-300/20 border shadow-lg p-2 w-14 h-14 rounded-lg">
        <span className="text-lg font-bold">{timeLeft.days}</span>
        <span className="text-xs text-gray-600">Days</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-300/20 border shadow-lg p-2 w-14 h-14 rounded-lg">
        <span className="text-lg font-bold">{timeLeft.hours}</span>
        <span className="text-xs text-gray-600">Hours</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-300/20 border shadow-lg p-2 w-14 h-14 rounded-lg">
        <span className="text-lg font-bold">{timeLeft.minutes}</span>
        <span className="text-xs text-gray-600">Min</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-300/20 border shadow-lg p-2 w-14 h-14 rounded-lg">
        <span className="text-lg font-bold">{timeLeft.seconds}</span>
        <span className="text-xs text-gray-600">Sec</span>
      </div>
    </div>
  );
}