import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { ProjectData } from '../../lib/data/projects-data';

interface Props {
  project: ProjectData;
}

const ease = [0.16, 1, 0.3, 1] as const;

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease },
  }),
};

export const ProjectContent = ({ project }: Props) => (
  <section className="relative px-6 md:px-12 lg:px-16 py-24 md:py-32" style={{ backgroundColor: '#0C0C0C' }}>
    {/* Horizontal rule accent */}
    <div className="max-w-6xl mx-auto">
      <div className="w-full h-px mb-20 opacity-10" style={{ backgroundColor: project.color }} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left column */}
        <div className="lg:col-span-7 space-y-20">
          {/* Long description */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0}
          >
            <Label color={project.color}>Vue d'ensemble</Label>
            <p className="text-xl md:text-2xl text-white/75 leading-[1.8] mt-6" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, letterSpacing: '-0.01em' }}>
              {project.longDescription}
            </p>
          </motion.div>

          {/* Challenge */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={1}
          >
            <Label color={project.color}>Le défi</Label>
            <div className="mt-6 pl-5 border-l-2" style={{ borderColor: `${project.color}50` }}>
              <p className="text-white/60 leading-relaxed text-lg">{project.challenge}</p>
            </div>
          </motion.div>

          {/* Result */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={2}
          >
            <Label color={project.color}>Le résultat</Label>
            <div
              className="mt-6 rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: `${project.color}10`, border: `1px solid ${project.color}20` }}
            >
              <p className="text-white/80 leading-relaxed text-lg">{project.result}</p>
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-5 space-y-12">
          {/* Highlights */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.5}
          >
            <Label color={project.color}>Points clés</Label>
            <ul className="mt-6 space-y-4">
              {project.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4"
                  variants={revealVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.15 + 0.3}
                >
                  <CheckCircle
                    className="w-5 h-5 mt-0.5 shrink-0"
                    strokeWidth={1.5}
                    style={{ color: project.color }}
                  />
                  <span className="text-white/65 leading-relaxed">{h}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Project meta card */}
          <motion.div
            className="rounded-2xl p-6 space-y-5 sticky top-8"
            style={{ backgroundColor: '#161616', border: '1px solid rgba(255,255,255,0.06)' }}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <MetaRow label="Année" value={project.year} color={project.color} />
            <div className="h-px bg-white/5" />
            <MetaRow label="Rôle" value={project.role} color={project.color} />
            <div className="h-px bg-white/5" />
            <MetaRow label="Contexte" value={project.context} color={project.color} />
            <div className="h-px bg-white/5" />
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-3">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg"
                    style={{ backgroundColor: `${project.color}15`, color: `${project.color}bb` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Label = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
    <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/35">{children}</span>
  </div>
);

const MetaRow = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div>
    <p className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: `${color}70` }}>{label}</p>
    <p className="text-white/75 text-sm">{value}</p>
  </div>
);
