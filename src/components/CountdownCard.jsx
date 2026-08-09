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
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        w-full
        py-3
        sm:py-4
        lg:py-5
        px-2
        sm:px-3
        rounded-xl
        sm:rounded-2xl
        bg-white/70
        border-2
        border-[#0072CE]/25
        hover:border-[#0072CE]/50
        shadow-[0_4px_16px_rgba(0,114,206,0.08)]
        hover:shadow-[0_8px_24px_rgba(0,114,206,0.14)]
        transition-all
        duration-300
        overflow-hidden
      "
    >

      {/* Number */}
      <div className="relative flex items-center justify-center overflow-hidden">
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
              text-[clamp(1.6rem,4vw,3.2rem)]
              sm:text-[clamp(1.8rem,3.5vw,3rem)]
              lg:text-[clamp(2rem,3vw,3.2rem)]
              font-black
              tracking-tight
              leading-none
              ${isUpdating
                ? 'text-[#0072CE]'
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
          mt-1
          sm:mt-1.5
          text-[clamp(7px,0.85vw,12px)]
          sm:text-[clamp(8px,0.95vw,13px)]
          font-semibold
          tracking-[0.16em]
          sm:tracking-[0.2em]
          uppercase
          text-[#555F78]
        "
      >
        {label}
      </span>

    </motion.div>
  );
};