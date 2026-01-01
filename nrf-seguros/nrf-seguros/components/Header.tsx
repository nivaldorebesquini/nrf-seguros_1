
import React, { useState } from 'react';
import { ShieldCheck, Menu, X, Phone, Mail } from 'lucide-react';
import { ServiceType } from '../types';

interface HeaderProps {
  onQuoteClick: (service?: ServiceType) => void;
}

const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="sticky top-0 z-[80] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ShieldCheck className="h-8 w-8 text-blue-900" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-950 tracking-tight leading-none">NRF</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500">Corretora de Seguros</span>
            </div>
          </div>
          
          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')} className="text-sm font-bold text-slate-600 hover:text-blue-900 transition-colors">Serviços</a>
            <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="text-sm font-bold text-slate-600 hover:text-blue-900 transition-colors">Sobre Nós</a>
          </nav>
          
          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-blue-950 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#servicos" 
                onClick={(e) => scrollToSection(e, 'servicos')} 
                className="text-lg font-bold text-blue-950 hover:text-blue-700 transition-colors py-2 border-b border-slate-50"
              >
                Serviços
              </a>
              <a 
                href="#sobre" 
                onClick={(e) => scrollToSection(e, 'sobre')} 
                className="text-lg font-bold text-blue-950 hover:text-blue-700 transition-colors py-2 border-b border-slate-50"
              >
                Sobre Nós
              </a>
            </nav>

            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Contatos Oficiais</h4>
              <div className="space-y-4">
                <a href="tel:+5511951678815" className="flex items-center space-x-3 text-blue-900 group">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-bold">+55 11 95167-8815</span>
                </a>
                <a href="mailto:contato@nrfseguros.com.br" className="flex items-center space-x-3 text-blue-900 group">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-bold">contato@nrfseguros.com.br</span>
                </a>
              </div>
            </div>
            
            <button 
              onClick={() => { setIsMenuOpen(false); onQuoteClick(); }}
              className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-all"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
