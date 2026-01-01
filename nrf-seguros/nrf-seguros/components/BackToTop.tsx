
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 bg-white text-blue-900 p-3 rounded-full shadow-2xl border border-slate-200 hover:bg-slate-50 transition-all z-[85] animate-in fade-in zoom-in duration-300 active:scale-90 group"
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};

export default BackToTop;
