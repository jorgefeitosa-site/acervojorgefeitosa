
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
      {/* Background Image - High Contrast B&W */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center bg-no-repeat transition-transform duration-[20000ms] animate-slow-zoom"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop")',
          filter: 'grayscale(100%) contrast(1.2) brightness(0.7)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <div className="inline-flex items-center gap-4 overflow-hidden">
            <div className="h-px w-12 bg-white/50 animate-line-reveal"></div>
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-white/70 animate-fade-in-right">
              Exclusivamente no Mata Lab
            </span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-white">
            <span className="block overflow-hidden">
              <span className="block animate-text-reveal">Habitar uma</span>
            </span>
            <span className="italic font-normal block mt-4 overflow-hidden">
              <span className="block animate-text-reveal delay-200">Obra de Arte.</span>
            </span>
          </h1>

          <div className="max-w-2xl animate-fade-in delay-400">
            <p className="text-stone-300 text-base md:text-lg leading-relaxed font-light border-l-2 border-white/20 pl-8 py-2">
              O tempo como matéria do espaço.<br />
              Formado ao longo de duas décadas por Jorge Feitosa e Fabio Garcia, o Acervo reúne artes decorativas e design histórico selecionados pelo olhar de um artista e pesquisados por sua materialidade, atribuição, procedência e contexto — para dialogar com a arte e os interiores contemporâneos.
            </p>
          </div>

          <div className="max-w-xl animate-fade-in delay-500">
            <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed italic border-l-2 border-white/30 pl-8 py-2">
              "Não se trata de estoque, mas de uma coleção de fragmentos de vida selecionados pelo olhar sensível de um artista."
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end space-y-12 pb-4 animate-fade-in delay-700">
          <div className="space-y-4 border-t border-white/10 pt-8 backdrop-blur-md bg-white/5 p-6 rounded-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">Curadoria Ativa</p>
            <p className="text-sm leading-relaxed text-white font-medium">
              Objetos que transcendem a função. Uma investigação sobre a alma da matéria e a dignidade do tempo.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a href="#galeria" className="group flex items-center justify-between w-full px-8 py-6 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-stone-200 transition-all duration-500 overflow-hidden relative">
              <span className="relative z-10">Explorar Catálogo</span>
              <span className="group-hover:translate-x-2 transition-transform duration-500 relative z-10">→</span>
              <div className="absolute inset-0 bg-stone-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a href="https://wa.me/5511999904324" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-4 w-full py-5 border border-white/30 text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:border-white hover:bg-white/5 transition-all">
              <span>Atendimento Direto</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 6.5Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 overflow-hidden">
        <p className="text-[10px] uppercase tracking-[0.6em] text-white/50 font-bold vertical-text origin-left rotate-90 whitespace-nowrap animate-slide-up">
          Acervo Jorge Feitosa © 2026
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes text-reveal {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in-right {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes line-reveal {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-text-reveal { animation: text-reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards; }
        .animate-line-reveal { animation: line-reveal 1s ease-out forwards; }
        .animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite; }
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .vertical-text { writing-mode: vertical-rl; }
      `}} />
    </section>
  );
};

export default Hero;
