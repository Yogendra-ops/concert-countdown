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
          max-w-[95rem]
          mx-auto
          flex
          flex-col
          min-h-[100dvh]
          lg:h-[100dvh]
          lg:max-h-[100dvh]
          overflow-y-auto
          lg:overflow-hidden
          overflow-x-hidden
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-14
          py-3
          sm:py-4
          md:py-5
          lg:py-3
          xl:py-2
          2xl:py-2
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
            content-center
            gap-6
            sm:gap-8
            md:gap-10
            lg:gap-8
            xl:gap-10
            2xl:gap-12
            py-4
            sm:py-5
            md:py-6
            lg:py-3
            xl:py-2
            2xl:py-2
            min-h-0
          "
        >

          {/* Singer */}
          <section
            className="
              w-full
              h-full
              lg:col-span-6
              flex
              items-center
              justify-center
              min-w-0
              min-h-0
            "
          >
            <Hero />
          </section>

          {/* Countdown */}
          <section
            className="
              w-full
              h-full
              lg:col-span-6
              flex
              items-center
              justify-center
              min-w-0
              min-h-0
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