
import React from 'react';
import { HeartPulse, Car, Home, ArrowRight, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { ServiceType } from '../types';

interface ServicesProps {
  onQuoteClick: (service?: ServiceType) => void;
}

const Services: React.FC<ServicesProps> = ({ onQuoteClick }) => {
  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      {/* Elementos Decorativos Sutis */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Nossas Soluções</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-950 mb-6 tracking-tight">Proteção Completa para Você</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Oferecemos consultoria especializada nos principais ramos de seguros, com foco absoluto em reduzir custos mantendo a qualidade que sua família merece.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Plano de Saúde */}
          <div className="lg:col-span-1 group">
            <div className="h-full bg-blue-50 border border-blue-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
              <div className="mb-8 p-5 bg-white rounded-2xl inline-block text-blue-900 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <HeartPulse className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Plano de Saúde PME e PF</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Análise minuciosa da sua apólice visando a redução de custos mantendo ou melhorando as coberturas e rede credenciada.
              </p>
              <div className="space-y-4 mb-10">
                {["Redução de custos média de 20%", "Manutenção total de rede", "Migração assistida e segura"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-semibold text-slate-700">
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onQuoteClick(ServiceType.HEALTH)}
                className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold hover:bg-blue-950 transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2 group/btn"
              >
                <span>Solicitar Cotação</span>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Seguro Veicular */}
          <div className="lg:col-span-1 group">
            <div className="h-full bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
              <div className="mb-8 p-5 bg-slate-50 rounded-2xl inline-block text-blue-900 group-hover:bg-blue-50 transition-colors duration-500">
                <Car className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Seguro Veicular</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Proteção robusta com as melhores seguradoras e assistência 24h completa, garantindo que você nunca fique na mão.
              </p>
              <button 
                onClick={() => onQuoteClick(ServiceType.VEHICLE)}
                className="flex items-center space-x-2 text-blue-900 font-bold hover:translate-x-2 transition-all p-2 rounded-lg hover:bg-blue-50 w-fit"
              >
                <span>Analisar meu Seguro</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Seguro Residencial */}
          <div className="lg:col-span-1 group">
            <div className="h-full bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
              <div className="mb-8 p-5 bg-slate-50 rounded-2xl inline-block text-blue-900 group-hover:bg-blue-50 transition-colors duration-500">
                <Home className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Seguro Residencial</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Tranquilidade para seu lar com coberturas sob medida contra incêndio, roubo, danos elétricos e serviços emergenciais.
              </p>
              <button 
                onClick={() => onQuoteClick(ServiceType.RESIDENTIAL)}
                className="flex items-center space-x-2 text-blue-900 font-bold hover:translate-x-2 transition-all p-2 rounded-lg hover:bg-blue-50 w-fit"
              >
                <span>Proteger meu Lar</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-10 md:p-14 bg-blue-950 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none"></div>
          
          <div className="flex items-center space-x-6 mb-8 lg:mb-0 relative z-10">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
              <ShieldCheck className="h-12 w-12 text-blue-400" />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-serif font-bold">Precisa de uma análise técnica?</h4>
              <p className="text-blue-200 mt-2 text-lg">Nossos auditores analisam sua apólice gratuitamente.</p>
            </div>
          </div>
          
          <button 
            onClick={() => onQuoteClick()}
            className="bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-xl active:scale-95 relative z-10 uppercase tracking-widest"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
