'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MenuBar() {
  const pathname = usePathname();
  const [time, setTime] = useState('');

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
    const interval = setInterval(updateTime, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/projects', label: 'Projets' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="os-menubar">
      <div className="max-w-full mx-auto px-4 h-full flex items-center justify-between">
        {/* Left side: Logo + Nav */}
        <nav className="flex items-center gap-6" aria-label="Navigation principale">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            Jeremy Audette
          </Link>
          
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-emerald-700 dark:text-emerald-300'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right side: CV + Time */}
        <div className="flex items-center gap-4">
          <a
            href="/AudetteJeremy-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-medium rounded-md transition-all hover:shadow-lg hover:scale-105"
            aria-label="Télécharger mon CV"
          >
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="hidden sm:inline">CV</span>
          </a>
          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}

