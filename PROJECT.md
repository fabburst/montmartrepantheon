# Montmartre & Panthéon - Documentation Projet

## Vue d'ensemble

Application web audioguide de luxe pour découvrir deux lieux emblématiques de Paris : Montmartre et le Panthéon. L'interface est conçue comme un carnet de voyage interactif avec un design inspiré du papier et de l'encre.

## Caractéristiques principales

### Design "Carnet de Voyage"
- Fond papier beige (#F5F1E6) évoquant du papier ancien
- Texte encre anthracite (#2C2C2C)
- Images avec effet encre : grayscale + contrast + mix-blend-mode
- Typographie élégante : Playfair Display (serif) + Inter (sans-serif)
- Timeline verticale avec points de progression

### Contenu

#### Guide Montmartre (1h - 6 étapes)
1. Le Funiculaire & la Vue (3 min)
2. Sacré-Cœur - L'Extérieur (4 min)
3. Place du Tertre - La Survie (2 min)
4. Rue des Saules & La Vigne (3 min)
5. Au Lapin Agile (4 min)
6. Place Dalida & L'Allée des Brouillards (5 min)

#### Guide Panthéon (1h30 - 8 étapes)
1. La Façade & L'Ambition (6 min)
2. La Nef & La Lumière (7 min)
3. Le Pendule de Foucault (8 min)
4. La Convention Nationale (5 min)
5. Descente vers la Crypte (4 min)
6. Voltaire vs Rousseau (9 min)
7. Le Caveau des Écrivains (10 min)
8. Les Savants : Pierre & Marie Curie (12 min)

### Fonctionnalités

- **Synthèse vocale** : Web Speech API avec voix française native
- **Lecture audio** : Bouton Play/Pause pour chaque étape
- **Texte déroulant** : Option pour lire en suivant l'audio
- **Navigation par onglets** : Basculer entre Montmartre et Panthéon
- **Responsive** : S'adapte du mobile au desktop
- **Performance** : Build statique optimisé (~114 KB)

## Stack Technique

### Frontend
- **Next.js 15.5.10** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4** avec @tailwindcss/postcss

### Dépendances
- **lucide-react** (icônes)
- **Web Speech API** (synthèse vocale native du navigateur)

### Outils de développement
- **ESLint** (linting)
- **PostCSS** (processing CSS)
- **GitHub Actions** (CI/CD)

## Structure du Projet

```
montmartrepantheon/
├── app/
│   ├── globals.css          # Styles globaux + Tailwind
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil avec navigation
├── components/
│   ├── AudioPlayer.tsx       # Composant lecteur audio
│   └── InkImage.tsx          # Composant image avec effet encre
├── data/
│   └── guides.ts             # Contenu des guides (hardcodé)
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions CI
├── public/                   # Assets statiques
├── DEPLOY.md                 # Guide de déploiement
├── TESTING.md                # Guide de test
├── PROJECT.md                # Ce fichier
├── README.md                 # Documentation principale
├── package.json              # Dépendances npm
├── tsconfig.json             # Configuration TypeScript
├── tailwind.config.ts        # Configuration Tailwind
├── postcss.config.mjs        # Configuration PostCSS
├── next.config.ts            # Configuration Next.js
└── .gitignore                # Fichiers ignorés par Git
```

## Points Techniques Importants

### Tailwind CSS 4
- Utilise la nouvelle syntaxe `@import "tailwindcss"`
- Plugin PostCSS : `@tailwindcss/postcss`
- Configuration dans `tailwind.config.ts`

### Web Speech API
- Fonctionne uniquement en HTTPS (ou localhost)
- Nécessite interaction utilisateur sur certains navigateurs
- Meilleure compatibilité sur Chrome/Edge
- Rate: 0.9 (légèrement plus lent pour meilleure compréhension)
- Lang: fr-FR

### Images
- Hébergées sur Unsplash (CDN externe)
- Effet "encre" avec mix-blend-mode: multiply
- Grain ajouté via SVG inline

### Build
- Mode statique (SSG)
- Pré-rendu de toutes les pages
- Aucune API route
- Aucune variable d'environnement requise

## Performance

### Métriques
- **First Load JS** : ~114 KB
- **Page principale** : 12.1 KB (+ shared 102 KB)
- **Build time** : ~92s
- **Mode** : Static (○)

### Optimisations
- Images chargées via CDN Unsplash
- CSS optimisé par Tailwind
- JavaScript minimal (pas de libraries lourdes)
- Fonts Google avec display=swap

## Compatibilité Navigateurs

### Desktop
- ✅ Chrome 120+ (Recommandé)
- ✅ Edge 120+
- ✅ Firefox 120+
- ✅ Safari 17+

### Mobile
- ✅ Chrome Android
- ⚠️ Safari iOS (nécessite interaction utilisateur pour audio)
- ✅ Firefox Android

## Déploiement

### Plateformes Supportées
1. **Vercel** (Recommandé) - Détection automatique Next.js
2. **Netlify** - Configuration manuelle requise
3. **Cloudflare Pages** - Support Next.js
4. **GitHub Pages** - Non recommandé (pas de SSR)

### Variables d'Environnement
Aucune variable d'environnement n'est nécessaire.

### Commandes
```bash
npm run build  # Build production
npm start      # Lance le serveur production
npm run dev    # Mode développement
npm run lint   # Vérification code
```

## Roadmap Potentielle

### Court terme
- [ ] Tests unitaires (Jest + React Testing Library)
- [ ] Tests E2E (Playwright)
- [ ] Amélioration accessibilité (ARIA)
- [ ] Mode sombre

### Moyen terme
- [ ] Plus de guides (Louvre, Versailles, etc.)
- [ ] Géolocalisation réelle
- [ ] Notifications de proximité
- [ ] Téléchargement audio offline

### Long terme
- [ ] Application mobile native (React Native)
- [ ] Backend pour contenu dynamique
- [ ] Système de favoris
- [ ] Partage social

## Contribution

Ce projet est actuellement personnel. Pour toute suggestion :
1. Ouvrir une issue sur GitHub
2. Proposer une Pull Request
3. Contacter le mainteneur

## Licence

Tous droits réservés - Projet personnel

## Auteur

Créé par Fab avec l'assistance de Claude Sonnet 4.5

## Liens

- **Repository** : https://github.com/fabburst/montmartrepantheon
- **Demo** : (À déployer)
- **Issues** : https://github.com/fabburst/montmartrepantheon/issues
