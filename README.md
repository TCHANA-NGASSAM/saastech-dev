# SAASTECH

Site vitrine marketing de **SAASTECH**, agence de transformation digitale (Europe & Afrique).

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui
- Framer Motion + Lenis (scroll fluide)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | ESLint |

## Structure

```
app/                  Pages et routes API
src/components/       Composants UI et sections
src/data/             Données statiques (site, services, projets)
src/shadcn/           Design system shadcn
```

## Configuration

Les informations globales (contact, stats, navigation) sont centralisées dans `src/data/site.ts`.

Les projets et services sont dans `src/data/projects.ts` et `src/data/services.ts`.

### Formulaires

Les endpoints `/api/contact` et `/api/newsletter` valident les données côté serveur.  
Sans webhook configuré, les soumissions sont loguées en console.

Variables d'environnement optionnelles :

```env
CONTACT_WEBHOOK_URL=https://...
NEWSLETTER_WEBHOOK_URL=https://...
```

## Pages

- `/` — Accueil
- `/services` — Liste des services
- `/services/[slug]` — Détail service
- `/projet` — Portfolio
- `/projet/[slug]` — Détail projet
- `/contact` — Formulaire de contact
