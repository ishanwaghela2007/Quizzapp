'use client';

import { useTheme } from 'next-themes';
import { Bell, ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b bg-white dark:bg-zinc-900 text-black dark:text-white">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Wayground" width={30} height={30} />
        <div className="text-pink-600 font-bold">WAYGROUND</div>
        <span className="ml-1 text-xs text-pink-500 font-semibold border border-pink-400 rounded px-1">BASIC</span>
        <span className="text-xs text-gray-500 dark:text-gray-300 ml-2">formerly Quizizz</span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5" />
        <button className="border rounded px-3 py-1 text-sm">Enter code</button>
        <button className="border rounded px-3 py-1 text-sm">Get help</button>
        <div className="flex items-center gap-1 cursor-pointer">
          <Image src="/avatar.png" alt="Avatar" width={30} height={30} className="rounded-full" />
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
}
