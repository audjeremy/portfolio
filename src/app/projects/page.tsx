import Link from 'next/link';
import Image from 'next/image';
import Window from '@/components/os/Window';
import { getAllProjects } from '@/lib/projects';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <Window title="Projets">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Mes projets
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Découvrez une sélection de mes projets récents. Chaque projet représente
            un défi technique et créatif que j'ai relevé avec passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover-lift animate-fadeIn"
              style={{ animationDelay: `${projects.indexOf(project) * 0.1}s` }}
            >
              <div className="relative w-full h-40 sm:h-48 bg-gray-100 overflow-hidden">
                {project.slug === 'provisions' ? (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <span className="text-4xl sm:text-6xl" role="img" aria-label={project.title}>
                      🍎
                    </span>
                  </div>
                ) : project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <span className="text-4xl sm:text-6xl" role="img" aria-label={project.title}>
                      🎵
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                  {project.short}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium text-gray-600">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Window>
  );
}

