import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle } from 'lucide-react';
import { ServiceType, QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType;
}

const INSURERS = [
  "Bradesco Saúde",
  "SulAmérica",
  "Amil",
  "Porto Seguro",
  "Unimed",
  "NotreDame Intermédica",
  "Omint",
  "Outra / Não Possuo"
];

const MONTHLY_RANGES = [
  "Até R$ 1.000",
  "R$ 1.000 a R$ 3.000",
  "R$ 3.000 a R$ 5.000",
  "R$ 5.000 a R$ 8.000",
  "R$ 8.000 a R$ 10.000",
  "Acima de R$ 10.000"
];

const ANNUAL_RANGES = [
  "Até R$ 2.000",
  "R$ 2.000 a R$ 4.000",
  "R$ 4.000 a R$ 6.000",
  "R$ 6.000 a R$ 8.000",
  "R$ 8.000 a R$ 12.000",
  "Acima de R$ 12.000"
];

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    service: ServiceType.HEALTH,
    currentInsurer: '',
    valueRange: '',
    policyNotes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData(prev => ({ 
        ...prev, 
        service: initialService || ServiceType.HEALTH,
        name: '',
        email: '',
        phone: '',
        currentInsurer: '',
        valueRange: ''
      }));
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const isHealth = formData.service === ServiceType.HEALTH;
  const currentRanges = isHealth ? MONTHLY_RANGES : ANNUAL_RANGES;
  const rangeLabel = isHealth ? "Faixa de Investimento Mensal" : "Faixa de Investimento Anual";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let messageBody = `*SOLICITAÇÃO DE AUDITORIA - NRF*\n\n`;
    messageBody += `*Nome:* ${formData.name}\n`;
    messageBody += `*E-mail:* ${formData.email}\n`;
    messageBody += `*WhatsApp:* ${formData.phone}\n`;
    messageBody += `*Serviço:* ${formData.service}\n`;
    if (formData.currentInsurer) messageBody += `*Operadora Atual:* ${formData.currentInsurer}\n`;
    if (formData.valueRange) messageBody += `*Investimento ${isHealth ? 'Mensal' : 'Anual'}:* ${formData.valueRange}\n`;

    const whatsappUrl = `https://wa.me/5511951678815?text=${encodeURIComponent(messageBody)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => onClose(), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'service') {
      setFormData(prev => ({ ...prev, [name]: value as ServiceType, valueRange: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 z-20"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" />
        </button>

        {submitted ? (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Solicitação Enviada!</h2>
            <p className="text-slate-500">Estamos te levando para o nosso WhatsApp...</p>
          </div>
        ) : (
          <div>
            <div className="bg-blue-900 p-8 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Cotação & Auditoria</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold italic">Como podemos ajudar?</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nome Completo</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">WhatsApp</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="(11) 99999-9999" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">E-mail Corporativo ou Pessoal</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="seuemail@empresa.com.br" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipo de Seguro</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-blue-500 outline-none transition-all">
                    <option value={ServiceType.HEALTH}>Plano de Saúde</option>
                    <option value={ServiceType.VEHICLE}>Seguro Veicular</option>
                    <option value={ServiceType.RESIDENTIAL}>Seguro Residencial</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Operadora Atual</label>
                  <select name="currentInsurer" value={formData.currentInsurer} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-blue-500 outline-none transition-all">
                    <option value="">Selecione...</option>
                    {INSURERS.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{rangeLabel}</label>
                <select required name="valueRange" value={formData.valueRange} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-blue-500 outline-none transition-all">
                  <option value="">Selecione uma faixa...</option>
                  {currentRanges.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              <button type="submit" className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 active:scale-95 mt-4">
                <span>Solicitar Auditoria Gratuita</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;