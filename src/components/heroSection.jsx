// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// // HeroSection Component with animations
// export default function HeroSection() {
//   const [animationState, setAnimationState] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimationState(true);
//     }, 1000); // Trigger the animation after 1 second
//   }, []);

//   return (
//     <div className="h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col justify-center items-center text-white relative">
//       {/* Background animation */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-green-600 z-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2, ease: "easeInOut" }}
//       />

//       {/* Title Animation */}
//       <motion.h1
//         className="text-5xl md:text-7xl font-bold mb-6 z-10"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         Welcome to <span className="text-yellow-300">Srijan 2024</span>
//       </motion.h1>

//       {/* Subtitle Animation */}
//       <motion.p
//         className="text-xl mb-8 z-10"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         The Biggest Socio-Cultural Fest of IIT ISM Dhanbad
//       </motion.p>

//       {/* Button with hover animation */}
//       <motion.button
//         className="px-8 py-3 bg-yellow-300 text-purple-900 font-bold rounded-lg shadow-lg hover:scale-105 z-10"
//         whileHover={{ scale: 1.1 }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5, delay: 1 }}
//         onClick={() => window.scrollTo(0, window.innerHeight)}
//       >
//         Explore Now
//       </motion.button>

//       {/* Circle animation */}
//       {animationState && (
//         <motion.div
//           className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full animate-pulse z-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 2,
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />
//       )}
//     </div>
//   );
// }

// above one is just gradient with birthday type shower

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import Confetti from "react-confetti";
import { Particles } from "react-tsparticles"; // Install this library
import CountdownTimer from "./CountDown"; // Assuming CountdownTimer is in a separate file

export default function HeroSection() {
  const [animationState, setAnimationState] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  // Trigger snowfall animation on load
  useEffect(() => {
    setTimeout(() => {
      setAnimationState(true);
    }, 1000); // Start snowfall after 1 second
  }, []);

  // Handle button click for "Explore Now" to show the surprise
  const handleExploreClick = () => {
    setShowSurprise(true);
    setTimeout(() => {
      setShowArrow(true); // Show arrow after surprise
    }, 3000); // Show arrow after the celebration rain
  };

  // Handle scrolling to events page
  const handleScrollToEvents = () => {
    document
      .getElementsByClassName("event-page-container")[0]
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col justify-center items-center text-white relative overflow-hidden">
      {/* Intensive Snowfall Effect */}
      <Snowfall
        color="white"
        snowflakeCount={30000}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-green-600 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Title Animation */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to <span className="text-yellow-300">Srijan 2025</span>
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        className="text-xl mb-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        The Biggest Socio-Cultural Fest of IIT ISM Dhanbad
      </motion.p>

      {/* Countdown Timer */}
      <motion.div
        className="mb-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <CountdownTimer />
      </motion.div>

      {/* Button with hover animation */}
      <motion.button
        className="px-8 py-3 bg-yellow-300 text-purple-900 font-bold rounded-lg shadow-lg hover:scale-105 z-10"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        onClick={handleExploreClick}
      >
        Explore Now
      </motion.button>

      {/* Crackers and Celebration Effect */}
      {showSurprise && (
        <>
          {/* Cracker Burst Animation */}
          <Particles
            className="absolute top-0 left-0 w-full h-full z-20"
            params={{
              particles: {
                number: {
                  value: 100,
                  density: { enable: true, value_area: 800 },
                },
                shape: {
                  type: "circle",
                  stroke: { width: 0, color: "#000" },
                },
                color: { value: ["#FF5733", "#FFC300", "#DAF7A6", "#C70039"] },
                opacity: { value: 1, random: false },
                size: { value: 10, random: true },
                line_linked: { enable: false },
                move: { speed: 5, out_mode: "out" },
              },
            }}
          />

          {/* Gradient Explosion */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-600 to-yellow-600 z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Celebration Rain */}
          <Confetti />
        </>
      )}

      {/* Animated Arrow Button to Scroll to Events */}
      {showArrow && (
        <motion.div
          className="absolute bottom-10 z-30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <motion.div
            className="text-white text-3xl cursor-pointer"
            onClick={handleScrollToEvents}
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <b>↓</b>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
