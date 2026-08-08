import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaMusic, FaStar } from 'react-icons/fa6';


export const Celebration = () => {
  useEffect(() => {
    // Launch continuous confetti blasts
    const duration = 6 * 1000;
    const end = Date.now() + duration;
    let animationFrameId;
    let isActive = true;

    const frame = () => {
      if (!isActive) return;

      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#7B2AE8', '#8E3DFF', '#5C4DFF', '#2E6BFF', '#0072CE', '#FFD700']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#7B2AE8', '#8E3DFF', '#5C4DFF', '#2E6BFF', '#0072CE', '#FFD700']
      });

      if (Date.now() < end) {
        animationFrameId = requestAnimationFrame(frame);
      }
    };
    frame();

    return () => {
      isActive = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl glass-panel-glow border-2 border-purple-400/40 text-center max-w-2xl mx-auto my-4 shadow-[0_0_50px_rgba(142,61,255,0.6)]"
    >
      <div className="flex items-center gap-2 text-yellow-300 text-xl sm:text-2xl mb-2 animate-bounce">
        <FaStar />
        <span className="font-semibold tracking-wider text-xs sm:text-sm uppercase">Live Event Ongoing</span>
        <FaStar />
      </div>

      <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-wider uppercase text-gradient-gold drop-shadow-[0_0_30px_rgba(255,215,0,0.6)] my-2">
        THE SHOW HAS BEGUN
      </h2>

      <p className="text-sm sm:text-lg text-purple-100/90 font-medium max-w-lg mt-2">
        Welcome to an unforgettable musical experience with <span className="text-white font-bold">Sid Sriram</span>!
      </p>

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-500/40"
      >
        <FaMusic className="animate-spin text-lg" />
        <span>Performance in Progress</span>
      </motion.div>
    </motion.div>
  );
};
