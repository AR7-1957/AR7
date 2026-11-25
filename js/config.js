/* =====================================================================
 * CONFIGURATION DU SITE AR7 — tout ce qui change d'un site à l'autre est ICI.
 * Les couleurs sont dans css/theme.css. Le moteur (js/app.js, penalty.js, memory.js,
 * flags.js, parents.js, css/style.css, sw.js) est IDENTIQUE sur LR5 et AR7.
 * ===================================================================== */
window.SITE_CONFIG = {
  nom: "AR7",
  domaine: "ar7.ch",
  slogan: "Les petits explorateurs",
  public: "7-9 ans",
  langue: "fr",
  stockage: "ar7:v1",            // clé localStorage (unique par site, ne JAMAIS la changer : on perdrait les étoiles)

  mascotte: {
    nom: "Momo",
    image: "assets/mascotte.svg",
    description: "la petite marmotte des Alpes en maillot n°7",
    bulles: [
      "Coucou ! On joue ensemble ?",
      "Une bonne réponse = une étoile ⭐",
      "Tu sais où vivent les kangourous ?",
      "Réponds juste et tire au but !",
      "Ce soir, regarde la Lune !",
      "Appuie sur 🔊 et je te lis la question !"
    ]
  },

  univers: [
    { id: "football",   nom: "Football",         emoji: "⚽", description: "Le ballon, les règles et les champions", fichier: "data/football.js" },
    { id: "geographie", nom: "Géographie",       emoji: "🌍", description: "Pays, drapeaux et animaux du monde",      fichier: "data/geographie.js" },
    { id: "espace",     nom: "Étoiles & espace", emoji: "🚀", description: "Le Soleil, la Lune, les planètes",       fichier: "data/espace.js" }
  ],
  mix: { id: "mix", nom: "Grand mélange", emoji: "🎲", description: "Un peu de tout !" },

  // Niveaux calibrés pour 7-9 ans : quelles difficultés (1, 2, 3) on pioche.
  niveaux: [
    { id: 1, nom: "Découverte",  emoji: "🌱", description: "Très facile, parfait pour commencer à 7 ans", difficultes: [1] },
    { id: 2, nom: "Explorateur", emoji: "🧭", description: "Un peu plus dur",                             difficultes: [1, 2] },
    { id: 3, nom: "Expert",      emoji: "🏆", description: "Pour les grands de 9 ans",                    difficultes: [2, 3] }
  ],

  // chronoAlerte : false = pas de compteur qui clignote en rouge à la fin (moins stressant à 7 ans).
  quiz: { nbQuestions: 8, chronoSecondes: 90, etoilesParBonneReponse: 1, bonusSansFaute: 3, etoilesQuestionDuJour: 3, chronoAlerte: false },
  texteRate: "Oups, pas tout à fait !",
  // Question du jour : seulement des questions faciles ou moyennes, jamais deux fois avant d'avoir fait le tour.
  jour: { difficultes: [1, 2] },
  // Lecture à voix haute (bouton 🔊) : voix française féminine choisie automatiquement (voir README), un peu lente pour les petits lecteurs.
  lecture: { vitesse: 0.9, hauteur: 1.05 },

  // Penaltys. Chance que le gardien devine le coin = depart + parBut × buts d'affilée (au maximum max).
  // Un tir « parfait » (flèche dans la zone verte) multiplie cette chance par bonusParfait.
  penalty: { univers: "football", tirs: 5, gardienDepart: 0.1, gardienParBut: 0.06, gardienMax: 0.35, bonusParfait: 0.4, jauge: true },
  // Memory : 4 paires au début, une de plus à chaque partie finie, jusqu'à 6. Drapeaux faciles et bien différents.
  memory: { pairesDepart: 4, pairesMax: 6, drapeaux: ["ch", "fr", "it", "de", "jp", "se", "gb", "es", "dk", "gr", "ua", "be"] },

  rangs: [
    { etoiles: 0,   nom: "Petit explorateur" },
    { etoiles: 20,  nom: "Explorateur" },
    { etoiles: 60,  nom: "Aventurier" },
    { etoiles: 120, nom: "Grand aventurier" },
    { etoiles: 250, nom: "Champion" },
    { etoiles: 500, nom: "Super champion" }
  ],
  // Accessoires de la mascotte, débloqués avec les étoiles. Plusieurs peuvent être portés en même temps, un seul par « place ».
  // svg = dessin posé DEVANT la mascotte, svgDos = dessin DERRIÈRE elle, dans le repère de assets/mascotte.svg (viewBox 0 0 200 220).
  tenues: [
    { id: "casquette", ico: "🧢", nom: "Casquette", etoiles: 15, place: "tete",
      svg: "<path d='M56 70 C56 14 144 14 144 70 Z' fill='#1d5fd6' stroke='#0b2257' stroke-width='2.5'/><path d='M100 28 L100 70 M78 32 Q72 50 74 70 M122 32 Q128 50 126 70' stroke='#0f3f99' stroke-width='2' fill='none'/><path d='M100 42 l3.5 7 7.7 1.1 -5.6 5.4 1.3 7.7 -6.9 -3.6 -6.9 3.6 1.3 -7.7 -5.6 -5.4 7.7 -1.1 z' fill='#ffd23f'/><circle cx='100' cy='28' r='4.5' fill='#0b2257'/><path d='M46 72 Q100 54 154 72 Q157 84 100 80 Q43 84 46 72 Z' fill='#0b2257'/>" },
    { id: "lunettes",  ico: "🕶️", nom: "Lunettes", etoiles: 50, place: "yeux",
      svg: "<path d='M54 90 L36 86 M146 90 L164 86' stroke='#111' stroke-width='3.5' stroke-linecap='round'/><path d='M94 90 Q100 86 106 90' stroke='#111' stroke-width='3.5' fill='none'/><path d='M54 84 H95 V95 A15 15 0 0 1 80 110 H69 A15 15 0 0 1 54 95 Z M105 84 H146 V95 A15 15 0 0 1 131 110 H120 A15 15 0 0 1 105 95 Z' fill='#111' fill-opacity='.93' stroke='#000' stroke-width='2.5' stroke-linejoin='round'/><path d='M60 92 L70 87 M111 92 L121 87' stroke='#fff' stroke-width='3' stroke-linecap='round' opacity='.75'/>" },
    { id: "couronne",  ico: "👑", nom: "Couronne", etoiles: 120, place: "tete",
      svg: "<path d='M68 54 L63 22 L84 38 L100 15 L116 38 L137 22 L132 54 Z' fill='#ffd23f' stroke='#b8860b' stroke-width='2.5' stroke-linejoin='round'/><rect x='67' y='46' width='66' height='10' rx='3' fill='#f4b400' stroke='#b8860b' stroke-width='2'/><circle cx='63' cy='22' r='4' fill='#ffd23f' stroke='#b8860b' stroke-width='2'/><circle cx='100' cy='15' r='4.5' fill='#ffd23f' stroke='#b8860b' stroke-width='2'/><circle cx='137' cy='22' r='4' fill='#ffd23f' stroke='#b8860b' stroke-width='2'/><circle cx='84' cy='51' r='3.2' fill='#e53935'/><circle cx='100' cy='51' r='3.6' fill='#1d5fd6'/><circle cx='116' cy='51' r='3.2' fill='#2e9e4f'/>" },
    { id: "fusee",     ico: "🚀", nom: "Fusée", etoiles: 250, place: "dos",
      svg: "<path d='M60 168 Q52 196 56 220 M140 168 Q148 196 144 220' stroke='#5b6475' stroke-width='7' fill='none' stroke-linecap='round'/>",
      svgDos: "<rect x='24' y='170' width='152' height='9' rx='4' fill='#5b6475'/><g><path d='M20 194 Q29 220 38 194 Z' fill='#ff9f1c'/><path d='M24 194 Q29 210 34 194 Z' fill='#ffd23f'/><path d='M18 176 L7 198 L18 192 Z M40 176 L51 198 L40 192 Z' fill='#1d5fd6'/><rect x='18' y='122' width='22' height='72' rx='8' fill='#eef1f6' stroke='#7d8699' stroke-width='2'/><path d='M18 128 Q29 96 40 128 Z' fill='#1d5fd6' stroke='#7d8699' stroke-width='2' stroke-linejoin='round'/><circle cx='29' cy='146' r='5.5' fill='#5bc0eb' stroke='#7d8699' stroke-width='2'/></g><g transform='matrix(-1 0 0 1 200 0)'><path d='M20 194 Q29 220 38 194 Z' fill='#ff9f1c'/><path d='M24 194 Q29 210 34 194 Z' fill='#ffd23f'/><path d='M18 176 L7 198 L18 192 Z M40 176 L51 198 L40 192 Z' fill='#1d5fd6'/><rect x='18' y='122' width='22' height='72' rx='8' fill='#eef1f6' stroke='#7d8699' stroke-width='2'/><path d='M18 128 Q29 96 40 128 Z' fill='#1d5fd6' stroke='#7d8699' stroke-width='2' stroke-linejoin='round'/><circle cx='29' cy='146' r='5.5' fill='#5bc0eb' stroke='#7d8699' stroke-width='2'/></g>" }
  ],

  // Badges : "stat" = compteur suivi par le site, "seuil" = valeur à atteindre.
  // Stats : bonnes, parfaits, chrono (record), jours, buts, penaltyParfait, memory, corrigees, u_<id univers>
  badges: [
    { id: "premiere",  ico: "🐣", nom: "Premier pas",        desc: "1re bonne réponse",             stat: "bonnes", seuil: 1 },
    { id: "dix",       ico: "⭐", nom: "Petite étoile",      desc: "10 bonnes réponses",            stat: "bonnes", seuil: 10 },
    { id: "cinquante", ico: "🌟", nom: "Grande étoile",      desc: "50 bonnes réponses",            stat: "bonnes", seuil: 50 },
    { id: "cent",      ico: "💫", nom: "Super étoile",       desc: "100 bonnes réponses",           stat: "bonnes", seuil: 100 },
    { id: "deuxcents", ico: "🌌", nom: "Ciel étoilé",        desc: "200 bonnes réponses",           stat: "bonnes", seuil: 200 },
    { id: "parfait",   ico: "🎯", nom: "Sans faute",         desc: "Tout juste à un quiz",          stat: "parfaits", seuil: 1 },
    { id: "parfait5",  ico: "🏹", nom: "Super sans faute",   desc: "5 quiz tout justes",            stat: "parfaits", seuil: 5 },
    { id: "chrono",    ico: "⏱️", nom: "Éclair",             desc: "6 bonnes réponses au chrono",   stat: "chrono", seuil: 6 },
    { id: "chrono12",  ico: "⚡", nom: "Foudre",             desc: "12 bonnes réponses au chrono",  stat: "chrono", seuil: 12 },
    { id: "jour3",     ico: "📅", nom: "Fidèle",             desc: "3 questions du jour réussies",  stat: "jours", seuil: 3 },
    { id: "jour10",    ico: "🗓️", nom: "Habitué",            desc: "10 questions du jour réussies", stat: "jours", seuil: 10 },
    { id: "foot",      ico: "⚽", nom: "Petit footballeur",  desc: "15 bonnes réponses en foot",    stat: "u_football", seuil: 15 },
    { id: "geo",       ico: "🧳", nom: "Petit voyageur",     desc: "15 bonnes réponses en géo",     stat: "u_geographie", seuil: 15 },
    { id: "espace",    ico: "👩‍🚀", nom: "Petit astronaute",  desc: "15 bonnes réponses sur l'espace", stat: "u_espace", seuil: 15 },
    { id: "but",       ico: "🥅", nom: "Buteur",             desc: "1er but aux penaltys",          stat: "buts", seuil: 1 },
    { id: "buts20",    ico: "👟", nom: "Canonnier",          desc: "20 buts aux penaltys",          stat: "buts", seuil: 20 },
    { id: "penalty5",  ico: "🦁", nom: "Champion des penaltys", desc: "5 buts sur 5",               stat: "penaltyParfait", seuil: 1 },
    { id: "memory",    ico: "🧠", nom: "Super mémoire",      desc: "Finir un memory des drapeaux",  stat: "memory", seuil: 1 },
    { id: "memory5",   ico: "🐘", nom: "Mémoire d'éléphant", desc: "Finir 5 memorys",               stat: "memory", seuil: 5 },
    { id: "corrige",   ico: "🔁", nom: "Je ne me trompe plus", desc: "Corriger 10 erreurs",         stat: "corrigees", seuil: 10 }
  ]
};
