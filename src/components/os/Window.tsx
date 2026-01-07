'use client';

import { ReactNode, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface WindowProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Window({ title, subtitle, children }: WindowProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Animation d'ouverture au montage (sauf pour la page d'accueil)
    if (pathname !== '/') {
      setIsOpening(true);
      const timer = setTimeout(() => {
        setIsOpening(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsClosing(true);
    // Attendre la fin de l'animation avant de naviguer
    setTimeout(() => {
      router.push('/');
    }, 300);
  };

  return (
    <div 
      className={`os-window ${isOpening ? 'os-window-opening' : ''} ${isClosing ? 'os-window-closing' : ''}`}
    >
      {/* Title Bar */}
      <div className="os-titlebar">
        {/* Traffic Lights */}
        <div className="os-traffic">
          <button
            className="os-traffic-light red"
            aria-label="Fermer"
            onClick={handleClose}
          />
          <button
            className="os-traffic-light yellow"
            aria-label="Réduire"
            onClick={() => {}}
          />
          <button
            className="os-traffic-light green"
            aria-label="Agrandir"
            onClick={() => {}}
          />
        </div>

        {/* Title */}
        <div className="text-center flex-1 px-2 sm:px-0">
          <h1 className="os-window-title text-xs sm:text-sm truncate">{title}</h1>
          {subtitle && (
            <p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="os-window-content">
        {children}
      </div>
    </div>
  );
}

