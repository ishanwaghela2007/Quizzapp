'use client';

import { useTheme } from 'next-themes';

export default function PrivacySection() {
  const { theme } = useTheme();

  return (
    <section className="w-full py-16 px-6 md:px-20 transition-colors duration-300 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            Get verified student data protection
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base md:text-lg">
            We're committed to responsible technology that puts educator and student privacy first.
            With enterprise-grade security, comprehensive data protection, and signed agreements
            that ensure your information remains yours.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg">
            Learn more
          </button>
        </div>

        {/* Right Visual with CDN image */}
        <div className="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/68355113496452bf05789e95/684861769d63fe1bd0d302f8_Privacy%20Rating.avif"
            alt="Privacy Rating Badge"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
