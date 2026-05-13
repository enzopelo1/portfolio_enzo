import { useEffect, useRef } from 'react';
import { gsap } from '../gsap/config';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const useHorizontalScroll = (totalProjects?: number) => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const section = sectionRef.current;
    const container = containerRef.current;
    const projects = projectsRef.current.filter(Boolean);

    const count = totalProjects ?? projects.length;
    if (count === 0) return;

    let ctx: ReturnType<typeof gsap.context> | null = null;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      ctx = gsap.context(() => {
        const viewportWidth = window.innerWidth;
        const totalWidth = viewportWidth * count;

        gsap.set(container, { width: totalWidth });

        gsap.to(container, {
          x: -(totalWidth - viewportWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        projects.forEach((project) => {
          const leftColumn = project.querySelector('.grid > div:first-child') as HTMLElement;
          const image = project.querySelector('[data-image]') as HTMLElement;

          if (leftColumn) {
            gsap.to(leftColumn, {
              x: 100,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${totalWidth}`,
                scrub: 1,
              },
            });
          }

          if (image) {
            gsap.to(image, {
              x: 50,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${totalWidth}`,
                scrub: 1,
              },
            });
          }
        });
      }, sectionRef);

      // Nettoyage quand on quitte le breakpoint desktop
      return () => {
        ctx?.revert();
        gsap.set(container, { width: '', x: 0 });
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return { sectionRef, containerRef, projectsRef };
};
