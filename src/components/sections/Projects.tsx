import { useNavigate } from 'react-router-dom';
import { useHorizontalScroll } from '../../animations/hooks/use-horizontal-scroll';
import { projectsData } from '../../lib/data/projects-data';

const projects = [
  {
    id: 1,
    title: 'MeetCraft',
    description:
      'Plateforme web de génération automatique de comptes-rendus de réunion par IA. Import de transcript, génération de CR HTML/Tailwind stylisé en 2 minutes. Système d\'entreprise avec partage, gestion des rôles et intégration enregistrement vocal temps réel.',
    image: '/projet/Meetcraft.png',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'Claude API', 'Firebase', 'n8n', 'OVH'],
    color: '#5D737E', // Bleu gris élégant
  },
  {
    id: 2,
    title: 'Vesty',
    description:
      'Plateforme d\'essayage virtuel de vêtements. Depuis n\'importe quel site marchand (H&M, Zara…), un clic sur le logo Vesty suffit pour importer l\'article. Sur Vesty, on essaie directement la tenue sur soi. Design moderne avec un header atypique et un logo signé maison.',
    image: '/projet/vesty.svg',
    tags: ['PHP', 'JavaScript', 'CSS'],
    color: '#7C9E87', // Vert sauge
  },
  {
    id: 3,
    title: 'Aureon',
    description:
      'Bibliothèque de composants React & GSAP à thème sombre et samouraï : avec caractères japonais et esthétique cinématique. La particularité : on ne copie pas du code, on copie un prompt pour régénérer le composant soi-même. Chaque bloc est une intention, pas juste un snippet.',
    image: '/projet/aureon.svg',
    tags: ['React', 'GSAP', 'TypeScript', 'Tailwind CSS'],
    color: '#2D2D3A', // Anthracite profond
  },
  {
    id: 4,
    title: 'Traivis',
    description:
      'Refonte complète du site traivis.io : design, SEO, restructuration des textes. Chatbot IA intégré connecté aux infos entreprise et à l\'agenda pour prendre des RDV. Interface admin pour gérer les articles de blog et les coûts en tokens des agents IA.',
    image: '/projet/traivis.png',
    tags: ['PHP', 'JavaScript', 'Claude API', 'SEO', 'Chatbot IA', 'Admin', 'Blog'],
    color: '#3D6B8A',
  },
  {
    id: 5,
    title: 'Agents IA',
    description:
      'Suite de 3 agents IA : veille automatique → article de blog SEO, publication LinkedIn condensée avec validation humaine, et chatbot connecté aux données Traivis et à l\'agenda pour la prise de RDV.',
    image: '/projet/agents-ia.png',
    tags: ['Claude API', 'LinkedIn API', 'Agenda API', 'Human-in-the-loop', 'SEO', 'n8n'],
    color: '#5A3E6B',
  },
  {
    id: 6,
    title: 'Mo&Jo',
    description:
      'Système d\'analyse automatisé des réseaux sociaux pour l\'agence marketing. Contourne les limitations API via accumulation progressive. Double passage IA pour analyse qualitative. Rapports détaillés avec palettes personnalisées, export PDF. Générateur d\'annonces RSA pour Google Ads.',
    image: '/projet/mojo.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'RapidAPI', 'Claude', 'ChatGPT', 'n8n'],
    color: '#6D597A', // Violet aubergine
  },
  {
    id: 7,
    title: 'MailScan',
    description:
      'Analyse de kits mails pour ressortir une analyse poussée afin de déterminer si c\'est un bon mail. Génération de code poussé par rapport à cette analyse. Automatisation complète avec IA.',
    image: '/projet/mailscan.png',
    tags: ['PHP', 'n8n', 'Gemini AI'],
    color: '#5F9EA0', // Bleu cadet
  },
  {
    id: 8,
    title: 'ERP Traivis',
    description:
      'Refonte complète du système interne de gestion du temps de travail. Suivi des heures par projet client, gestion des tâches, tableau de bord pour visualiser les temps et optimiser la facturation. Outil essentiel pour le pilotage interne.',
    image: '/projet/erp.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    color: '#A98467', // Marron cuir
  },
  {
    id: 9,
    title: 'McCover',
    description:
      'Site complet d\'analyse automatique de factures PDF/Excel par IA pour le client McCover. Gestion de fichiers jusqu\'à 300 pages via découpage en lots, extraction et analyse Claude. Pipeline email → analyse → rapport entièrement automatisé. Module TransportControl intégré pour la gestion tarifaire transport.',
    image: '/projet/mccover.svg',
    tags: ['PHP', 'JavaScript', 'Claude API', 'n8n', 'PDF.co', 'MySQL'],
    color: '#2E6B8A',
  },
  {
    id: 10,
    title: 'Maison W',
    description:
      'Site vitrine freelance pour Wanda Dejonghe (étudiante ISCOM Lille). Présentation des services en marketing et communication, portfolio de projets, section blog, formulaire de contact. Design élégant avec palette marron/vert pastel/rose pastel.',
    image: '/projet/wanda.png',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'CSS Animations'],
    color: '#B5838D', // Vieux rose
  },
  {
    id: 11,
    title: 'Wanen',
    description:
      'Application de gestion des cours sur-mesure pour une étudiante ISCOM. Prise de notes style Notion avec commandes slash, todo list, gestion de projets avec échéances, notifications WhatsApp, intégration Google Calendar et version PWA responsive.',
    image: '/projet/wanen.png',
    tags: ['PHP', 'JavaScript', 'WhatsApp API', 'Google Calendar API', 'PWA'],
    color: '#7B8FA1',
  },
  {
    id: 12,
    title: 'Flow',
    description:
      'Jeu de puzzle basé sur le Hamiltonian Path : relier tous les nœuds en couvrant chaque case de la grille. Mode histoire et multijoueur en ligne. Développé en 2 après-midis.',
    image: '/projet/flow.png',
    tags: ['JavaScript', 'WebSocket', 'Game Design'],
    color: '#1A7A74',
  },
  {
    id: 13,
    title: 'Spill',
    description:
      'Jeu de soirée "J\'ai déjà / Je n\'ai jamais" utilisable sur un seul téléphone. Catégories de questions (léger, épicé), génération automatique par IA, mode simple sans compte. Un joueur gère le téléphone et fait passer les cartes au groupe.',
    image: '/projet/spill.jpeg',
    tags: ['Next.js', 'Supabase', 'Mistral API', 'Make', 'Vercel'],
    color: '#E56B6F', // Rouge pastel vif
  },
  {
    id: 14,
    title: 'Make Auto',
    description:
      'Automatisation complète de l\'envoi d\'emails de candidature pour alternance. Lecture de liste d\'entreprises (Google Sheets), personnalisation automatique des emails et lettres de motivation par IA, génération de brouillons Gmail, création automatique de lettres en Google Docs.',
    image: '/projet/make.png',
    tags: ['Make.com', 'Gmail', 'Google Sheets', 'Google Docs', 'Mistral AI'],
    color: '#FFB5A7', // Pêche
  },
  {
    id: 15,
    title: 'n8n Flows',
    description:
      'Workflows automatisés avec n8n (self-hosted ou cloud). Triggers : Email (POP3/IMAP), Webhooks, Schedule. Intégrations : Claude API, PDF.co, MySQL, Firebase. Manipulation JSON, requêtes HTTP pour automatiser des processus métier complexes.',
    image: '/projet/n8n.jpg',
    tags: ['n8n', 'Claude API', 'PDF.co', 'MySQL', 'Firebase'],
    color: '#F4A261', // Orange sable
  },
];

export const Projects = () => {
  const { sectionRef, containerRef, projectsRef } = useHorizontalScroll(projects.length);
  const navigate = useNavigate();

  return (
    <section
      id="projets"
      ref={sectionRef}
      className="relative z-10 min-h-screen bg-[#E5DDD1] rounded-tl-3xl rounded-tr-3xl overflow-hidden"
    >
      {/* Subtle color accents */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-[#A89885]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#9AA89B]/12 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Titre fixe en haut */}
      <div className="absolute top-0 left-0 right-0 z-20 h-20 flex items-center justify-center">
        <h2
          className="font-['Modak'] text-4xl md:text-5xl lg:text-6xl text-center"
          style={{ color: 'transparent', WebkitTextStroke: '2px #4a1c0a' }}
        >
          Mes Projets
        </h2>
      </div>

      {/* Conteneur horizontal (desktop uniquement) */}
      <div
        ref={containerRef}
        className="hidden md:flex h-screen pt-32 pb-24"
        style={{ willChange: 'transform' }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              if (el) projectsRef.current[index] = el;
            }}
            className="relative shrink-0 w-screen h-full flex items-center justify-center px-6 md:px-12 lg:px-16"
          >
            {/* Contenu du projet */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

              {/* Numéro décoratif */}
              <div className="absolute -top-12 lg:-left-20 z-0 select-none pointer-events-none">
                <span
                  className="font-['Modak'] text-[9rem] lg:text-[18rem] opacity-[0.08] leading-none transition-colors duration-500"
                  style={{ color: project.color }}
                >
                  0{project.id}
                </span>
              </div>

              {/* Colonne gauche */}
              <div className="lg:col-span-7 space-y-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm tracking-widest uppercase font-bold transition-colors duration-500" style={{ color: project.color }}>
                      Projet 0{project.id}
                    </span>
                    <div className="h-px w-12 transition-colors duration-500" style={{ backgroundColor: project.color, opacity: 0.5 }} />
                  </div>
                  <h3 data-title className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4a1c0a] leading-[1.1] tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-[#4a1c0a]/70 leading-relaxed max-w-xl font-light">{project.description}</p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default border"
                      style={{ backgroundColor: `${project.color}15`, color: project.color, borderColor: `${project.color}30` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-8">
                  <button
                    onClick={() => {
                      const slug = projectsData.find((p) => p.id === project.id)?.slug;
                      if (slug) { sessionStorage.setItem('projectScrollY', String(window.scrollY)); navigate(`/projet/${slug}`); }
                    }}
                    className="group flex items-center gap-3 font-medium hover:gap-5 transition-all duration-300"
                    style={{ color: project.color }}
                  >
                    <span className="uppercase tracking-widest text-sm border-b pb-1" style={{ borderColor: project.color }}>Voir le projet</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Colonne droite : Image */}
              <div className="lg:col-span-5 relative group perspective-1000">
                <div
                  data-image
                  onClick={() => {
                    const slug = projectsData.find((p) => p.id === project.id)?.slug;
                    if (slug) { sessionStorage.setItem('projectScrollY', String(window.scrollY)); navigate(`/projet/${slug}`); }
                  }}
                  className="relative w-full aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-rotate-1 cursor-pointer"
                >
                  <div className="absolute inset-0 transition-colors duration-500 z-10 pointer-events-none" style={{ backgroundColor: `${project.color}10` }} />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute -inset-4 border rounded-[3rem] -z-10 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105" style={{ borderColor: `${project.color}30` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Layout vertical mobile */}
      <div className="md:hidden pt-24 pb-16 px-5 space-y-16">
        {projects.map((project) => (
          <div key={project.id} className="relative">
            {/* Image */}
            <div
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-6 cursor-pointer"
              onClick={() => {
                const slug = projectsData.find((p) => p.id === project.id)?.slug;
                if (slug) { sessionStorage.setItem('projectScrollY', String(window.scrollY)); navigate(`/projet/${slug}`); }
              }}
            >
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundColor: `${project.color}10` }} />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Infos */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: project.color }}>
                  Projet 0{project.id}
                </span>
                <div className="h-px w-8" style={{ backgroundColor: project.color, opacity: 0.5 }} />
              </div>
              <h3 className="text-3xl font-bold text-[#4a1c0a] leading-tight">{project.title}</h3>
              <p className="text-sm text-[#4a1c0a]/65 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ backgroundColor: `${project.color}15`, color: project.color, borderColor: `${project.color}30` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-3">
                <button
                  onClick={() => {
                    const slug = projectsData.find((p) => p.id === project.id)?.slug;
                    if (slug) { sessionStorage.setItem('projectScrollY', String(window.scrollY)); navigate(`/projet/${slug}`); }
                  }}
                  className="flex items-center gap-2 font-medium text-sm"
                  style={{ color: project.color }}
                >
                  <span className="uppercase tracking-widest border-b pb-0.5" style={{ borderColor: project.color }}>Voir le projet</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
