//@/pages/Dashboard
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

const trendingTopics = [
  { title: 'Numbers', activities: '779.3K', img: 'https://cf.quizizz.com/discovery/explore/788d00fc7e29e3d7badc16452235d639.webp' },
  { title: 'Factors and multiples', activities: '15.1K', img: 'https://cf.quizizz.com/discovery/explore/276d350596b38841a6b9c593ebf42482.webp' },
  { title: 'Concepts in whole numbers', activities: '1.4K', img: 'https://cf.quizizz.com/discovery/explore/d7449186113bcd48c69085ecdb1a9e56.webp' },
];

export default function WaygroundPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen px-4 py-6 bg-white dark:bg-black text-black dark:text-white">
      <section className="bg-pink-100 dark:bg-pink-900 rounded-xl p-6 text-center">
        <h1 className="text-2xl font-bold">
          Quizzworld
        </h1>
      </section>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 mt-6 p-3 rounded-full shadow-sm">
        <Search className="text-gray-500 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Search for any topic"
          className="ml-2 bg-transparent focus:outline-none w-full text-sm"
        />
      </div>

      {/* Categories Tabs */}
      <div className="flex justify-around mt-6 text-sm">
        {['For you', 'Assessments', 'Lessons', 'Interactive'].map((tab, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 rounded-full ${
              idx === 0
                ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-medium'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Trending Cards */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-4">🔥 Trending activities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {trendingTopics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
            >
              <img
                src={topic.img}
                alt={topic.title}
                className="h-24 w-full object-cover rounded-md mb-3"
              />
              <h3 className="text-sm font-medium">{topic.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {topic.activities} activities
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
