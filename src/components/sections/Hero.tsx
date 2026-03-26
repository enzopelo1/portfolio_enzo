import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useHeroPin } from '../../animations/hooks/use-hero-pin';

export const Hero = () => {
  const { heroRef } = useHeroPin();
  const location = useLocation();
  const fromProject = !!(location.state as { fromProject?: boolean } | null)?.fromProject;
  const alreadySeen = sessionStorage.getItem('heroSeen') === '1';
  const skipAnim = fromProject || alreadySeen;

  // Marquer comme vu après le premier rendu
  if (!alreadySeen) sessionStorage.setItem('heroSeen', '1');

  return (
    <section
      ref={heroRef}
      className="relative z-0 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#FAF0E6] pt-20"
    >
      
      {/* Background Code Snippets (Décoration) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-sm font-mono overflow-hidden select-none">
        <div className="absolute top-20 left-10 transform -rotate-12">
          <pre>{`const portfolio = {\n  owner: 'Enzo',\n  skills: ['React', 'Node']\n};`}</pre>
        </div>
        <div className="absolute bottom-40 right-10 transform rotate-6">
          <pre>{`function createExperience() {\n  return new Magic();\n}`}</pre>
        </div>
        <div className="absolute top-1/3 right-1/4 transform -rotate-3">
          <pre>{`<HeroSection \n  style="elegant" \n/>`}</pre>
        </div>
      </div>

      {/* Lignes graphiques (style éclats/traits) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M100,100 L300,50"
          stroke="#1A1A1A"
          strokeWidth="1"
          initial={skipAnim ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M800,600 L950,550"
          stroke="#1A1A1A"
          strokeWidth="1"
          initial={skipAnim ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.path
          d="M1200,200 L1100,350"
          stroke="#1A1A1A"
          strokeWidth="1"
          initial={skipAnim ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
      </svg>

      {/* Contenu Principal : ENZO (haut) → Photo (centre, chevauche ENZO) → LEPRINCE (bas) */}
      <div className="relative z-10 container mx-auto px-5 md:px-12 lg:px-16 py-12 md:py-16 -mt-4 flex flex-col items-center text-center">
        
        {/* ENZO : très grand en haut */}
        <h1 className="font-['Modak'] -mt-16 md:-mt-24 lg:-mt-32 text-[18vw] sm:text-[16vw] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] leading-[0.85] text-[#4a1c0a] tracking-tight">
          <motion.span
            className="block"
            initial={skipAnim ? false : { y: 100, opacity: 0, skewY: 5 }}
            animate={{ y: 0, opacity: 1, skewY: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            ENZO
          </motion.span>
        </h1>

        {/* Photo au centre : sans contour, chevauche le prénom (z-10 sous LEPRINCE) */}
        <motion.div
          className="relative z-10 -mt-[14vw] sm:-mt-[12vw] md:-mt-36 lg:-mt-44 xl:-mt-52 w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[38rem] xl:h-[38rem] overflow-hidden"
          initial={skipAnim ? false : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/photo_enzo.webp"
            alt="Enzo Leprince"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* LEPRINCE : en bas, au-dessus de l'image (z-20) + Développeur Fullstack */}
        <div className="relative z-20 -mt-14 md:-mt-24 lg:-mt-32 xl:-mt-40">
          <motion.h2
            className="absolute bottom-full right-0 mb-1 text-base sm:text-lg md:text-xl font-medium text-[#4a1c0a]/90"
            initial={skipAnim ? false : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Développeur Fullstack
          </motion.h2>
          <h1 className="font-['Modak'] text-[14vw] sm:text-[12vw] md:text-[10rem] lg:text-[14rem] xl:text-[16rem] leading-[0.9] text-[#4a1c0a] tracking-tight">
            <motion.span
              className="block"
              initial={skipAnim ? false : { y: 100, opacity: 0, skewY: 5 }}
              animate={{ y: 0, opacity: 1, skewY: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              LEPRINCE
            </motion.span>
          </h1>
        </div>        
      </div>
    </section>
  );
};
