'use client';

import { ReactNode } from 'react';

interface WindowProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Window({ title, subtitle, children }: WindowProps) {
  return (
    <div className="os-window">
      {/* Title Bar */}
      <div className="os-titlebar">
        {/* Traffic Lights */}
        <div className="os-traffic">
          <button
            className="os-traffic-light red"
            aria-label="Fermer"
            onClick={() => {}}
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
        <div className="text-center">
          <h1 className="os-window-title">{title}</h1>
          {subtitle && (
            <p className="text-xs text-gray-600 dark:text-gray-400">{subtitle}</p>
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

