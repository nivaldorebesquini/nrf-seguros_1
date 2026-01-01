
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import QuoteModal from './components/QuoteModal';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ServiceType } from './types';

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialService, setInitialService] = useState<ServiceType | undefined>(undefined);

  const openQuoteModal = (service?: ServiceType) => {
    setInitialService(service);
    setIsQuoteModalOpen(true);
  };
  
  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setInitialService(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onQuoteClick={() => openQuoteModal()} />
      <main className="flex-grow">
        <Hero onQuoteClick={() => openQuoteModal()} />
        <Services onQuoteClick={openQuoteModal} />
        <About />
        <Testimonials onQuoteClick={openQuoteModal} />
      </main>
      <Footer />
      <BackToTop />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={closeQuoteModal} 
        initialService={initialService} 
      />
    </div>
  );
};

export default App;
