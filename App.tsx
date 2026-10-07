
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Triad from './components/Triad';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import CuratorSection from './components/CuratorSection';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          const targetId = this.getAttribute('href')?.substring(1);
          const element = document.getElementById(targetId || '');
          if (element) {
            window.scrollTo({
              top: (element as HTMLElement).offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <Triad />
        <Manifesto />
        <Gallery />
        <CuratorSection />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <footer className="bg-stone-50 py-16 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left space-y-2 group cursor-default">
            <h2 className="font-serif text-3xl tracking-tighter uppercase transition-all duration-500 group-hover:tracking-widest">Acervo Jorge Feitosa</h2>
            <p className="text-[9px] text-stone-400 uppercase tracking-[0.4em]">Curadoria de Autor | Fabio e Jorge — São Paulo / Mata Lab</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-black">
            <a href="https://www.instagram.com/acervo.jorgefeitosa/" target="_blank" rel="noreferrer" className="hover:text-stone-400 transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@acervo.jorgefeitosa" target="_blank" rel="noreferrer" className="hover:text-stone-400 transition-colors">TikTok</a>
            <a href="https://instagram.com/jorgefeitosa.artista" target="_blank" rel="noreferrer" className="hover:text-stone-400 transition-colors">Artista</a>
            <a href="https://wa.me/5511999904324" target="_blank" rel="noreferrer" className="hover:text-stone-400 transition-colors border-b border-black">WhatsApp</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-100 flex justify-center">
          <p className="text-[8px] text-stone-300 uppercase tracking-[0.5em]">© 2026 Acervo Jorge Feitosa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
