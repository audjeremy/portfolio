import Window from '@/components/os/Window';

export default function About() {
  const skills = {
    frontEnd: [
      'HTML',
      'CSS (Flexbox, Grid, SCSS, Tailwind, Bootstrap)',
      'JavaScript',
      'TypeScript',
      'React',
      'Fetch API / JSON',
      'Responsive Design',
      'Figma (UX/UI)',
    ],
    backEnd: [
      'PHP',
      'Laravel',
      'Node.js',
      'Express.js',
      'REST API',
      'MVC',
      'Authentification',
      'MySQL',
      'MongoDB',
      'CRUD',
      'Postman',
    ],
    design: ['Figma', 'Photoshop', 'Illustrator', 'After Effects', 'UI/UX', 'Design responsive'],
    tools: ['Git', 'GitHub', 'Docker', 'npm', 'VS Code', 'JSON Server', 'Postman', 'Vercel', 'macOS', 'Accessibilité web'],
  };

  const experiences = [
    {
      company: 'La Pat Mobile',
      period: '2019 – Présent',
      role: 'Food Truck — Caissier / Cuisinier',
      bullets: [
        'Prise de commandes et service client dans un environnement très rapide.',
        "Contribué à optimiser le système de prise de commandes, résultant en une réduction du temps d'attente client.",
        'Préparation des plats sous pression.',
        "Collaboration avec l'équipe pour assurer un service efficace et cohérent.",
      ],
    },
    {
      company: 'FLYOS Games',
      period: 'Été 2024',
      role: 'Compagnie de jeux de société — Stagiaire vidéo',
      bullets: [
        "Réalisé le montage et l'étalonnage de plusieurs vidéos promotionnelles pour les campagnes marketing de l'entreprise.",
        "Respecter le budget et l'échéancier de remises.",
        "Collaborer avec l'équipe pour le tournage des vidéos.",
      ],
    },
    {
      company: 'Valentine (Chambly)',
      period: '2017 – 2020',
      role: 'Restaurant — Caissier / Cuisinier',
      bullets: [
        'Accueil des clients, prise de commandes et encaissement.',
        "Préparation des plats selon les normes d'hygiène.",
        'Entretien des espaces de travail.',
        "Travail en équipe dans un environnement dynamique.",
      ],
    },
  ];

  const softSkills = ['Créatif', 'Polyvalent', 'Autonome', 'Ponctuel', "Sens de l'écoute", 'Réfléchi', 'Organisé', 'Communicateur'];
  const interests = ['Cinéma', 'Lecture', 'Cuisine', 'Jeux Vidéos'];
  const languages = ['Français', 'Anglais'];

  return (
    <Window title="CV">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Header */}
        <section className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
            CV
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            Développeur web – Montréal
          </p>
          
          {/* CV Download Button - Moved to top */}
          <div className="mb-6 sm:mb-8">
            <a
              href="/AudetteJeremy-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Télécharger mon CV (PDF)
            </a>
          </div>
          
          {/* Résumé */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Résumé
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Je suis un étudiant en développement web passionné par la création d'expériences utilisateurs
              réfléchies, alliant design et logique. Mon parcours m'a permis de développer une approche globale
              du numérique, centrée sur le développement web moderne et sur l'UX/UI.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Je recherche un stage de fin d'études en développement web ou UI/UX, avec possibilité d'embauche
              à la suite du stage.
            </p>
          </div>

          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <a
              href="tel:+14385044533"
              className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-shadow"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Téléphone</p>
              <p className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                (438) 504-4533
              </p>
            </a>
            <a
              href="mailto:jeremyaudette@icloud.com"
              className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-shadow"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Email</p>
              <p className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold break-all group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                jeremyaudette@icloud.com
              </p>
            </a>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-xs text-gray-500 dark:text-gray-400">Ville</p>
              <p className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold">Montréal</p>
            </div>
          </div>
        </section>

        {/* Compétences techniques - Chips */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Compétences techniques
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Développement Front‑End</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontEnd.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Développement Back‑End</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backEnd.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Design & Multimédia</h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Outils & environnements</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formation */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AEC : Développement de sites web transactionnels
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                Collège Ahuntsic • Février 2026
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Formation full stack axée sur la conception, le déploiement et la gestion de sites transactionnels.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                DEC : Intégration multimédia (non complété)
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                Collège de Maisonneuve • 2023 – 2025
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Formation axée sur le design, l'animation, la vidéo, le web, la 3D et l'UX/UI.
                Programme interrompu afin de poursuivre une spécialisation en développement web.
              </p>
            </div>
          </div>
        </section>

        {/* Expérience */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Expérience
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3 sm:mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.company}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{exp.role}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="mt-2 w-2 h-2 bg-emerald-600 rounded-full mr-2 sm:mr-3 shrink-0" />
                      <span className="break-words">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Langues & intérêts */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Langues & intérêts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Qualités</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Langues</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {languages.map((lang) => (
                  <li key={lang} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 sm:mr-3" />
                    {lang}
                  </li>
                ))}
              </ul>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-4 sm:mt-6 mb-3 sm:mb-4">Intérêts</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {interests.map((interest) => (
                  <li key={interest} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 sm:mr-3" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </Window>
  );
}

