import React from 'react';

const castMembers = [
  {
    name: 'IU (Lee Ji-eun)',
    role: 'Ae-soon (Jovem)',
    desc: 'Uma garota corajosa e rebelde que sonha em ser poetisa.',
    image: '/Ae-soon.jpg'
  },
  {
    name: 'Park Bo-gum',
    role: 'Gwan-shik (Jovem)',
    desc: 'Um rapaz diligente cujo amor por Ae-soon é sua maior força.',
    image: '/Gwan-Sik.jpg'
  },
  {
    name: 'Moon So-ri',
    role: 'Ae-soon (Idosa)',
    desc: 'Reflete sobre sua vida vibrante e cheia de lutas em Jeju.',
    image: '/Ae-soon idosa.webp'
  },
  {
    name: 'Park Hae-joon',
    role: 'Gwan-shik (Idoso)',
    desc: 'O companheiro eterno que cuidou de Ae-soon por décadas.',
    image: '/Gwan-shik (Idoso).webp'
  }
];

const Cast: React.FC = () => {
  return (
    <section id="elenco" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-drama text-gray-900 mb-4">Atores Principais</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Um elenco estelar que traz vida às memórias de uma geração em Jeju.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {castMembers.map((actor, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[2/3] mb-4">
                <img 
                  src={actor.image} 
                  alt={actor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm italic">{actor.desc}</p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{actor.name}</h4>
              <p className="text-orange-500 font-medium text-sm">{actor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cast;