import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 bg-orange-500 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div className="mb-8 flex justify-center">
          <img 
            src="/tangerina 1 (2).png" 
            alt="Tangerina" 
            className="w-32 md:w-40 h-auto drop-shadow-xl"
          />
        </div>
        <h3 className="text-3xl md:text-5xl font-serif-drama text-white italic font-medium leading-tight mb-6">
          "Mesmo se a vida te der apenas tangerinas azedas, vamos plantá-las e ver o pomar florescer juntos."
        </h3>
        <p className="text-orange-100 font-handwritten text-2xl">— Ae-soon</p>
      </div>
    </section>
  );
};

export default QuoteSection;