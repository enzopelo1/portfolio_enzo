import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { headerVariants } from '../../animations/framer/variants';
import { useMediaQuery } from '../../lib/hooks/use-media-query';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { BurgerButton } from './BurgerButton';
import { gsap, ScrollTrigger } from '../../animations/gsap/config';

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const letterLRef = useRef<HTMLSpanElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);


  useEffect(() => {
    if (!letterLRef.current || !burgerRef.current) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: '+=300',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        if (letterLRef.current) {
          gsap.to(letterLRef.current, {
            opacity: 1 - progress,
            x: -20 * progress,
            duration: 0.1,
            ease: 'none',
          });
        }

        if (burgerRef.current) {
          gsap.to(burgerRef.current, {
            opacity: progress,
            x: 20 * (1 - progress),
            duration: 0.1,
            ease: 'none',
          });
          if (progress > 0.1) {
            burgerRef.current.style.pointerEvents = 'auto';
          } else {
            burgerRef.current.style.pointerEvents = 'none';
          }
        }

        if (navRef.current && !isMobile) {
          const navLinks = navRef.current.querySelectorAll('.nav-link-item');
          
          navLinks.forEach((link, index) => {
            const linkProgress = Math.max(0, Math.min(1, (progress - index * 0.15) / 0.3));
            const staggerProgress = Math.max(0, Math.min(1, progress - index * 0.15));
            
            gsap.to(link, {
              opacity: 1 - linkProgress,
              y: -30 * staggerProgress,
              duration: 0.1,
              ease: 'none',
            });
          });
          
          if (progress > 0.6) {
            navRef.current.style.display = 'none';
          } else {
            navRef.current.style.display = 'flex';
          }
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [isMobile]);

  return (
    <motion.header
      className="sticky top-0 left-0 right-0 z-50 bg-transparent h-20 md:h-20"
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-5 md:px-12 lg:px-16 h-full flex items-center justify-between">
        <Logo ref={logoRef} letterLRef={letterLRef} />
        <div className="flex items-center gap-12">
          {!isMobile && <Navigation ref={navRef} />}
          <div className="relative">
            <BurgerButton
              ref={burgerRef}
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative transition-opacity duration-300 z-[70] ${
                isMenuOpen ? '!opacity-100 !pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            />
            <MobileMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
