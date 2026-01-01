
import React from 'react';
import { HeartPulse, Car, Home, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { ServiceType } from '../types';

interface ServicesProps {
  onQuoteClick: (service?: ServiceType) => void;
}

const Services: React.FC<ServicesProps> = ({ onQuoteClick }) => {
  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-950 mb-6">Proteção Completa para Você</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Oferecemos consultoria especializada nos principais ramos de seguros, sempre com foco no seu bem-estar e economia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Plano de Saúde */}
          <div className="lg:col-span-1 group">
            <div className="h-full bg-blue-50 border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6 p-4 bg-white rounded-2xl inline-block text-blue-900 shadow-sm">
                <HeartPulse className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Plano de Saúde PME e PF</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Análise minuciosa da sua apólice visando a redução de custos mantendo ou melhorando as coberturas atuais
              </p>
              <ul className="space-y-3 mb-8">
                {["Redução de custos real", "Manutenção de rede", "Migração assistida"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onQuoteClick(ServiceType.HEALTH)}
                className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-950 transition-colors"
              >
                Solicitar Cotação
              </button>
            </div>
          </div>

          {/* Seguro Veicular */}
          <div className="lg:col-span-1 group">
            <div className="h-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block text-blue-900">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Seguro Veicular</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Proteção robusta para seu veículo com as melhores seguradoras do mercado e assistência 24h completa.
              </p>
              <button 
                onClick={() => onQuoteClick(ServiceType.VEHICLE)}
                className="flex items-center space-x-2 text-blue-900 font-bold hover:translate-x-1 transition-transform"
              >
                <span>Saber mais</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Seguro Residencial */}
          <div className="lg:col-span-1 group">
            <div className="h-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block text-blue-900">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Seguro Residencial</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Tranquilidade para seu lar com coberturas contra incêndio, roubo, danos elétricos e serviços de emergência.
              </p>
              <button 
                onClick={() => onQuoteClick(ServiceType.RESIDENTIAL)}
                className="flex items-center space-x-2 text-blue-900 font-bold hover:translate-x-1 transition-transform"
              >
                <span>Saber mais</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-blue-950 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <ShieldCheck className="h-12 w-12 text-blue-400" />
            <div>
              <h4 className="text-xl font-bold">Precisa de uma análise personalizada?</h4>
              <p className="text-blue-200">Nossos consultores estão prontos para te ajudar a economizar.</p>
            </div>
          </div>
          <button 
            onClick={() => onQuoteClick()}
            className="bg-white text-blue-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
