import { useEffect, useRef } from 'react';
import { gsap } from '../gsap/config';

export const useHorizontalScroll = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Vérification de sécurité
    if (!sectionRef.current || !containerRef.current) return;

    const section = sectionRef.current;
    const container = containerRef.current;
    const projects = projectsRef.current.filter(Boolean);

    if (projects.length === 0) return;

    // Contexte GSAP pour un nettoyage facile
    const ctx = gsap.context(() => {
      // 1. Configuration des dimensions
      const viewportWidth = window.innerWidth;
      // La largeur totale est le nombre de projets * largeur d'écran
      const totalWidth = viewportWidth * projects.length;

      // Appliquer la largeur au conteneur via GSAP pour être sûr
      gsap.set(container, { width: totalWidth });

      // 2. Création du ScrollTrigger principal
      gsap.to(container, {
        x: -(totalWidth - viewportWidth), // On déplace vers la gauche jusqu'au dernier
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth}`, // La longueur du scroll correspond à la largeur du contenu
          pin: true, // On épingle la section
          scrub: 1, // Fluidité
          invalidateOnRefresh: true, // Recalculer si on redimensionne la fenêtre
          anticipatePin: 1,
        },
      });

      // 3. Effet Parallax sur les colonnes (titre + description + tags ensemble)
      projects.forEach((project) => {
        const leftColumn = project.querySelector('.grid > div:first-child') as HTMLElement;
        const image = project.querySelector('[data-image]') as HTMLElement;

        if (leftColumn) {
          gsap.to(leftColumn, {
            x: 100, // Déplacement léger de toute la colonne gauche
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
            x: 50, // Déplacement différent pour la profondeur
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
    }, sectionRef); // Scope le context à la section

    // Nettoyage automatique grâce à gsap.context
    return () => ctx.revert();
  }, []); // Exécuter une seule fois au montage

  return { sectionRef, containerRef, projectsRef };
};
