'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const notes = [
  {
    alt: "R'Vani's note",
    src: 'https://cdn.prod.website-files.com/68482acf5652ffeb581a38c8/68502825fbdaa5e4f73d541a_R%27vani.avif',
  },
  {
    alt: "London's note",
    src: 'https://cdn.prod.website-files.com/68482acf5652ffeb581a38c8/6850281ac839a090ed9a245c_London.avif',
  },
  {
    alt: "Charlotte's note",
    src: 'https://cdn.prod.website-files.com/68482acf5652ffeb581a38c8/6850282d52734a07c260cb00_Charlotte.avif',
  },
];

export default function StudentNotesCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % notes.length);
  const prev = () => setCurrent((prev) => (prev - 1 + notes.length) % notes.length);

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-800 dark:text-white mb-6">
          <span className="bg-[#3b1625] text-white px-3 py-1 rounded-md">
            Hear it from the desks that matter <em className="italic font-medium">most</em>
          </span>
        </h2>

        <div className="relative mt-10 flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prev}
            className="absolute left-0 p-2 bg-white dark:bg-neutral-800 rounded-full shadow hover:bg-neutral-100 dark:hover:bg-neutral-700 transition z-10"
            aria-label="Previous"
          >
            <ArrowLeft className="h-5 w-5 text-neutral-800 dark:text-white" />
          </button>

          {/* Image */}
          <div className="mx-12 w-full max-w-lg aspect-[4/3] overflow-hidden">
            <img
              src={notes[current].src}
              alt={notes[current].alt}
              className="rounded-xl shadow-lg w-full h-full object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-0 p-2 bg-white dark:bg-neutral-800 rounded-full shadow hover:bg-neutral-100 dark:hover:bg-neutral-700 transition z-10"
            aria-label="Next"
          >
            <ArrowRight className="h-5 w-5 text-neutral-800 dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
