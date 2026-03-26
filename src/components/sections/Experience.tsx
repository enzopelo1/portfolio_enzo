import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useExperienceModal } from '../../lib/hooks/use-experience-modal';
import { ExperienceModal } from './ExperienceModal';

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  shortDesc: string;
  bg: string;
  accent: string;
  intro: string;
  missions: string[];
  learnings: string[];
  stack: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Traivis',
    role: 'Développeur Fullstack — Alternance',
    period: 'Mars. 2025 → Aujourd\'hui',
    location: 'Lille, France',
    shortDesc: 'Agence digitale spécialisée en automatisation et développement web sur-mesure.',
    bg: '#F5EDE0',
    accent: '#A98467',
    intro:
      'Chez Traivis, j\'ai appris à travailler avec l\'IA avant que ça devienne une tendance. Pas juste prompter et copier-coller — vraiment comprendre ce qu\'il y a derrière : la sécurité, les bonnes pratiques, le versionning, la gestion de projet, la cohésion d\'équipe. Tout ce qu\'on ne voit pas quand on utilise l\'IA bêtement.\n\nJ\'ai été développeur, mais aussi designer graphique, UX/UI, expert automatisation, et souvent l\'œil extérieur — celui qui voit les choses différemment parce qu\'il est jeune, curieux, et consomme énormément de contenu : sites, newsletters, tendances tech. J\'ai appris n8n, Make, le SEO, l\'UX/UI par moi-même, en parallèle du travail.\n\nC\'est pour ça que j\'ai continué les études — pas pour suivre la masse, mais pour maîtriser en profondeur ce que la plupart feront en surface. Quand tout le monde utilisera l\'IA, ceux qui s\'en sortiront sont ceux qui auront compris comment ça marche vraiment.',
    missions: [
      'Développement de MeetCraft, une plateforme de compte-rendus automatisés par IA — utilisée par +300 personnes.',
      'Développement de Vesty, une app d\'essayage virtuel de vêtements — projet mené en autonomie.',
      'Développement de McCover FactureCheck : site complet d\'analyse automatique de factures PDF/Excel par IA — avec gestion des fichiers jusqu\'à 300 pages via découpage en lots, extraction, analyse Claude et reconstitution via n8n. Pipeline email → analyse → rapport entièrement automatisé.',
      'Développement de TransportControl pour McCover : module de gestion des règles tarifaires, détection d\'anomalies sur factures de transport (affrètement vs messagerie), automatisation email complète.',
      'Refonte complète de l\'ERP interne : suivi des temps de travail, gestion de projets, tableaux de bord.',
      'Développement du système Mo&Jo : analyse automatisée des réseaux sociaux avec double passage IA et export PDF.',
      'Développement de MailScan : outil d\'analyse de kits emails par IA pour optimiser la délivrabilité.',
      'Création de workflows d\'automatisation (n8n, Make) pour des clients variés : marketing, e-commerce, RH.',
      'Intégration d\'APIs IA (Claude, ChatGPT, Gemini, Mistral) dans des produits clients.',
      'UX/UI design et création de logos pour des projets clients — de la maquette à la livraison.',
      'Création de contenu LinkedIn à ma propre initiative — j\'ai proposé d\'en faire, l\'équipe a dit oui.',
      'Échanges directs avec les clients pour comprendre leur besoin réel et proposer la bonne solution.',
      'Formation d\'un stagiaire arrivé un mois après moi : intégration IA, bonnes pratiques, débogage.',
    ],
    learnings: [
      'Autonomie sur des projets de bout en bout',
      'Travailler vite sans sacrifier la qualité',
      'Penser produit, pas juste code',
      'Maîtriser l\'intégration IA en production',
      'Gérer les deadlines et la pression client',
      'Collaborer en équipe sur des bases de code partagées',
    ],
    stack: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'GSAP'],
  },
  {
    id: 2,
    company: 'soumettre.fr',
    role: 'Développeur Web — Stage',
    period: 'Avr. 2024 → Juin 2024',
    location: 'Marck, France',
    shortDesc: 'Plateforme SaaS de soumission et d\'annuaires de liens — référencement et SEO.',
    bg: '#EAF0F0',
    accent: '#5D737E',
    intro:
      'Mon premier vrai stage dans un contexte SaaS. En 10 semaines, j\'ai appris Laravel from scratch, navigué dans une codebase de production massive, et livré des features réelles utilisées par l\'équipe.\n\nL\'administration existait déjà et était bien construite — mon travail a été de greffer dessus de nouvelles pages : un outil de suivi des éditeurs avec filtres avancés, tris, pagination et colonnes masquables, une page de relance mail pré-remplie, et un dashboard annonceurs avec graphes ApexCharts et indicateurs d\'évolution mensuelle.\n\nUn stage où j\'ai vraiment appris à coder — pas juste à suivre des tutoriels.',
    missions: [
      'Création d\'un dashboard "Suivi éditeurs" complet : filtres (id, email, range), tris multi-colonnes, pagination, colonnes masquables via popup.',
      'Développement d\'une page de relance mail automatisée pour les éditeurs avec tâches en attente — pré-remplie avec les données de la tâche.',
      'Page parrainage : statistiques détaillées du parrain (filleuls, gains mensuels/annuels, transactions).',
      'Dashboard annonceurs avec indicateurs d\'évolution des commandes (flèches haut/bas), popup avec graphe ApexCharts par mois.',
      'Intégration dans l\'admin Laravel/Livewire existant — routes, controllers, vues Blade, scopes de filtrage.',
      'Résolution de bugs Livewire (wire:key, re-render sur filtres), requêtes SQL avec jointures et sous-requêtes complexes.',
    ],
    learnings: [
      'Laravel & Livewire sur une vraie codebase de prod',
      'Architecture MVC et relations Eloquent',
      'Livewire : wire:key, pagination, filtres réactifs',
      'Requêtes SQL avancées (jointures, sous-requêtes, agrégats)',
      'Lire et comprendre du code que je n\'ai pas écrit',
      'Livrer des features utiles dans un délai court',
    ],
    stack: ['Laravel', 'Livewire', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'ApexCharts'],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export const Experience = () => {
  const { openId, open, close } = useExperienceModal();
  const activeExperience = experiences.find((e) => e.id === openId) ?? null;

  return (
    <>
      <section id="expériences" className="relative bg-[#E8E0D5] overflow-hidden py-24 md:py-40">

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">

          {/* Label */}
          <motion.span
            className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#4a1c0a]/35 mb-16 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
          >
            Expériences
          </motion.span>

          {/* Titre Modak — même style que About */}
          <div className="mb-20 md:mb-28">
            <motion.h2
              className="font-['Modak'] text-[#4a1c0a] leading-none tracking-tight block"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, ease } }}
              viewport={{ once: true }}
            >
              Mes terrains
            </motion.h2>
            <motion.h2
              className="font-['Modak'] leading-none tracking-tight block"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                color: 'transparent',
                WebkitTextStroke: '2px #4a1c0a',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.07, ease } }}
              viewport={{ once: true }}
            >
              d'expérience
            </motion.h2>
          </div>

          {/* Cards */}
          <div className="space-y-0 border-t border-[#4a1c0a]/10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease } }}
                viewport={{ once: true }}
              >
                <ExperienceCard experience={exp} onClick={() => open(exp.id)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceModal experience={activeExperience} onClose={close} />
    </>
  );
};

interface CardProps {
  experience: Experience;
  onClick: () => void;
}

const ExperienceCard = ({ experience, onClick }: CardProps) => (
  <button
    onClick={onClick}
    className="group w-full text-left border-b border-[#4a1c0a]/10 py-10 md:py-12 relative overflow-hidden"
    aria-label={`Voir les détails de ${experience.company}`}
  >
    {/* Hover background line */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ background: `linear-gradient(to right, ${experience.accent}08, transparent 60%)` }}
    />

    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-center">

      {/* Numéro */}
      <div className="md:col-span-1">
        <span className="font-['Modak'] text-[#4a1c0a]/12 group-hover:text-[#4a1c0a]/25 transition-colors duration-300"
          style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
          {String(experience.id).padStart(2, '0')}
        </span>
      </div>

      {/* Entreprise + rôle */}
      <div className="md:col-span-5 md:pl-8">
        <h3
          className="text-2xl md:text-3xl font-semibold text-[#4a1c0a] leading-tight mb-2 group-hover:translate-x-1 transition-transform duration-300"
        >
          {experience.company}
        </h3>
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#4a1c0a]/40">
          {experience.role}
        </p>
      </div>

      {/* Période + lieu */}
      <div className="md:col-span-4 md:pl-8 space-y-1.5">
        <p className="font-mono text-xs tracking-widest uppercase" style={{ color: experience.accent }}>
          {experience.period}
        </p>
        <p className="flex items-center gap-1.5 text-xs text-[#4a1c0a]/35 font-mono">
          <MapPin className="w-3 h-3" strokeWidth={2} />
          {experience.location}
        </p>
        <p className="text-sm text-[#4a1c0a]/50 leading-relaxed pt-1 max-w-xs">
          {experience.shortDesc}
        </p>
      </div>

      {/* CTA */}
      <div className="md:col-span-2 flex md:justify-end items-center gap-2">
        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: experience.accent }}
        >
          Voir le détail
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5} stroke={experience.accent}
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </div>
    </div>
  </button>
);
