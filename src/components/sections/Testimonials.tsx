import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

interface TestimonialData {
  name: string;
  role: string;
  company: string;
  avatar: string;
  preview: string;
  paragraphs: string[];
  signature: string;
}

const testimonials: TestimonialData[] = [
  {
    name: 'Samuel Patou',
    role: 'Fondateur',
    company: 'Traivis',
    avatar: '/samuel.jpeg',
    preview:
      "J'ai eu le plaisir de travailler avec Enzo Leprince au sein de la société Traivis durant plus d'un an. Il nous a rejoints le 10 mars 2025 pour son stage de fin de BUT Informatique, avant de poursuivre en contrat d'apprentissage suite à la réussite de sa première mission.",
    paragraphs: [
      "Durant son parcours, Enzo a développé une expertise très pertinente sur l'intégration de l'intelligence artificielle dans les processus de développement de solutions informatiques. Il a su aller au-delà du développement classique pour concevoir des systèmes articulant APIs et agents IA, tout en maîtrisant les enjeux d'automatisation de workflows.",
      "Sur le plan professionnel, Enzo est un collaborateur autonome qui sait s'approprier des projets variés et complexes. J'ai particulièrement apprécié sa curiosité et sa capacité à être force de proposition : il ne se contente pas d'exécuter, il analyse les besoins et suggère des solutions techniques adaptées.",
      "À ce sérieux et cette rigueur s'ajoute un véritable savoir-être. Enzo est une personne avec qui il est particulièrement agréable de travailler au quotidien. Naturellement ouvert aux autres, à l'écoute et toujours constructif, il fait preuve d'un excellent relationnel.",
      "Je recommande sincèrement Enzo à toute structure recherchant un profil capable de conjuguer développement informatique et nouvelles solutions d'IA, le tout avec un excellent état d'esprit.",
    ],
    signature: 'Cordialement, Samuel Patou — Traivis',
  },
  {
    name: 'Rodrigue Fenard',
    role: 'Fondateur',
    company: 'Soumettre.fr',
    avatar: '/rod.jpeg',
    preview:
      "Enzo s'est distingué dès son arrivée par son autonomie remarquable et sa soif d'apprentissage. Il a pris l'initiative d'apprendre le framework Laravel par lui-même, ce qui témoigne de son sérieux et de sa capacité à monter en compétences de manière indépendante.",
    paragraphs: [
      "Enzo a été en charge du développement d'un tableau d'analyse de nos données sur notre plateforme web. Grâce à son travail rigoureux et méthodique, il a su concevoir un outil performant, intuitif et parfaitement adapté à nos besoins dans le respect de notre charte.",
      "Ce projet a été un réel succès : le tableau développé en Laravel est aujourd'hui un élément important de notre activité et nous l'utilisons quotidiennement pour analyser nos données et optimiser nos processus.",
      "Au-delà de ses compétences techniques, Enzo est une personne investie, curieuse et dotée d'un excellent esprit d'initiative et de camaraderie. Son autonomie et son envie constante de progresser font de lui un profil extrêmement prometteur.",
      "Je recommande Enzo sans la moindre hésitation à toute entreprise cherchant un développeur talentueux, passionné et autonome. Son passage chez nous a été une véritable valeur ajoutée.",
    ],
    signature: 'Cordialement, Rodrigue Fenard — Soumettre.fr',
  },
];

const TestimonialCard = ({ t, index }: { t: TestimonialData; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.12, ease } }}
      viewport={{ once: true }}
    >
      {/* Guillemet décoratif au-dessus de la carte */}
      <span
        className="absolute -top-8 -left-2 font-['Modak'] text-[#4a1c0a]/10 select-none pointer-events-none z-20 leading-none"
        style={{ fontSize: '10rem' }}
        aria-hidden
      >
        &ldquo;
      </span>

      <div className="relative z-10 p-10 md:p-14 rounded-3xl border border-[#4a1c0a]/10 bg-[#FAF0E6] transition-all duration-500 hover:border-[#4a1c0a]/18">

        {/* Author */}
        <div className="flex items-center gap-5 mb-10 pb-8 border-b border-[#4a1c0a]/8">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-16 h-16 rounded-full object-cover shrink-0 border border-[#4a1c0a]/10"
          />
          <div>
            <p className="font-['Modak'] text-2xl text-[#4a1c0a] leading-none">{t.name}</p>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#4a1c0a]/35 mt-1.5">
              {t.role} — {t.company}
            </p>
          </div>
          <div className="ml-auto hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[#4a1c0a]/10 bg-[#4a1c0a]/4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4a1c0a]/40" />
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#4a1c0a]/40">
              Recommandation officielle
            </span>
          </div>
        </div>

        {/* Aperçu */}
        <p className="text-base md:text-lg text-[#4a1c0a]/65 leading-relaxed">{t.preview}</p>

        {/* Contenu dépliable */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto', transition: { duration: 0.5, ease } }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.35, ease: 'easeIn' } }}
              className="overflow-hidden"
            >
              <div className="space-y-5 mt-5">
                {t.paragraphs.map((para, i) => (
                  <p key={i} className="text-base md:text-lg text-[#4a1c0a]/65 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-[#4a1c0a]/8">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#4a1c0a]/30">
                  {t.signature}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bouton déplier */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-8 flex items-center gap-2.5 text-[#4a1c0a]/50 hover:text-[#4a1c0a] transition-colors duration-300"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
            {expanded ? 'Réduire' : 'Lire la suite'}
          </span>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <ChevronDown className="w-3.5 h-3.5" strokeWidth={2} />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => (
  <section id="témoignages" className="relative bg-[#F5EDE0] overflow-hidden py-24 md:py-40">

    {/* Watermark */}
    <motion.div
      className="absolute -right-16 top-0 select-none pointer-events-none hidden lg:block"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      viewport={{ once: true }}
    >
      <span
        className="font-['Modak'] leading-none block"
        style={{
          fontSize: 'clamp(18rem, 40vw, 56rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(74,28,10,0.035)',
        }}
      >
        RF
      </span>
    </motion.div>

    <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">

      {/* Label */}
      <motion.span
        className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#4a1c0a]/35 mb-16 block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        Témoignages
      </motion.span>

      {/* Titre */}
      <div className="mb-20 md:mb-28">
        <motion.h2
          className="font-['Modak'] text-[#4a1c0a] leading-none tracking-tight block"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, ease } }}
          viewport={{ once: true }}
        >
          Ce qu&apos;on dit
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
          de moi.
        </motion.h2>
      </div>

      {/* Cartes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} index={i} />
        ))}
      </div>

      {/* Baseline */}
      <motion.p
        className="mt-16 font-mono text-[10px] tracking-[0.35em] uppercase text-[#4a1c0a]/25"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
        viewport={{ once: true }}
      >
        Références disponibles sur demande
      </motion.p>
    </div>
  </section>
);
