import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Window from '@/components/os/Window';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Window title={project.title}>
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-sm sm:text-base text-emerald-700 dark:text-emerald-300 hover:underline mb-4 sm:mb-6"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Retour aux projets
        </Link>

        {/* Project Hero */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
            {project.short}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 dark:bg-gray-700 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Voir le code
              </a>
            )}
            {project.demo && project.demo !== '' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 dark:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
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
                Voir le projet
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Description
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Points forts
          </h2>
          <ul className="space-y-2 sm:space-y-3">
            {project.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50 dark:border-gray-700/50"
              >
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-words">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Images Preview */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Aperçu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {project.images.length > 0 ? (
              project.images.map((imagePath, index) => (
                <div
                  key={index}
                  className="relative w-full min-h-64 sm:min-h-96 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center p-4"
                >
                  <Image
                    src={imagePath}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))
            ) : (
              <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-xl flex flex-col items-center justify-center border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-4xl mb-2" role="img" aria-hidden="true">🖼️</span>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Aperçu bientôt</span>
              </div>
            )}
          </div>
        </section>
      </div>
    </Window>
  );
}

