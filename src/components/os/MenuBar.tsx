'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_TOP } from '@/config/nav';

export default function MenuBar() {
  const pathname = usePathname();
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('fr-CA', {
        hour: '2-digit',
        minute: '2-digit',
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="os-menubar">
        <div className="max-w-full mx-auto px-3 sm:px-4 h-full flex items-center justify-between">
          <nav className="flex items-center gap-4 sm:gap-6" aria-label="Navigation principale">
            <Link
              href="/"
              className="text-xs sm:text-sm font-semibold text-gray-900 hover:opacity-80 transition-opacity"
            >
              <span className="hidden sm:inline">Jeremy Audette</span>
              <span className="sm:hidden">J.A.</span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              {NAV_TOP.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-medium transition-colors ${
                    pathname === item.href || 
                    (item.href === '/projects' && pathname.startsWith('/projects/')) ||
                    (item.href === '/about' && pathname === '/about')
                      ? 'text-emerald-700'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:block text-xs font-medium text-gray-700">
              {time}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Menu de navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-8 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg">
          <nav className="px-4 py-3 space-y-1" aria-label="Navigation mobile">
            {NAV_TOP.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href || 
                  (item.href === '/projects' && pathname.startsWith('/projects/')) ||
                  (item.href === '/about' && pathname === '/about')
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

