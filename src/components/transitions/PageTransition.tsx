import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  pageTransitionVariants,
  pageTransitionNameVariants,
  pageContentVariants,
} from '../../animations/framer/variants';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const fromProject = !!(location.state as { fromProject?: boolean } | null)?.fromProject;
  const alreadySeen = sessionStorage.getItem('heroSeen') === '1';
  const skipTransition = fromProject || alreadySeen;
  const [showTransition, setShowTransition] = useState(!skipTransition);

  useEffect(() => {
    if (skipTransition) {
      setShowTransition(false);
      return;
    }
    setShowTransition(true);
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <AnimatePresence mode="wait">
        {!showTransition && (
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageContentVariants}
            className="relative z-10"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTransition && (
          <motion.div
            key={`transition-${location.pathname}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF0E6]"
          >
            <motion.h1
              variants={pageTransitionNameVariants}
              className="font-['Modak'] text-6xl md:text-8xl lg:text-9xl text-[#4a1c0a] tracking-tight"
            >
              Enzo Leprince
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
