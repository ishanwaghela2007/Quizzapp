//@/pages/Auth/verify
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function VerifyPage() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
      <div className="w-full max-w-md p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-bold text-center mb-4">Verify Your Account</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Verification Code"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Verify
          </button>
        </form>

        <div className="text-center mt-4">
          <Link href="/pages/Auth" className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
            Go back to Auth
          </Link>
        </div>
      </div>
    </div>
  );
}
