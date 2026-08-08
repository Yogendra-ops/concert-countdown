import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarDay, FaClock, FaLocationDot } from 'react-icons/fa6';
import { CountdownCard } from './CountdownCard';
import { Celebration } from './Celebration';
import { EVENT_CONFIG } from '../config/event';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(EVENT_CONFIG.targetDate).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
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
        (difference / 1000 / 60) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false
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
        ease: 'easeOut'
      }}
      className="
        relative
        z-20
        w-full
        flex
        flex-col
        items-center
        justify-center
        lg:h-full
        px-2
      "
    >

      {/* Countdown Cards */}
      <div className="
        grid
        grid-cols-4
        gap-2
        sm:gap-4
        lg:gap-6
        w-full
        max-w-3xl
      ">

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
      <div className="
        mt-3
        sm:mt-4
        lg:mt-5
        glass-panel
        px-4
        py-3
        sm:px-7
        sm:py-3.5
        rounded-2xl
        border
        border-blue-100/70
        shadow-[0_8px_25px_rgba(60,80,150,0.08)]
        w-full
        max-w-3xl
        mx-auto
        flex
        flex-col
        sm:flex-row
        items-center
        justify-between
        gap-3
        sm:gap-5
      ">

        {/* Date & Day */}
        <div className="flex items-center gap-2.5">

          <div className="p-2 rounded-lg bg-purple-100 text-purple-600 text-sm">
            <FaCalendarDay />
          </div>

          <div className="text-left">
            <p className="text-[9px] text-[#6B7280] uppercase tracking-widest font-semibold">
              Date & Day
            </p>

            <p className="text-xs sm:text-sm font-bold text-[#111C3D] tracking-wide">
              {EVENT_CONFIG.displayDate}{' '}
              <span className="text-purple-600">
                ({EVENT_CONFIG.displayDay})
              </span>
            </p>
          </div>

        </div>

        <div className="hidden sm:block h-7 w-px bg-purple-200" />

        {/* Time */}
        <div className="flex items-center gap-2.5">

          <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 text-sm">
            <FaClock />
          </div>

          <div className="text-left">
            <p className="text-[9px] text-[#6B7280] uppercase tracking-widest font-semibold">
              Time
            </p>

            <p className="text-xs sm:text-sm font-bold text-[#111C3D] tracking-wide">
              {EVENT_CONFIG.displayTime}
            </p>
          </div>

        </div>

        <div className="hidden sm:block h-7 w-px bg-purple-200" />

        {/* Venue */}
        <div className="flex items-center gap-2.5">

          <div className="p-2 rounded-lg bg-blue-100 text-blue-600 text-sm">
            <FaLocationDot />
          </div>

          <div className="text-left">
            <p className="text-[9px] text-[#6B7280] uppercase tracking-widest font-semibold">
              Venue
            </p>

            <p className="text-xs sm:text-sm font-bold text-[#111C3D] tracking-wide">
              {EVENT_CONFIG.venueName}
            </p>
          </div>

        </div>

      </div>

    </motion.div>
  );
};