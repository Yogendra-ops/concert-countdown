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
      <Background />
      <Particles />
      <DisplayControls />

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
          px-3
          sm:px-5
          lg:px-8
          py-2
        "
      >

        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main
          className="
            w-full
            flex-1
            grid
            grid-cols-1
            lg:grid-cols-12
            items-center
            justify-items-center
            gap-5
            sm:gap-6
            lg:gap-8
            py-3
            sm:py-4
            lg:py-0
          "
        >

          {/* Singer */}
          <section
            className="
              w-full
              lg:col-span-5
              flex
              items-center
              justify-center
              min-w-0
            "
          >
            <Hero />
          </section>

          {/* Countdown */}
          <section
            className="
              w-full
              lg:col-span-7
              flex
              items-center
              justify-center
              min-w-0
            "
          >
            <Countdown />
          </section>

        </main>

        {/* Footer */}
        <Footer />

      </div>
    </>
  );
}