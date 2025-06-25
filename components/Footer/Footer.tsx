import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Copyright */}
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Quizzworld</span>. All rights reserved.
        </div>

        {/* Center - Links */}
        <div className="flex gap-4 text-sm">
          <a href="/about" className="hover:text-yellow-400 transition-colors duration-200">About</a>
          <a href="/contact" className="hover:text-yellow-400 transition-colors duration-200">Contact</a>
          <a href="/privacy" className="hover:text-yellow-400 transition-colors duration-200">Privacy</a>
        </div>

        {/* Right - Socials + App Badges */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="https://github.com/ishanwaghela2007" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ishan-waghela-052760307/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/IshanWaghe8400" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Twitter size={20} />
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="flex gap-2">
            <a href="https://play.google.com/store/apps/details?id=com.example" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-1 shadow hover:scale-105 transition-transform">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s"
                alt="Get it on Google Play"
                className="w-[100px] h-[30px] object-contain rounded-md"
              />
            </a>
            <a href="https://apps.apple.com/app/id1234567890" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-1 shadow hover:scale-105 transition-transform">
              <img
                src="https://thumbs.dreamstime.com/b/app-store-digital-distribution-platform-developed-maintained-apple-inc-mobile-apps-its-ios-ipados-operating-204759434.jpg"
                alt="Download on the App Store"
                className="w-[100px] h-[30px] object-contain rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
