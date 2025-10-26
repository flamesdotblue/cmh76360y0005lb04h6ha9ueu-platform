import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Info } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            Watch anywhere. Cancel anytime. Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
              <Play className="h-5 w-5" />
              Play
            </button>
            <button className="inline-flex items-center gap-2 rounded bg-white/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/30">
              <Info className="h-5 w-5" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
