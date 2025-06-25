'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm relative">
      {/* Left - Logo and Links */}
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <div className="text-purple-700 text-3xl font-bold">Quizzworld</div>
        </Link>
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          <li><a href="#">School & District</a></li>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Use Cases</a></li>
          <li><a href="#">For Business</a></li>
          <li><a href="#">Library</a></li>
        </ul>
      </div>

      {/* Right - Buttons (desktop) */}
      <div className="hidden md:flex gap-4 items-center">
        <Link href="/pages/enquiry">
          <button className="border border-purple-200 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-50 transition">
            Get a quote
          </button>
        </Link>
        <Link href="/pages/Room">
          <button className="border border-purple-200 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-50 transition">
            Enter code
          </button>
        </Link>
        <Link href="/pages/Auth">
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-200 transition">
            Log in
          </button>
        </Link>
        <Link href="/pages/Auth">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
            Sign up
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center gap-4">
        {/* Mobile "Enter code" button */}
        <Link href="/pages/Room">
          <button className="border border-purple-200 text-purple-700 px-3 py-2 rounded-md hover:bg-purple-50 transition text-sm">
            Enter code
          </button>
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-purple-700">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-md px-6 py-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <li><a href="#">School & District</a></li>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Use Cases</a></li>
            <li><a href="#">For Business</a></li>
            <li><a href="#">Library</a></li>
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/pages/enquiry">
              <button className="border border-purple-200 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-50 transition">
                Get a quote
              </button>
            </Link>
            <Link href="/pages/Auth">
              <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-200 transition">
                Log in
              </button>
            </Link>
            <Link href="/pages/Auth">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
