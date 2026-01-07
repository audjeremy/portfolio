# Portfolio macOS

Portfolio interactif avec une interface inspirée de macOS Sonoma/Ventura.

## 🎨 Fonctionnalités

- **Interface macOS moderne** : Menu bar, dock interactif, et fenêtres avec effet glass
- **Navigation fluide** : Transitions légères et animations soignées
- **Responsive** : S'adapte à tous les écrans (desktop, tablette, mobile)
- **Dark mode** : Support automatique selon les préférences système
- **Accessibilité** : Focus visible, labels ARIA, contraste optimisé
- **Projets dynamiques** : Pages de projets générées statiquement
- **Formulaire de contact** : API route avec validation

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Lancer en production
npm start
```

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── app/                    # Pages et routes
│   │   ├── layout.tsx          # Layout principal avec OS wrapper
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── about/              # Page À propos
│   │   ├── projects/           # Liste et détails des projets
│   │   ├── contact/            # Formulaire de contact
│   │   ├── api/contact/        # API route pour le formulaire
│   │   └── globals.css         # Styles globaux et thème macOS
│   ├── components/
│   │   └── os/                 # Composants de l'interface OS
│   │       ├── MenuBar.tsx     # Barre de menu en haut
│   │       ├── Dock.tsx        # Dock en bas
│   │       └── Window.tsx      # Fenêtre réutilisable
│   ├── data/
│   │   └── projects.ts         # Données des projets
│   └── lib/
│       └── projects.ts         # Utilitaires pour les projets
└── public/
    └── wallpaper.jpg           # Fond d'écran
```

## 🎨 Personnalisation

### Changer les couleurs

Modifiez les variables CSS dans `src/app/globals.css` :

```css
:root {
  --macos-red: #ff5f56;
  --macos-yellow: #ffbd2e;
  --macos-green: #27c93f;
  /* ... */
}
```

### Ajouter des projets

Éditez `src/data/projects.ts` et ajoutez vos projets :

```typescript
{
  slug: 'mon-projet',
  title: 'Mon Projet',
  short: 'Description courte',
  description: 'Description complète...',
  tech: ['React', 'Node.js'],
  // ...
}
```

### Modifier le fond d'écran

Remplacez `public/wallpaper.jpg` par votre image, ou modifiez le gradient dans `globals.css` :

```css
.os-wallpaper {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}
```

## 🌐 Déploiement

Le projet est prêt pour être déployé sur Vercel :

```bash
vercel deploy
```

Ou sur n'importe quelle plateforme supportant Next.js.

## 📝 TODO

- [ ] Ajouter de vraies images de projets dans `/public/projects/`
- [ ] Ajouter le fichier CV dans `/public/cv.pdf`
- [ ] Configurer un service d'envoi d'emails (SendGrid, Resend, etc.)
- [ ] Ajouter des métadonnées SEO spécifiques par page
- [ ] Optimiser les images avec next/image

## 📄 Licence

MIT - Libre d'utilisation et de modification.

---

Créé avec ❤️ par Jérémy Audette

