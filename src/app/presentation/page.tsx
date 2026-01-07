import Link from 'next/link';
import Window from '@/components/os/Window';
import ProfilePicture from '@/components/ProfilePicture';

export default function Presentation() {
  return (
    <Window title="Présentation">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Section 1: Qui je suis */}
        <section className="mb-8 sm:mb-12 animate-fadeIn">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Bonjour! Je suis Jeremy Audette
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-start">
            <div className="prose prose-lg dark:prose-invert max-w-none flex-1 order-2 sm:order-1">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
  Au-delà du développement, je suis quelqu’un de curieux et ouvert, qui aime explorer, apprendre et
  comprendre ce qui l’entoure. J’apprécie les projets qui me permettent de réfléchir, de créer et de
  donner du sens à ce que je fais, autant dans le travail que dans le quotidien.
</p>
<p className="text-gray-700 dark:text-gray-300 mb-4">
  Ce que j’aime particulièrement, c’est partir d’une idée et la voir évoluer peu à peu vers quelque
  chose de concret et utile. J’accorde beaucoup d’importance à l’expérience des personnes qui utilisent
  ce que je crée, en cherchant toujours la simplicité, la clarté et le confort d’utilisation.
</p>
<p className="text-gray-700 dark:text-gray-300">
  En dehors du travail, je suis passionné par le cinéma, la musique et la cuisine. Ces intérêts font
  partie de mon quotidien et nourrissent ma créativité, m’aidant à aborder les projets avec un regard
  différent et plus humain.
</p>
            </div>
            <div className="flex-shrink-0 order-1 sm:order-2 sm:ml-auto [&>div]:mb-0">
              <ProfilePicture />
            </div>
          </div>
        </section>

        {/* Section 2: Culture & inspirations */}
        <section className="mb-8 sm:mb-12 animate-fadeIn delay-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Culture & inspirations
          </h2>

          {/* Films */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="text-2xl" role="img" aria-hidden="true">
                🎬
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Films préférés
              </h3>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 mb-4">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                J'adore explorer différents genres de cinéma, des films d'auteur aux blockbusters.
              </p>

              {/* Letterboxd Link */}
              <a
                href="https://letterboxd.com/audjeremy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Voir mon profil Letterboxd
              </a>
            </div>
          </div>

          {/* Livres - Fable */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="text-2xl" role="img" aria-hidden="true">
                📚
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Livres préférés
              </h3>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 mb-4">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                La lecture est une source constante d'inspiration. Voici quelques-uns de mes livres favoris :
              </p>
              
              {/* Fable Link */}
              <a
                href="https://fable.co/jeremy-audette-217923108109?referralID=5N73iGMyjo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Voir mon profil Fable
              </a>
            </div>
          </div>

          {/* Musique */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="text-2xl" role="img" aria-hidden="true">
                🎵
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Musique
              </h3>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                La musique fait partie intégrante de mon processus créatif. Mes chansons favorites de 2025 :
              </p>

              {/* Spotify Embed */}
              {/* TODO: Remplacez l'ID de la playlist (37i9dQZEVXd5jKf3YIFJd8) par votre ID */}
              {/* Pour obtenir l'ID: ouvrez votre playlist sur Spotify, cliquez sur "..." → "Partager" → "Copier le lien de la playlist" */}
              {/* L'ID est la partie après "playlist/" dans l'URL */}
              <div className="mb-4">
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/playlist/37i9dQZEVXd5jKf3YIFJd8?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Playlist"
                />
              </div>

              {/* Spotify Link (fallback) */}
              <a
                href="https://open.spotify.com/user/12163606247"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Voir mon profil Spotify
              </a>
            </div>
          </div>
        </section>

        {/* CV Encart */}
        <section className="animate-fadeIn delay-400">
          <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-300/30 dark:border-emerald-700/30">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Curriculum Vitae
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
              Pour le détail de mon parcours, consultez mon CV complet. Vous pouvez aussi découvrir mes projets pour voir mon travail en action.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Voir mon CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Mes projets
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="/AudetteJeremy-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base font-semibold rounded-lg transition-all border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:scale-105"
                aria-label="Télécharger mon CV en format PDF"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Télécharger PDF
              </a>
            </div>
          </div>
        </section>
      </div>
    </Window>
  );
}

