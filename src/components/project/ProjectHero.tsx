import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { ProjectData } from '../../lib/data/projects-data';

interface Props {
  project: ProjectData;
  onBack: () => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export const ProjectHero = ({ project, onBack }: Props) => (
  <section className="relative min-h-screen flex flex-col overflow-hidden">
    {/* Scanlines texture */}
    <div
      className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.15) 2px, rgba(255,255,255,0.15) 3px)',
        backgroundSize: '100% 3px',
      }}
    />

    {/* Color gradient background */}
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      style={{
        background: `radial-gradient(ellipse at 60% 40%, ${project.color}22 0%, transparent 65%), radial-gradient(ellipse at 10% 80%, ${project.color}10 0%, transparent 50%)`,
      }}
    />

    {/* Image background with parallax feel */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.12, transition: { duration: 1.4, ease } }}
        style={{ filter: 'grayscale(60%)' }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0C0C0C 0%, transparent 30%, transparent 60%, #0C0C0C 100%)' }} />
    </div>

    {/* Header bar */}
    <div className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-8">
      <motion.button
        onClick={onBack}
        className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3, ease } }}
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
        <span className="font-mono text-xs tracking-widest uppercase">Retour</span>
      </motion.button>

      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3, ease } }}
      >
        <span className="font-mono text-xs tracking-widest uppercase text-white/30">{project.year}</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span className="font-mono text-xs tracking-widest uppercase text-white/30">{project.context}</span>
      </motion.div>
    </div>

    {/* Main hero content */}
    <div className="relative z-20 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
      {/* Giant number */}
      <motion.div
        className="absolute right-4 md:right-8 bottom-8 select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
      >
        <span
          className="text-[20vw] font-black leading-none"
          style={{
            color: 'transparent',
            WebkitTextStroke: `1px ${project.color}30`,
            fontFamily: "'Modak', cursive",
          }}
        >
          {String(project.id).padStart(2, '0')}
        </span>
      </motion.div>

      <div className="max-w-4xl">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4, ease } }}
        >
          <div className="h-px w-12" style={{ backgroundColor: project.color }} />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.color }}>
            {project.role}
          </span>
        </motion.div>

        <motion.h1
          className="text-[12vw] md:text-[9vw] lg:text-[7vw] text-white leading-[0.9] tracking-tight mb-8"
          style={{ fontFamily: "'Modak', cursive" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.2, ease } }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/55 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5, ease } }}
        >
          {project.description}
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.7 } }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono tracking-wider border rounded-full"
              style={{ borderColor: `${project.color}35`, color: `${project.color}cc`, backgroundColor: `${project.color}08` }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
    >
      <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
      <span className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase">Scroll</span>
    </motion.div>
  </section>
);
