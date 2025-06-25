'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const logos = [
  { name: 'District One', src: 'https://cdn.prod.website-files.com/68355113496452bf05789e95/6848501bf7aaf381374a130a_Logo%201.avif' },
  { name: 'School Hub', src: 'https://cdn.prod.website-files.com/68355113496452bf05789e95/6848501beaec64fb4625adbf_Logo%204.avif' },
  { name: 'EduTrust', src: 'https://cdn.prod.website-files.com/68355113496452bf05789e95/6848501b3bb50c97ade034fa_Logo%205.avif' },
  { name: 'SafeSchool', src: 'https://cdn.prod.website-files.com/68355113496452bf05789e95/6848501bde45cfb387978c5f_Logo%202.avif' },
];

export default function TrustedUsers() {
  const [count, setCount] = useState(0);
  const target = 8000; // Trusted user count
  const duration = 1000; // ms

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(target / (duration / 20));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
          Trusted by over <span className="text-cyan-500 dark:text-cyan-300">{count.toLocaleString()}</span> schools and educators
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">
          We’re proud to support thousands of learning communities worldwide.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
