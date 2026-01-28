# Guide de Test de l'Application

## Tests Manuels à Effectuer

### 1. Navigation et Interface

#### Page d'accueil
- [ ] Le titre "Carnet de Voyage" s'affiche correctement
- [ ] Les deux onglets "MONTMARTRE" et "PANTHÉON" sont visibles
- [ ] L'onglet actif a un fond noir (ink) et texte beige (paper)
- [ ] Le fond général est beige papier (#F5F1E6)

#### Navigation entre les guides
- [ ] Cliquer sur "PANTHÉON" charge le guide correspondant
- [ ] Cliquer sur "MONTMARTRE" revient au premier guide
- [ ] Le nombre d'étapes change selon le guide sélectionné
  - Montmartre : 6 étapes
  - Panthéon : 8 étapes

### 2. Affichage des Étapes

#### Images
- [ ] Les images se chargent depuis Unsplash
- [ ] L'effet "encre" est visible :
  - Images en noir et blanc (grayscale)
  - Contraste augmenté
  - Fusion avec le fond papier (effet dessin à l'encre)
- [ ] Pas de bandes blanches autour des images

#### Contenu textuel
- [ ] Titres en police Playfair Display (serif)
- [ ] Texte courant en police Inter (sans-serif)
- [ ] Durée affichée à droite du titre
- [ ] Numérotation des étapes (1, 2, 3...)

#### Timeline
- [ ] Ligne verticale visible sur le côté gauche
- [ ] Points ronds sur la timeline pour chaque étape
- [ ] Espacement cohérent entre les étapes

### 3. Fonctionnalité Audio

#### Bouton "ÉCOUTER"
- [ ] Le bouton affiche une icône Play initialement
- [ ] Cliquer lance la synthèse vocale
- [ ] Le texte est lu en français
- [ ] Le bouton devient "PAUSE" pendant la lecture
- [ ] Cliquer à nouveau met en pause

#### Qualité de la synthèse
- [ ] La voix est claire et compréhensible
- [ ] Le débit est correct (rate: 0.9)
- [ ] La lecture s'arrête à la fin du texte
- [ ] Une seule piste audio à la fois

#### Tests navigateur
- [ ] **Chrome/Edge** : Meilleure qualité vocale
- [ ] **Firefox** : Fonctionne mais voix différente
- [ ] **Safari** : À tester sur macOS/iOS
- [ ] Mobile Android : À tester
- [ ] Mobile iOS : À tester

### 4. Expansion du Texte

#### Bouton "Lire le texte"
- [ ] Le bouton affiche "Lire le texte" par défaut
- [ ] Cliquer déploie le texte complet
- [ ] Le texte est formaté correctement (paragraphes)
- [ ] Le bouton devient "Masquer le texte"
- [ ] Cliquer à nouveau masque le texte

### 5. Design Responsive

#### Desktop (> 1024px)
- [ ] Contenu centré avec max-width
- [ ] Images en hauteur 320px (h-80)
- [ ] Texte lisible sans scroll horizontal
- [ ] Timeline visible et bien positionnée

#### Tablette (768px - 1024px)
- [ ] Layout adapté
- [ ] Images en hauteur 256px (h-64)
- [ ] Navigation utilisable
- [ ] Pas de débordement

#### Mobile (< 768px)
- [ ] Onglets empilés ou côte à côte
- [ ] Images pleine largeur
- [ ] Texte lisible
- [ ] Boutons cliquables facilement
- [ ] Timeline adaptée

### 6. Performance

#### Chargement initial
- [ ] Page charge en < 3 secondes
- [ ] Pas de flash de contenu non stylé (FOUC)
- [ ] Fonts Google chargées correctement

#### Navigation
- [ ] Changement de guide instantané
- [ ] Pas de lag au scroll
- [ ] Expansion du texte fluide

#### Images
- [ ] Chargement progressif depuis Unsplash
- [ ] Placeholder ou skeleton visible pendant le chargement

### 7. Accessibilité

#### Clavier
- [ ] Navigation possible avec Tab
- [ ] Onglets activables avec Enter/Space
- [ ] Boutons audio activables avec Enter/Space

#### Lecteur d'écran
- [ ] Titres structurés (h1, h2, h3)
- [ ] Images ont des attributs alt
- [ ] Boutons ont des labels clairs

### 8. Contenu

#### Guide Montmartre (6 étapes)
- [ ] 1. Le Funiculaire & la Vue
- [ ] 2. Sacré-Cœur (L'Extérieur)
- [ ] 3. Place du Tertre (La Survie)
- [ ] 4. Rue des Saules & La Vigne
- [ ] 5. Au Lapin Agile
- [ ] 6. Place Dalida & L'Allée des Brouillards

#### Guide Panthéon (8 étapes)
- [ ] 1. La Façade & L'Ambition
- [ ] 2. La Nef & La Lumière
- [ ] 3. Le Pendule de Foucault
- [ ] 4. La Convention Nationale
- [ ] 5. Descente vers la Crypte
- [ ] 6. Voltaire vs Rousseau
- [ ] 7. Le Caveau des Écrivains
- [ ] 8. Les Savants : Pierre & Marie Curie

#### Qualité du contenu
- [ ] Textes captivants et bien écrits
- [ ] Anecdotes historiques précises
- [ ] Ton narratif engageant
- [ ] Longueur appropriée pour audio

### 9. Bugs Connus à Vérifier

- [ ] Synthèse vocale ne fonctionne pas en HTTP (nécessite HTTPS)
- [ ] Safari iOS peut nécessiter une interaction utilisateur avant l'audio
- [ ] Certaines voix peuvent ne pas être disponibles selon le système

### 10. Build et Déploiement

- [ ] `npm run build` réussit sans erreur
- [ ] `npm start` lance le serveur production
- [ ] Application accessible sur le port 3000
- [ ] Bundle size acceptable (< 150KB First Load JS)

## Commandes de Test

```bash
# Développement
npm run dev

# Build production
npm run build

# Test build production
npm start

# Vérifier les types TypeScript
npx tsc --noEmit

# Lint
npm run lint
```

## Navigateurs à Tester Prioritairement

1. Chrome 120+ (Meilleur support Web Speech API)
2. Edge 120+
3. Firefox 120+
4. Safari 17+ (macOS)
5. Safari iOS 17+
6. Chrome Mobile Android

## Checklist Avant Déploiement

- [ ] Tous les tests ci-dessus sont verts
- [ ] Build production fonctionne
- [ ] Aucune erreur console
- [ ] Performance acceptable (Lighthouse > 80)
- [ ] Accessible (niveau AA WCAG)
- [ ] Fonctionne sur mobile
- [ ] Synthèse vocale testée sur plusieurs navigateurs
