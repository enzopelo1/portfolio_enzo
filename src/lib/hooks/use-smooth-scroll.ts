import { useEffect } from 'react';
import { gsap } from '../../animations/gsap/config';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');

      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      // Hauteur du header sticky pour compenser
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;

      gsap.to(window, {
        scrollTo: {
          y: targetPosition,
          autoKill: true,
        },
        duration: 1.2,
        ease: 'power3.inOut',
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};
