# Guide de Déploiement

## Déploiement sur Vercel (Recommandé)

### Option 1 : Via l'interface web

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Cliquez sur "Import Project"
4. Sélectionnez le repository `montmartrepantheon`
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"

### Option 2 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel
```

Le site sera disponible sur une URL type: `montmartrepantheon.vercel.app`

## Déploiement sur Netlify

### Via l'interface web

1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez sur "Add new site" → "Import an existing project"
3. Connectez GitHub et sélectionnez le repository
4. Configuration :
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

### Via CLI

```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

## Déploiement sur Cloudflare Pages

1. Allez sur [dash.cloudflare.com/pages](https://dash.cloudflare.com/pages)
2. Cliquez sur "Create a project"
3. Connectez GitHub et sélectionnez le repository
4. Configuration :
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Framework preset: Next.js

## Variables d'environnement

Aucune variable d'environnement n'est nécessaire pour le moment.

## Notes importantes

- Le site est pré-rendu en mode statique (SSG)
- La synthèse vocale fonctionne uniquement côté client (navigateur)
- Assurez-vous que HTTPS est activé pour une meilleure compatibilité avec Web Speech API
- Le site fonctionne parfaitement sans serveur backend

## Tests avant déploiement

```bash
# Build local
npm run build

# Tester le build
npm start

# Ouvrir http://localhost:3000
```

## Performance

- Taille du bundle: ~114 KB (First Load JS)
- Site pré-rendu: chargement instantané
- Images chargées depuis Unsplash CDN
- Pas de requêtes API côté serveur
