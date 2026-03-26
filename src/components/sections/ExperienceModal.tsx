import { motion, AnimatePresence } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import type { Experience } from './Experience';

interface Props {
  experience: Experience | null;
  onClose: () => void;
}

const ease: Easing = [0.16, 1, 0.3, 1];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.1 } },
};

const panelVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.4, ease } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 + i * 0.07, ease } }),
};

export const ExperienceModal = ({ experience, onClose }: Props) => {
  return (
    <AnimatePresence>
      {experience && (
        <>
          <motion.div
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'rgba(74, 28, 10, 0.45)', backdropFilter: 'blur(6px)' }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-2xl flex flex-col overflow-hidden"
            style={{ backgroundColor: experience.bg }}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-8 pb-6 border-b border-[#4a1c0a]/10">
              <div>
                <motion.span
                  className="font-mono text-xs tracking-widest uppercase mb-2 block"
                  style={{ color: experience.accent }}
                  custom={0} variants={itemVariants} initial="hidden" animate="visible"
                >
                  {experience.period}
                </motion.span>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-[#4a1c0a] leading-tight"
                  custom={1} variants={itemVariants} initial="hidden" animate="visible"
                >
                  {experience.company}
                </motion.h2>
                <motion.p
                  className="text-[#4a1c0a]/60 mt-1 text-sm font-medium"
                  custom={2} variants={itemVariants} initial="hidden" animate="visible"
                >
                  {experience.role}
                </motion.p>
              </div>
              <button
                onClick={onClose}
                className="mt-1 w-10 h-10 flex items-center justify-center rounded-full border border-[#4a1c0a]/15 hover:bg-[#4a1c0a]/8 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-[#4a1c0a]" strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-10">
              {/* Intro */}
              <motion.div
                className="space-y-4"
                custom={3} variants={itemVariants} initial="hidden" animate="visible"
              >
                {experience.intro.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-lg text-[#4a1c0a]/75 leading-relaxed">{paragraph}</p>
                ))}
              </motion.div>

              {/* Missions */}
              <div>
                <motion.h3
                  className="font-mono text-xs tracking-widest uppercase text-[#4a1c0a]/40 mb-5"
                  custom={4} variants={itemVariants} initial="hidden" animate="visible"
                >
                  Missions
                </motion.h3>
                <ul className="space-y-4">
                  {experience.missions.map((m, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-4 items-start"
                      custom={5 + i} variants={itemVariants} initial="hidden" animate="visible"
                    >
                      <ArrowRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: experience.accent }} strokeWidth={2} />
                      <span className="text-[#4a1c0a]/80 leading-relaxed">{m}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Apports */}
              <div>
                <motion.h3
                  className="font-mono text-xs tracking-widest uppercase text-[#4a1c0a]/40 mb-5"
                  custom={5 + experience.missions.length} variants={itemVariants} initial="hidden" animate="visible"
                >
                  Ce que ça m'a apporté
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experience.learnings.map((l, i) => (
                    <motion.div
                      key={i}
                      className="rounded-xl p-4 border"
                      style={{ backgroundColor: `${experience.accent}10`, borderColor: `${experience.accent}20` }}
                      custom={6 + experience.missions.length + i} variants={itemVariants} initial="hidden" animate="visible"
                    >
                      <p className="text-sm text-[#4a1c0a]/80 leading-relaxed">{l}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div>
                <motion.h3
                  className="font-mono text-xs tracking-widest uppercase text-[#4a1c0a]/40 mb-4"
                  custom={7 + experience.missions.length + experience.learnings.length} variants={itemVariants} initial="hidden" animate="visible"
                >
                  Stack utilisée
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {experience.stack.map((s, i) => (
                    <motion.span
                      key={s}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border"
                      style={{ color: experience.accent, borderColor: `${experience.accent}30`, backgroundColor: `${experience.accent}08` }}
                      custom={8 + experience.missions.length + experience.learnings.length + i} variants={itemVariants} initial="hidden" animate="visible"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
