'use client';

import { SignIn } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function SignInPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div className="shadow-lg rounded-lg p-6 bg-white dark:bg-gray-900">
        <SignIn routing="hash" appearance={{
          baseTheme: theme === 'dark' ? undefined : undefined, 
        }} />
      </div>
    </div>
  );
}
