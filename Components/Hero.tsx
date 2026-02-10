import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center bg-jeju-field">
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="text-orange-200 font-handwritten text-3xl md:text-4xl mb-4 block drop-shadow-lg">
          You Have Done Well
        </span>
        <h1 className="text-5xl md:text-8xl font-serif-drama text-white font-bold mb-6 drop-shadow-2xl leading-tight">
          Se a Vida te der Tangerinas
        </h1>
        <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg">
          Uma jornada nostálgica de volta à Ilha de Jeju dos anos 50, onde o amor floresce entre a rebeldia de Ae-soon e o silêncio protetor de Gwan-shik.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#historia" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-xl">
            Conheça a História
          </a>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all backdrop-blur-sm">
            Mais Informações
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 tangerine-gradient" />
    </section>
  );
};

export default Hero;