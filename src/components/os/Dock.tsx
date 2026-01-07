'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface DockItem {
  href: string;
  label: string;
  icon: string;
}

const dockItems: DockItem[] = [
  { href: '/', label: 'Accueil', icon: '🏠' },
  { href: '/presentation', label: 'Présentation', icon: '⭐' },
  { href: '/projects', label: 'Projets', icon: '💼' },
  { href: '/about', label: 'À propos', icon: '👤' },
  { href: '/contact', label: 'Contact', icon: '✉️' },
];

export default function Dock() {
  const pathname = usePathname();
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleItemClick = (href: string) => {
    // Ne pas animer si c'est la même page
    if (pathname === href) return;
    
    setClickedItem(href);
    // Reset après un court délai pour permettre l'animation
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
            (item.href === '/presentation' && pathname === '/presentation') ||
            (item.href === '/about' && pathname === '/about');
          
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

