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
        flex
        items-center
        justify-center
        lg:justify-center
      "
    >

      {/* Aura */}
      <motion.div
        className="
          absolute
          w-[clamp(300px,48vw,780px)]
          lg:w-[clamp(380px,42vw,740px)]
          xl:w-[clamp(400px,40vw,720px)]
          2xl:w-[clamp(420px,38vw,700px)]
          aspect-square
          rounded-full
          pointer-events-none
        "
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(59,130,246,0.07) 45%, transparent 70%)',
          filter: 'blur(75px)',
        }}
        animate={{
          scale: [0.98, 1.04, 0.98],
          opacity: [0.5, 0.72, 0.5],
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
          h-full
          flex
          justify-center
          lg:justify-center
          min-w-0
          items-center
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
            h-full
            flex
            justify-center
            lg:justify-center
            items-center
          "
        >

          <img
            src={EVENT_CONFIG.singerImage}
            alt={EVENT_CONFIG.artistName}
            className="
              block
              w-auto
              max-w-[min(100%,820px)]
              lg:max-w-[min(100%,780px)]
              xl:max-w-[min(100%,740px)]
              2xl:max-w-[min(100%,720px)]
              h-auto
              max-h-[clamp(300px,60dvh,780px)]
              lg:max-h-[clamp(340px,55dvh,680px)]
              xl:max-h-[clamp(360px,52dvh,660px)]
              2xl:max-h-[clamp(380px,50dvh,640px)]
              min-h-[clamp(240px,42dvh,460px)]
              lg:min-h-[clamp(280px,40dvh,450px)]
              xl:min-h-[clamp(300px,38dvh,440px)]
              object-contain
              pointer-events-none
            "
            style={{
              borderRadius: '30px',
              filter:
                'drop-shadow(0 18px 42px rgba(70,80,150,0.17))',
            }}
            loading="eager"
          />

        </motion.div>
      </motion.div>

    </div>
  );
};