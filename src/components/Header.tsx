'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl font-bold text-white drop-shadow-lg">
            Vibe
          </Link>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors drop-shadow-lg">
              Gallery
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200 transition-colors drop-shadow-lg">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200 transition-colors drop-shadow-lg">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg mt-2">
            <nav className="flex flex-col space-y-4 px-4">
              <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
