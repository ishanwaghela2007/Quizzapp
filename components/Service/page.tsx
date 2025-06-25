//@/components/Service
'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function WaygroundSection() {
  const { theme } = useTheme();

  return (
    <section className="w-full py-16 px-6 md:px-20 transition-colors duration-300 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side: Image */}
        <div className="w-full">
          <img
            src="https://cdn.prod.website-files.com/68355113496452bf05789e95/684861763bb358ba6bec7984_Integration%20Visual.avif"
            alt="Wayground Integration Visual"
            className="rounded-xl shadow-xl w-full"
          />
        </div>

        {/* Right side: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            No more password juggling or missing assignments
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg">
            Quizzworld connects seamlessly to your school’s existing ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
}
