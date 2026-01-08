'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_MOBILE } from '@/config/nav';

interface DockItem {
  href: string;
  label: string;
  icon: string;
}

const dockIcons: Record<string, string> = {
  '/': '🏠',
  '/projects': '💼',
  '/about': '📄',
  '/presentation': '⭐',
  '/contact': '✉️',
};

const dockItems: DockItem[] = NAV_MOBILE.map((item) => ({
  href: item.href,
  label: item.label,
  icon: dockIcons[item.href] || '📄',
}));

export default function Dock() {
  const pathname = usePathname();
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleItemClick = (href: string) => {
    if (pathname === href) return;
    setClickedItem(href);
    setTimeout(() => {
      setClickedItem(null);
    }, 300);
  };

  return (
    <div className="os-dock">
      <div className="flex items-center gap-0.5 sm:gap-1">
        {dockItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href === '/projects' && pathname.startsWith('/projects/')) ||
            (item.href === '/about' && pathname === '/about') ||
            (item.href === '/presentation' && pathname === '/presentation');
          
          const isClicked = clickedItem === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="os-dock-item group"
              aria-label={item.label}
              onClick={() => handleItemClick(item.href)}
            >
              <div className={`os-dock-icon ${isActive ? 'ring-2 ring-emerald-400' : ''} ${isClicked ? 'os-dock-item-clicked' : ''}`}>
                <span role="img" aria-hidden="true">
                  {item.icon}
                </span>
              </div>
              <div className="os-dock-tooltip">
                {item.label}
              </div>
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gray-800 dark:bg-gray-200" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

