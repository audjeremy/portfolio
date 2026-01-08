export interface NavItem {
  href: string;
  label: string;
}

export const NAV: NavItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/projects', label: 'Projets' },
  { href: '/about', label: 'CV' },
  { href: '/presentation', label: 'Présentation' },
  { href: '/contact', label: 'Contact' },
];

export const NAV_TOP: NavItem[] = NAV;
export const NAV_MOBILE: NavItem[] = NAV;

