import React, { useEffect, useState } from 'react';
import InvitationCard from './components/InvitationCard';
import DetailsSection from './components/DetailsSection';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div id="carta">
        <InvitationCard />
      </div>
      
      <div id="detalles">
        <DetailsSection />
      </div>

      {/* Botón flotante mejorado */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-stone-200 text-stone-600 p-3 rounded-full shadow-lg hover:bg-stone-300 transition-all duration-500 transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } hover:scale-110 group`}
      >
        <svg 
          className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <span className="absolute -top-8 right-0 text-xs bg-stone-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Volver arriba
        </span>
      </button>
    </div>
  );
}

export default App;