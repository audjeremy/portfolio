'use client';

import { useState } from 'react';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="os-footer-wrapper">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="os-footer-toggle"
        aria-label={isOpen ? 'Masquer le pied de page' : 'Afficher le pied de page'}
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

      <footer
        className={`os-footer ${isOpen ? 'os-footer-open' : 'os-footer-closed'}`}
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <p className="text-center text-xs sm:text-sm text-gray-600 font-medium">
            © 2026 Jeremy Audette. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

