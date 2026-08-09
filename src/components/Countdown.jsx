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
        delay: 0.3,
        duration: 0.8,
        ease: 'easeOut',
      }}
      className="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        px-4
        sm:px-6
        lg:px-8
        xl:px-10
        py-6
        sm:py-8
        lg:py-6
      "
    >

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mb-4 sm:mb-6 lg:mb-5"
      >
        <h1
          className="
            font-heading
            uppercase
            font-black
            leading-[0.95]
            tracking-[0.03em]
            sm:tracking-wide
            text-[clamp(1.8rem,4.5vw,3.8rem)]
            sm:text-[clamp(2rem,4vw,3.5rem)]
            lg:text-[clamp(2.2rem,3.5vw,3.8rem)]
          "
        >
          <span className="text-[#111C3D]">Concert </span>
          <span className="text-[#0072CE]">Countdown</span>
        </h1>

        <p
          className="
            mt-1
            sm:mt-2
            text-[clamp(9px,1.2vw,14px)]
            sm:text-[clamp(10px,1.3vw,15px)]
            text-[#555F78]
            tracking-[0.14em]
            sm:tracking-[0.2em]
            uppercase
            font-medium
          "
        >
          Featuring{' '}
          <span className="font-bold text-[#111C3D]">
            {EVENT_CONFIG.artistName}
          </span>{' '}
          Live
        </p>
      </motion.div>

      {/* Countdown Cards */}
      <div
        className="
          grid
          grid-cols-4
          w-full
          max-w-[500px]
          gap-3
          sm:gap-4
          lg:gap-5
        "
      >
        <CountdownCard value={timeLeft.days} label="Days" />
        <CountdownCard value={timeLeft.hours} label="Hours" />
        <CountdownCard value={timeLeft.minutes} label="Minutes" />
        <CountdownCard value={timeLeft.seconds} label="Seconds" />
      </div>

      {/* Event Details */}
      <div
        className="
          mt-5
          sm:mt-6
          lg:mt-7
          w-full
          max-w-[520px]
          flex
          flex-col
          sm:flex-row
          items-stretch
          sm:items-center
          justify-center
          gap-3
          sm:gap-3
          lg:gap-4
        "
      >

        {/* Date */}
        <div
          className="
            flex
            items-center
            gap-2.5
            bg-white/80
            border
            border-[#0072CE]/15
            rounded-xl
            px-3
            sm:px-4
            py-2.5
            sm:py-3
            flex-1
            shadow-[0_2px_8px_rgba(0,114,206,0.06)]
          "
        >
          <div className="p-2 rounded-lg bg-[#0072CE]/10 text-[#0072CE] text-sm shrink-0">
            <FaCalendarDay />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[8px] sm:text-[9px] text-[#6B7280] uppercase tracking-[0.18em] font-semibold leading-none">
              Date & Day
            </p>
            <p className="mt-0.5 text-[clamp(10px,1.1vw,13px)] font-bold text-[#111C3D] leading-tight">
              {EVENT_CONFIG.displayDate}
              <br />
              <span className="text-[#0072CE]">
                ({EVENT_CONFIG.displayDay})
              </span>
            </p>
          </div>
        </div>


        {/* Time */}
        <div
          className="
            flex
            items-center
            gap-2.5
            bg-white/80
            border
            border-[#0072CE]/15
            rounded-xl
            px-3
            sm:px-4
            py-2.5
            sm:py-3
            flex-1
            shadow-[0_2px_8px_rgba(0,114,206,0.06)]
          "
        >
          <div className="p-2 rounded-lg bg-[#0072CE]/10 text-[#0072CE] text-sm shrink-0">
            <FaClock />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[8px] sm:text-[9px] text-[#6B7280] uppercase tracking-[0.18em] font-semibold leading-none">
              Time
            </p>
            <p className="mt-0.5 text-[clamp(10px,1.1vw,13px)] font-bold text-[#111C3D] leading-tight">
              {EVENT_CONFIG.displayTime}
            </p>
          </div>
        </div>


        {/* Venue */}
        <div
          className="
            flex
            items-center
            gap-2.5
            bg-white/80
            border
            border-[#0072CE]/15
            rounded-xl
            px-3
            sm:px-4
            py-2.5
            sm:py-3
            flex-1
            shadow-[0_2px_8px_rgba(0,114,206,0.06)]
          "
        >
          <div className="p-2 rounded-lg bg-[#0072CE]/10 text-[#0072CE] text-sm shrink-0">
            <FaLocationDot />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[8px] sm:text-[9px] text-[#6B7280] uppercase tracking-[0.18em] font-semibold leading-none">
              Venue
            </p>
            <p className="mt-0.5 text-[clamp(10px,1.1vw,13px)] font-bold text-[#111C3D] leading-tight">
              {EVENT_CONFIG.venueName}
            </p>
          </div>
        </div>

      </div>

    </motion.div>
  );
};