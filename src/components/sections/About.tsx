import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: '+300', label: 'utilisateurs\nMeetCraft' },
  { value: '21', label: 'ans,\ndéjà en prod' },
  { value: '3+', label: 'ans de\ncode perso' },
];

const stack = ['Next.js', 'React', 'Node.js', 'Laravel', 'TypeScript', 'n8n', 'Claude API'];

const drives = [
  "Automatiser tout ce qui peut l'être",
  'Créer des outils qui simplifient la vie',
  "Explorer les possibilités de l'IA",
];

export const About = () => (
  <section id="à-propos" className="relative bg-[#EDE8E0] overflow-hidden py-24 md:py-40">

    {/* Watermark géant en fond — cohérent avec le Hero */}
    <motion.div
      className="absolute -right-12 top-0 select-none pointer-events-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      viewport={{ once: true }}
    >
      <span
        className="font-['Modak'] leading-none block"
        style={{
          fontSize: 'clamp(20rem, 50vw, 68rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(74,28,10,0.045)',
        }}
      >
        21
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
        À propos
      </motion.span>

      {/* Titre en Modak — même esprit que Hero */}
      <div className="mb-20 md:mb-28">
        <motion.h2
          className="font-['Modak'] text-[#4a1c0a] leading-[1] tracking-tight block"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, ease } }}
          viewport={{ once: true }}
        >
          Qui suis-je
        </motion.h2>
        <motion.h2
          className="font-['Modak'] leading-[1] tracking-tight block"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            color: 'transparent',
            WebkitTextStroke: '2px #4a1c0a',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.07, ease } }}
          viewport={{ once: true }}
        >
          vraiment ?
        </motion.h2>
      </div>

      {/* Layout principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-x-0 items-start">

        {/* Texte gauche */}
        <div className="lg:col-span-7 lg:pr-20 space-y-8">
          <motion.p
            className="text-2xl md:text-3xl text-[#4a1c0a] font-medium leading-snug"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease } }}
            viewport={{ once: true }}
          >
            Hey, moi c&apos;est Enzo — développeur fullstack, un peu obsédé par l&apos;automatisation.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-[#4a1c0a]/60 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease } }}
            viewport={{ once: true }}
          >
            Mon truc ? Prendre des processus chiants et répétitifs, et les transformer en solutions qui
            marchent toutes seules. J&apos;aime quand ça tourne sans qu&apos;on ait besoin d&apos;y toucher.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-[#4a1c0a]/60 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.28, ease } }}
            viewport={{ once: true }}
          >
            J&apos;ai touché à pas mal de choses : Next.js et Angular côté front, Laravel et Node.js côté back,
            un peu de design UX/UI, et surtout beaucoup d&apos;intégrations IA ces derniers temps.
            J&apos;apprends vite, je suis curieux, et j&apos;aime comprendre comment les choses fonctionnent.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-[#4a1c0a]/60 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.36, ease } }}
            viewport={{ once: true }}
          >
            Chez Traivis, j&apos;ai développé MeetCraft — une app de compte-rendus automatisés par IA,
            utilisée aujourd&apos;hui par plus de 300 personnes. C&apos;est le genre de projet qui m&apos;éclate :
            utile, technique, et avec un vrai impact.
          </motion.p>

          {/* Stats sous le texte, séparées par des traits */}
          <motion.div
            className="grid grid-cols-3 gap-0 pt-10 border-t border-[#4a1c0a]/10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4, ease } }}
            viewport={{ once: true }}
          >
            {stats.map(({ value, label }, i) => (
              <div
                key={value}
                className="pr-6 group cursor-default"
                style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(74,28,10,0.10)' : 'none', paddingLeft: i > 0 ? '1.5rem' : 0 }}
              >
                <div className="font-['Modak'] text-[#4a1c0a] leading-none mb-1.5 group-hover:scale-105 transition-transform duration-300 origin-left"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
                  {value}
                </div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#4a1c0a]/35 whitespace-pre-line leading-relaxed">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Colonne droite */}
        <div className="lg:col-span-5 lg:pl-16 lg:border-l border-[#4a1c0a]/10 space-y-14">

          {/* Ce qui me drive */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease } }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-[#4a1c0a]/30 mb-7">
              Ce qui me drive
            </p>
            <ul className="space-y-5">
              {drives.map((d, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4 group cursor-default"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 + i * 0.08, ease } }}
                  viewport={{ once: true }}
                >
                  <span className="font-['Modak'] text-2xl text-[#4a1c0a]/15 group-hover:text-[#4a1c0a]/50 transition-colors duration-300 leading-none shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-[#4a1c0a]/55 group-hover:text-[#4a1c0a] transition-colors duration-300 leading-relaxed">
                    {d}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Séparateur */}
          <motion.div
            className="h-px bg-[#4a1c0a]/10"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1, transition: { duration: 0.8, ease } }}
            viewport={{ once: true }}
          />

          {/* Stack */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3, ease } }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-[#4a1c0a]/30 mb-6">
              Stack préférée
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3.5 py-1.5 text-sm font-medium text-[#4a1c0a] border border-[#4a1c0a]/12 rounded-full hover:bg-[#4a1c0a] hover:text-[#FAF0E6] transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.35 + i * 0.05, ease } }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
