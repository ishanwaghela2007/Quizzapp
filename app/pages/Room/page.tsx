//@/pages/Room
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export default function EnterCodePage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const { theme } = useTheme();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === '1234') {
      router.push('/pages/quiz');
    } else {
      setError('Invalid code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-300 px-4">
      <h1 className="text-5xl font-extrabold mb-10 text-black dark:text-white">Quizzworld</h1>

      <form
        onSubmit={handleSubmit}
        className="relative flex items-center bg-white dark:bg-gray-900 rounded-full shadow-lg px-4 py-2 w-full max-w-sm focus-within:ring-4 ring-purple-500 transition"
      >
        <input
          type="text"
          placeholder="Enter a join code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 text-lg bg-transparent outline-none px-2 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-5 py-2 rounded-full transition"
        >
          Join
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
