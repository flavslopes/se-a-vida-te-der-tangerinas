import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-serif-drama font-bold tracking-tight transition-colors ${isScrolled ? 'text-orange-600' : 'text-white'}`}>
          폭싹 속았수다
        </div>
        <div className={`hidden md:flex space-x-8 font-medium transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>
          <a href="#inicio" className="hover:text-orange-400 transition-colors">Início</a>
          <a href="#historia" className="hover:text-orange-400 transition-colors">História</a>
          <a href="#elenco" className="hover:text-orange-400 transition-colors">Elenco</a>
          <a href="#curiosidades" className="hover:text-orange-400 transition-colors">Curiosidades</a> {/* Novo link */}
          <a href="#galeria" className="hover:text-orange-400 transition-colors">Galeria</a>
        </div>
        
        <div className="flex items-center gap-6">
          <span className={`hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-gray-400' : 'text-white/60'}`}>
            Série Original Netflix
          </span>
          <a 
            href="https://www.youtube.com/watch?v=xU5SYHGxcwI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-transform active:scale-95 shadow-lg shadow-orange-500/20 whitespace-nowrap inline-block"
          >
            Assistir Trailer
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;