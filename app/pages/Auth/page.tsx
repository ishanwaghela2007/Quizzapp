//@/pages/Auth
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import gsap from 'gsap';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    gsap.fromTo(
      '.auth-panel',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
      }
    );
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen transition-colors duration-500 bg-white dark:bg-black">

      {/* Auth Panel */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="auth-panel bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-xl p-8 w-full max-w-md transition-all duration-500">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {isLogin ? 'Login to Your Account' : 'Create an Account'}
          </h2>

          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            )}
            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-600 dark:text-purple-400 underline"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
