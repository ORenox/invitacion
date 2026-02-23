import React, { useEffect, useState, useRef } from 'react';

const DetailsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const details = [
    {
      label: "Defensa de tesis",
      time: "9:00 AM",
      description: "Aula C302"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-stone-100 py-24 px-4">
      <div className={`max-w-xl w-full bg-white p-8 md:p-12 relative mx-auto transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Márgenes y detalles con animaciones */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent animate-pulse-soft"></div>
        <div className={`absolute left-8 top-8 bottom-8 w-px bg-stone-200 transition-all duration-1000 delay-200 ${
          isVisible ? 'scale-y-100' : 'scale-y-0'
        }`}></div>
        <div className={`absolute right-8 top-8 bottom-8 w-px bg-stone-200 transition-all duration-1000 delay-200 ${
          isVisible ? 'scale-y-100' : 'scale-y-0'
        }`}></div>
        
        {/* Esquinas animadas */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-stone-300 animate-border-glow"></div>
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-stone-300 animate-border-glow"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-stone-300 animate-border-glow"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-stone-300 animate-border-glow"></div>

        {/* Sombra */}
        <div className="absolute inset-0 shadow-[0_8px_30px_rgb(0,0,0,0.02)] pointer-events-none"></div>

        <div className="relative px-4">
          {/* Indicador de continuidad animado */}
          <div className="flex justify-center -mt-2 mb-6">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div 
                  key={i}
                  className={`w-1 h-1 rounded-full bg-stone-300 transition-all duration-700 delay-${i * 100} ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Título con animación */}
          <h2 className={`text-2xl font-light text-center text-stone-800 mb-12 tracking-wide transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Detalles
          </h2>

          {/* Detalles con animaciones secuenciales */}
          <div className="space-y-10 mb-12">
            {details.map((item, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                {item.time && (
                  <p className="text-xl text-stone-700 mb-1 group relative inline-block">
                    {item.time}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-300 group-hover:w-full transition-all duration-300"></span>
                  </p>
                )}
                <p className="text-sm text-stone-500">
                  {item.description}
                </p>
                {index < details.length - 1 && (
                  <div className={`w-12 h-px bg-stone-100 mx-auto mt-6 transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Sección del mapa con animaciones */}
          <div 
            className={`mb-12 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xs text-stone-400 uppercase tracking-wider text-center mb-4">
              ¿Cómo llegar?
            </p>
            
            <p className="text-center text-stone-600 text-sm mb-4 group cursor-default">
              Universidad de las Fuerzas Armadas ESPE
              <span className="block max-w-0 group-hover:max-w-full h-px bg-stone-300 transition-all duration-500 mx-auto"></span>
            </p>
            
            {/* Mapa con hover effects */}
            <div className="relative w-full h-56 md:h-64 bg-stone-50 border border-stone-200 overflow-hidden group">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.3279700860876!2d-78.44633109589843!3d-0.3132510539973567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bdd2af3bac59%3A0xfa26510b7f986faf!2sBloque%20C%20-%20ESPE!5e0!3m2!1ses!2sec!4v1771818754260!5m2!1ses!2sec"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del evento"
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              ></iframe>
            </div>
            
            {/* Botón con animación */}
            <div className="text-center mt-3">
              <a 
                href="https://maps.app.goo.gl/XV5tXYuuvRxxTXAw6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-stone-400 hover:text-stone-600 transition-all duration-300 group"
              >
                <svg className="w-3 h-3 mr-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir en Google Maps
                <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
            </div>
          </div>


          {/* Mensaje final */}
          <div 
            className={`mt-12 text-center transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-12 h-px bg-stone-200 mx-auto mb-6 transition-all duration-1000 delay-1000 ${
              isVisible ? 'scale-100' : 'scale-0'
            }`}></div>
            <p className="text-xs text-stone-400 hover:text-stone-600 transition-colors duration-300">
              Con cariño, Renato :D
            </p>
            <p className="text-xs text-stone-300 mt-1">
              <span className="inline-block hover:scale-110 transition-transform duration-300">✦</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 mx-1">✦</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300">✦</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;