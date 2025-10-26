import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Row({ title, items = [] }) {
  const containerRef = useRef(null);

  const scrollBy = (offset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-3 text-lg font-semibold text-neutral-100 md:text-xl">{title}</h2>
      </div>
      <div className="group relative">
        <button
          aria-label="Scroll left"
          onClick={() => scrollBy(-600)}
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/60 p-2 text-white shadow backdrop-blur transition hover:bg-black/80 group-hover:inline-flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div
          ref={containerRef}
          className="no-scrollbar mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-2 md:gap-4 md:px-8"
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="group/card relative h-40 w-64 flex-none overflow-hidden rounded-md bg-neutral-800 shadow-lg transition-transform duration-200 hover:z-10 hover:scale-[1.04] md:h-48 md:w-80"
            >
              <img
                src={src}
                alt="Cover"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-200 group-hover/card:opacity-100"></div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover/card:opacity-100">
                <span className="text-sm font-semibold">Play</span>
                <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wide">HD</span>
              </div>
            </div>
          ))}
        </div>
        <button
          aria-label="Scroll right"
          onClick={() => scrollBy(600)}
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/60 p-2 text-white shadow backdrop-blur transition hover:bg-black/80 group-hover:inline-flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
