
import React, { useState, useEffect, useRef } from 'react';

const Biography: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '2013', text: 'Graduado em Artes Visuais (Belas Artes)' },
    { year: '2016', text: 'Primeiras individuais: "Lágrimas de Ouro" (SP) e "NAVEGAR ES PRECISO" (Havana, Cuba)' },
    { year: '2022', text: '16ª Verbo – Mostra de Performance Arte (Galeria Vermelho)' },
    { year: '2024', text: 'ArtRio (Brasil Contemporâneo) e Jardim das Esculturas (Marina da Glória)' },
    { year: '2025', text: 'Individual "Viagem – Matéria, rito e memória ancestral" em Paris, França' },
  ];

  return (
    <section id="biografia" ref={sectionRef} className={`py-32 bg-black text-white relative overflow-hidden ${isVisible ? 'bio-visible' : ''}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes line-grow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .bio-visible .bio-fade-up { animation: fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .bio-visible .bio-slide-left { animation: slide-in-left 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .bio-visible .bio-slide-right { animation: slide-in-right 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .bio-fade-up, .bio-slide-left, .bio-slide-right { opacity: 0; }
        .bio-timeline-line { transform-origin: top; animation: line-grow 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .bio-image-wrapper { position: relative; overflow: hidden; }
        .bio-image-wrapper::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%); pointer-events: none; }
      `}} />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-20 bio-fade-up">
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 block font-bold mb-4">O Artista</span>
          <h2 className="font-serif text-5xl md:text-8xl leading-[0.85] tracking-tighter">
            Jorge <span className="italic font-normal text-stone-400">Feitosa</span>
          </h2>
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone-500 mt-4 font-bold">Artista Visual</p>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          
          {/* Photo column */}
          <div className="md:col-span-2 bio-slide-left" style={{ animationDelay: '0.2s' }}>
            <div className="bio-image-wrapper">
              <img 
                src="/images/jorge-feitosa.jpg" 
                alt="Jorge Feitosa — Artista Visual" 
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-8 h-px bg-stone-600"></div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500">Porto Velho, RO — São Paulo, SP</span>
            </div>
          </div>

          {/* Bio text column */}
          <div className="md:col-span-3 bio-slide-right" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-8">
              <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-light">
                Jorge Feitosa (Porto Velho, RO) é um artista visual cuja trajetória artística dialoga entre a herança artesanal — filho de marceneiro e costureira — e a arte contemporânea. Reside em São Paulo, mantendo um fluxo constante com Rondônia e a floresta Amazônica.
              </p>
              <p className="text-stone-400 text-base leading-relaxed font-light">
                Sua pesquisa em performance, fotografia, vídeo e escultura explora temas como identidade, deslocamento, enraizamento e a constituição das subjetividades do indivíduo contemporâneo, com forte ligação com a Amazônia.
              </p>

              <div className="w-16 h-px bg-stone-700 my-10"></div>

              {/* Formation */}
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-2">Formação</h3>
                <p className="text-stone-400 text-sm leading-relaxed">Graduado em Artes Visuais (Belas Artes, 2013) e formação livre em fotografia (MAM-SP, 2009).</p>
              </div>

              {/* Timeline */}
              <div className="mt-12">
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-8">Destaques</h3>
                <div className="relative pl-8 border-l border-stone-800">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="mb-8 last:mb-0 relative bio-fade-up" style={{ animationDelay: `${0.6 + idx * 0.15}s` }}>
                      <div className="absolute -left-[calc(2rem+4.5px)] top-1.5 w-2 h-2 rounded-full bg-stone-600 border-2 border-black"></div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold block mb-1">{item.year}</span>
                      <p className="text-stone-300 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exhibitions */}
              <div className="mt-8">
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-4">Mostras Relevantes</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Presença Permeável (Praça das Artes) · Mappa Dell'arte Nuova – Imago (Fondazione Giorgio Cini, Itália)
                </p>
              </div>

              {/* Collections */}
              <div className="mt-8 p-8 border border-stone-800 bg-stone-900/50">
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-4">Acervos</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Seu trabalho integra os acervos do <strong className="text-stone-300">Museu de Arte do Rio (MAR/RJ)</strong> e do <strong className="text-stone-300">MUnA – Museu Universitário de Arte (IARTE/UFU/MG)</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
