
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511999904324" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[100] group flex items-center gap-4"
    >
      <div className="bg-white text-black text-[9px] uppercase tracking-[0.4em] font-bold px-6 py-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 border border-stone-100 pointer-events-none">
        Consultar Disponibilidade
      </div>
      <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 border border-stone-800">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
           <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 6.5Z"/>
        </svg>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
