import React, { useState, useEffect, useCallback } from 'react';
import { TrendingDown, ImageIcon, RefreshCw, AlertCircle } from 'lucide-react';
import { ServiceType } from '../types';
import { GoogleGenAI } from "@google/genai";

interface HeroProps {
  onQuoteClick: (service?: ServiceType) => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fallbackImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop";

  const generateHeroImage = useCallback(async () => {
    setIsLoadingImage(true);
    setError(null);
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey || apiKey === '') {
        throw new Error("Chave de API não configurada");
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = "High-end cinematic photography of a happy Brazilian family (father, mother, child) in front of a modern elegant home with a sophisticated SUV car parked in the driveway, bright sunny day, sense of security and prosperity, professional lighting, 8k resolution.";
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
        config: { 
          imageConfig: { 
            aspectRatio: "1:1" 
          } 
        }
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setGeneratedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            foundImage = true;
            break;
          }
        }
      }
      
      if (!foundImage) {
        throw new Error("Não foi possível gerar a imagem");
      }
    } catch (err: any) {
      console.error("Erro ao gerar imagem:", err);
      setError(err.message || "Erro na geração");
    } finally {
      setIsLoadingImage(false);
    }
  }, []);

  useEffect(() => {
    generateHeroImage();
  }, [generateHeroImage]);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('servicos');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative bg-blue-950 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center space-x-2 bg-blue-800/40 border border-blue-700/50 px-3 py-1 rounded-full text-xs font-semibold mb-6">
              <TrendingDown className="h-4 w-4 text-blue-300" />
              <span className="text-blue-100 font-medium uppercase tracking-wider">Consultoria em Redução de Custos</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Reduza os custos do seu seguro mantendo as coberturas mais importantes para Você
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl text-justify leading-relaxed">
              Na NRF Seguros, nossa prioridade é analisar sua apólice atual e encontrar formas reais de economia sem abrir mão das coberturas e da rede credenciada que você já possui.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onQuoteClick()} 
                className="bg-white text-blue-950 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                Solicitar Cotação Gratuita
              </button>
              <button 
                onClick={scrollToServices} 
                className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/5"
              >
                Nossos Serviços
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="flex flex-col items-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-blue-900/50 min-h-[500px] w-full flex items-center justify-center group">
                {isLoadingImage ? (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <ImageIcon className="h-16 w-16 text-blue-300/40" />
                      <RefreshCw className="h-8 w-8 text-blue-400 absolute inset-0 m-auto animate-spin" />
                    </div>
                    <span className="text-blue-200 text-sm font-medium animate-pulse">Personalizando sua experiência...</span>
                  </div>
                ) : (
                  <>
                    <img 
                      src={generatedImageUrl || fallbackImage} 
                      alt="Família, Casa e Veículo Protegidos NRF Seguros" 
                      className="w-full h-[500px] object-cover transition-opacity duration-700" 
                    />
                    <button 
                      onClick={generateHeroImage}
                      className="absolute bottom-4 right-4 bg-black/40 hover:bg-black/60 opacity-0 group-hover:opacity-100 p-2 rounded-lg backdrop-blur-md transition-all text-white/70 hover:text-white"
                      title="Gerar nova imagem com IA"
                    >
                      <RefreshCw className="h-5 w-5" />
                    </button>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              <div className="mt-8 px-6 py-4 text-center max-w-md bg-blue-900/30 rounded-2xl border border-blue-800/50 backdrop-blur-sm shadow-inner transform hover:scale-[1.02] transition-transform">
                <p className="text-blue-100 font-medium italic text-lg leading-relaxed">
                  "Ter um seguro é garantir a tranquilidade da sua família. Mas você não precisa pagar mais caro por isto."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
