export interface NavItem {
  href: string;
  label: string;
}

export const NAV: NavItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/presentation', label: 'Présentation' },
  { href: '/projects', label: 'Projets' },
  { href: '/about', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

// Navigation pour le bottom nav mobile (avec Présentation ET À propos)
export const NAV_MOBILE: NavItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/presentation', label: 'Présentation' },
  { href: '/projects', label: 'Projets' },
  { href: '/about', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

// Navigation pour le menu du haut (sans CV)
export const NAV_TOP: NavItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/presentation', label: 'Présentation' },
  { href: '/projects', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
];

