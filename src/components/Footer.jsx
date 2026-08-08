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
      className="relative z-20 w-full pb-2 sm:pb-3 lg:pb-2 xl:pb-1.5 2xl:pb-1 pt-1 sm:pt-2 lg:pt-1 xl:pt-0.5 2xl:pt-0.5 px-2 sm:px-4 flex items-center justify-center text-center shrink-0"
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
        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-1.5 lg:mb-0.5 xl:mb-0.5">

          <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-transparent to-purple-300" />

          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500" />

          <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-transparent to-blue-300" />

        </div>

        {/* Tagline */}
        <span className="text-[10px] sm:text-[11px] md:text-sm lg:text-[13px] xl:text-[12px] 2xl:text-[12px] text-[#555F78] uppercase tracking-[0.2em] sm:tracking-[0.24em] font-bold">
          Celebrating 50 Years of Excellence
        </span>

      </motion.div>

    </motion.footer>
  );
};