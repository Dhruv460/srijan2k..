// import { useState, useEffect } from "react";

// export default function Countdown() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const eventDate = new Date("2024-03-10T00:00:00").getTime();
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = eventDate - now;

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor(
//           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         ),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-black text-white text-center py-12">
//       <h2 className="text-3xl font-bold mb-4">Countdown to Srijan 2024</h2>
//       <div className="flex justify-center space-x-4 text-xl">
//         <div>
//           <span className="block text-yellow-300">{timeLeft.days}</span> Days
//         </div>
//         <div>
//           <span className="block text-yellow-300">{timeLeft.hours}</span> Hours
//         </div>
//         <div>
//           <span className="block text-yellow-300">{timeLeft.minutes}</span>{" "}
//           Minutes
//         </div>
//         <div>
//           <span className="block text-yellow-300">{timeLeft.seconds}</span>{" "}
//           Seconds
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { calculateTimeLeft } from "../utils/dateUtils";
import TimeUnit from "./TimeUnit.jsx";

const targetDate = new Date("2025-01-21T00:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center animate-slide-up animation-delay-200 mb-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
//make the event page for displaying events in the form of beaytiful cards with the event image and on clicking toggles to show short  descriptioin and other event details and as the back side is clicked it should open that event in the new page with compelete description and event detalis all these things should be animatd and should produce the expression of wow on the face of user also when that arrow button came after clicking on explore
