"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeToggle } from "@/components/theme-toggle";

const Page: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP animations
  useGSAP(() => {
    if (!mounted) return;

    gsap.fromTo(
      ".bg-float",
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power1.inOut",
      }
    );

    gsap.to(".bg-float", {
      y: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.from(".hero-text", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-buttons", {
      opacity: 0,
      y: 20,
      delay: 0.3,
      duration: 1,
    });
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const lightBg =
    "https://i.pinimg.com/736x/db/34/d4/db34d40b271fb59477621550bf73ea0b.jpg";
  const darkBg =
    "https://static.vecteezy.com/system/resources/thumbnails/008/889/844/small_2x/quiz-set-in-doodle-style-illustration-icon-question-symbol-for-print-and-design-quiz-and-exam-concept-isolated-element-on-black-background-collection-of-sign-for-school-and-event-vector.jpg";

  const backgroundImage = theme === "dark" ? darkBg : lightBg;

  return (
    <section>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
        <Navbar />

        <div className="relative flex items-center justify-center min-h-screen overflow-hidden px-4 text-center">
          {/* Background Image */}
          <img
            src={backgroundImage}
            alt="Floating background"
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none bg-float transition-all duration-500"
            aria-hidden="true"
          />

          {/* Theme Toggle */}
          <div className="absolute top-5 right-5 z-20">
            <ThemeToggle />
          </div>

          {/* Glass Panel */}
          <div className="absolute z-10 backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 shadow-xl rounded-xl p-8 max-w-3xl mx-auto transition-all duration-500">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Introducing{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Instructional Suite
              </span>
            </p>

            <h1 className="hero-text text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-2">
              "It's not just a quiz. It's a power move in every lesson."
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mb-6 text-base">
              - Almost everybody
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Create and deliver bell-to-bell curriculum resources that meet the
              needs of every student.
            </p>

            {/* Buttons always shown */}
            <div className="hero-buttons flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button
                variant="default"
                className="px-6 py-4 text-lg bg-purple-600 text-white hover:bg-purple-700"
                asChild
              >
                <a href="/pages/Auth">Login</a>
              </Button>
              <Button
                variant="secondary"
                className="px-6 py-4 text-lg dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                asChild
              >
                <a href="/pages/info">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
