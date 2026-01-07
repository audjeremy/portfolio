import Link from 'next/link';
import Window from '@/components/os/Window';

export default function Home() {
  const skills = [
    {
      name: 'Développement Front‑End',
      items: ['HTML', 'CSS (Grid/Flexbox)', 'JavaScript', 'TypeScript', 'React', 'Tailwind'],
    },
    {
      name: 'Développement Back‑End',
      items: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST API', 'MySQL', 'MongoDB'],
    },
    {
      name: 'Design & Outils',
      items: ['Figma (UX/UI)', 'Git/GitHub', 'Docker', 'npm', 'Postman', 'Vercel'],
    },
  ];

  return (
    <Window title="Accueil">
      <div className="p-8 md:p-12">
        {/* Hero Section */}
        <section className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Bonjour, je suis{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Jeremy Audette
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Développeur web
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Étudiant en développement web passionné par la création d'expériences utilisateurs réfléchies,
            alliant design et logique. Je recherche un stage de fin d'études en développement web ou UI/UX,
            avec possibilité d'embauche par la suite.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-200">
            <Link
              href="/projects"
              className="group px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="inline-flex items-center gap-2">
                Voir mes projets
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg transition-all border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:scale-105"
            >
              Me contacter
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-16 animate-fadeIn delay-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((category, idx) => (
              <div
                key={category.name}
                className={`bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover-lift hover-glow animate-scaleIn delay-${(idx + 1) * 100}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Window>
  );
}

