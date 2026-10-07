
import React from 'react';

const Manifesto: React.FC = () => {
  const manifestoItems = [
    {
      title: "Curadoria de Autor",
      content: "Diferente de seleções comuns, cada peça é uma extensão direta da obra do artista Jorge Feitosa. Uma seleção de autor validada pelo uso e pelo olhar apurado desenvolvido em 20 anos de trajetória."
    },
    {
      title: "Proveniência Emocional",
      content: "Valorizamos a trajetória. Nossas peças possuem história real de uso na vida do artista e de seu companheiro, Fábio Garcia, transcendendo a mera revenda para se tornar herança e legado."
    },
    {
      title: "Arqueologia Afetiva",
      content: "Sustentabilidade através da salvaguarda. Rejeitamos a lógica do consumo efêmero em favor da ressignificação de objetos que atravessam gerações com dignidade e memória."
    }
  ];

  return (
    <section id="manifesto" className="py-32 md:py-52 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-28 md:mb-40">
          <div className="overflow-hidden mb-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 block font-bold animate-slide-up">Filosofia do Acervo</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-center max-w-5xl leading-[1.05] tracking-tighter animate-fade-in-blur">
            O Acervo Jorge Feitosa é a formalização de um olhar sobre a <br className="hidden md:block" />
            <span className="italic font-normal text-stone-900 relative inline-block group cursor-default">
              ‘memória da matéria’
              <span className="absolute -bottom-2 left-0 w-full h-px bg-stone-200 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></span>
            </span>.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {manifestoItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`group space-y-10 opacity-0 animate-reveal-item`}
              style={{ animationDelay: `${(idx + 1) * 300}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold text-stone-300 group-hover:text-stone-900 transition-colors duration-700">
                  0{idx + 1}
                </span>
                <div className="h-px flex-grow bg-stone-100 group-hover:bg-stone-900 origin-left scale-x-100 transition-all duration-1000"></div>
              </div>
              
              <div className="space-y-6">
                <h3 className="font-serif text-3xl md:text-4xl italic tracking-tight text-stone-900 group-hover:pl-2 transition-all duration-700 ease-out leading-tight">
                  {item.title}
                </h3>
                
                <div className="relative pl-0 group-hover:pl-4 transition-all duration-700 border-l-0 group-hover:border-l group-hover:border-stone-100">
                  <p className="text-sm md:text-base text-stone-500 leading-relaxed font-light group-hover:text-stone-800 transition-colors duration-700">
                    {item.content}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <div className="h-0.5 w-0 bg-stone-900 group-hover:w-16 transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reveal-item {
          from { 
            opacity: 0; 
            transform: translateY(40px) skewY(2deg); 
            filter: blur(10px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) skewY(0); 
            filter: blur(0);
          }
        }
        @keyframes fade-in-blur {
          from { opacity: 0; filter: blur(20px); transform: scale(0.98); }
          to { opacity: 1; filter: blur(0); transform: scale(1); }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-reveal-item { animation: reveal-item 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-blur { animation: fade-in-blur 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </section>
  );
};

export default Manifesto;
