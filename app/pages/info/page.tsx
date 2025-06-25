"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Service from '@/components/Service/page'
import Service2 from '@/components/Service/page2'
import Service3 from '@/components/Service/page3'
import Service4 from '@/components/Service/page4'
gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "section-1",
    title: "01",
    text: "Discover how to get started with student selection in a seamless experience.",
    video: "https://cf.quizizz.com/videos/webflow/Adapt_Updated_V2.mp4",
    reverse: false,
  },
  {
    id: "section-2",
    title: "02",
    text: "Deliver differentiated instruction with personalized tools and insights.",
    video: "https://cf.quizizz.com/videos/webflow/Intro_1K_Updated.mp4",
    reverse: true,
  },
  {
    id: "section-3",
    title: "03",
    text: "Measure progress with real-time analytics and make data-driven decisions.",
    video: "https://cf.quizizz.com/videos/webflow/Joy_Updated_V2.mp4",
    reverse: false,
  },
];

export default function InfoWalkthrough() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate horizontal top progress bar
      if (barRef.current && containerRef.current) {
        gsap.fromTo(
          barRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
            transformOrigin: "left center",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-500 dark:text-green-100 mb-4 text-center">Now we support every part of your lesson.
    Here’s how it works</h1>
    <section
      ref={containerRef}
      className="relative min-h-screen py-16 transition-colors duration-300"
    >
      {/* Horizontal top progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div
          ref={barRef}
          className="h-full bg-cyan-500 dark:bg-cyan-300 transform scale-x-0 origin-left"
        />
      </div>

      {/* Vertical line from first to last video */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[15%] bottom-[15%] w-1 bg-gray-300 dark:bg-gray-700 z-0 rounded" />

      {/* Walkthrough content */}
      <div className="flex flex-col items-center gap-32 relative z-10">
        {sections.map(({ id, title, text, video, reverse }) => (
          <div
            key={id}
            id={id}
            className={`flex flex-col md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } items-center gap-12 max-w-6xl w-full px-6`}
          >
            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-6xl font-bold text-cyan-500 dark:text-cyan-300 mb-4">
                {title}
              </h2>
              <p className="text-gray-800 dark:text-gray-200 text-lg">{text}</p>
            </div>

            {/* Video */}
            <div className="md:w-1/2">
              <video
                controls
                className="w-full rounded-lg shadow-lg border border-gray-300 dark:border-gray-600"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
       <Service/>
    </section>
    <section>
      <Service2/>
    </section>
    <section>
      <Service4/>
    </section>
    <section>
      <Service3/>
    </section>

    </>
  );
}
