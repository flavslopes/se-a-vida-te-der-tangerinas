import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Cast from './Components/Cast';
import Curiosities from './Components/Curiosities'; // Importação do novo componente
import Gallery from './Components/Gallery';
import QuoteSection from './Components/QuoteSection';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <QuoteSection />
        <Cast />
        <Curiosities /> {/* Adição do novo componente */}
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;