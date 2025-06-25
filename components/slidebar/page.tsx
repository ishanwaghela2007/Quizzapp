'use client';

import { useState } from 'react';
import { Home, Library, BarChart, Users, Sparkles, Plus } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  const [active, setActive] = useState('Explore');

  const navItems = [
    { label: 'Explore', icon: Home },
    { label: 'Library', icon: Library },
    { label: 'Reports', icon: BarChart },
    { label: 'Classes', icon: Users, warning: true },
    { label: 'Accommodations', icon: () => <span>❤️</span> },
    { label: 'Wayground AI', icon: Sparkles },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-zinc-950 h-screen p-4 border-r">
      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded mb-6 flex items-center justify-center gap-2">
        <Plus size={18} /> Create
      </button>

      <nav className="flex flex-col gap-4">
        {navItems.map(({ label, icon: Icon, warning }) => (
          <Link
            key={label}
            href="#"
            className={`flex items-center gap-3 px-3 py-2 rounded ${
              active === label
                ? 'bg-purple-100 dark:bg-zinc-800 text-purple-600 dark:text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'
            }`}
            onClick={() => setActive(label)}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
            {warning && <span className="text-orange-500 text-xl">⚠️</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto text-sm text-gray-600 dark:text-gray-400">
        <p className="my-4">0/20 activities created</p>
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-semibold flex items-center justify-center gap-2">
          🔓 Upgrade
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
