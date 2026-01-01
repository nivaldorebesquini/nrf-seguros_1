
import React from 'react';
import { Shield, TrendingDown, Search, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              <HeartHandshake className="h-4 w-4 text-blue-900" />
              <span className="text-xs font-black text-blue-900 uppercase tracking-widest">Nossa Essência</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-blue-950 mb-6">Sobre a NRF Seguros</h2>
          </div>
          
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-justify md:text-left mb-16">
            <p>
              A <strong>NRF Seguros</strong> é uma corretora de seguros com atendimento humanizado, voltada para clientes exigentes, que buscam não somente a contratação de um seguro saúde mas que desejam entender o motivo da escolha daquele plano de saúde.
            </p>
            <p>
              Com base em <strong>5 anos de expertise</strong> no mercado de seguros saúde e <strong>mais de 10 milhões de reais gerados em economia</strong>, analisamos a sua apólice e seu histórico de saúde para te recomendar a melhor <strong>opção</strong> visando a redução dos altos custos, resultado dos seguidos reajustes anuais, porém, sempre visando manter e até melhorar as coberturas e a rede credenciada atuais.
            </p>
            <p>
              Se for o melhor para você e sua família ou empresa, realizamos a migração de forma segura e tranquila mantendo o segurado ciente de cada etapa do processo.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="italic text-blue-900">
                "Seguro e plano de saúde, é melhor ter e não precisar do que precisar e não ter."
              </p>
              <p className="mt-2 text-sm text-slate-500 font-normal">
                Nivaldo Rebesquini Filho — sócio fundador
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <TrendingDown className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-950 mb-2 text-center text-lg">Economia</h4>
              <p className="text-sm text-slate-500 text-center">Economia média de 20% por apólice analisada</p>
            </div>
            
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <Search className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-950 mb-2 text-center text-lg">Auditoria</h4>
              <p className="text-sm text-slate-500 text-center">Análise detalhada de apólices e histórico.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-950 mb-2 text-center text-lg">Confiança</h4>
              <p className="text-sm text-slate-500 text-center">Transparência total em cada etapa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
