import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { ScrollTrigger } from '../../animations/gsap/config';

// 'hero' = top de la page (scroll à 0), pas d'id
const SECTIONS = ['hero', 'projets', 'à-propos', 'expériences', 'compétences', 'contact'];

const getTop = (id: string): number => {
  if (id === 'hero') return 0;
  const el = document.getElementById(id);
  if (!el) return 0;
  // offsetTop est absolu dans le document, fiable même avec GSAP
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) { top += node.offsetTop; node = node.offsetParent as HTMLElement | null; }
  return top;
};

export const SectionNav = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight / 3;
    let active = 0;
    SECTIONS.forEach((id, i) => {
      if (getTop(id) <= scrollY) active = i;
    });
    setCurrentIndex(active);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateIndex, { passive: true });
    updateIndex();
    return () => window.removeEventListener('scroll', updateIndex);
  }, [updateIndex]);

  const goTo = (index: number) => {
    if (index < 0 || index >= SECTIONS.length) return;
    const id = SECTIONS[index];
    if (id === 'hero') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (id === 'projets') {
      ScrollTrigger.refresh();
      setTimeout(() => window.scrollTo({ top: getTop('projets'), behavior: 'smooth' }), 50);
      return;
    }
    window.scrollTo({ top: getTop(id), behavior: 'smooth' });
  };

  const canUp = currentIndex > 0;
  const canDown = currentIndex < SECTIONS.length - 1;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
      <motion.button
        onClick={() => goTo(currentIndex - 1)}
        disabled={!canUp}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4a1c0a]/20 bg-[#FAF0E6]/90 backdrop-blur-sm text-[#4a1c0a] disabled:opacity-20 hover:bg-[#4a1c0a] hover:text-[#FAF0E6] hover:border-[#4a1c0a] transition-all duration-300"
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        aria-label="Section précédente"
      >
        <ChevronUp className="w-4 h-4" strokeWidth={2} />
      </motion.button>
      <motion.button
        onClick={() => goTo(currentIndex + 1)}
        disabled={!canDown}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4a1c0a]/20 bg-[#FAF0E6]/90 backdrop-blur-sm text-[#4a1c0a] disabled:opacity-20 hover:bg-[#4a1c0a] hover:text-[#FAF0E6] hover:border-[#4a1c0a] transition-all duration-300"
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        aria-label="Section suivante"
      >
        <ChevronDown className="w-4 h-4" strokeWidth={2} />
      </motion.button>
    </div>
  );
};
