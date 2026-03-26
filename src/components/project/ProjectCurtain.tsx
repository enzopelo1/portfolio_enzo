import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectData } from '../../lib/data/projects-data';

interface Props {
  isExiting: boolean;
  nextProject: ProjectData | null | undefined;
}

export const ProjectCurtain = ({ isExiting, nextProject }: Props) => (
  <AnimatePresence>
    {isExiting && (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        exit={{ scaleY: 0, originY: 1, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }}
        style={{ backgroundColor: '#0C0C0C' }}
      >
        {nextProject && (
          <motion.div
            className="text-center select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } }}
          >
            <p className="text-white/30 font-mono text-xs tracking-[0.3em] uppercase mb-3">
              Suivant
            </p>
            <h2
              className="text-5xl md:text-7xl font-black tracking-tight"
              style={{ color: nextProject.color, fontFamily: "'Modak', cursive" }}
            >
              {nextProject.title}
            </h2>
          </motion.div>
        )}
      </motion.div>
    )}
  </AnimatePresence>
);
