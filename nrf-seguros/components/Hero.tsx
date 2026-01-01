
import React, { useState, useEffect } from 'react';
import { TrendingDown, ImageIcon } from 'lucide-react';
import { ServiceType } from '../types';
import { GoogleGenAI } from "@google/genai";

interface HeroProps {
  onQuoteClick: (service?: ServiceType) => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const fallbackImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop";

  useEffect(() => {
    const generateHeroImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = "Cinematic professional photography of a happy smiling family standing in front of a beautiful modern house with a car in the driveway, warm lighting, high resolution.";
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: prompt }] },
          config: { imageConfig: { aspectRatio: "1:1" } }
        });

        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              setGeneratedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
              setIsLoadingImage(false);
              return;
            }
          }
        }
        setIsLoadingImage(false);
      } catch (error) {
        setIsLoadingImage(false);
      }
    };
    generateHeroImage();
  }, []);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('servicos');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative bg-blue-950 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center space-x-2 bg-blue-800/40 border border-blue-700/50 px-3 py-1 rounded-full text-xs font-semibold mb-6">
              <TrendingDown className="h-4 w-4 text-blue-300" />
              <span className="text-blue-100 font-medium uppercase tracking-wider">Consultoria em Redução de Custos</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              <span className="text-blue-400">Reduza os Custos</span> do seu Seguro mantendo as coberturas <span className="text-blue-400">mais importantes</span> para Você.
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl text-justify">
              Na NRF Seguros, nossa prioridade é analisar sua apólice atual e encontrar formas reais de economia sem abrir mão das coberturas e da rede credenciada que você já possui.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => onQuoteClick()} className="bg-white text-blue-950 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl">
                Solicitar Cotação Gratuita
              </button>
              <button onClick={scrollToServices} className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Nossos Serviços
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-blue-900/50 min-h-[500px] flex items-center justify-center">
              {isLoadingImage ? (
                <div className="flex flex-col items-center space-y-4 animate-pulse">
                  <ImageIcon className="h-12 w-12 text-blue-300 opacity-50" />
                  <span className="text-blue-200 text-sm">Gerando imagem...</span>
                </div>
              ) : (
                <img src={generatedImageUrl || fallbackImage} alt="NRF Seguros" className="w-full h-[500px] object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Nova Frase Solicitada */}
            <div className="mt-6 text-center lg:text-left px-4">
              <p className="text-blue-200 italic font-medium leading-relaxed">
                "Ter um seguro é garantir a tranquilidade da sua família. Mas você não precisa pagar mais caro por isto."
              </p>
            </div>

            {/* Elemento Decorativo Extra */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
