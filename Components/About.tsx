import React from 'react';

const About: React.FC = () => {
  return (
    <section id="historia" className="py-24 bg-[#fffdf5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60" />
            <img 
              src="/JejuIsland.jpg" 
              alt="Jeju Scenery" 
              className="rounded-2xl shadow-2xl relative z-10 border-8 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs">
              <p className="text-orange-600 font-handwritten text-2xl mb-1">Jeju, 1950</p>
              <p className="text-gray-600 text-sm italic">"Onde as memórias são tão doces quanto o aroma das tangerinas."</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Sinopse oficial</span>
            <h2 className="text-4xl md:text-5xl font-serif-drama text-gray-900 mt-4 mb-8 leading-tight">
              Uma Crônica de Vida, Sonhos e Tangerinas
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Ambientada na pitoresca Ilha de Jeju nas décadas de 1950 e 1960, a trama acompanha <span className="font-bold text-orange-600">Ae-soon</span>, uma jovem rebelde com um espírito indomável que sonha em se tornar poetisa, apesar de não poder frequentar a escola.
              </p>
              <p>
                Ao seu lado está <span className="font-bold text-orange-600">Gwan-shik</span>, um jovem diligente e calado que a ama em silêncio desde a infância. Gwan-shik não é de muitas palavras, mas seu amor é como uma montanha de ferro, inabalável e protetor.
              </p>
              <p>
                A série atravessa o tempo, mostrando as versões idosas dos personagens refletindo sobre os desafios superados e a beleza singela de uma vida bem vivida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;