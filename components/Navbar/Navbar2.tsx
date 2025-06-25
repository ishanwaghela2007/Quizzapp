'use client';

import { useTheme } from 'next-themes';
import { Bell, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white dark:bg-zinc-900 text-black dark:text-white px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image src="/quizlogo.png" alt="Wayground" width={30} height={30} />
          <div className="text-pink-600 font-bold">Quizzworld</div>
          <span className="ml-1 text-xs text-pink-500 font-semibold border border-pink-400 rounded px-1">BASIC</span>
          <span className="text-xs text-gray-500 dark:text-gray-300 ml-2 hidden sm:inline">formerly Quizizz</span>
        </div>

        {/* Right: Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <Bell className="w-5 h-5" />
          <button className="border rounded px-3 py-1 text-sm">Enter code</button>
          <button className="border rounded px-3 py-1 text-sm">Get help</button>
          <UserButton />
        </div>

        {/* Mobile: UserButton and Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <UserButton />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only links */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-2 md:hidden">
          <Link href="/pages/Room">
            <button className="border rounded px-3 py-2 text-sm text-left w-full">Enter code</button>
          </Link>
          <Link href="/pages/help">
            <button className="border rounded px-3 py-2 text-sm text-left w-full">Get help</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
