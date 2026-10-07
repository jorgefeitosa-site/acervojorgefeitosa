
import React, { useState, useEffect, useRef } from 'react';

interface Piece {
  src: string;
  title: string;
}

const pieces: Piece[] = [
  // === PEÇAS ÚNICAS — cada item físico aparece exatamente 1 vez ===

  // Amarelo de Jantar
  { src: "/Amarelo de Jantar Vintage Luneville policromia Peixes.jpg", title: "Amarelo de Jantar Vintage Luneville Policromia Peixes" },

  // Aparelho de café Noritake
  { src: "/Aparelho de café vintage Noritake Moriage vintage Ouro em Relevo .jpeg", title: "Aparelho de Café Vintage Noritake Moriage Ouro em Relevo" },

  // Bandejas (3 peças distintas)
  { src: "/Bandeja decorativa  Cinegetica Art Noveau.jpeg", title: "Bandeja Decorativa Cinegética Art Nouveau" },
  { src: "/Bandeja em cerâmica Kumagai Sou Shoten.jpeg", title: "Bandeja em Cerâmica Kumagai Sou Shoten" },
  { src: "/Bandeja Migalheira em Laca Vintage Estilo Chinoiserie.jpeg", title: "Bandeja Migalheira em Laca Vintage Chinoiserie" },
  { src: "/Bandeja Noritake em porcelana verde absinto .jpeg", title: "Bandeja Noritake em Porcelana Verde Absinto" },

  // Bibelô Cachorro Pedreira
  { src: "/Bibelo CachorroCeramica Vintage Brasileira Pedreira.jpg", title: "Bibelô Cachorro Cerâmica Vintage Brasileira Pedreira" },

  // Cachepot Pedreira
  { src: "/Cachepot cerâmica vintage brasileira Pedreira.jpg", title: "Cachepot Cerâmica Vintage Brasileira Pedreira" },

  // Castiçais (7 peças distintas)
  { src: "/Castiçal  Macaco Hollywood Regency.jpeg", title: "Castiçal Macaco Hollywood Regency" },
  { src: "/Castiçal art nouveau cerâmica vintage brasileira.jpg", title: "Castiçal Art Nouveau Cerâmica Vintage Brasileira" },
  { src: "/Castiçal banho de prata vintage Eberle.jpg", title: "Castiçal Banho de Prata Vintage Eberle" },
  { src: "/Castiçal Eberle vintage em banho de prata.jpeg", title: "Castiçal Eberle Vintage em Banho de Prata" },
  { src: "/castiçal em banho de prata vintage Christofle.jpg", title: "Castiçal em Banho de Prata Vintage Christofle" },
  { src: "/Castiçal em cerâmica vintage brasileira.jpg", title: "Castiçal em Cerâmica Vintage Brasileira" },
  { src: "/Castiçal Wild Rose Ceramica Vintage.jpg", title: "Castiçal Wild Rose Cerâmica Vintage" },

  // Castiçal Val Saint Lambert (1 peça — múltiplas fotos consolidadas)
  { src: "/images/CASTIÇAL.jpg", title: "Castiçal Val Saint Lambert" },

  // Cerâmica Vintage Brasileira Pedreira (composição cachorro+vaso+castiçal)


  // Cesto de Noiva
  { src: "/Cesto de Noiva Vitoriano em Vidro Azul.jpg", title: "Cesto de Noiva Vitoriano em Vidro Azul" },

  // Coleção Tupy (1 peça — fotos consolidadas)
  { src: "/Coleção vasos cerâmica artística Tupy.jpg", title: "Coleção Vasos Cerâmica Artística Tupy" },

  // Conjunto de Toucador Val St. Lambert
  { src: "/Conjunto de Toucador Vintage em Cristal Belga Val St. Lambert.jpeg", title: "Conjunto de Toucador Vintage em Cristal Belga Val St. Lambert" },

  // Conjunto de xícaras japonesas
  { src: "/Conjunto de xícaras de cafe vintage porcelana japonesa.jpeg", title: "Conjunto de Xícaras de Café Vintage Porcelana Japonesa" },

  // Decanter Moser
  { src: "/Decanter Moser em cristal lapidado.jpeg", title: "Decanter Moser em Cristal Lapidado" },

  // Esculturas (2 peças distintas)
  { src: "/Escultura Cervo em metal prateado.jpg", title: "Escultura Cervo em Metal Prateado" },
  { src: "/Escultura Faisão em metal dourado.jpg", title: "Escultura Faisão em Metal Dourado" },

  // Floreira Pedreira
  { src: "/Floreira Vintage Ceramica Brasileira Pedreira.jpg", title: "Floreira Vintage Cerâmica Brasileira Pedreira" },

  // Jaru California (1 peça — fotos consolidadas)
  { src: "/Jaru California.jpg", title: "Jaru California" },

  // Jozef Stanik (2 peças distintas — taças champagne vs taças cerveja)
  { src: "/Jozef Stanik Golden Zuzana Tacas Champagne Coupes Amethyst Purple Gold Rim.jpg", title: "Jozef Stanik Golden Zuzana Taças Champagne Coupes" },
  { src: "/Tacas de Cerveja Cocktail Jozef Stanik Golden Zuzana Gold Rim.jpg", title: "Taças de Cerveja Cocktail Jozef Stanik Golden Zuzana" },

  // Licoreira Moser (1 peça — consolidada com images/LICOREIRA)
  { src: "/Licoreira Moser Vintage Amarelo Citrino - Copos 4,7cm (L) x 5,7cm (A) x 3,8cm (P) (cada).jpeg", title: "Licoreira Moser Vintage Amarelo Citrino" },

  // Prato Cinegético
  { src: "/Prato Vintage em Cobre com motivo Cinegetico.jpeg", title: "Prato Vintage em Cobre com Motivo Cinegético" },

  // Terrinas GEO Portugal (1 peça — fotos consolidadas)
  { src: "/Terrinas em cerâmica vintage GEO Portugal.jpg", title: "Terrinas em Cerâmica Vintage GEO Portugal" },

  // Travessas (2 peças distintas)
  { src: "/Travessa Gamela Fruteira vintage em Jacaranda.jpeg", title: "Travessa Gamela Fruteira Vintage em Jacarandá" },
  { src: "/Travessa Vintage em Porcelana de Limoges.jpeg", title: "Travessa Vintage em Porcelana de Limoges" },

  // Vasos Pedreira (3 peças distintas — cornucópia, flores, folha)
  { src: "/Vaso Ceramica Vintage Brasileira Pedreira Cornucopia.jpg", title: "Vaso Cerâmica Vintage Brasileira Pedreira Cornucópia" },
  { src: "/Vaso Ceramica Vintage Brasileira Pedreira Flores.jpg", title: "Vaso Cerâmica Vintage Brasileira Pedreira Flores" },


  // Vasos cristal/vidro (3 peças distintas)
  { src: "/Vaso em Murano.jpeg", title: "Vaso em Murano" },
  { src: "/Vaso porcelana de Limoges.jpeg", title: "Vaso Porcelana de Limoges" },
  { src: "/Vaso VINTAGE NANCY FRANCE CRISTAL ROYAL BLUE.jpeg", title: "Vaso Vintage Nancy France Cristal Royal Blue" },

  // Xícaras casca de ovo japonesas
  { src: "/Xicaras em porcelana casca de ovo vintage japonesa.jpeg", title: "Xícaras em Porcelana Casca de Ovo Vintage Japonesa" },

  // YSL Yamaka (1 peça — múltiplas fotos consolidadas)
  { src: "/images/YSL.jpg", title: "Jogo de Café Porcelana Vintage Yamaka YSL" },

  // Novas peças
  { src: "/balde_gelo_banhado_prata_wolff_vintage.jpg", title: "Balde Gelo Banhado Prata Wolff Vintage" },
  { src: "/calice-estribo-gucci-vintage-4.jpg", title: "Cálice Estribo Gucci Vintage" },
  { src: "/centro-de-mesa-escultura-vidro-sommerso-ambar-0.jpg", title: "Centro de Mesa Escultura Vidro Sommerso Âmbar" },
  { src: "/conjunto_porcelana_vintage_noritake.jpg", title: "Conjunto Porcelana Vintage Noritake" },
  { src: "/conjunto-chip-and-dip-indiana-glass-sunset-ombre-0.jpg", title: "Conjunto Chip and Dip Indiana Glass Sunset Ombre" },
  { src: "/par-casticais-latao-cabeca-carneiro-hollywood-regency1.jpg", title: "Par Castiçais Latão Cabeça Carneiro Hollywood Regency" },
  { src: "/par-casticais-latao-patos-vintage_1.jpg", title: "Par Castiçais Latão Patos Vintage" },
  { src: "/par-casticais-prata-h-stern-modernista-1.jpg", title: "Par Castiçais Prata H Stern Modernista" },
  { src: "/conjunto-licoreira-copos-shot-vidro-poa-1.jpg", title: "Conjunto Licoreira Copos Shot Vidro Poá" },
  { src: "/par-aparadores-livros-art-deco-piero-banfi093.jpg", title: "Par Aparadores Livros Art Deco Piero Banfi" },
  { src: "/par-aparadores-livros-latao-gazelas-reais-0921.jpg", title: "Par Aparadores Livros Latão Gazelas Reais" },
  { src: "/porta-joias-prata-eberle-avifauna-vintage-4.jpg", title: "Porta Jóias Prata Eberle Avifauna Vintage" },
  { src: "/prato-metal-galos-vintage-4.jpg", title: "Prato Metal Galos Vintage" },
  { src: "/Tacas_Josef_Stanik_Zaza.jpg", title: "Taças Josef Stanik Zaza" },
  { src: "/conjunto-vasos-ceramica-tupy-pingo-de-leite.jpg", title: "Conjunto Vasos Cerâmica Tupy Pingo de Leite" },
  { src: "/floreira-vintage-metal-hollywood-regency-garca.jpg", title: "Floreira Vintage Metal Hollywood Regency Garça" },
  { src: "/par-esculturas-faisoes-reais-metal-prateado-4.jpg", title: "Par Esculturas Faisões Reais Metal Prateado" },
  { src: "/par-talheres-salada-hermes-pied-de-chevreuil-1.jpg", title: "Par Talheres Salada Hermès Pied de Chevreuil" },
  { src: "/par-vasos-ceramica-vintage-brasileira-ebece-flambada-8-2.jpg", title: "Par Vasos Cerâmica Vintage Brasileira Ebecê Flambada" },
];

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handlePieceClick = () => {
    window.open('https://www.instagram.com/acervo.jorgefeitosa/', '_blank');
  };

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="galeria" className="py-32 bg-white relative overflow-hidden">
      {/* Background Kinetic Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <h2 className="font-serif text-[40vw] uppercase">ACERVO</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 block font-bold mb-4">Investigação Histórica</span>
            <h2 className="font-serif text-5xl md:text-7xl leading-none tracking-tighter uppercase">
              Fragmentos<br/><span className="italic font-normal">do Acervo</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold max-w-xs leading-relaxed hidden md:block">
              A curadoria completa é revelada em nossa plataforma digital. Clique em uma peça para ver mais.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => scroll('left')}
                className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${canScrollLeft ? 'border-black text-black hover:bg-black hover:text-white cursor-pointer' : 'border-stone-200 text-stone-300 cursor-default'}`}
                disabled={!canScrollLeft}
                aria-label="Anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${canScrollRight ? 'border-black text-black hover:bg-black hover:text-white cursor-pointer' : 'border-stone-200 text-stone-300 cursor-default'}`}
                disabled={!canScrollRight}
                aria-label="Próximo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable grid */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#333 #f1f1f1',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, 1fr)',
              gridAutoFlow: 'column',
              gridAutoColumns: '180px',
              gap: '16px',
            }}
          >
            {pieces.map((piece, idx) => (
              <div
                key={idx}
                className="cursor-pointer group"
                onClick={handlePieceClick}
                style={{ width: '180px' }}
              >
                <div className="w-full aspect-square overflow-hidden bg-stone-100 border border-stone-100">
                  <img
                    src={piece.src}
                    alt={piece.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <p
                  className="mt-2 text-[9px] uppercase tracking-[0.15em] text-stone-500 font-bold leading-tight group-hover:text-stone-900 transition-colors duration-300"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {piece.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
          <a
            href="https://wa.me/5511999904324"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-block px-16 py-6 border border-black text-[10px] uppercase tracking-[0.6em] font-bold overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Iniciar Atendimento</span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
          </a>
          <a
            href="https://www.instagram.com/acervo.jorgefeitosa/"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 hover:text-black transition-all"
          >
            Ver Galeria no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
