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
      className="
        relative
        z-20
        w-full
        shrink-0
        py-3
        sm:py-4
        lg:py-3
        flex
        items-center
        justify-center
        text-center
      "
    >

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
        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-1.5">

          <div className="h-px w-10 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-r from-transparent to-[#0072CE]/40" />

          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0072CE]/60" />

          <div className="h-px w-10 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-l from-transparent to-[#0072CE]/40" />

        </div>

        {/* Tagline */}
        <span className="
          text-[10px]
          sm:text-[11px]
          md:text-sm
          lg:text-[13px]
          text-[#555F78]
          uppercase
          tracking-[0.2em]
          sm:tracking-[0.24em]
          font-bold
        ">
          Celebrating 50 Years of Excellence
        </span>

      </motion.div>

    </motion.footer>
  );
};