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
        py-3
        sm:py-4
        md:py-5
        lg:py-4
        xl:py-5
      "
    >

      {/* BRANDING ROW */}
      <div
        className="
          w-full
          flex
          items-center
          justify-between
          gap-2.5
          sm:gap-4
          md:gap-6
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
                text-[clamp(1.2rem,3.4vw,2.75rem)]
                font-bold
                tracking-tight
                text-[#0072CE]
                whitespace-nowrap
              "
            >

            </span>

            <span
              className="
                mx-1.5
                sm:mx-2.5
                md:mx-3
                h-5
                sm:h-8
                md:h-9
                w-px
                bg-[#AAB4C8]
                shrink-0
              "
            />

            <span
              className="
                hidden
                sm:block
                text-[clamp(8px,0.9vw,14px)]
                font-medium
                text-[#555F78]
                whitespace-nowrap
              "
            >

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
                sm:flex
                md:flex
                flex-col
                items-end
                justify-center
                pr-2
                sm:pr-3
                md:pr-5
                mr-1.5
                sm:mr-2
                md:mr-4
                border-r
                border-[#CBD2E1]
              "
            >

              <span
                className="
                  text-[clamp(8px,0.8vw,11px)]
                  tracking-[0.22em]
                  sm:tracking-[0.25em]
                  text-[#111C3D]
                  font-bold
                  uppercase
                  leading-tight
                "
              >
                Celebrating
              </span>

              <span
                className="
                  text-[clamp(8px,0.8vw,11px)]
                  tracking-[0.15em]
                  sm:tracking-[0.18em]
                  text-[#555F78]
                  font-semibold
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
                h-[clamp(2.6rem,6.8vw,7rem)]
                w-auto
                object-contain
              "
            />

          </div>

        </motion.div>

      </div>

    </motion.header>
  );
};