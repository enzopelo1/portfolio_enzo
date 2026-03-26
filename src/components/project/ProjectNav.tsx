import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ProjectData } from '../../lib/data/projects-data';

interface Props {
  prev: ProjectData | null | undefined;
  next: ProjectData | null | undefined;
  onNavigate: (slug: string) => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export const ProjectNav = ({ prev, next, onNavigate }: Props) => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative border-t"
      style={{ backgroundColor: '#0C0C0C', borderColor: 'rgba(255,255,255,0.06)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.6, ease } }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-2 divide-x" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        {prev && <NavCard project={prev} direction="prev" onNavigate={onNavigate} />}
        {next && <NavCard project={next} direction="next" onNavigate={onNavigate} />}
      </div>

      {/* Back home */}
      <div className="flex justify-center border-t py-8" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <motion.button
          onClick={() => navigate('/', { state: { fromProject: true } })}
          className="group flex items-center gap-3 text-white/30 hover:text-white/70 transition-colors duration-300"
          whileHover={{ y: -2 }}
        >
          <Home className="w-4 h-4" strokeWidth={1.5} />
          <span className="font-mono text-xs tracking-[0.2em] uppercase">Retour à l'accueil</span>
        </motion.button>
      </div>
    </motion.section>
  );
};

interface NavCardProps {
  project: ProjectData;
  direction: 'prev' | 'next';
  onNavigate: (slug: string) => void;
}

const NavCard = ({ project, direction, onNavigate }: NavCardProps) => {
  const isPrev = direction === 'prev';

  return (
    <motion.button
      onClick={() => onNavigate(project.slug)}
      className={`group relative overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col ${isPrev ? 'items-start' : 'items-end'} text-left`}
      whileHover="hovered"
      initial="idle"
    >
      {/* Hover background */}
      <motion.div
        className="absolute inset-0"
        variants={{
          idle: { opacity: 0 },
          hovered: { opacity: 1, transition: { duration: 0.4 } },
        }}
        style={{ background: `radial-gradient(ellipse at ${isPrev ? '20%' : '80%'} 50%, ${project.color}12, transparent 70%)` }}
      />

      {/* Image preview on hover */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        variants={{
          idle: { opacity: 0 },
          hovered: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(70%)', opacity: 0.06 }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </motion.div>

      <div className={`relative z-10 flex flex-col ${isPrev ? 'items-start' : 'items-end'} gap-4`}>
        <div className={`flex items-center gap-3 ${isPrev ? '' : 'flex-row-reverse'}`}>
          <motion.div
            variants={{
              idle: { x: 0 },
              hovered: { x: isPrev ? -6 : 6, transition: { duration: 0.3 } },
            }}
          >
            {isPrev
              ? <ArrowLeft className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
              : <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
            }
          </motion.div>
          <span className="font-mono text-xs tracking-widest uppercase text-white/25">
            {isPrev ? 'Précédent' : 'Suivant'}
          </span>
        </div>

        <motion.h3
          className="text-3xl md:text-4xl lg:text-5xl font-black text-white/70 leading-tight"
          style={{ fontFamily: "'Modak', cursive" }}
          variants={{
            idle: { color: 'rgba(255,255,255,0.55)' },
            hovered: { color: project.color, transition: { duration: 0.3 } },
          }}
        >
          {project.title}
        </motion.h3>

        <p className={`text-sm text-white/30 max-w-xs ${isPrev ? '' : 'text-right'} leading-relaxed`}>
          {project.role} — {project.year}
        </p>
      </div>

      {/* Accent line */}
      <motion.div
        className={`absolute bottom-0 ${isPrev ? 'left-0' : 'right-0'} h-0.5 w-0`}
        variants={{
          idle: { width: 0 },
          hovered: { width: '40%', transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
        }}
        style={{ backgroundColor: project.color }}
      />
    </motion.button>
  );
};
