import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_CONFIG } from '../config/event';

export const Hero = () => {
  return (
    <div
      className="
        relative
        w-full
        flex
        items-center
        justify-center
      "
    >

      {/* Aura */}
      <motion.div
        className="
          absolute
          w-[clamp(260px,42vw,620px)]
          aspect-square
          rounded-full
          pointer-events-none
        "
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [0.98, 1.04, 0.98],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          w-full
          flex
          justify-center
          lg:justify-start
          min-w-0
        "
      >

        <motion.div
          animate={{
            y: [-4, 4, -4],
            scale: [1, 1.008, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            relative
            w-full
            flex
            justify-center
            lg:justify-start
          "
        >

          <img
            src={EVENT_CONFIG.singerImage}
            alt={EVENT_CONFIG.artistName}
            className="
              block
              w-auto
              max-w-[min(100%,650px)]
              h-auto
              max-h-[clamp(280px,55dvh,700px)]
              object-contain
              pointer-events-none
            "
            style={{
              borderRadius: '28px',
              filter:
                'drop-shadow(0 16px 32px rgba(70,80,150,0.14))',
            }}
            loading="eager"
          />

        </motion.div>
      </motion.div>

    </div>
  );
};