import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const categories = [
  {
    title: 'Frontend',
    num: '01',
    skills: ['Angular', 'Vue.js', 'Next.js', 'React', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'GSAP'],
  },
  {
    title: 'Backend',
    num: '02',
    skills: ['Laravel', 'Symfony', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'],
  },
  {
    title: 'Mobile & Design',
    num: '03',
    skills: ['Flutter', 'Figma', 'Photoshop', 'Illustrator', 'InDesign'],
  },
  {
    title: 'Automatisation & IA',
    num: '04',
    skills: ['n8n', 'Make', 'Claude', 'ChatGPT', 'Gemini', 'Mistral'],
  },
  {
    title: 'DevOps & Outils',
    num: '05',
    skills: ['GitHub', 'Docker', 'VPS', 'VSCode', 'Cursor'],
  },
];

const softSkills = [
  { name: 'Adaptabilité', desc: "À l'aise dans différents contextes" },
  { name: 'Autonomie', desc: 'Gère des projets de A à Z' },
  { name: 'Créativité', desc: 'Trouve des solutions originales' },
  { name: 'Organisation', desc: 'Structure et priorise efficacement' },
  { name: "Esprit d'équipe", desc: 'Collaboration fluide en agile' },
  { name: 'Curiosité', desc: 'Veille techno constante' },
];

export const Skills = () => (
  <section id="compétences" className="relative bg-[#EAE4D8] overflow-hidden py-24 md:py-40">

    <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">

      {/* Label */}
      <motion.span
        className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#4a1c0a]/35 mb-16 block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        Compétences
      </motion.span>

      {/* Titre Modak */}
      <div className="mb-20 md:mb-28">
        <motion.h2
          className="font-['Modak'] text-[#4a1c0a] leading-none tracking-tight block"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, ease } }}
          viewport={{ once: true }}
        >
          Stack &
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
          savoir-faire
        </motion.h2>
      </div>

      {/* Catégories en liste */}
      <div className="border-t border-[#4a1c0a]/10 mb-24 md:mb-32">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="group border-b border-[#4a1c0a]/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.07, ease } }}
            viewport={{ once: true }}
          >
            {/* Numéro */}
            <div className="md:col-span-1">
              <span
                className="font-['Modak'] text-[#4a1c0a]/12 group-hover:text-[#4a1c0a]/25 transition-colors duration-300"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}
              >
                {cat.num}
              </span>
            </div>

            {/* Titre catégorie */}
            <div className="md:col-span-3 md:pl-6 flex items-start pt-1.5">
              <h3 className="text-lg font-semibold text-[#4a1c0a] group-hover:translate-x-1 transition-transform duration-300">
                {cat.title}
              </h3>
            </div>

            {/* Pills */}
            <div className="md:col-span-8 md:pl-8 flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  className="px-3.5 py-1.5 text-sm font-medium text-[#4a1c0a] border border-[#4a1c0a]/12 rounded-full hover:bg-[#4a1c0a] hover:text-[#FAF0E6] transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.35, delay: 0.1 + j * 0.04, ease } }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft skills */}
      <div className="relative">

        {/* Header row */}
        <div className="flex items-end justify-between mb-16 md:mb-20 border-t border-[#4a1c0a]/10 pt-16">
          <motion.p
            className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#4a1c0a]/35"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
          >
            Humain
          </motion.p>
          <motion.h3
            className="font-['Modak'] leading-none text-right"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', color: 'transparent', WebkitTextStroke: '2px #4a1c0a' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease } }}
            viewport={{ once: true }}
          >
            Compétences<br />humaines
          </motion.h3>
        </div>

        {/* Skills list — full-width horizontal rows */}
        <div className="space-y-0">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="group relative border-t border-[#4a1c0a]/10 last:border-b py-6 md:py-8 flex items-center justify-between gap-8 cursor-default overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.55, delay: i * 0.06, ease } }}
              viewport={{ once: true }}
            >
              {/* Hover fill */}
              <motion.div
                className="absolute inset-0 origin-left"
                style={{ backgroundColor: 'rgba(74,28,10,0.04)' }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease }}
              />

              {/* Index */}
              <span className="relative font-mono text-[10px] tracking-[0.3em] text-[#4a1c0a]/20 shrink-0 w-8">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Skill name */}
              <p className="relative text-lg font-semibold text-[#4a1c0a] flex-1 group-hover:translate-x-1 transition-transform duration-300">
                {skill.name}
              </p>

              {/* Description */}
              <p className="relative text-sm text-[#4a1c0a]/40 leading-relaxed max-w-xs text-right hidden sm:block font-mono tracking-wide">
                {skill.desc}
              </p>

              {/* Arrow */}
              <span className="relative text-[#4a1c0a]/15 group-hover:text-[#4a1c0a]/50 transition-colors duration-300 shrink-0 font-mono text-xs">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
