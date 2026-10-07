
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 animate-fade-in-down ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-stone-100 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col group cursor-pointer">
          <span className="font-serif text-xl md:text-2xl tracking-[0.1em] uppercase transition-all duration-500 group-hover:tracking-[0.2em] whitespace-nowrap">Acervo Jorge Feitosa</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 -mt-1 ml-1 group-hover:text-stone-900 transition-colors">Curadoria de Autor</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-stone-800">
          <a href="#biografia" className="relative hover:text-stone-400 transition-colors group">
            Biografia
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
          </a>
          <a href="#manifesto" className="relative hover:text-stone-400 transition-colors group">
            Manifesto
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
          </a>
          <a href="#galeria" className="relative hover:text-stone-400 transition-colors group">
            Coleção
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
          </a>
          <a href="#curadoria" className="relative hover:text-stone-400 transition-colors group">
            Curadoria
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
          </a>
          <a href="https://wa.me/5511999904324" target="_blank" rel="noreferrer" className="hover:text-stone-400 transition-colors border-b-2 border-black pb-0.5">Contato</a>
        </div>

        <button className="md:hidden group">
          <div className="w-6 h-0.5 bg-black mb-1.5 transition-all group-hover:w-8"></div>
          <div className="w-6 h-0.5 bg-black transition-all group-hover:w-4"></div>
        </button>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
      `}} />
    </nav>
  );
};

export default Navbar;
