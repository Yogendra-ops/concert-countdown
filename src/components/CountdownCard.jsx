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
      whileHover={{ y: -4, scale: 1.02 }}
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
        min-w-0
        p-[clamp(0.45rem,1.2vw,1.4rem)]
        min-h-[clamp(90px,11vw,180px)]
        rounded-[clamp(0.75rem,1.5vw,1.5rem)]
        glass-panel-glow
        border
        border-blue-200/60
        shadow-[0_10px_30px_rgba(60,80,150,0.10)]
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
          h-[clamp(42px,6vw,80px)]
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >

        <AnimatePresence mode="popLayout">

          <motion.span
            key={formattedValue}
            initial={{
              y: -16,
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: 16,
              opacity: 0,
              scale: 0.85,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`
              font-number
              text-[clamp(2rem,4.5vw,4.5rem)]
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
          mt-1
          text-[clamp(7px,0.9vw,14px)]
          font-semibold
          tracking-[0.12em]
          sm:tracking-[0.22em]
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
          scaleX: isUpdating ? [1, 1.4, 1] : 1,
          opacity: isUpdating ? [0.6, 1, 0.6] : 0.7,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          w-[clamp(1.8rem,3vw,4rem)]
          h-[2px]
          mt-2
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