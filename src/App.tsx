import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { useSmoothScroll } from './lib/hooks/use-smooth-scroll';

function App() {
  useSmoothScroll();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF0E6]">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
