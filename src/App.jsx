import React from 'react';
import { Background } from './components/Background';
import { Particles } from './components/Particles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer';
import { DisplayControls } from './components/DisplayControls';

export default function App() {
  return (
    <>
      {/* Background */}
      <Background />

      {/* Floating Canvas Dust Particles */}
      <Particles />

      {/* Top Right TV / Fullscreen & Sound Controls */}
      <DisplayControls />

      {/* Main Digital Signage Layout */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          flex
          flex-col
          min-h-[100dvh]
          py-2
          px-3
          sm:px-6
        "
      >

        {/* Top Header */}
        <Navbar />

        {/* Main Content */}
        <main
          className="
            flex-1
            grid
            grid-cols-1
            lg:grid-cols-12
            items-center
            justify-center
            gap-6
            lg:gap-8
            w-full
            py-4
            lg:py-0
          "
        >

          {/* Left — Singer */}
          <div
            className="
              lg:col-span-5
              flex
              items-center
              justify-center
              w-full
            "
          >
            <Hero />
          </div>

          {/* Right — Countdown */}
          <div
            className="
              lg:col-span-7
              flex
              items-center
              justify-center
              w-full
            "
          >
            <Countdown />
          </div>

        </main>

        {/* Footer */}
        <Footer />

      </div>
    </>
  );
}