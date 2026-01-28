# Montmartre & Panthéon - Audioguide

Une application web audioguide de luxe pour découvrir Montmartre et le Panthéon à Paris.

## Description

Cette application est conçue comme un **carnet de voyage interactif** avec un design inspiré du papier, de l'encre et du dessin à la main. Elle propose deux visites guidées :

### Montmartre - La Balade Bohème (1h)
6 étapes géolocalisées pour découvrir le quartier historique des artistes :
- Le Funiculaire & la Vue
- Sacré-Cœur (L'Extérieur)
- Place du Tertre (La Survie)
- Rue des Saules & La Vigne
- Au Lapin Agile
- Place Dalida & L'Allée des Brouillards

### Panthéon - La Grande Visite (1h30)
8 étapes approfondies dans le temple républicain :
- La Façade & L'Ambition
- La Nef & La Lumière
- Le Pendule de Foucault
- La Convention Nationale
- Descente vers la Crypte
- Voltaire vs Rousseau
- Le Caveau des Écrivains
- Les Savants : Pierre & Marie Curie

## Fonctionnalités

- **Synthèse vocale native** : Utilise Web Speech API pour la lecture audio
- **Design "Carnet de Voyage"** : Fond papier beige, effet encre sur les images
- **Interface élégante** : Typographie Playfair Display + Inter
- **Navigation simple** : Deux onglets pour changer de guide
- **Texte déroulant** : Option pour lire le texte pendant l'écoute
- **Responsive** : S'adapte à tous les écrans

## Stack Technique

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (icônes)
- **Web Speech API** (synthèse vocale)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build

```bash
npm run build
npm start
```

## Design

### Palette de couleurs
- **Fond Papier** : `#F5F1E6` (beige crème chaud)
- **Encre** : `#2C2C2C` (anthracite très foncé)

### Effet "Encre"
Les images utilisent une combinaison de filtres CSS pour obtenir un effet dessin à l'encre :
- `grayscale` : Noir et blanc
- `contrast-125` : Contraste renforcé
- `mix-blend-mode: multiply` : Fusion avec le fond papier

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Texte courant** : Inter (sans-serif lisible)

## Déploiement

L'application peut être déployée sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **Cloudflare Pages**
- Tout hébergeur supportant Next.js

## Utilisation

1. Sélectionnez votre visite (Montmartre ou Panthéon)
2. Cliquez sur "ÉCOUTER" pour lancer la lecture audio
3. Cliquez sur "Lire le texte" pour afficher le contenu écrit
4. Suivez les étapes dans l'ordre pour une expérience optimale

## Notes

- La synthèse vocale utilise la voix française par défaut du navigateur
- Meilleure expérience sur Chrome/Edge (meilleure qualité vocale)
- Compatible avec tous les navigateurs modernes

## Licence

Projet personnel - Tous droits réservés

---

Créé avec Claude Sonnet 4.5
