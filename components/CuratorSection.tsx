
import React from 'react';

const CuratorSection: React.FC = () => {
  return (
    <section id="curadoria" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-stone-400 block">A Voz por trás do Olhar</span>
            <h2 className="font-serif text-6xl md:text-8xl leading-[0.8]">Jorge <br /><span className="italic font-normal">Feitosa</span></h2>
          </div>
          
          <div className="h-px w-full bg-stone-100"></div>

          <div className="space-y-8 text-stone-600 font-light text-lg leading-relaxed">
            <p>
              "Investigo a 'memória da matéria'. Para mim, o design não é apenas forma e função, mas um repositório de histórias silenciosas."
            </p>
            <div className="pt-4">
               <a 
                href="https://wa.me/5511999904324" 
                target="_blank" 
                rel="noreferrer"
                className="group inline-flex items-center gap-6 text-[11px] uppercase tracking-[0.4em] font-bold text-black border-b border-black pb-2 hover:gap-10 transition-all duration-500"
               >
                 <span>Solicitar Atendimento</span>
                 <span>→</span>
               </a>
            </div>
            <p className="text-base text-stone-500 italic uppercase tracking-tighter">
              Jorge Feitosa é artista visual e curador, cujo trabalho transita entre as artes plásticas e a curadoria rigorosa de objetos com alta relevância estética e documental.
            </p>
          </div>
        </div>

        <div className="md:col-start-8 md:col-span-5 flex flex-col justify-center">
          <div className="p-12 border border-stone-100 bg-stone-50 space-y-10">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-black font-bold">Sobre o Acervo:</p>
              <p className="text-sm leading-relaxed text-stone-600 font-light">
                Curadoria assinada pelo artista visual Jorge Feitosa e o executivo Fabio Garcia. Um resgate de 20 anos de história presente no Mata Lab – Cidade Matarazzo
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-200">
              <div>
                <p className="font-serif text-3xl italic mb-1">Mata Lab</p>
                <p className="text-[9px] uppercase tracking-widest text-stone-400">Exposição &amp; Comercialização</p>
              </div>
              <div>
                <p className="font-serif text-3xl italic mb-1">Brasil</p>
                <p className="text-[9px] uppercase tracking-widest text-stone-400">Base de Operações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratorSection;
