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
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Résumé
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Je suis un étudiant en développement web passionné par la création d'expériences utilisateurs
              réfléchies, alliant design et logique. Mon parcours m'a permis de développer une approche globale
              du numérique, centrée sur le développement web moderne et sur l'UX/UI.
            </p>
            <p className="text-gray-700 mb-4">
              Je recherche un stage de fin d'études en développement web ou UI/UX, avec possibilité d'embauche
              à la suite du stage.
            </p>
          </div>

          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <a
              href="tel:+14385044533"
              className="group bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50 hover:shadow-lg transition-shadow"
            >
              <p className="text-xs text-gray-600 mb-1">Téléphone</p>
              <p className="text-sm sm:text-base text-gray-900 font-semibold group-hover:text-emerald-700 transition-colors">
                (438) 504-4533
              </p>
            </a>
            <a
              href="mailto:jeremyaudette@icloud.com"
              className="group bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50 hover:shadow-lg transition-shadow"
            >
              <p className="text-xs text-gray-600 mb-1">Email</p>
              <p className="text-sm sm:text-base text-gray-900 font-semibold break-all group-hover:text-emerald-700 transition-colors">
                jeremyaudette@icloud.com
              </p>
            </a>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50">
              <p className="text-xs text-gray-600">Ville</p>
              <p className="text-sm sm:text-base text-gray-900 font-semibold">Montréal</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/audjeremy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-lg transition-all hover:scale-105"
              aria-label="Voir mon profil GitHub"
            >
              <svg className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 font-medium transition-colors">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jeremy-audette/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-lg transition-all hover:scale-105"
              aria-label="Voir mon profil LinkedIn"
            >
              <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 font-medium transition-colors">LinkedIn</span>
            </a>
          </div>
        </section>

        {/* Compétences techniques - Chips */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Compétences techniques
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Développement Front‑End</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontEnd.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Développement Back‑End</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backEnd.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Design & Multimédia</h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Outils & environnements</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full"
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200/50">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                AEC : Développement de sites web transactionnels
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                Collège Ahuntsic • Février 2026 (fin prévue)
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Formation full stack axée sur la conception, le déploiement et la gestion de sites transactionnels.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200/50">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                DEC : Intégration multimédia (non complété)
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                Collège de Maisonneuve • 2023 – 2025
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Formation axée sur le design, l'animation, la vidéo, le web, la 3D et l'UX/UI.
                Programme interrompu afin de poursuivre une spécialisation en développement web.
              </p>
            </div>
          </div>
        </section>

        {/* Expérience */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Expérience
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3 sm:mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {exp.company}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700">{exp.role}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{exp.period}</p>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm sm:text-base text-gray-700 flex items-start">
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Langues & intérêts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Qualités</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Langues</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {languages.map((lang) => (
                  <li key={lang} className="text-sm sm:text-base text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 sm:mr-3" />
                    {lang}
                  </li>
                ))}
              </ul>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mt-4 sm:mt-6 mb-3 sm:mb-4">Intérêts</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {interests.map((interest) => (
                  <li key={interest} className="text-sm sm:text-base text-gray-700 flex items-center">
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

