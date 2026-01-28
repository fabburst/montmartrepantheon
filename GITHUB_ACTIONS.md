# GitHub Actions Setup

## Note importante

Le workflow GitHub Actions n'a pas pu être ajouté automatiquement car le token GitHub utilisé n'a pas le scope `workflow`.

## Pour ajouter le workflow CI

### Via l'interface GitHub

1. Allez sur https://github.com/fabburst/montmartrepantheon
2. Cliquez sur "Add file" → "Create new file"
3. Nommez le fichier : `.github/workflows/ci.yml`
4. Copiez-collez le contenu ci-dessous
5. Commitez sur master

### Contenu du fichier `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [master, main]
  pull_request:
    branches: [master, main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build
          path: .next
          retention-days: 7
```

## Ce que fait ce workflow

- **Déclenchement** : À chaque push/PR sur master
- **Tests** : Lint + Build
- **Artifacts** : Sauvegarde du build pendant 7 jours

## Badge CI (optionnel)

Après ajout du workflow, ajoutez ce badge dans README.md :

```markdown
[![CI](https://github.com/fabburst/montmartrepantheon/actions/workflows/ci.yml/badge.svg)](https://github.com/fabburst/montmartrepantheon/actions/workflows/ci.yml)
```
