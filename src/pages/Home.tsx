import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../animations/gsap/config';
import { Header } from '../components/layouts/Header';
import { Footer } from '../components/layouts/Footer';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Contact } from '../components/sections/Contact';
import { useSmoothScroll } from '../lib/hooks/use-smooth-scroll';
import { SectionNav } from '../components/layouts/SectionNav';

export const Home = () => {
  useSmoothScroll();
  const location = useLocation();

  useEffect(() => {
    if (!(location.state as { fromProject?: boolean } | null)?.fromProject) return;
    const savedY = sessionStorage.getItem('projectScrollY');
    if (savedY === null) return;

    const restoreScroll = () => {
      window.scrollTo({ top: Number(savedY), behavior: 'instant' });
      sessionStorage.removeItem('projectScrollY');
    };

    // Attendre que ScrollTrigger ait terminé son refresh avant de scroller
    ScrollTrigger.addEventListener('refresh', restoreScroll);
    ScrollTrigger.refresh();

    // Fallback au cas où l'event ne se déclenche pas
    const fallback = setTimeout(restoreScroll, 300);

    return () => {
      ScrollTrigger.removeEventListener('refresh', restoreScroll);
      clearTimeout(fallback);
    };
  }, [location.state]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF0E6]">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <SectionNav />
    </>
  );
};
