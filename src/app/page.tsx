import Link from 'next/link';
import Window from '@/components/os/Window';
import ProfilePicture from '@/components/ProfilePicture';
import SkillsDropdown from '@/components/SkillsDropdown';
import { getAllProjects } from '@/lib/projects';

export default function Home() {
  const projects = getAllProjects().slice(0, 3); // Top 3 projets
  
  const skills = {
    frontEnd: ['HTML', 'CSS (Grid/Flexbox)', 'JavaScript', 'TypeScript', 'React', 'Tailwind'],
    backEnd: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST API', 'MySQL', 'MongoDB'],
    tools: ['Figma (UX/UI)', 'Git/GitHub', 'Docker', 'npm', 'Postman', 'Vercel'],
  };

  return (
    <Window title="Accueil">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Hero Section */}
        <section className="text-center mb-8 sm:mb-12 animate-fadeIn">
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            {/* Photo de profil */}
            <ProfilePicture />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
              Bonjour, je suis{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Jeremy Audette
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              Développeur web
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
              Étudiant en développement web passionné par la création d'expériences utilisateurs réfléchies,
              alliant design et logique. Je recherche un stage de fin d'études en développement web ou UI/UX,
              avec possibilité d'embauche par la suite.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fadeIn delay-200 px-4">
            <Link
              href="/projects"
              className="group px-6 sm:px-8 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="inline-flex items-center gap-2 justify-center">
                Voir mes projets
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <a
              href="/AudetteJeremy-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 sm:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base font-semibold rounded-lg transition-all border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV
            </a>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base font-semibold rounded-lg transition-all border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:scale-105"
            >
              Me contacter
            </Link>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mt-8 sm:mt-12 md:mt-16 animate-fadeIn delay-300">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Projets phares
            </h2>
            <Link
              href="/projects"
              className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors inline-flex items-center gap-1"
            >
              Voir tous les projets
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <span className="text-4xl sm:text-6xl" role="img" aria-label={project.title}>
                    {project.slug === 'provisions' && '🛒'}
                    {project.slug === 'la-porte' && '🍽️'}
                    {project.slug === 'portfolio-macos' && '💻'}
                  </span>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                    {project.short}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 sm:flex-none px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-center"
                    >
                      Détails
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-semibold bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg transition-colors inline-flex items-center gap-1.5"
                        aria-label={`Voir le code de ${project.title}`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <span
                        className="px-4 py-2 text-sm font-semibold bg-gray-400 dark:bg-gray-600 text-white rounded-lg cursor-not-allowed opacity-60 inline-flex items-center gap-1.5"
                        aria-label={`Démo à venir pour ${project.title}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        DÉMO À VENIR
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section - Dropdown */}
        <section className="mt-8 sm:mt-12 md:mt-16 animate-fadeIn delay-400">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            Compétences
          </h2>
          <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <SkillsDropdown title="Front-End" items={skills.frontEnd} />
            <SkillsDropdown title="Back-End" items={skills.backEnd} />
            <SkillsDropdown title="Outils" items={skills.tools} />
          </div>
        </section>

        {/* CV en bref */}
        <section className="mt-8 sm:mt-12 md:mt-16 animate-fadeIn delay-500">
          <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-300/30 dark:border-emerald-700/30">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              CV en bref
            </h2>
            <div className="space-y-3 sm:space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">Formation:</span>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  AEC : Développement de sites web transactionnels — Collège Ahuntsic (Février 2026)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">Objectif:</span>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Recherche d'un stage de fin d'études en développement web ou UI/UX, avec possibilité d'embauche par la suite
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Voir mon CV complet
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </Window>
  );
}

