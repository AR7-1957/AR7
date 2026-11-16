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
  // Lecture à voix haute (bouton 🔊) avec la voix de l'appareil : utile quand on lit encore lentement.
  lecture: { vitesse: 0.9 },

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
  tenues: [
    { id: "casquette", ico: "🧢", nom: "Casquette", etoiles: 15 },
    { id: "lunettes",  ico: "🕶️", nom: "Lunettes", etoiles: 50 },
    { id: "couronne",  ico: "👑", nom: "Couronne", etoiles: 120 },
    { id: "fusee",     ico: "🚀", nom: "Fusée", etoiles: 250 }
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
