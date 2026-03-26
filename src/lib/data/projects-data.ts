export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  color: string;
  year: string;
  role: string;
  context: string;
  highlights: string[];
  challenge: string;
  result: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: 'meetcraft',
    title: 'MeetCraft',
    description:
      'Plateforme web de génération automatique de comptes-rendus de réunion par IA. Import de transcript, génération de CR HTML/Tailwind stylisé en 2 minutes.',
    longDescription:
      'MeetCraft est né d\'un problème simple mais chronophage : rédiger des comptes-rendus de réunion prend du temps, manque souvent de structure, et finit par décourager leur rédaction. L\'idée ? Importer un transcript brut et obtenir en 2 minutes un document HTML/Tailwind propre, structuré et personnalisé.',
    image: '/projet/Meetcraft.png',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'Claude API', 'Firebase', 'n8n', 'OVH'],
    color: '#5D737E',
    year: '2024',
    role: 'Développeur Fullstack & Product',
    context: 'Projet entreprise : Traivis',
    highlights: [
      'Utilisé par +300 personnes en entreprise',
      'Génération de CR en moins de 2 minutes',
      'Système de rôles et partage d\'équipe',
      'Enregistrement vocal temps réel intégré',
      'Architecture multi-entreprises',
    ],
    challenge:
      'Construire un système robuste capable de gérer des transcripts longs, de les structurer intelligemment par IA, tout en maintenant un rendu visuel soigné et une expérience fluide pour des équipes entières.',
    result:
      'Un outil adopté rapidement en interne et déployé sur OVH, utilisé quotidiennement par plus de 200 collaborateurs. Le feedback principal : "on gagne au moins 30 minutes par réunion".',
  },
  {
    id: 2,
    slug: 'vesty',
    title: 'Vesty',
    description:
      'Plateforme d\'essayage virtuel de vêtements. Depuis n\'importe quel site marchand, un clic sur le logo Vesty suffit pour importer l\'article.',
    longDescription:
      'Vesty résout un problème universel du e-commerce : acheter des vêtements en ligne sans pouvoir les essayer. L\'idée est simple : sur n\'importe quelle page produit (H&M, Zara, etc.), on clique sur le logo Vesty, l\'article est importé, et on l\'essaie directement sur soi depuis la plateforme.',
    image: '/projet/vesty.svg',
    tags: ['PHP', 'JavaScript', 'CSS'],
    color: '#7C9E87',
    year: '2025',
    role: 'Développeur & Designer',
    context: 'Projet personnel',
    highlights: [
      'Extension / intégration sur sites marchands tiers',
      'Essayage virtuel sur photo personnelle',
      'Header atypique et logo signé maison',
      'Design nouveau et moderne',
      'Flow UX repensé de zéro',
    ],
    challenge:
      'Créer une expérience cross-site cohérente sans accès aux APIs des marchands, en interceptant les données produit côté client, et proposer un rendu d\'essayage crédible.',
    result:
      'Un prototype fonctionnel avec un design qui rompt les codes du e-commerce classique. Le logo et l\'identité visuelle ont été intégralement conçus maison.',
  },
  {
    id: 3,
    slug: 'aureon',
    title: 'Aureon',
    description:
      'Bibliothèque de composants React & GSAP à thème sombre et samouraï. On ne copie pas du code : on copie un prompt pour régénérer le composant.',
    longDescription:
      'Aureon est une bibliothèque de composants React + GSAP pensée différemment. L\'esthétique ? Sombre, cinématique, avec des caractères japonais et une identité visuelle forte inspirée de l\'univers samouraï. La particularité qui change tout : plutôt que de copier du code, on copie un prompt : un prompt soigneusement rédigé pour régénérer le composant via IA. Chaque bloc est une intention.',
    image: '/projet/aureon.svg',
    tags: ['React', 'GSAP', 'TypeScript', 'Tailwind CSS'],
    color: '#8B7355',
    year: '2025',
    role: 'Créateur & Designer',
    context: 'Projet personnel : Open source',
    highlights: [
      'Composants React + GSAP prêts à l\'emploi',
      'Copie de prompt, pas de code',
      'Esthétique samouraï avec caractères japonais',
      'Design sombre et cinématique',
      'Bibliothèque extensible',
    ],
    challenge:
      'Repenser le concept même de bibliothèque de composants à l\'ère de l\'IA. Comment rendre les composants portables sans les rendre rigides ? La réponse : le prompt comme unité de partage.',
    result:
      'Une bibliothèque avec une identité visuelle mémorable et un paradigme de distribution inédit : copier l\'intention plutôt que l\'implémentation.',
  },
  {
    id: 4,
    slug: 'mojo',
    title: 'Mo&Jo',
    description:
      'Système d\'analyse automatisé des réseaux sociaux pour une agence marketing. Double passage IA pour analyse qualitative et rapports PDF personnalisés.',
    longDescription:
      'Mo&Jo est un système complet d\'analyse des réseaux sociaux développé pour Mo&Jo, entreprise associée à Traivis. J\'ai intégré les APIs Instagram et Facebook via RapidAPI pour récupérer publications, stats de compte et métriques d\'engagement. Les données sont visualisées avec des carrousels d\'images et des palettes cohérentes, analysées par IA pour générer un bilan de performance personnalisé, exportables en PDF. Une automatisation n8n met à jour les données chaque nuit.\n\nJ\'ai également refait le module LinkedIn existant, corrigé ses bugs et aligné son design avec les autres réseaux.\n\nEn parallèle, j\'ai conçu un générateur d\'annonces RSA Google Ads : l\'utilisateur entre ses mots-clés et paramètres, l\'outil génère 15 titres et 4 descriptions, chacun régénérable individuellement, avec export Excel en format Google Ads. J\'ai ensuite développé RSA Bulk pour traiter plusieurs groupes d\'annonces simultanément via une interface adaptée à un usage intensif.',
    image: '/projet/mojo.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'RapidAPI', 'Claude', 'ChatGPT', 'n8n'],
    color: '#6D597A',
    year: '2024',
    role: 'Développeur Fullstack',
    context: 'Projet client : Traivis',
    highlights: [
      'Intégration APIs Instagram, Facebook et LinkedIn via RapidAPI',
      'Analyse IA des performances avec bilan personnalisé',
      'Visualisation animée des données + export PDF',
      'Mise à jour automatique nocturne via n8n',
      'Générateur RSA Google Ads : 15 titres + 4 descriptions, export Excel',
      'RSA Bulk : gestion de plusieurs groupes d\'annonces simultanément',
    ],
    challenge:
      'Combiner des APIs aux structures très différentes (Instagram, Facebook, LinkedIn) dans une interface cohérente, tout en produisant une analyse IA fiable basée uniquement sur les vraies données extraites : sans hallucination ni données inventées.',
    result:
      'Un outil tout-en-un qui remplace des heures d\'analyse manuelle. Le module RSA a aussi permis d\'accélérer drastiquement la création de campagnes Google Ads pour l\'agence.',
  },
  {
    id: 5,
    slug: 'mailscan',
    title: 'MailScan',
    description:
      'Analyse de kits mails par IA pour déterminer leur qualité et générer du code optimisé. Automatisation complète.',
    longDescription:
      'MailScan analyse des kits emails complets pour déterminer s\'ils sont bien construits : structure HTML, images, texte, ratio, délivrabilité. L\'IA produit une analyse détaillée puis génère du code amélioré directement exploitable. Tout est automatisé : upload, analyse, sortie code.',
    image: '/projet/mailscan.png',
    tags: ['PHP', 'n8n', 'Gemini AI'],
    color: '#5F9EA0',
    year: '2024',
    role: 'Développeur & Automatisation',
    context: 'Projet interne : Traivis',
    highlights: [
      'Analyse structurelle complète du kit email',
      'Score de qualité et délivrabilité',
      'Génération de code HTML optimisé',
      'Automatisation end-to-end avec n8n',
      'Intégration Gemini AI',
    ],
    challenge:
      'Analyser un kit email demande une expertise technique et marketing croisée. Traduire ces critères en prompt IA précis et obtenir une sortie code directement exploitable a nécessité de nombreuses itérations.',
    result:
      'Un outil interne qui accélère drastiquement le contrôle qualité des emails clients. Ce qui prenait 2h d\'audit manuel se fait en 5 minutes.',
  },
  {
    id: 6,
    slug: 'erp-traivis',
    title: 'ERP Traivis',
    description:
      'Refonte complète du système interne de gestion du temps de travail. Suivi des heures, gestion des tâches, tableau de bord de facturation.',
    longDescription:
      'L\'ERP Traivis est la refonte complète du système interne de suivi du temps de travail de l\'agence. Avant ma version, les heures étaient saisies dans des tableurs éparpillés. J\'ai conçu et développé un outil centralisé : suivi par projet et client, gestion des tâches, tableaux de bord analytiques pour piloter la facturation.',
    image: '/projet/erp.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    color: '#A98467',
    year: '2024',
    role: 'Développeur Fullstack',
    context: 'Projet interne : Traivis',
    highlights: [
      'Suivi des heures par projet et client',
      'Gestion des tâches intégrée',
      'Tableaux de bord analytiques',
      'Optimisation de la facturation',
      'Adoption immédiate par toute l\'équipe',
    ],
    challenge:
      'Remplacer des habitudes ancrées (tableurs Excel) par un outil nouveau, sans friction, tout en gérant la migration des données existantes et en s\'adaptant aux workflows de chacun.',
    result:
      'Un ERP adopté immédiatement par toute l\'équipe. Le pilotage de la facturation est devenu transparent et le suivi des projets, enfin fiable.',
  },
  {
    id: 7,
    slug: 'mccover',
    title: 'McCover',
    description:
      'Site complet d\'analyse automatique de factures PDF/Excel par IA pour le client McCover. Pipeline email → analyse → rapport entièrement automatisé.',
    longDescription:
      'McCover est un projet client qui m\'a posé un défi technique concret : analyser automatiquement des factures pouvant atteindre 300 pages. Après avoir testé PDF.co (trop coûteux en tokens) et ChatGPT (peu fiable), nous avons retenu Claude. J\'ai mis en place un pipeline qui découpe chaque PDF en lots de 5 pages, extrait le texte, analyse chaque lot avec Claude, et reconstitue les résultats via n8n.\n\nJ\'ai également développé TransportControl, un module intégré au même site permettant de gérer les règles tarifaires transport, détecter les anomalies sur factures d\'affrètement et messagerie, et automatiser l\'envoi de rapports d\'anomalies par email.',
    image: '/projet/mccover.svg',
    tags: ['PHP', 'JavaScript', 'Claude API', 'n8n', 'PDF.co', 'MySQL'],
    color: '#2E6B8A',
    year: '2025',
    role: 'Développeur Fullstack & Automatisation',
    context: 'Projet client : Traivis',
    highlights: [
      'Gestion de PDF jusqu\'à 300 pages par découpage en lots de 5',
      'Pipeline email → analyse → rapport 100% automatisé',
      'Comparaison des prix avec base de références, alertes par mail',
      'Module TransportControl : règles tarifaires + détection d\'anomalies',
      'Suivi client avec réunions régulières et itérations terrain',
    ],
    challenge:
      'Analyser des fichiers de 300 pages sans exploser les coûts en tokens ni perdre en fiabilité. Il a fallu tester plusieurs APIs, concevoir un découpage intelligent et fiabiliser la reconstitution des résultats.',
    result:
      'Un outil utilisé en conditions réelles par l\'équipe McCover. Le traitement automatique des factures a supprimé des heures de vérification manuelle hebdomadaire.',
  },
  {
    id: 8,
    slug: 'maison-w',
    title: 'Maison W',
    description:
      'Site vitrine freelance pour une étudiante ISCOM Lille. Design élégant avec palette marron, vert pastel et rose pastel.',
    longDescription:
      'Maison W est un site vitrine freelance conçu pour Wanda Dejonghe, étudiante en marketing et communication à l\'ISCOM Lille. L\'objectif : lui créer une présence en ligne qui reflète son identité : élégante, moderne et créative. J\'ai géré le design complet, le développement et les animations.',
    image: '/projet/wanda.png',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'CSS Animations'],
    color: '#B5838D',
    year: '2024',
    role: 'Designer & Développeur',
    context: 'Projet freelance',
    highlights: [
      'Design élégant maison et sur-mesure',
      'Palette marron / vert pastel / rose pastel',
      'Portfolio de projets intégré',
      'Section blog et formulaire de contact',
      'Animations CSS soignées',
    ],
    challenge:
      'Traduire la personnalité et l\'univers créatif d\'une personne en une expérience web cohérente, avec un budget serré et une identité visuelle entièrement à définir.',
    result:
      'Un site qui lui a permis d\'obtenir ses premiers clients freelance. Le design a été remarqué et cité comme référence par plusieurs personnes de son réseau.',
  },
  {
    id: 8,
    slug: 'spill',
    title: 'Spill',
    description:
      'Jeu de soirée "J\'ai déjà / Je n\'ai jamais" sur téléphone. Génération automatique de questions par IA, catégories et mode sans compte.',
    longDescription:
      'Spill est un jeu de soirée numérique jouable sur un seul téléphone. Le principe : "J\'ai déjà / Je n\'ai jamais", avec des questions générées automatiquement par IA selon la catégorie choisie (léger, épicé...). Un joueur gère le téléphone et fait passer les cartes au groupe. Pas de compte requis pour jouer.',
    image: '/projet/spill.jpeg',
    tags: ['Next.js', 'Supabase', 'Mistral API', 'Make', 'Vercel'],
    color: '#E56B6F',
    year: '2024',
    role: 'Développeur & Designer',
    context: 'Projet personnel',
    highlights: [
      'Questions générées par IA (Mistral)',
      'Jouable sur un seul téléphone',
      'Catégories de questions personnalisables',
      'Mode sans compte, zéro friction',
      'Déployé sur Vercel',
    ],
    challenge:
      'Créer une expérience de jeu social fluide et amusante, sans friction à l\'entrée, tout en gardant le contenu frais et varié grâce à la génération IA.',
    result:
      'Un jeu utilisé en soirée par des groupes d\'amis. La génération IA a permis d\'avoir des centaines de questions uniques sans travail éditorial manuel.',
  },
  {
    id: 9,
    slug: 'make-auto',
    title: 'Make Auto',
    description:
      'Automatisation complète d\'envois d\'emails de candidature. Lecture Google Sheets, personnalisation IA, brouillons Gmail, lettres en Google Docs.',
    longDescription:
      'Make Auto est une automatisation que j\'ai construite pour moi-même pendant ma recherche d\'alternance. À partir d\'une liste d\'entreprises dans Google Sheets, le système personnalise automatiquement chaque email et lettre de motivation via IA, crée un brouillon Gmail et génère la lettre dans Google Docs. Tout ça sans toucher à rien.',
    image: '/projet/make.png',
    tags: ['Make.com', 'Gmail', 'Google Sheets', 'Google Docs', 'Mistral AI'],
    color: '#FFB5A7',
    year: '2024',
    role: 'Automatisation & IA',
    context: 'Projet personnel',
    highlights: [
      'Lecture et traitement de listes Google Sheets',
      'Personnalisation des emails par IA',
      'Génération automatique de lettres de motivation',
      'Création de brouillons Gmail',
      'Zéro intervention manuelle',
    ],
    challenge:
      'Personnaliser des candidatures à grande échelle sans que ça semble robotique. Chaque email devait sembler écrit individuellement, en s\'adaptant au secteur et au poste.',
    result:
      'Un système qui m\'a permis d\'envoyer des dizaines de candidatures personnalisées en quelques heures. Taux de réponse significativement supérieur aux envois manuels.',
  },
  {
    id: 10,
    slug: 'n8n-flows',
    title: 'n8n Flows',
    description:
      'Workflows automatisés avec n8n self-hosted. Triggers email, webhooks, schedule. Intégrations Claude API, PDF.co, MySQL, Firebase.',
    longDescription:
      'n8n Flows regroupe un ensemble de workflows d\'automatisation complexes développés avec n8n (auto-hébergé). Ces flows couvrent des cas métier variés : traitement d\'emails entrants, webhooks, tâches planifiées. Chaque workflow intègre des appels à des APIs externes, de la manipulation JSON avancée et des logiques conditionnelles.',
    image: '/projet/n8n.jpg',
    tags: ['n8n', 'Claude API', 'PDF.co', 'MySQL', 'Firebase'],
    color: '#F4A261',
    year: '2024',
    role: 'Automatisation & Intégrations',
    context: 'Projets clients : Traivis',
    highlights: [
      'n8n self-hosted sur VPS',
      'Triggers : Email, Webhooks, Schedule',
      'Intégration Claude API pour traitement IA',
      'Génération PDF automatique',
      'Connexions MySQL et Firebase',
    ],
    challenge:
      'Concevoir des workflows fiables en production, capables de gérer des erreurs gracieusement, de retry automatiquement, et d\'alerter en cas d\'échec sans intervention humaine.',
    result:
      'Des automatisations en production depuis plusieurs mois, traitant des centaines de tâches par semaine sans intervention. ROI immédiat pour les clients concernés.',
  },
];

export const getProjectBySlug = (slug: string) =>
  projectsData.find((p) => p.slug === slug);

export const getAdjacentProjects = (slug: string) => {
  const idx = projectsData.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projectsData[idx - 1] : projectsData[projectsData.length - 1],
    next: idx < projectsData.length - 1 ? projectsData[idx + 1] : projectsData[0],
  };
};
