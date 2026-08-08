import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaExpand,
  FaCompress
} from 'react-icons/fa6';

export const DisplayControls = () => {

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {

    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!(
          document.fullscreenElement ||
          document.webkitFullscreenElement
        )
      );
    };

    document.addEventListener(
      'fullscreenchange',
      handleFullscreenChange
    );

    document.addEventListener(
      'webkitfullscreenchange',
      handleFullscreenChange
    );

    return () => {

      document.removeEventListener(
        'fullscreenchange',
        handleFullscreenChange
      );

      document.removeEventListener(
        'webkitfullscreenchange',
        handleFullscreenChange
      );

    };

  }, []);


  const toggleFullscreen = async () => {

    try {

      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement
      ) {

        const docEl = document.documentElement;

        if (docEl.requestFullscreen) {
          await docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullscreen) {
          await docEl.webkitRequestFullscreen();
        }

      } else {

        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        }

      }

    } catch (err) {

      console.warn(
        'Fullscreen toggle restricted by browser permissions:',
        err
      );

    }

  };


  return (

    <div
      className="
        fixed
        top-4
        right-4
        sm:top-5
        sm:right-5
        md:top-6
        md:right-6
        lg:top-7
        lg:right-7
        z-[100]
      "
    >

      {/* Fullscreen Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleFullscreen}
        title={
          isFullscreen
            ? 'Exit Fullscreen'
            : 'Enter Fullscreen'
        }
        aria-label={
          isFullscreen
            ? 'Exit Fullscreen'
            : 'Enter Fullscreen'
        }
        className="
          flex
          items-center
          justify-center
          w-10
          h-10
          sm:w-11
          sm:h-11
          rounded-full
          bg-white/90
          backdrop-blur-md
          border
          border-slate-200
          text-[#111C3D]
          shadow-[0_4px_15px_rgba(50,70,130,0.12)]
          hover:bg-white
          transition-all
          cursor-pointer
        "
      >

        {isFullscreen ? (
          <FaCompress className="text-sm sm:text-base text-purple-600" />
        ) : (
          <FaExpand className="text-sm sm:text-base text-slate-500" />
        )}

      </motion.button>

    </div>

  );
};