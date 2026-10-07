
import React from 'react';

const Triad: React.FC = () => {
  return (
    <section id="triade" className="py-40 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-stone-900 border-x border-stone-900">
          
          {/* Memória */}
          <div className="group py-24 px-6 lg:px-12 flex flex-col justify-center items-center text-center space-y-10 transition-all duration-700 hover:bg-stone-900/40">
            <div className="relative h-20 w-20 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-700">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-stone-500 group-hover:stroke-white transition-all duration-700">
                <circle cx="32" cy="32" r="28" strokeWidth="0.5" strokeDasharray="1 4" className="animate-spin-very-slow" />
                <path d="M12 32 C12 20 20 12 32 12 C44 12 52 20 52 32" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-40" />
                <path d="M16 48 L48 16" strokeWidth="1" className="group-hover:rotate-180 transition-transform duration-1000 origin-center" />
                <rect x="28" y="28" width="8" height="8" strokeWidth="1" className="group-hover:scale-125 transition-transform" />
              </svg>
            </div>
            <div className="w-full px-2">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter transition-all duration-700 group-hover:tracking-tight group-hover:italic leading-none">
                Memória
              </h2>
            </div>
            <div className="h-px w-6 bg-stone-800 group-hover:w-16 transition-all duration-700"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 max-w-[220px] leading-loose opacity-60 group-hover:opacity-100 transition-opacity">
              A carga afetiva e histórica contida em cada fragmento da matéria.
            </p>
          </div>
          
          {/* Design */}
          <div className="group py-24 px-6 lg:px-12 flex flex-col justify-center items-center text-center space-y-10 transition-all duration-700 hover:bg-stone-900/40">
            <div className="relative h-20 w-20 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-700">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-stone-500 group-hover:stroke-white transition-all duration-700">
                <rect x="14" y="14" width="36" height="36" strokeWidth="1" className="group-hover:scale-90 transition-transform duration-700" />
                <path d="M32 4V60M4 32H60" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-30" />
                <circle cx="32" cy="32" r="18" strokeWidth="0.5" />
                <path d="M14 14 L50 50 M50 14 L14 50" strokeWidth="0.5" className="group-hover:opacity-100 opacity-20 transition-opacity" />
              </svg>
            </div>
            <div className="w-full px-2">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl italic tracking-tighter transition-all duration-700 group-hover:scale-105 group-hover:not-italic group-hover:uppercase leading-none">
                Design
              </h2>
            </div>
            <div className="h-px w-6 bg-stone-800 group-hover:w-16 transition-all duration-700"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 max-w-[220px] leading-loose opacity-60 group-hover:opacity-100 transition-opacity">
              A excelência da forma que desafia a efemeridade das tendências.
            </p>
          </div>
          
          {/* Provenance */}
          <div className="group py-24 px-6 lg:px-12 flex flex-col justify-center items-center text-center space-y-10 transition-all duration-700 hover:bg-stone-900/40">
            <div className="relative h-20 w-20 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-700">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-stone-500 group-hover:stroke-white transition-all duration-700">
                <path d="M32 10 L54 50 L10 50 Z" strokeWidth="1" className="group-hover:translate-y-[-4px] transition-transform duration-700" />
                <rect x="28" y="44" width="8" height="10" strokeWidth="1" />
                <path d="M32 10 V44" strokeWidth="0.5" strokeDasharray="1 2" />
                <circle cx="32" cy="32" r="3" strokeWidth="0.5" fill="transparent" className="group-hover:fill-white/20 transition-colors" />
              </svg>
            </div>
            <div className="w-full px-2">
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[2.75rem] uppercase tracking-tighter transition-all duration-700 group-hover:tracking-tight leading-none">
                Provenance
              </h2>
            </div>
            <div className="h-px w-6 bg-stone-800 group-hover:w-16 transition-all duration-700"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 max-w-[220px] leading-loose opacity-60 group-hover:opacity-100 transition-opacity">
              A trajetória autêntica validada pelo olhar curatorial do artista.
            </p>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-very-slow { animation: spin-very-slow 40s linear infinite; }
      `}} />
    </section>
  );
};

export default Triad;
