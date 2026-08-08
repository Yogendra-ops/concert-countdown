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
        max-w-3xl
        flex
        flex-col
        items-center
        justify-center
        px-0
      "
    >

      {/* Countdown Cards */}
      <div
        className="
          grid
          grid-cols-4
          gap-[clamp(0.4rem,1vw,1.25rem)]
          w-full
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
          mt-[clamp(0.75rem,1.5vw,1.5rem)]
          glass-panel
          px-[clamp(0.8rem,2vw,1.75rem)]
          py-[clamp(0.75rem,1.2vw,1rem)]
          rounded-[clamp(1rem,1.8vw,1.5rem)]
          border
          border-blue-100/70
          shadow-[0_8px_25px_rgba(60,80,150,0.08)]
          w-full
          flex
          flex-col
          sm:flex-row
          items-stretch
          sm:items-center
          justify-between
          gap-3
          sm:gap-5
        "
      >

        {/* Date */}
        <div className="flex items-center gap-2.5 min-w-0">

          <div className="p-2 rounded-lg bg-purple-100 text-purple-600 text-sm shrink-0">
            <FaCalendarDay />
          </div>

          <div className="text-left min-w-0">
            <p className="text-[9px] text-[#6B7280] uppercase tracking-widest font-semibold">
              Date & Day
            </p>

            <p className="text-[clamp(10px,1.2vw,14px)] font-bold text-[#111C3D] tracking-wide">
              {EVENT_CONFIG.displayDate}{' '}
              <span className="text-purple-600">
                ({EVENT_CONFIG.displayDay})
              </span>
            </p>
          </div>

        </div>


        <div className="hidden sm:block h-7 w-px bg-purple-200 shrink-0" />


        {/* Time */}
        <div className="flex items-center gap-2.5 min-w-0">

          <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 text-sm shrink-0">
            <FaClock />
          </div>

          <div className="text-left min-w-0">
            <p className="text-[9px] text-[#6B7280] uppercase tracking-widest font-semibold">
              Time
            </p>

            <p className="text-[clamp(10px,1.2vw,14px)] font-bold text-[#111C3D] tracking-wide">
              {EVENT_CONFIG.displayTime}
            </p>
          </div>

        </div>


        <div className="hidden sm:block h-7 w-px bg-purple-200 shrink-0" />


        {/* Venue */}
        <div className="flex items-center gap-2.5 min-w-0">

          <div className="p-2 rounded-lg bg-blue-100 text-blue-600 text-sm shrink-0">
            <FaLocationDot />
          </div>

          <div className="text-left min-w-0">
            <p className="text-[9px] text-[#6B7280] uppercase tracking-widest font-semibold">
              Venue
            </p>

            <p className="text-[clamp(10px,1.2vw,14px)] font-bold text-[#111C3D] tracking-wide">
              {EVENT_CONFIG.venueName}
            </p>
          </div>

        </div>

      </div>

    </motion.div>
  );
};