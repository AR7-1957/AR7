# AR7.ch · Les petits explorateurs

Site de quiz et de mini-jeux pour les **7-9 ans** (créé pour Alessandro, 7 ans) : Football, Géographie, Étoiles & espace.
C'est le site frère de **LR5.ch** (pour Lorenzo) : même moteur, avec sa propre configuration, ses couleurs bleues, sa mascotte et ses questions.
C'est un **site statique** : de simples fichiers HTML, CSS et JavaScript. Pas de base de données, pas de serveur, pas d'installation, pas d'étape de « build ».

## Ce qu'il y a dedans

- **3 univers et un « Grand mélange »** : 254 questions courtes et simples (86 sur le foot, 84 en géographie avec les animaux du monde, 84 sur l'espace)
- **3 niveaux** : Découverte (très facile, pour commencer à 7 ans), Explorateur (un peu plus dur), Expert (pour les grands de 9 ans)
- **Quiz rapide** (8 questions), **Défi chrono** (90 secondes) et **Question du jour** (la même pour tout le monde, chaque jour)
- **« Le savais-tu ? »** après chaque réponse
- **Étoiles ⭐, badges et album**
- **Mini-jeux** : L'épreuve des 11 mètres (penalties, avec un gardien plus gentil que sur LR5) et le Memory des drapeaux (4 paires au début, puis une de plus à chaque partie, jusqu'à 6)
- **Espace parents** (`parents.html`) : il explique qu'il n'y a ni compte, ni collecte, ni pub, et que la progression reste sur l'appareil

Les questions et les réponses sont mélangées à chaque partie, et une question ne revient pas pendant la même session tant que le paquet n'est pas épuisé.

## Structure

```
index.html          page principale (toutes les pages du jeu, navigation par #/...)
parents.html        espace parents
js/config.js        ★ LA CONFIGURATION : nom, slogan, couleurs, mascotte, univers, niveaux, badges
js/app.js           moteur : quiz, chrono, question du jour, étoiles, badges, album
js/penalty.js       mini-jeu des penalties
js/memory.js        mini-jeu memory des drapeaux
js/flags.js         drapeaux dessinés en SVG (sans aucune image externe)
data/football.js    questions du foot
data/geographie.js  questions de géographie
data/espace.js      questions sur l'espace
css/style.css       style
assets/mascotte.svg mascotte (Momo la marmotte, maillot bleu n°7)
assets/favicon.svg  icône d'onglet
tools/valider-questions.js   vérifie les questions
vercel.json         en-têtes de sécurité (bloque tout script ou contenu externe)
```

## Ajouter ou corriger une question

1. Ouvre le fichier de l'univers, par exemple `data/espace.js`.
2. Copie une ligne `{ "id": ..., ... },` et colle-la à la fin de la liste, avant `];`.
3. Change :
   - `id` : un identifiant **unique**, par exemple `"esp-085"`
   - `theme` : la petite étiquette affichée, par exemple `"Planètes"`
   - `difficulte` : `1` (facile), `2` (moyen) ou `3` (difficile)
   - `question`, puis `choix` : **exactement 4** réponses
   - `bonne_reponse` : la position de la bonne réponse dans `choix`, **en comptant à partir de 0** (0 = la 1re, 1 = la 2e, 2 = la 3e, 3 = la 4e)
   - `savais_tu` : l'anecdote affichée après la réponse
   - `drapeau` (facultatif) : le code d'un pays de `js/flags.js` (`"ch"`, `"fr"`, `"jp"`…), pour afficher un drapeau
4. Vérifie avec Node.js (si tu l'as) : `node tools/valider-questions.js`. Il contrôle les 4 choix, la bonne réponse, les identifiants en double, etc.

Ce n'est pas grave si la bonne réponse est toujours la première de la liste : les réponses sont mélangées à l'affichage.
Pour AR7, fais des phrases courtes et utilise des mots simples, pour qu'un enfant de 7 ans qui commence à lire puisse suivre. Écris seulement des faits stables et vérifiés. Évite les choses qui changent, comme l'équipe actuelle d'un joueur ou les derniers résultats.

## Ajouter un univers

1. Crée `data/animaux.js` sur le modèle des autres, avec `window.QUIZ_QUESTIONS.animaux = [ ... ];`.
2. Ajoute une ligne dans `univers` dans `js/config.js` : `{ id: "animaux", nom: "Animaux", emoji: "🦊", description: "...", fichier: "data/animaux.js" }`.
3. Ajoute une couleur de carte dans `css/style.css` : `.u-animaux{background:linear-gradient(135deg,#xxxxxx,#yyyyyy)}`.

## Régler le site (js/config.js)

Tout ce qui est propre à AR7 est dans `js/config.js`, `assets/` et `data/` :
- `nom`, `slogan`, `domaine`, `mascotte` (Momo est un nom provisoire : Alessandro peut en choisir un autre)
- `couleurs` : la palette bleue
- `stockage` : `"ar7:v1"`, différent de LR5 pour que les étoiles des deux sites ne se mélangent pas
- `quiz` : 8 questions, 90 secondes au chrono
- `penalty` : la force du gardien (`gardienDepart`, `gardienParBut`, `gardienMax`)
- `memory` : le nombre de paires (`pairesDepart`, `pairesMax`)

## Tester sur ton ordinateur

Double-clique sur `index.html`, le site marche même sans serveur. Ou, dans le dossier :
`python3 -m http.server 8000`, puis ouvre http://localhost:8000

## Mettre en ligne avec GitHub + Vercel (gratuit)

### 1. Mettre le code sur GitHub
1. Sur https://github.com (le même compte que pour LR5), crée un nouveau dépôt : bouton **New**, nom `ar7`, *Public*, sans README.
2. Ensuite, deux façons de faire :
   - **Sans ligne de commande** : sur la page du dépôt, clique **uploading an existing file**, puis glisse **le contenu** du dossier (index.html, js/, data/…), pas le dossier lui-même. Termine avec **Commit changes**.
   - **En ligne de commande** (le dossier est déjà un dépôt git avec un premier commit) :
     ```
     cd ar7
     git remote add origin https://github.com/TON-NOM/ar7.git
     git branch -M main
     git push -u origin main
     ```

### 2. Déployer sur Vercel
1. Va sur https://vercel.com (le même compte que pour LR5).
2. Clique **Add New… → Project**, puis **Import** à côté du dépôt `ar7`. S'il n'apparaît pas, clique **Adjust GitHub App Permissions** et autorise aussi `ar7`.
3. Framework Preset : **Other**. Ne mets rien comme Build Command ni Output Directory, puis clique **Deploy**.
4. Après quelques secondes, le site est en ligne sur une adresse du type `ar7-xxxx.vercel.app`.
5. Ensuite, **chaque modification envoyée sur GitHub met le site à jour automatiquement**.

### 3. Brancher le domaine ar7.ch
1. Dans Vercel : ouvre le projet `ar7` → **Settings → Domains**, ajoute `ar7.ch` puis `www.ar7.ch`. Choisis de rediriger `www.ar7.ch` vers `ar7.ch`.
2. Vercel affiche les enregistrements DNS à créer. **Recopie exactement ceux qu'il affiche**. En général, ce sont :
   | Type  | Nom (hôte) | Valeur |
   |-------|------------|--------|
   | A     | `@` (vide, ou ar7.ch) | `76.76.21.21` |
   | CNAME | `www`      | `cname.vercel-dns.com` |
3. Chez ton registraire (Infomaniak) : **Manager → Domaines → ar7.ch → Zone DNS**.
   - Supprime ou modifie les anciens enregistrements **A** et **AAAA** sur `@`, et l'ancien enregistrement sur `www`, qui pointent vers Infomaniak.
   - Ajoute ceux de Vercel.
   - **Ne touche pas** aux enregistrements **MX** et **TXT** (SPF) : ce sont eux qui feront marcher les adresses e-mail @ar7.ch.
4. Attends de quelques minutes à quelques heures. Vercel affiche « Valid Configuration » et crée tout seul le certificat HTTPS.

## Variante sans Vercel : FTP chez Infomaniak

Si ar7.ch a un **hébergement web** chez Infomaniak (pas seulement le nom de domaine), tu peux déposer **le contenu** du dossier dans le répertoire du site (souvent `web/`), par FTP ou avec le gestionnaire de fichiers d'Infomaniak. Il faudra le redéposer à chaque modification.
Le fichier `vercel.json` ne sert qu'à Vercel. Sur un autre hébergement, il est simplement ignoré.

## Vie privée

Il n'y a aucun traceur, aucune statistique, aucune police ni aucun script externe, et aucun cookie. La progression (étoiles, badges) est gardée dans le `localStorage` du navigateur, sur l'appareil seulement. `vercel.json` ajoute une politique de sécurité (CSP) qui interdit de charger quoi que ce soit hors du site.
