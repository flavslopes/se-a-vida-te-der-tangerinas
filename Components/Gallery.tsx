import React from 'react';

const galleryImages = [
  '/WTangerines_Unit_s2-22_A-09484.webp',
  '/se-a-vida-te-der-tangerinas-estreia-na-netflix-cena-serie-1024x581.jpg',
  '/se-a-vida-te-der-tangerinas-2-parte.webp',
  '/park-bo-gum-quando-a-vida-te-da-tangerinas-capa.jpg',
  '/cena.webp',
];

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-[#fffdf5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif-drama text-gray-900 mb-2">Momentos em Jeju</h2>
            <p className="text-gray-500">Imagens exclusivas dos bastidores e cenas oficiais.</p>
          </div>
          <button className="hidden md:block text-orange-600 font-bold border-b-2 border-orange-600 hover:text-orange-700 hover:border-orange-700 transition-all">
            Ver Todas as Fotos
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl shadow-lg group">
            <img 
              src={galleryImages[0]} 
              alt="Hero Scene" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
          
          {galleryImages.slice(1).map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl shadow-lg group aspect-[4/3]">
              <img 
                src={img} 
                alt={`Scene ${i+1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;