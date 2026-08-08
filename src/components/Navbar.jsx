import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_CONFIG } from '../config/event';

export const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="
        relative
        z-20
        w-full
        shrink-0
        px-2
        sm:px-4
        lg:px-0
        pt-3
        pb-3
      "
    >

      {/* Top Branding Row */}
      <div className="w-full flex items-center justify-between gap-3">

        {/* HCLTech */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6
          }}
          className="shrink-0"
        >
          <div className="flex items-center whitespace-nowrap">

            <span
              className="
                text-lg
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                font-semibold
                tracking-tight
                text-[#0072CE]
              "
            >
              HCLTech
            </span>

            <span
              className="
                mx-1.5
                sm:mx-2.5
                md:mx-3
                lg:mx-3.5
                h-5
                sm:h-7
                md:h-8
                lg:h-9
                w-px
                bg-[#AAB4C8]
              "
            />

            <span
              className="
                hidden
                sm:block
                text-[8px]
                md:text-[10px]
                lg:text-xs
                font-normal
                text-[#555F78]
              "
            >
              Supercharging Progress™
            </span>

          </div>
        </motion.div>

        {/* HCL 50 */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6
          }}
          className="shrink-0"
        >
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">

            {/* Anniversary Text */}
            <div
              className="
                hidden
                md:flex
                flex-col
                items-end
                justify-center
                pr-3
                lg:pr-5
                border-r
                border-[#CBD2E1]
              "
            >
              <span
                className="
                  text-[8px]
                  lg:text-[10px]
                  tracking-[0.28em]
                  text-[#111C3D]
                  font-semibold
                  uppercase
                  leading-tight
                "
              >
                Celebrating
              </span>

              <span
                className="
                  text-[8px]
                  lg:text-[10px]
                  tracking-[0.22em]
                  text-[#555F78]
                  font-medium
                  uppercase
                  leading-tight
                  whitespace-nowrap
                "
              >
                50 Years of Excellence
              </span>
            </div>

            {/* HCL 50 Logo */}
            <motion.img
              whileHover={{ scale: 1.04 }}
              src={EVENT_CONFIG.logos.hcl50}
              alt="HCL 50 Years"
              className="
                h-10
                sm:h-14
                md:h-18
                lg:h-24
                xl:h-26
                w-auto
                object-contain
              "
            />

          </div>
        </motion.div>

      </div>

      {/* Center Title */}
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          w-full
          mt-5
          sm:mt-6
          lg:mt-3
          px-2
        "
      >

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6
          }}
          className="
            font-heading
            uppercase
            font-bold
            text-gradient-hcl
            leading-none
            tracking-wider
            text-[clamp(2rem,6vw,4.5rem)]
          "
        >
          {EVENT_CONFIG.eventTitle}
        </motion.h1>

        {/* Artist Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5
          }}
          className="
            mt-2
            text-[9px]
            sm:text-xs
            md:text-sm
            text-[#555F78]
            tracking-[0.15em]
            sm:tracking-widest
            uppercase
            font-light
          "
        >
          Featuring{' '}

          <span
            className="
              font-semibold
              text-[#111C3D]
              underline
              decoration-purple-400
              underline-offset-2
            "
          >
            {EVENT_CONFIG.artistName}
          </span>{' '}

          Live
        </motion.p>

      </div>

    </motion.header>
  );
};