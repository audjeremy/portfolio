'use client';

import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="os-footer-wrapper">
      {/* Arrow button to toggle footer */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="os-footer-toggle"
        aria-label={isOpen ? 'Masquer les informations légales' : 'Afficher les informations légales'}
        aria-expanded={isOpen}
      >
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Footer content */}
      <footer
        className={`os-footer ${isOpen ? 'os-footer-open' : 'os-footer-closed'}`}
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <div className="text-center sm:text-left order-2 sm:order-1">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                © {currentYear} Jeremy Audette. Tous droits réservés.
              </p>
            </div>
            <div className="text-center sm:text-right order-1 sm:order-2">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="hidden sm:inline">
                  Toutes les marques de commerce mentionnées appartiennent à leurs propriétaires respectifs. 
                  "Jeremy Audette"™ et le logo associé sont des marques de commerce de Jeremy Audette.
                </span>
                <span className="sm:hidden">
                  "Jeremy Audette"™
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

