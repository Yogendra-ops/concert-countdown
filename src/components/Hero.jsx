import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_CONFIG } from '../config/event';

export const Hero = () => {
  return (
    <div className="relative w-full flex items-center justify-center">

      {/* Soft lavender-blue aura behind the image */}
      <motion.div
        className="absolute w-[360px] sm:w-[450px] md:w-[540px] lg:w-[620px] h-[360px] sm:h-[450px] md:h-[540px] lg:h-[620px] rounded-full pointer-events-none"
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

      {/* Singer image wrapper */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex justify-center lg:justify-start w-full max-w-[650px]"
      >

        {/* Gentle floating animation */}
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
          className="relative w-full flex justify-center lg:justify-start"
        >

          {/* Singer Image */}
          <img
            src={EVENT_CONFIG.singerImage}
            alt={EVENT_CONFIG.artistName}
            className="w-auto max-w-full h-auto max-h-[62vh] sm:max-h-[70vh] md:max-h-[76vh] lg:max-h-[82vh] object-contain pointer-events-none transition-all duration-300"
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