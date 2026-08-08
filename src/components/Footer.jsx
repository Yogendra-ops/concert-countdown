import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.6,
        ease: 'easeOut'
      }}
      className="relative z-20 w-full pb-3 pt-2 px-4 flex items-center justify-center text-center shrink-0"
    >

      {/* Celebration Footer */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
        className="flex flex-col items-center justify-center"
      >

        {/* Decorative Line */}
        <div className="flex items-center gap-3 mb-1.5">

          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-purple-300" />

          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />

          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-blue-300" />

        </div>

        {/* Tagline */}
        <span className="text-[9px] sm:text-[10px] md:text-xs text-[#555F78] uppercase tracking-[0.22em] font-semibold">
          Celebrating 50 Years of Excellence
        </span>

      </motion.div>

    </motion.footer>
  );
};