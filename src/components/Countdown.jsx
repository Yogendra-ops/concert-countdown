import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarDay, FaClock, FaLocationDot } from 'react-icons/fa6';
import { CountdownCard } from './CountdownCard';
import { EVENT_CONFIG } from '../config/event';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(EVENT_CONFIG.targetDate).getTime();
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      });
    };

    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isExpired) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: 'easeOut',
      }}
      className="
        relative
        z-20
        w-full
        max-w-[52rem]
        sm:max-w-[56rem]
        md:max-w-[60rem]
        lg:max-w-[44rem]
        xl:max-w-[48rem]
        2xl:max-w-[52rem]
        flex
        flex-col
        items-center
        justify-center
        px-0
        gap-0
        min-w-0
        h-full
        min-h-0
      "
    >

      {/* Countdown Cards */}
      <div
        className="
          grid
          grid-cols-4
          w-full
          gap-[clamp(0.6rem,1.6vw,1.25rem)]
          sm:gap-[clamp(0.75rem,2vw,1.75rem)]
          md:gap-[clamp(0.9rem,2.4vw,2.25rem)]
          lg:gap-[clamp(1rem,2.6vw,2.5rem)]
          xl:gap-[clamp(1.1rem,2.8vw,3rem)]
        "
      >

        <CountdownCard
          value={timeLeft.days}
          label="Days"
        />

        <CountdownCard
          value={timeLeft.hours}
          label="Hours"
        />

        <CountdownCard
          value={timeLeft.minutes}
          label="Minutes"
        />

        <CountdownCard
          value={timeLeft.seconds}
          label="Seconds"
        />

      </div>


      {/* Event Details */}
      <div
        className="
          mt-[clamp(1.25rem,2.6vw,2rem)]
          sm:mt-[clamp(1.5rem,3vw,2.5rem)]
          md:mt-[clamp(1.75rem,3.4vw,2.75rem)]
          lg:mt-[clamp(1.1rem,1.9vw,1.6rem)]
          xl:mt-[clamp(1rem,1.6vw,1.5rem)]
          2xl:mt-[clamp(0.9rem,1.4vw,1.4rem)]
          glass-panel
          px-[clamp(1rem,2vw,1.5rem)]
          sm:px-[clamp(1.25rem,2.6vw,2rem)]
          md:px-[clamp(1.5rem,3vw,2.5rem)]
          lg:px-[clamp(1.1rem,2.2vw,2rem)]
          xl:px-[clamp(1rem,2vw,1.8rem)]
          py-[clamp(0.85rem,1.6vw,1.25rem)]
          sm:py-[clamp(1rem,1.9vw,1.5rem)]
          md:py-[clamp(1.1rem,2.1vw,1.75rem)]
          lg:py-[clamp(0.8rem,1.4vw,1.25rem)]
          xl:py-[clamp(0.75rem,1.2vw,1.15rem)]
          rounded-[clamp(0.9rem,1.8vw,1.5rem)]
          sm:rounded-[clamp(1rem,2vw,1.75rem)]
          border
          border-blue-100/60
          shadow-[0_8px_24px_rgba(60,80,150,0.08)]
          hover:shadow-[0_12px_36px_rgba(60,80,150,0.10)]
          transition-shadow
          duration-300
          w-full
          flex
          flex-col
          sm:flex-row
          items-stretch
          sm:items-center
          justify-between
          gap-3
          sm:gap-4
          md:gap-5
          lg:gap-4
          xl:gap-3.5
          2xl:gap-4
        "
      >

        {/* Date */}
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 min-w-0 flex-1">

          <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-purple-100 text-purple-600 text-sm sm:text-base md:text-lg shrink-0">
            <FaCalendarDay />
          </div>

          <div className="text-left min-w-0 flex-1">
            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-[#6B7280] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold sm:font-bold leading-none">
              Date & Day
            </p>

            <p className="
              mt-1
              text-[clamp(11px,1.3vw,15px)]
              sm:text-[clamp(12px,1.45vw,17px)]
              md:text-[clamp(13px,1.6vw,18px)]
              font-bold sm:font-extrabold
              text-[#111C3D]
              tracking-wide
              leading-tight
            ">
              {EVENT_CONFIG.displayDate}{' '}
              <span className="text-purple-600">
                ({EVENT_CONFIG.displayDay})
              </span>
            </p>
          </div>

        </div>


        <div className="hidden sm:block h-8 sm:h-9 md:h-10 w-px bg-purple-200/80 shrink-0" />


        {/* Time */}
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 min-w-0 flex-1">

          <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-indigo-100 text-indigo-600 text-sm sm:text-base md:text-lg shrink-0">
            <FaClock />
          </div>

          <div className="text-left min-w-0 flex-1">
            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-[#6B7280] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold sm:font-bold leading-none">
              Time
            </p>

            <p className="
              mt-1
              text-[clamp(11px,1.3vw,15px)]
              sm:text-[clamp(12px,1.45vw,17px)]
              md:text-[clamp(13px,1.6vw,18px)]
              font-bold sm:font-extrabold
              text-[#111C3D]
              tracking-wide
              leading-tight
            ">
              {EVENT_CONFIG.displayTime}
            </p>
          </div>

        </div>


        <div className="hidden sm:block h-8 sm:h-9 md:h-10 w-px bg-purple-200/80 shrink-0" />


        {/* Venue */}
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 min-w-0 flex-1">

          <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-blue-100 text-blue-600 text-sm sm:text-base md:text-lg shrink-0">
            <FaLocationDot />
          </div>

          <div className="text-left min-w-0 flex-1">
            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-[#6B7280] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold sm:font-bold leading-none">
              Venue
            </p>

            <p className="
              mt-1
              text-[clamp(11px,1.3vw,15px)]
              sm:text-[clamp(12px,1.45vw,17px)]
              md:text-[clamp(13px,1.6vw,18px)]
              font-bold sm:font-extrabold
              text-[#111C3D]
              tracking-wide
              leading-tight
            ">
              {EVENT_CONFIG.venueName}
            </p>
          </div>

        </div>

      </div>

    </motion.div>
  );
};