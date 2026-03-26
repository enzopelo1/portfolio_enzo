import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const links = [
  { icon: Mail,     label: 'Email',    value: 'hanzoleprince62@gmail.com',          href: 'mailto:hanzoleprince62@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Enzo Leprince',                       href: 'https://www.linkedin.com/in/enzo-leprince-6a1721253/' },
  { icon: Github,   label: 'GitHub',   value: '@enzopelo1',                          href: 'https://github.com/enzopelo1' },
  { icon: FileText, label: 'CV',       value: 'Télécharger mon CV',                  href: '/cv.pdf' },
];

export const Contact = () => (
  <section id="contact" className="relative bg-[#E6DDD2] overflow-hidden py-24 md:py-40">

    <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">

      {/* Label */}
      <motion.span
        className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#4a1c0a]/35 mb-16 block"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.8 } }} viewport={{ once: true }}
      >
        Contact
      </motion.span>

      {/* Titre */}
      <div className="mb-20 md:mb-28">
        <motion.h2
          className="font-['Modak'] text-[#4a1c0a] leading-none tracking-tight block"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, ease } }} viewport={{ once: true }}
        >
          Travaillons
        </motion.h2>
        <motion.h2
          className="font-['Modak'] leading-none tracking-tight block"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', color: 'transparent', WebkitTextStroke: '2px #4a1c0a' }}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.07, ease } }} viewport={{ once: true }}
        >
          ensemble.
        </motion.h2>
        <motion.p
          className="mt-8 text-base md:text-lg text-[#4a1c0a]/50 font-mono tracking-wide max-w-md"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.18, ease } }} viewport={{ once: true }}
        >
          Je suis en recherche d&apos;un CDI/emploi pour 2027.
        </motion.p>
      </div>

      {/* Liens — liste éditoriale */}
      <div className="border-t border-[#4a1c0a]/10">
        {links.map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group relative flex items-center gap-6 border-b border-[#4a1c0a]/10 py-7 md:py-9 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease } }}
            viewport={{ once: true }}
          >
            {/* Hover background */}
            <motion.div
              className="absolute inset-0 origin-left pointer-events-none"
              style={{ backgroundColor: 'rgba(74,28,10,0.04)' }}
              initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4, ease }}
            />

            {/* Icon */}
            <span className="relative shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#4a1c0a]/12 group-hover:border-[#4a1c0a]/30 transition-colors duration-300">
              <Icon className="w-4 h-4 text-[#4a1c0a]/60 group-hover:text-[#4a1c0a] transition-colors duration-300" strokeWidth={1.5} />
            </span>

            {/* Label */}
            <span className="relative font-mono text-[10px] tracking-[0.3em] uppercase text-[#4a1c0a]/30 w-20 shrink-0">{label}</span>

            {/* Value */}
            <span className="relative flex-1 text-lg md:text-xl font-semibold text-[#4a1c0a] group-hover:translate-x-1 transition-transform duration-300">
              {value}
            </span>

            {/* Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="relative w-5 h-5 text-[#4a1c0a]/20 group-hover:text-[#4a1c0a]/60 group-hover:translate-x-1 transition-all duration-300 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        className="mt-16 font-mono text-[10px] tracking-[0.3em] uppercase text-[#4a1c0a]/20 text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }} viewport={{ once: true }}
      >
        Développé avec React 19, TypeScript, Tailwind CSS, Framer Motion &amp; GSAP
      </motion.p>

    </div>
  </section>
);
