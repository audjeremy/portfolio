export interface Project {
  slug: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  images: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: 'provisions',
    title: 'Provisions',
    short: 'Application de gestion de liste d\'épicerie collaborative',
    description: 'Provisions est une application web moderne qui permet aux utilisateurs de créer et gérer leurs listes d\'épicerie de façon collaborative. L\'application offre une interface intuitive pour ajouter, modifier et supprimer des articles, tout en synchronisant les changements en temps réel entre les utilisateurs.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/jeremyaudette/provisions',
    demo: 'https://provisions-demo.vercel.app',
    images: ['/projects/provisions-1.jpg', '/projects/provisions-2.jpg'],
    highlights: [
      'Synchronisation en temps réel des listes partagées',
      'Interface responsive et intuitive',
      'Authentification sécurisée des utilisateurs',
      'Gestion des catégories d\'articles',
      'Mode hors ligne avec synchronisation automatique',
    ],
  },
  {
    slug: 'la-porte',
    title: 'La Porte',
    short: 'Site web vitrine pour un restaurant local',
    description: 'La Porte est un site web élégant conçu pour un restaurant local. Le site présente le menu, l\'ambiance et permet aux clients de faire des réservations en ligne. L\'accent a été mis sur l\'esthétique et l\'expérience utilisateur pour refléter l\'identité du restaurant.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'API REST'],
    github: 'https://github.com/jeremyaudette/la-porte',
    images: ['/projects/la-porte-1.jpg', '/projects/la-porte-2.jpg'],
    highlights: [
      'Design moderne et élégant',
      'Système de réservation intégré',
      'Menu interactif avec filtres',
      'Galerie photos immersive',
      'Optimisé pour le SEO',
    ],
  },
  {
    slug: 'portfolio-macos',
    title: 'Portfolio macOS',
    short: 'Portfolio interactif avec interface macOS moderne',
    description: 'Un portfolio innovant qui reproduit l\'expérience d\'un bureau macOS moderne. Le projet démontre des compétences en design d\'interface et en développement front-end, avec une attention particulière aux détails visuels et aux animations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CSS Animations'],
    github: 'https://github.com/jeremyaudette/portfolio',
    demo: 'https://jeremyaudette.dev',
    images: ['/projects/portfolio-1.jpg'],
    highlights: [
      'Interface utilisateur type macOS Sonoma',
      'Animations et transitions fluides',
      'Fenêtres avec effet glass morphism',
      'Menu bar et dock interactifs',
      'Entièrement responsive',
    ],
  },
];

