import React from 'react';

const Curiosities: React.FC = () => {
  return (
    <section id="curiosidades" className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-drama text-gray-900 mb-4">Curiosidades do Dorama</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Descubra fatos interessantes e detalhes de bastidores sobre "Se a Vida te der Tangerinas".
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-700 leading-relaxed">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-serif-drama text-orange-600">A Ilha de Jeju como Protagonista</h3>
            <p>
              A Ilha de Jeju é mais do que um cenário; ela é uma personagem vital na série. Conhecida por suas paisagens vulcânicas, praias deslumbrantes e, claro, seus famosos pomares de tangerinas, Jeju é um símbolo da beleza natural e da resiliência dos habitantes que moldam a história de Ae-soon e Gwan-shik.
            </p>
            <p>
              Muitas cenas foram filmadas em locações autênticas, buscando capturar a atmosfera e a cultura da ilha nas décadas de 1950 e 1960, proporcionando uma imersão profunda na Coreia pós-guerra.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-serif-drama text-orange-600">O Significado do Título Coreano</h3>
            <p>
              O título original coreano da série é "폭싹 속았수다" (Pokssak Sogassuda), que se traduz literalmente para "Você fez bem" ou "Você trabalhou duro". É uma expressão comum em Jeju para expressar encorajamento ou reconhecimento pelo esforço de alguém, especialmente após um trabalho árduo.
            </p>
            <p>
              Este título reflete a temática central da série: a vida de esforço e superação dos personagens, e a validação de suas jornadas, mesmo diante das adversidades. É um lembrete da força e da persistência necessárias para colher as "tangerinas" da vida.
            </p>
          </div>
        </div>

        {/* Seção Elenco de Apoio Notável */}
        <div className="mt-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-serif-drama text-gray-800 mb-6">Elenco de Apoio Notável</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Além dos protagonistas, o dorama conta com um elenco de apoio talentoso que complementa a narrativa, trazendo profundidade às interações e ao ambiente da época. Muitos atores veteranos e novos talentos foram cuidadosamente selecionados para retratar fielmente a comunidade de Jeju.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/atores.webp" 
              alt="Elenco de apoio" 
              className="rounded-xl shadow-xl w-full max-w-lg object-cover h-auto border-4 border-white"
            />
          </div>
        </div>

        {/* Seção As Lendárias Haenyeo de Jeju */}
        <div className="mt-24 flex flex-col lg:flex-row-reverse items-center gap-12"> {/* flex-row-reverse para alternar a imagem */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-serif-drama text-gray-800 mb-6">As Lendárias Haenyeo de Jeju</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              As Haenyeo (mulheres do mar) são um patrimônio cultural de Jeju, mergulhadoras que colhem frutos do mar sem equipamento de oxigênio. Elas simbolizam a força, a resiliência e a independência das mulheres da ilha, elementos frequentemente explorados na cultura local e no dorama. Sua presença na série destaca a rica história e o papel fundamental das mulheres na sociedade de Jeju.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/As Haenyeo.jpg" 
              alt="As Haenyeo de Jeju" 
              className="rounded-xl shadow-xl w-full max-w-lg object-cover h-auto border-4 border-white"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Curiosities;