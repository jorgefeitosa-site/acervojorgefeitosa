
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-32 md:py-48 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-24">
        <div className="lg:col-span-7">
          <span className="text-[11px] uppercase tracking-[0.5em] text-stone-600 block mb-12 italic">Contato & Localização</span>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.8] mb-20 tracking-tighter">
            Solicite <br />
            <span className="italic text-stone-600">Acesso.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-[9px] uppercase tracking-[0.3em] text-stone-600 mb-4 font-bold">Showroom Oficial</p>
                <div className="flex items-baseline gap-2">
                    <p className="font-serif text-2xl mb-2">Mata Lab</p>
                    <span className="text-sm italic text-stone-500">Cidade Matarazzo</span>
                </div>
                <p className="text-xs text-stone-400 leading-loose uppercase tracking-widest font-light">
                  Alameda Rio Claro, 260<br />
                  Bela Vista — São Paulo, SP
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[9px] uppercase tracking-[0.3em] text-stone-600 font-bold">Horários</p>
                <div className="text-[10px] space-y-2 uppercase tracking-widest text-stone-300 font-light">
                  <div className="flex justify-between border-b border-stone-900 pb-2">
                    <span>Segunda a Sábado</span>
                    <span>10h às 22h</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-900 pb-2">
                    <span>Domingo</span>
                    <span>14h às 20h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-[9px] uppercase tracking-[0.3em] text-stone-600 mb-4 font-bold">Digital</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-stone-500 mb-1 uppercase tracking-widest font-bold">WhatsApp</p>
                    <a href="https://wa.me/5511999904324" target="_blank" rel="noreferrer" className="font-serif text-xl border-b border-stone-800 pb-2 inline-block hover:border-stone-400 transition-colors">+55 11 99990-4324</a>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 mb-1 uppercase tracking-widest font-bold">Direct</p>
                    <a href="https://www.instagram.com/acervo.jorgefeitosa/" target="_blank" rel="noreferrer" className="font-serif text-xl border-b border-stone-800 pb-2 inline-block hover:border-stone-400 transition-colors">@acervo.jorgefeitosa</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-stone-900/30 p-12 lg:p-16 border border-stone-900 flex flex-col justify-center text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 mb-10 font-bold">Canal de Atualizações</p>
          
          <div className="space-y-8 mb-12">
            <p className="text-xs uppercase tracking-[0.2em] leading-loose text-stone-400 font-light">
              Este é um canal de contato reservado para interessados em receber informações exclusivas sobre as obras e peças disponíveis no Mata Lab.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed text-stone-500 italic">
              Inscreva-se para receber atualizações sobre disponibilidade, valores, detalhes curatoriais e oportunidades de aquisição de peças selecionadas com rigor histórico.
            </p>
          </div>

          <div className="pt-4">
            <a 
              href="https://forms.gle/YoptZMHNhyGbGKvR6" 
              target="_blank" 
              rel="noreferrer"
              className="group relative inline-block w-full py-8 border border-white/80 text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-white hover:text-black transition-all duration-700 overflow-hidden"
            >
              <span className="relative z-10">Receber Atualizações</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
