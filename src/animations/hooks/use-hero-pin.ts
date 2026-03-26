import { useEffect, useRef } from 'react';
import { ScrollTrigger } from '../gsap/config';

export const useHeroPin = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const heroElement = heroRef.current;
    const nextSection = heroElement.nextElementSibling as HTMLElement;

    // Configuration de base pour l'effet de recouvrement
    if (nextSection) {
      nextSection.style.position = 'relative';
      nextSection.style.zIndex = '10'; // Important pour passer au-dessus du Hero
      nextSection.style.backgroundColor = '#E8DCC8'; // Couleur de fond nécessaire pour masquer le Hero
    }

    // On épingle simplement le Hero
    // pinSpacing: false permet à la section suivante (Projets) de continuer
    // à scroller naturellement PAR-DESSUS le Hero qui reste fixe.
    const pinTrigger = ScrollTrigger.create({
      trigger: heroElement,
      start: 'top top',
      end: 'bottom top', // Reste épinglé tant que sa hauteur n'est pas défilée
      pin: true,
      pinSpacing: false, // CLÉ DU FIX : Laisse le contenu suivant passer par dessus
      scrub: true,
      markers: false,
    });

    return () => {
      pinTrigger.kill();
    };
  }, []);

  return { heroRef };
};
