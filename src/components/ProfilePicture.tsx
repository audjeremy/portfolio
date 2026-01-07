'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProfilePicture() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 rounded-full overflow-hidden border-4 border-emerald-500/30 dark:border-emerald-400/30 shadow-lg bg-gradient-to-br from-emerald-500/20 to-teal-600/20">
      {!imageError ? (
        <Image
          src="/profile-pic.png"
          alt="Jeremy Audette"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 128px, 160px"
          priority
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl">
          <span role="img" aria-hidden="true">👤</span>
        </div>
      )}
    </div>
  );
}

