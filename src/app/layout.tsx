import type { Metadata } from 'next';
import './globals.css';
import MenuBar from '@/components/os/MenuBar';
import Dock from '@/components/os/Dock';
import SkipToMain from '@/components/SkipToMain';

export const metadata: Metadata = {
  title: 'Portfolio - Jeremy Audette',
  description:
    "Portfolio de Jeremy Audette — développeur web. Projets, compétences (React, TypeScript, Laravel, Node.js) et contact.",
  keywords: [
    'développeur web',
    'portfolio',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Laravel',
    'UI/UX',
    'Montréal',
  ],
  authors: [{ name: 'Jeremy Audette' }],
  creator: 'Jeremy Audette',
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    title: 'Portfolio - Jeremy Audette',
    description:
      "Portfolio de Jeremy Audette — développeur web. Projets, compétences et contact.",
    siteName: 'Jeremy Audette',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="os-desktop">
        {/* Skip to main content for accessibility */}
        <SkipToMain />
        
        {/* Wallpaper background */}
        <div className="os-wallpaper" />
        
        {/* Menu Bar */}
        <MenuBar />
        
        {/* Main content stage */}
        <main id="main-content" className="os-stage">
          {children}
        </main>
        
        {/* Dock */}
        <Dock />
      </body>
    </html>
  );
}

