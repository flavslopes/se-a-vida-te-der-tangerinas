import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-50 text-gray-800 py-16 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-serif-drama font-bold mb-6 text-orange-600">폭싹 속았수다</h2>
            <p className="text-gray-600 leading-relaxed">
              Dedicado a todos os fãs de doramas que apreciam histórias profundas. 
              Inspirado pela poesia das memórias e pelo eterno aroma de Jeju.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6 text-gray-900">Navegação</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a></li>
              <li><a href="#historia" className="hover:text-orange-500 transition-colors">História</a></li>
              <li><a href="#elenco" className="hover:text-orange-500 transition-colors">Elenco</a></li>
              <li><a href="#curiosidades" className="hover:text-orange-500 transition-colors">Curiosidades</a></li> {/* Novo link */}
              <li><a href="#galeria" className="hover:text-orange-500 transition-colors">Galeria</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6 text-gray-900">Siga a Estreia</h4>
            <p className="text-gray-600 mb-6 text-sm">Inscreva-se para receber notificações sobre o lançamento oficial na Netflix.</p>
            <div className="flex shadow-sm rounded-xl overflow-hidden">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-white border-none px-4 py-3 w-full focus:ring-2 focus:ring-orange-500 outline-none text-gray-700"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-bold transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © 2026 Fan Landing Page - Se a Vida Te Der Tangerinas. Criado por {' '}
            <a 
              href="https://www.linkedin.com/in/flavianalopescastelobranco/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-600 hover:text-orange-700 font-bold transition-colors"
            >
              Flaviana Lopes
            </a>
            .
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
            <span className="hover:text-orange-600 cursor-pointer transition-colors">Netflix</span>
            <span className="hover:text-orange-600 cursor-pointer transition-colors">AdoroCinema</span>
            <span className="hover:text-orange-600 cursor-pointer transition-colors">MyDramaList</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;