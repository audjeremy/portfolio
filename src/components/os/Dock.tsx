'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DockItem {
  href: string;
  label: string;
  icon: string;
}

const dockItems: DockItem[] = [
  { href: '/', label: 'Accueil', icon: '🏠' },
  { href: '/projects', label: 'Projets', icon: '💼' },
  { href: '/about', label: 'À propos', icon: '👤' },
  { href: '/contact', label: 'Contact', icon: '✉️' },
];

export default function Dock() {
  const pathname = usePathname();

  return (
    <div className="os-dock">
      <div className="flex items-center gap-1">
        {dockItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href === '/projects' && pathname.startsWith('/projects/'));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="os-dock-item group"
              aria-label={item.label}
            >
              <div className={`os-dock-icon ${isActive ? 'ring-2 ring-emerald-400' : ''}`}>
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

