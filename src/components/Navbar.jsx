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
        left-1/2
        -translate-x-1/2
        z-20
        w-screen
        pt-3
        pb-2
        shrink-0
      "
    >

      {/* =====================================================
          HCLTECH — TOP LEFT
         ===================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.6
        }}
        className="
          absolute
          top-5
          left-6
          sm:left-10
          md:left-12
          lg:left-14
          xl:left-16
          z-30
        "
      >
        <div className="flex items-center whitespace-nowrap">

          <span
            className="
              text-xl
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
              mx-2
              sm:mx-2.5
              md:mx-3
              lg:mx-3.5
              h-6
              sm:h-7
              md:h-8
              lg:h-9
              w-px
              bg-[#AAB4C8]
            "
          />

          <span
            className="
              text-[8px]
              sm:text-[9px]
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


      {/* =====================================================
          HCL 50 — TOP RIGHT
         ===================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.6
        }}
        className="
          absolute
          top-4
          right-6
          sm:right-10
          md:right-12
          lg:right-14
          xl:right-16
          z-30
        "
      >

        <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">

          {/* Anniversary Text */}
          <div
            className="
              hidden
              sm:flex
              flex-col
              items-end
              justify-center
              pr-4
              lg:pr-5
              border-r
              border-[#CBD2E1]
            "
          >
            <span
              className="
                text-[8px]
                md:text-[9px]
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
                md:text-[9px]
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
              h-16
              sm:h-18
              md:h-20
              lg:h-24
              xl:h-26
              w-auto
              object-contain
            "
          />

        </div>

      </motion.div>


      {/* =====================================================
          CENTER TITLE
         ===================================================== */}

      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          pt-2
          mx-auto
          w-fit
          max-w-[65vw]
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
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-heading
            tracking-wider
            uppercase
            font-bold
            text-gradient-hcl
            leading-none
            whitespace-nowrap
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
            text-[10px]
            sm:text-xs
            md:text-sm
            text-[#555F78]
            tracking-widest
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