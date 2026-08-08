import React from 'react';
import { motion } from 'framer-motion';

export const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Base light background */}
      <div className="absolute inset-0 bg-[#F8F9FF]" />

      {/* Soft HCL Blue Glow - Top Right */}
      <motion.div
        className="absolute -top-[20%] -right-[15%] w-[750px] h-[750px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(46,107,255,0.16) 0%, rgba(0,114,206,0.08) 40%, transparent 72%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.08, 0.96, 1],
          opacity: [0.7, 1, 0.8, 0.7],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Soft Purple Glow - Top Left */}
      <motion.div
        className="absolute -top-[15%] -left-[15%] w-[700px] h-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(142,61,255,0.14) 0%, rgba(123,42,232,0.07) 42%, transparent 72%)',
          filter: 'blur(75px)',
        }}
        animate={{
          x: [0, 50, -25, 0],
          y: [0, 35, -15, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.65, 0.9, 0.7, 0.65],
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Soft Violet Center Glow */}
      <motion.div
        className="absolute top-[25%] left-[30%] w-[800px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(92,77,255,0.08) 0%, rgba(142,61,255,0.045) 45%, transparent 72%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -20, 25, 0],
          scale: [0.95, 1.08, 1, 0.95],
          opacity: [0.5, 0.75, 0.55, 0.5],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Very Soft Blue Glow - Bottom */}
      <motion.div
        className="absolute -bottom-[30%] left-[15%] w-[900px] h-[550px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(46,107,255,0.09) 0%, rgba(92,77,255,0.05) 45%, transparent 72%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, 70, -40, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle overall blue/lavender wash */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(120deg, rgba(123,42,232,0.035) 0%, transparent 35%, rgba(46,107,255,0.045) 70%, transparent 100%)',
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Soft white vignette to keep the center clean */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 65%, rgba(230,235,250,0.12) 100%)',
        }}
      />

    </div>
  );
};