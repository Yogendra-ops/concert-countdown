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
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        z-20
        w-full
        shrink-0
        pt-2
        sm:pt-3
        lg:pt-3
        pb-2
      "
    >

      {/* =====================================================
          BRANDING ROW
         ===================================================== */}

      <div
        className="
          w-full
          flex
          items-center
          justify-between
          gap-3
          sm:gap-5
        "
      >

        {/* HCLTech */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          className="shrink-0 min-w-0"
        >
          <div className="flex items-center">

            <span
              className="
                text-[clamp(1.1rem,3vw,2.25rem)]
                font-semibold
                tracking-tight
                text-[#0072CE]
                whitespace-nowrap
              "
            >
              HCLTech
            </span>

            <span
              className="
                mx-1.5
                sm:mx-2
                lg:mx-3
                h-5
                sm:h-7
                lg:h-8
                w-px
                bg-[#AAB4C8]
                shrink-0
              "
            />

            <span
              className="
                hidden
                sm:block
                text-[clamp(7px,0.8vw,12px)]
                font-normal
                text-[#555F78]
                whitespace-nowrap
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
            duration: 0.6,
          }}
          className="shrink-0"
        >

          <div className="flex items-center">

            {/* Anniversary text */}
            <div
              className="
                hidden
                md:flex
                flex-col
                items-end
                justify-center
                pr-3
                lg:pr-5
                mr-2
                lg:mr-4
                border-r
                border-[#CBD2E1]
              "
            >

              <span
                className="
                  text-[clamp(7px,0.7vw,10px)]
                  tracking-[0.25em]
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
                  text-[clamp(7px,0.7vw,10px)]
                  tracking-[0.18em]
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
                h-[clamp(2.4rem,6vw,6rem)]
                w-auto
                object-contain
              "
            />

          </div>

        </motion.div>

      </div>


      {/* =====================================================
          CENTER TITLE
         ===================================================== */}

      <div
        className="
          w-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          mt-[clamp(0.8rem,2vw,1.2rem)]
          px-1
        "
      >

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="
            font-heading
            uppercase
            font-bold
            text-gradient-hcl
            leading-none
            tracking-wide
            text-[clamp(2rem,6vw,4.5rem)]
            max-w-full
          "
        >
          {EVENT_CONFIG.eventTitle}
        </motion.h1>


        {/* Artist */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="
            mt-2
            text-[clamp(8px,1.2vw,14px)]
            text-[#555F78]
            tracking-[0.12em]
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