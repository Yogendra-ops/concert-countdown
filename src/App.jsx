import React from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer';
import { DisplayControls } from './components/DisplayControls';

export default function App() {
  return (
    <>
      <Background />
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
        "
      >

        {/* Header */}
        <Navbar />

        {/* Main Glass Card */}
        <main
          className="
            w-full
            flex-1
            flex
            items-center
            justify-center
            min-h-0
            py-2
            sm:py-4
            lg:py-2
          "
        >
          <div
            className="
              main-card
              w-full
              max-w-[1200px]
              2xl:max-w-[1300px]
              grid
              grid-cols-1
              lg:grid-cols-12
              min-h-[360px]
              sm:min-h-[420px]
              lg:min-h-[460px]
              xl:min-h-[500px]
              max-h-[85dvh]
              lg:max-h-[78dvh]
            "
          >

            {/* Left: Singer Panel */}
            <div
              className="
                lg:col-span-5
                relative
                min-h-[260px]
                sm:min-h-[300px]
                lg:min-h-0
                overflow-hidden
                rounded-t-[24px]
                lg:rounded-t-none
                lg:rounded-l-[24px]
              "
            >
              <Hero />
            </div>

            {/* Right: Countdown Panel */}
            <div
              className="
                lg:col-span-7
                flex
                items-center
                justify-center
              "
            >
              <Countdown />
            </div>

          </div>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </>
  );
}