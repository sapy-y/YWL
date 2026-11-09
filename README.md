# Site web Young Women Leaders (YWL)

Site vitrine en **React** (Vite + React Router + Tailwind CSS), **sans base de données** :
tout le contenu (activités, événements, invitées, galerie) est géré dans de simples fichiers
de données que tu peux modifier toi-même, sans backend ni serveur.

## 1. Installer et lancer le site en local

Il faut [Node.js](https://nodejs.org) installé (version 18 ou plus).

```bash
npm install
npm run dev
```

Le site s'ouvre sur `http://localhost:5173`.

## 2. Modifier le contenu du site

Tout le contenu éditable est dans le dossier `src/data/` :

| Fichier | Contenu |
|---|---|
| `src/data/activities.js` | Liste "Nos activités" |
| `src/data/events.js` | Événements (à venir / passés) |
| `src/data/guests.js` | Femmes inspirantes invitées |
| `src/data/impact.js` | Actions YWL Impact |
| `src/data/gallery.js` | Photos / vidéos de la galerie |

Pour ajouter une photo : place le fichier image dans `src/assets/` (ou `src/assets/gallery/`),
importe-la en haut du fichier de données concerné, puis utilise-la dans l'entrée correspondante.

Le logo utilisé sur le site est `src/assets/logo.jpg`.

## 3. Formulaires "Rejoindre YWL" et "Contact" (sans base de données)

Les deux formulaires envoient directement un **email** à l'équipe YWL via
[FormSubmit](https://formsubmit.co) (gratuit, sans compte ni clé), sans backend ni base de
données. L'adresse de la personne est utilisée comme adresse de réponse.

Les formulaires sont **désactivés pour le moment** (message « bientôt disponible »). Pour les
activer :

1. Dans `src/lib/formsubmit.js`, passe `FORMS_ENABLED` à `true`.
2. Envoie un premier message depuis le site.
3. Ouvre l'e-mail « Activate Form » reçu sur la boîte YWL et clique sur le lien.

## 4. Mettre le site en ligne (hébergement gratuit, sans serveur)

Comme il n'y a pas de base de données, le site est 100% "statique" : il peut être hébergé
gratuitement en quelques clics, par exemple avec **Netlify** ou **Vercel** :

1. Mets le projet sur GitHub.
2. Sur [netlify.com](https://netlify.com) ou [vercel.com](https://vercel.com), connecte le
   dépôt GitHub.
3. Build command : `npm run build` — Dossier de sortie (publish directory) : `dist`
4. Déploie — le site est en ligne avec un lien gratuit (ex: `ywl.netlify.app`), et tu peux
   ensuite y relier un nom de domaine personnalisé.

## 5. Structure du projet

```
src/
  assets/        → logo et images
  components/     → Navbar, Footer, PageHero (réutilisés sur toutes les pages)
  data/           → tout le contenu éditable (voir section 2)
  lib/formsubmit.js → envoi des formulaires par email
  pages/          → une page par section du site (Accueil, À propos, Activités,
                    Événements, YWL Impact, Nos Guest, Galerie, Rejoindre YWL, Contact)
  App.jsx         → routes du site
  main.jsx        → point d'entrée
```

## 6. Prochaines évolutions possibles

- Ajouter une vraie galerie photo au fil des rencontres (`src/data/gallery.js`).
- Ajouter les vraies invitées dans `src/data/guests.js`.
- Remplacer les liens réseaux sociaux (Instagram, TikTok, LinkedIn) dans
  `src/components/Footer.jsx` et `src/pages/Contact.jsx` par les vrais comptes YWL.
- Si un jour une base de données devient nécessaire (ex: gérer les inscriptions
  directement depuis le site), on pourra ajouter un backend léger sans tout reconstruire.
