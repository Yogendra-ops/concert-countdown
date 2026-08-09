import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_CONFIG } from '../config/event';

export const Hero = () => {
  return (
    <div
      className="
        relative
        w-full
        h-full
        overflow-hidden
      "
      style={{
        background: 'linear-gradient(160deg, #0072CE 0%, #1769E8 35%, #2E7BF6 65%, #4A90F7 100%)',
      }}
    >

      {/* Singer Image — fills panel, anchored to top */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          inset-0
          z-[5]
          flex
          items-center
          justify-center
        "
      >
        <img
          src={EVENT_CONFIG.singerImage}
          alt={EVENT_CONFIG.artistName}
          className="
            block
            w-full
            h-full
            object-cover
            object-top
            pointer-events-none
          "
          style={{
            filter: 'drop-shadow(0 8px 30px rgba(0,0,0,0.3))',
          }}
          loading="eager"
        />
      </motion.div>

      {/* Dark gradient at bottom for text readability */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%] z-[8] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,60,150,0.75) 0%, rgba(0,60,150,0.3) 50%, transparent 100%)',
        }}
      />

      {/* Concert Name Overlay — positioned within card bounds */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.7,
        }}
        className="
          absolute
          bottom-4
          sm:bottom-5
          lg:bottom-6
          left-4
          sm:left-5
          lg:left-6
          z-[10]
          pointer-events-none
        "
      >
        <h2
          className="
            font-heading
            uppercase
            text-white
            leading-[0.95]
            tracking-wide
            text-[clamp(1.4rem,3.2vw,2.6rem)]
            lg:text-[clamp(1.6rem,2.6vw,2.8rem)]
          "
          style={{
            textShadow: '0 2px 12px rgba(0,0,0,0.5), 0 0 40px rgba(0,50,150,0.4)',
          }}
        >
          {EVENT_CONFIG.artistName}
        </h2>
        <h3
          className="
            font-heading
            uppercase
            text-white/95
            leading-[1]
            tracking-[0.08em]
            text-[clamp(0.9rem,1.8vw,1.5rem)]
            lg:text-[clamp(1rem,1.5vw,1.6rem)]
          "
          style={{
            textShadow: '0 2px 12px rgba(0,0,0,0.5), 0 0 40px rgba(0,50,150,0.4)',
          }}
        >
          Live Concert
        </h3>
      </motion.div>

    </div>
  );
};