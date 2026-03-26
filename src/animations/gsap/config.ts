import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Enregistrer les plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Configurer les defaults GSAP
gsap.config({
  nullTargetWarn: false,
});

// Configurer les defaults pour les animations
gsap.defaults({
  duration: 0.3,
  ease: 'power2.out',
});

// Configuration ScrollTrigger pour le développement
if (import.meta.env.DEV) {
  // Les markers peuvent être activés via ScrollTrigger.defaults si nécessaire
  // ScrollTrigger.defaults({ markers: false });
}

// Export pour utilisation dans l'application
export { gsap, ScrollTrigger };
