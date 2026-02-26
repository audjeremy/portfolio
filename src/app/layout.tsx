import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import MenuBar from '@/components/os/MenuBar';
import Dock from '@/components/os/Dock';
import Footer from '@/components/Footer';
import SkipToMain from '@/components/SkipToMain';

export const metadata: Metadata = {
  title: 'Portfolio - Jeremy Audette',
  description:
    "Portfolio de Jeremy Audette — développeur web front-end spécialisé React, Next.js, Nuxt.js, Hydrogen/Shopify. Formé full-stack (Laravel, Node.js). Montréal.",
  keywords: [
    'développeur web',
    'développeur front-end',
    'portfolio',
    'React',
    'Next.js',
    'Nuxt.js',
    'Remix',
    'TypeScript',
    'Node.js',
    'Laravel',
    'Shopify',
    'Hydrogen',
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
      "Portfolio de Jeremy Audette — développeur web front-end spécialisé React, Next.js, Hydrogen/Shopify. Montréal.",
    siteName: 'Jeremy Audette',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
        
        {/* Footer - after main content, before dock */}
        <div className="os-footer-container">
          <Footer />
        </div>
        
        {/* Dock */}
        <Dock />
        <Analytics />
      </body>
    </html>
  );
}

