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
    slug: 'recolte',
    title: 'Récolte',
    short: 'Design Web pour une plateforme agricole',
    description: 'Récolte est un projet de design web pour une plateforme agricole moderne. Le design met l\'accent sur l\'authenticité, la simplicité et l\'accessibilité, créant une expérience utilisateur intuitive qui connecte les producteurs et les consommateurs.',
    tech: ['Design Web', 'UI/UX', 'Figma', 'Prototypage'],
    images: ['/projects/recolte-1.jpg'],
    highlights: [
      'Design centré sur l\'utilisateur',
      'Interface moderne et accessible',
      'Hiérarchie visuelle claire',
      'Responsive design optimisé',
      'Système de design cohérent',
    ],
  },
  {
    slug: 'affiche-provisions',
    title: 'Affiche Provisions',
    short: 'Design d\'affiche pour Provisions',
    description: 'Affiche créée pour promouvoir Provisions, une application de gestion de liste d\'épicerie collaborative. Le design allie esthétique moderne et fonctionnalité, communiquant efficacement l\'identité visuelle de la marque.',
    tech: ['Design Graphique', 'Affiche', 'Branding'],
    demo: 'https://www.behance.net/gallery/194732571/PROVISION',
    images: ['/projects/affiche-provisions-1.jpg'],
    highlights: [
      'Design graphique percutant',
      'Identité visuelle cohérente',
      'Communication efficace du message',
      'Esthétique moderne',
      'Prêt pour l\'impression',
    ],
  },
  {
    slug: 'provisions',
    title: 'Appli Provisions',
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
    slug: 'blonde-biscuiterie',
    title: 'Blonde Biscuiterie',
    short: 'Refonte web complète pour une biscuiterie artisanale',
    description: 'Projet de refonte web complète pour Blonde Biscuiterie, une biscuiterie artisanale. La refonte met en valeur l\'artisanat et l\'authenticité de la marque à travers un design chaleureux et moderne qui reflète la qualité des produits.',
    tech: ['Design Web', 'UI/UX', 'Refonte', 'Web Design'],
    images: ['/projects/blonde-biscuiterie-1.jpg'],
    highlights: [
      'Refonte complète de l\'identité visuelle',
      'Design chaleureux et authentique',
      'Mise en valeur des produits artisanaux',
      'Expérience utilisateur optimisée',
      'Design responsive et moderne',
    ],
  },
  {
    slug: 'festipop',
    title: 'Festipop',
    short: 'Vidéo promotionnelle pour un festival de musique',
    description: 'Vidéo promotionnelle créée pour Festipop, un festival de musique. La vidéo capture l\'énergie et l\'ambiance unique du festival, utilisant des techniques de montage dynamiques et une esthétique visuelle moderne pour promouvoir l\'événement.',
    tech: ['Motion Design', 'Vidéo', 'Montage', 'Animation'],
    demo: 'https://www.behance.net/gallery/194730461/Vido-Promo-Festival-Musique',
    images: ['/projects/festipop-1.jpg'],
    highlights: [
      'Motion design dynamique',
      'Montage rythmé et énergique',
      'Esthétique visuelle moderne',
      'Communication efficace du message',
      'Production vidéo professionnelle',
    ],
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    short: 'Portfolio interactif avec interface inspirée de macOS',
    description: 'Portfolio interactif conçu pour présenter mes projets et mon profil de développeur web. L\'interface privilégie une navigation fluide, une hiérarchie claire de l\'information et une mise en page responsive, afin d\'offrir une expérience simple et efficace.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CSS Animations'],
    github: 'https://github.com/audjeremy/portfolio',
    demo: '',
    images: ['/projects/portfolio-1.png'],
    highlights: [
      'Design familier inspiré de macOS pour une navigation intuitive',
      'Présentation claire et organisée de mes projets',
      'Expérience utilisateur soignée et professionnelle',
      'Accessible sur tous les appareils (mobile, tablette, ordinateur)',
      'Mise en avant efficace de mon parcours et compétences',
    ],
  },
];

