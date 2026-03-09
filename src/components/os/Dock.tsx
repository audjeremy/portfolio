'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineHome, HiOutlineBriefcase, HiOutlineDocumentText, HiOutlineStar, HiOutlineEnvelope } from 'react-icons/hi2';
import { NAV_MOBILE } from '@/config/nav';

interface DockItem {
  href: string;
  label: string;
  icon: JSX.Element;
}

const dockIcons: Record<string, JSX.Element> = {
  '/': <HiOutlineHome className="w-6 h-6" aria-hidden="true" />,
  '/projects': <HiOutlineBriefcase className="w-6 h-6" aria-hidden="true" />,
  '/about': <HiOutlineDocumentText className="w-6 h-6" aria-hidden="true" />,
  '/presentation': <HiOutlineStar className="w-6 h-6" aria-hidden="true" />,
  '/contact': <HiOutlineEnvelope className="w-6 h-6" aria-hidden="true" />,
};

const dockItems: DockItem[] = NAV_MOBILE.map((item) => ({
  href: item.href,
  label: item.label,
  icon: dockIcons[item.href] || <HiOutlineDocumentText className="w-6 h-6" aria-hidden="true" />,
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
          const isActive =
            pathname === item.href ||
            (item.href === '/projects' && pathname.startsWith('/projects/'));
          
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
                {item.icon}
              </div>
              <div className="os-dock-tooltip">
                {item.label}
              </div>
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gray-800" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

