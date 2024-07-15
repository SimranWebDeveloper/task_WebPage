import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-08-11') - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
      const timerComponents = [];
     
    
      Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
          return;
        }    
        timerComponents.push(
          <div key={interval} className="flex flex-col items-center mx-1    ">
            <div className="text-xs text-gray-500 text-nowrap">{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
            <div className="text-4xl font-bold text-nowrap">{timeLeft[interval] }{interval!=="seconds" && <span className='text-red-500'> :</span>} </div>
          </div>
        );
      });
  return (
    <div className="w-full sm:w-1/2 flex ">
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
              </div>
  )
}
