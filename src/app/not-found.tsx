import Link from 'next/link';
import Window from '@/components/os/Window';

export default function NotFound() {
  return (
    <Window title="Page non trouvée">
      <div className="p-8 md:p-12 text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Icon */}
          <div className="text-8xl mb-6">🔍</div>

          {/* Error Message */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Erreur 404
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Oups ! La page que vous cherchez n'existe pas.
          </p>

          {/* Back Home Button */}
          <Link
            href="/"
          className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </Window>
  );
}

