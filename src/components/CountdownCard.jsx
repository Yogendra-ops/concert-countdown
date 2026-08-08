import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CountdownCard = ({ value, label }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isUpdating, setIsUpdating] = useState(false);

  const formattedValue = String(value).padStart(2, '0');

  useEffect(() => {
    if (value !== prevValue) {
      setIsUpdating(true);

      const timer = setTimeout(() => {
        setIsUpdating(false);
        setPrevValue(value);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.015 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        w-full
        aspect-square
        min-w-0
        p-[clamp(0.5rem,1vw,1.25rem)]
        sm:p-[clamp(0.6rem,1.2vw,1.5rem)]
        rounded-[clamp(0.75rem,1.5vw,1.5rem)]
        sm:rounded-[clamp(0.85rem,1.7vw,1.75rem)]
        glass-panel-glow
        border
        border-blue-200/50
        shadow-[0_8px_24px_rgba(60,80,150,0.10)]
        hover:shadow-[0_12px_32px_rgba(60,80,150,0.14)]
        transition-all
        duration-300
        overflow-hidden
      "
    >

      {/* Top highlight */}
      <div
        className="
          absolute
          top-0
          inset-x-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-blue-400/50
          to-transparent
        "
      />

      {/* Number */}
      <div
        className="
          relative
          w-full
          flex-1
          flex
          items-center
          justify-center
          overflow-hidden
          px-1
        "
      >

        <AnimatePresence mode="popLayout">

          <motion.span
            key={formattedValue}
            initial={{
              y: -14,
              opacity: 0,
              scale: 0.88,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: 14,
              opacity: 0,
              scale: 0.88,
            }}
            transition={{
              duration: 0.32,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`
              font-number
              text-[clamp(1.5rem,4.2vw,3.75rem)]
              sm:text-[clamp(1.6rem,4.6vw,4rem)]
              lg:text-[clamp(1.8rem,4.5vw,4rem)]
              xl:text-[clamp(1.9rem,3.8vw,3.75rem)]
              2xl:text-[clamp(2rem,3.4vw,3.6rem)]
              font-black
              tracking-tight
              leading-none
              ${isUpdating
                ? 'text-purple-600'
                : 'text-[#111C3D]'
              }
            `}
          >
            {formattedValue}
          </motion.span>

        </AnimatePresence>

      </div>

      {/* Label */}
      <span
        className="
          shrink-0
          mt-1
          sm:mt-1.5
          text-[clamp(8px,0.95vw,13px)]
          sm:text-[clamp(9px,1.05vw,15px)]
          font-semibold
          tracking-[0.16em]
          sm:tracking-[0.2em]
          uppercase
          text-[#555F78]
          group-hover:text-[#1769E8]
          transition-colors
          duration-300
        "
      >
        {label}
      </span>

      {/* Bottom accent */}
      <motion.div
        animate={{
          scaleX: isUpdating ? [1, 1.35, 1] : 1,
          opacity: isUpdating ? [0.55, 1, 0.55] : 0.65,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          shrink-0
          w-[clamp(1.5rem,2.8vw,3.5rem)]
          h-[2px]
          mt-1.5
          sm:mt-2
          rounded-full
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-purple-600
        "
      />

    </motion.div>
  );
};