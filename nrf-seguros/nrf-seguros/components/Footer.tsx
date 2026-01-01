
import React from 'react';
import { ShieldCheck, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const whatsappMessage = encodeURIComponent("Olá! Preciso de ajuda com meu seguro. Poderia me ajudar?");
  const whatsappUrl = `https://wa.me/5511951678815?text=${whatsappMessage}`;

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <ShieldCheck className="h-8 w-8 text-white" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight leading-none text-white">NRF</span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-blue-300">Corretora de Seguros</span>
              </div>
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed max-w-sm">
              Especialistas em análise de apólices e redução de custos estratégicos. Atendimento humanizado e focado em clientes exigentes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2">Contatos Oficiais</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-blue-300 font-bold uppercase">Telefone / WhatsApp</span>
                  <a href="tel:+5511951678815" className="text-blue-50 hover:text-white transition-colors">+55 11 95167-8815</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-blue-300 font-bold uppercase">E-mail de Contato</span>
                  <a href="mailto:contato@nrfseguros.com.br" className="text-blue-50 hover:text-white transition-colors">contato@nrfseguros.com.br</a>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')} className="text-blue-200 hover:text-white transition-colors block py-1">Nossos Serviços</a></li>
              <li><a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="text-blue-200 hover:text-white transition-colors block py-1">Sobre a Corretora</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-900 text-center text-blue-400 text-[10px] uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} NRF Corretora de Seguros. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 39.558.026/0001-95</p>
        </div>
      </div>
      
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 z-[90] flex items-center justify-center"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;
