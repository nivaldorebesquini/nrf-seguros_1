
import React, { useState } from 'react';
import { Users, ShieldCheck, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { ServiceType } from '../types';

interface TestimonialsProps {
  onQuoteClick: (service?: ServiceType) => void;
}

const testimonials = [
  {
    text: "Nivaldo, existe um divisor de águas entre antes de você e depois de você a respeito do nosso plano de saúde. Nós em casa sentimos muita segurança em tudo que você nos orientou. Nós somos muito gratos pela sua atenção, carinho e dedicação conosco. Muito obrigado, fica com Deus e parabéns pelo seu trabalho. Forte abraço!",
    author: "Odair Franceschet"
  },
  {
    text: "Eu achei fantástico o trabalho de redução de custos do meu plano de saúde e ainda melhorando o padrão do meu plano. Foi feito um estudo minucioso do meu plano e estou extremamente feliz. Sou fã de carteirinha. Eu super indico.",
    author: "Dra. Paloma Raiane Vargas"
  },
  {
    text: "Nivaldo, quero agradecer muito por todo trabalho realizado durante o meu processo de mudança do convênio, tudo foi realizado com muito profissionalismo e tranquilidade. Sou muito grata por cada detalhe apresentado desde o financeiro aos modelos de negócios de cada convênio em atendimento. Deixo aqui mais uma vez, minha gratidão pelo atendimento humanizado cujo o qual fez muita diferença. Que Deus continue te abençoando.",
    author: "Simone dos Santos B."
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ onQuoteClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="p-4 bg-white rounded-full shadow-sm">
            <Users className="h-8 w-8 text-blue-900" />
          </div>
          
          <p className="text-xl md:text-2xl font-serif font-medium text-blue-950 leading-relaxed max-w-3xl">
            "Temos centenas de clientes satisfeitos com redução real de custos e manutenção integral de coberturas."
          </p>

          {/* Carrossel de Depoimentos */}
          <div className="relative w-full max-w-4xl mx-auto px-12 py-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <Quote className="absolute top-4 left-6 h-8 w-8 text-blue-100" />
            
            <div className="min-h-[180px] flex flex-col justify-center animate-in fade-in duration-500" key={activeIndex}>
              <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                {testimonials[activeIndex].text}
              </p>
              <p className="font-bold text-blue-900 uppercase tracking-widest text-sm">
                — {testimonials[activeIndex].author}
              </p>
            </div>

            {/* Navegação */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-slate-50 text-blue-900 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-slate-50 text-blue-900 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-blue-900' : 'w-2 bg-slate-200'}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6 pt-4">
            <div className="flex items-center justify-center space-x-2 text-blue-900 font-black uppercase tracking-widest text-sm">
              <ShieldCheck className="h-5 w-5" />
              <span>Junte-se a eles.</span>
            </div>
            
            <button 
              onClick={() => onQuoteClick()}
              className="bg-blue-900 hover:bg-blue-950 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3 active:scale-95 group"
            >
              <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Fale agora com um especialista</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
