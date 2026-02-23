import React, { useEffect, useState } from 'react';
import paya from '../assets/paya.png';

const InvitationCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-100 p-4 relative overflow-hidden">
      
      {/* 🎪 PAYASITO - RESPONSIVE */}
      <div className={`
        absolute 
        /* En móvil: esquina inferior derecha de la tarjeta */
        bottom-25 right-0 
        /* En desktop: al lado derecho de la tarjeta */
        sm:bottom-auto sm:right-[13%] sm:top-1/2 sm:-translate-y-1/2 
        
        /* Tamaños */
        w-50 h-50 
        sm:w-40 sm:h-40
        md:w-40 md:h-40 
        lg:w-56 lg:h-56 
        
        /* Estilos */
        pointer-events-none 
        transition-all duration-1000 delay-700 
        z-10 /* Asegura que esté sobre la tarjeta en móvil */
        
        ${isVisible ? 'opacity-90 sm:opacity-90 md:opacity-90 translate-x-0 translate-y-0' : 'opacity-0 translate-y-10 sm:translate-y-0 sm:translate-x-10'}
      `}>
        <div className="relative w-full h-full animate-float-slow">
          <img 
            src={paya} 
            alt="Decoración"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      

      {/* Tu carta existente (sin cambios) */}
      <div className={`max-w-xl w-full bg-white p-8 md:p-12 relative transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* ... resto del contenido ... */}
        {/* (todo tu código actual aquí) */}
        
        {/* Margen decorativo superior con animación */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent animate-pulse-soft"></div>
        
        {/* Márgenes laterales */}
        <div className="absolute left-8 top-8 bottom-8 w-px bg-stone-200 animate-fade-in"></div>
        <div className="absolute right-8 top-8 bottom-8 w-px bg-stone-200 animate-fade-in"></div>
        
        {/* Esquinas decorativas con animación */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-stone-300 animate-border-glow"></div>
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-stone-300 animate-border-glow"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-stone-300 animate-border-glow"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-stone-300 animate-border-glow"></div>

        {/* Sombra */}
        <div className="absolute inset-0 shadow-[0_8px_30px_rgb(0,0,0,0.02)] pointer-events-none"></div>

        {/* Contenido */}
        <div className="relative px-4">
          {/* Línea superior con animación */}
          <div className={`w-12 h-px bg-stone-200 mx-auto mb-8 transition-all duration-1000 delay-100 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}></div>

          {/* Nombre con animación */}
          <h1 className={`text-4xl md:text-5xl font-light text-center text-stone-800 mb-3 tracking-wide transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Renato Duchi
          </h1>

          {/* Título académico con animación */}
          <p className={`text-center text-stone-400 text-xs uppercase tracking-[0.3em] mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Ingenieria Mecatrónica
          </p>

          {/* Fecha con animación */}
          <div className={`text-center mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <span className="text-6xl font-thin text-stone-700 inline-block hover:scale-110 transition-transform duration-300">24</span>
            <span className="text-stone-600 text-2xl font-thin mx-2 inline-block animate-pulse-soft">/</span>
            <span className="text-6xl font-thin text-stone-700 inline-block hover:scale-110 transition-transform duration-300">02</span>
            <span className="text-stone-600 text-2xl font-thin mx-2 inline-block animate-pulse-soft">/</span>
            <span className="text-6xl font-thin text-stone-700 inline-block hover:scale-110 transition-transform duration-300">26</span>
          </div>

          {/* Hora y lugar */}
          <div className="text-center space-y-2 mb-12">
            <p className={`text-stone-500 text-sm transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              Martes 9:00 AM · Aula C302
            </p>
            <p className={`text-stone-400 text-xs transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              Universidad de las Fuerzas Armadas ESPE
            </p>
          </div>

          {/* Mensaje con comillas */}
          <div className={`relative text-center border-t border-b border-stone-100 py-6 mb-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="absolute left-0 top-0 text-stone-200 text-2xl font-serif animate-float">"</span>
            <p className="text-stone-400 text-sm italic px-8">
              Tu presencia será el mejor regalo
            </p>
            <span className="absolute right-0 bottom-0 text-stone-200 text-2xl font-serif animate-float" style={{ animationDelay: '1s' }}>"</span>
          </div>

          {/* Línea inferior */}
          <div className={`w-12 h-px bg-stone-200 mx-auto mt-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}></div>

          {/* Indicador de scroll con nuevas animaciones */}
          <div className="flex flex-col items-center mt-8 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <span className="text-xs text-stone-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Descubre más
            </span>
            <div className="animate-bounce">
              <div className="relative">
                <div className="absolute inset-0 bg-stone-300 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <svg 
                  className="w-5 h-5 text-stone-400 transform group-hover:scale-110 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M19 14l-7 7-7-7m14-6l-7 7-7-7" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationCard;