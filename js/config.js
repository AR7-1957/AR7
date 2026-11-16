/* =====================================================================
 * CONFIGURATION DU SITE — tout ce qui change d'un site à l'autre est ICI.
 * Site AR7 (ar7.ch) pour Alessandro, 7 ans — public 7-9 ans.
 * Site frère : LR5 (lr5.ch), même moteur, autre config.
 * ===================================================================== */
window.SITE_CONFIG = {
  nom: "AR7",
  domaine: "ar7.ch",
  slogan: "Les petits explorateurs",
  public: "7-9 ans",
  langue: "fr",
  stockage: "ar7:v1",            // clé localStorage (unique par site !)

  mascotte: {
    nom: "Momo",                  // nom provisoire : à faire choisir par Alessandro :)
    image: "assets/mascotte.svg",
    description: "la petite marmotte des Alpes en maillot n°7",
    bulles: [
      "Coucou ! On joue ensemble ?",
      "Une bonne réponse = une étoile ⭐",
      "Tu sais où vivent les kangourous ?",
      "Réponds juste et tire au but !",
      "Ce soir, regarde la Lune !"
    ]
  },

  couleurs: {                     // copiées dans les variables CSS : palette bleue
    primaire: "#1d5fd6",          // bleu : en-tête, boutons (texte blanc : contraste 5,7:1)
    "primaire-f": "#0e2a6b",      // bleu foncé : ombres, liens
    sombre: "#0b2257",            // bleu marine : boutons d'action, compteur d'étoiles
    or: "#ffd23f",                // or : étoiles et contour de focus
    doux: "#e6efff",              // bleu très clair : fonds d'étiquettes, bulles
    bord: "#c9d9f5",              // bleu clair : bordures des réponses
    fond: "#f2f6fd",
    rouge: "#b00d24", vert: "#1c7a47"
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
    { id: 2, nom: "Explorateur", emoji: "🧭", description: "Un peu plus dur",                     difficultes: [1, 2] },
    { id: 3, nom: "Expert",      emoji: "🏆", description: "Pour les grands de 9 ans",            difficultes: [2, 3] }
  ],

  quiz: { nbQuestions: 8, chronoSecondes: 90, etoilesParBonneReponse: 1, bonusSansFaute: 3, etoilesQuestionDuJour: 3 },
  // Gardien plus facile : chance de deviner = depart + parBut × buts d'affilée, au maximum max.
  penalty: { univers: "football", tirs: 5, gardienDepart: 0.1, gardienParBut: 0.08, gardienMax: 0.45 },
  // Memory : 4 paires au début, une de plus à chaque partie finie, jusqu'à 6.
  memory: { pairesDepart: 4, pairesMax: 6 },

  badges: [
    { id: "premiere",  ico: "🐣", nom: "Premier pas",        desc: "1re bonne réponse",             stat: "bonnes", seuil: 1 },
    { id: "dix",       ico: "⭐", nom: "Petite étoile",      desc: "10 bonnes réponses",            stat: "bonnes", seuil: 10 },
    { id: "cinquante", ico: "🌟", nom: "Grande étoile",      desc: "50 bonnes réponses",            stat: "bonnes", seuil: 50 },
    { id: "cent",      ico: "💫", nom: "Super étoile",       desc: "100 bonnes réponses",           stat: "bonnes", seuil: 100 },
    { id: "parfait",   ico: "🎯", nom: "Sans faute",         desc: "Tout juste à un quiz",          stat: "parfaits", seuil: 1 },
    { id: "chrono",    ico: "⏱️", nom: "Éclair",             desc: "6 bonnes réponses au chrono",   stat: "chrono", seuil: 6 },
    { id: "jour3",     ico: "📅", nom: "Fidèle",             desc: "3 questions du jour réussies",  stat: "jours", seuil: 3 },
    { id: "foot",      ico: "⚽", nom: "Petit footballeur",  desc: "15 bonnes réponses en foot",    stat: "u_football", seuil: 15 },
    { id: "geo",       ico: "🧳", nom: "Petit voyageur",     desc: "15 bonnes réponses en géo",     stat: "u_geographie", seuil: 15 },
    { id: "espace",    ico: "👩‍🚀", nom: "Petit astronaute",  desc: "15 bonnes réponses sur l'espace", stat: "u_espace", seuil: 15 },
    { id: "but",       ico: "🥅", nom: "Buteur",             desc: "1er but aux penaltys",          stat: "buts", seuil: 1 },
    { id: "penalty5",  ico: "🦁", nom: "Champion des penaltys", desc: "5 buts sur 5",               stat: "penaltyParfait", seuil: 1 },
    { id: "memory",    ico: "🧠", nom: "Super mémoire",      desc: "Finir un memory des drapeaux",  stat: "memory", seuil: 1 }
  ]
};
