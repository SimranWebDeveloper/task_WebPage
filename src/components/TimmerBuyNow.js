

import React, { useEffect, useState } from 'react'

export const TimmerBuyNow = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-07-14') - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
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
          <div key={interval} className="w-16 h-16   flex flex-col items-center  bg-white rounded-full text-black me-4  ">
            <div className='flex flex-col items-center justify-center p-1'>
                <div className="text-2xl font-bold text-nowrap text-center">{timeLeft[interval] } </div>
                <div className="text-xs text-gray-500 text-nowrap">{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
            </div>
          </div>
        );
      });
  return (
    <div className="w-full  flex   ">
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
              </div>
  )
}

