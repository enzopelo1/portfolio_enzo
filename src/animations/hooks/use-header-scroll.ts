import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../gsap/config';

export const useHeaderScrollAnimation = () => {
  const letterLRef = useRef<HTMLSpanElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!letterLRef.current || !burgerRef.current || !navRef.current) return;

    gsap.timeline({
      scrollTrigger: {
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
            });
          }
          if (burgerRef.current) {
            gsap.to(burgerRef.current, {
              opacity: progress,
              x: 20 * (1 - progress),
              duration: 0.1,
            });
          }
          if (navRef.current) {
            gsap.to(navRef.current, {
              opacity: 1 - progress,
              x: 20 * progress,
              duration: 0.1,
            });
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === document.body) {
          trigger.kill();
        }
      });
    };
  }, []);

  return { letterLRef, burgerRef, navRef };
};
