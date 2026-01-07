'use client';

import { useState } from 'react';

interface SkillsDropdownProps {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}

export default function SkillsDropdown({ title, items, defaultOpen = false }: SkillsDropdownProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-white/70 dark:hover:bg-gray-800/70 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`skills-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <svg
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
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
      <div
        id={`skills-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

