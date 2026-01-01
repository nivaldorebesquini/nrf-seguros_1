
import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle, Mail, User, Phone, Briefcase, Building2, Wallet } from 'lucide-react';
import { ServiceType, QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType;
}

const INSURERS = [
  "Nenhuma / Sem Seguro",
  "Bradesco Saúde",
  "SulAmérica",
  "Amil",
  "Porto Seguro",
  "Unimed",
  "NotreDame Intermédica",
  "Hapvida",
  "Omint",
  "Care Plus",
  "Outra"
];

const VALUE_RANGES = [
  "Até R$ 1.500,00",
  "R$ 1.500,00 a R$ 3.000,00",
  "R$ 3.000,00 a R$ 5.000,00",
  "R$ 5.000,00 a R$ 8.000,00",
  "R$ 8.000,00 a R$ 10.000,00",
  "Acima de R$ 10.000,00"
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

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: initialService || ServiceType.HEALTH,
        currentInsurer: '',
        valueRange: '',
        policyNotes: ''
      });
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isHealth = formData.service === ServiceType.HEALTH;
    const costLabel = isHealth ? 'Custo Mensal' : 'Custo Anual';
    
    let messageBody = `*Nova Solicitação de Cotação - NRF Seguros*\n\n`;
    messageBody += `*👤 Nome:* ${formData.name}\n`;
    messageBody += `*📧 E-mail:* ${formData.email}\n`;
    messageBody += `*📱 WhatsApp:* ${formData.phone}\n`;
    messageBody += `*🛡️ Tipo de Seguro:* ${formData.service}\n`;
    
    if (formData.currentInsurer) messageBody += `*🏢 Seguradora Atual:* ${formData.currentInsurer}\n`;
    if (formData.valueRange) messageBody += `*💰 ${costLabel}:* ${formData.valueRange}\n`;
    if (formData.policyNotes) messageBody += `*📝 Observações:* ${formData.policyNotes}\n`;

    const whatsappUrl = `https://wa.me/5511951678815?text=${encodeURIComponent(messageBody)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isHealth = formData.service === ServiceType.HEALTH;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-950/50 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-20 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {submitted ? (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-blue-950 mb-3">Solicitação Enviada!</h2>
            <p className="text-slate-600 text-lg">Iniciando conversa no WhatsApp...</p>
          </div>
        ) : (
          <div className="max-h-[95vh] overflow-y-auto">
            <div className="bg-blue-900 p-8 text-white relative">
              <ShieldCheck className="h-10 w-10 mb-4 text-blue-300" />
              <h2 className="text-3xl font-serif font-bold leading-tight">Solicitar Cotação</h2>
              <p className="text-blue-100 mt-2 text-sm leading-relaxed">
                Nossa análise visa encontrar a melhor alternativa de custo-benefício para você.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Nome */}
                <div className="space-y-1.5">
                  <label className="flex items-center space-x-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <User className="h-3 w-3" />
                    <span>Nome Completo</span>
                  </label>
                  <input 
                    required 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none transition-all font-medium text-slate-900" 
                    placeholder="Como podemos te chamar?" 
                  />
                </div>

                {/* E-mail */}
                <div className="space-y-1.5">
                  <label className="flex items-center space-x-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Mail className="h-3 w-3" />
                    <span>E-mail</span>
                  </label>
                  <input 
                    required 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none transition-all font-medium text-slate-900" 
                    placeholder="seu@email.com" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* WhatsApp */}
                <div className="space-y-1.5">
                  <label className="flex items-center space-x-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Phone className="h-3 w-3" />
                    <span>WhatsApp</span>
                  </label>
                  <input 
                    required 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none transition-all font-medium text-slate-900" 
                    placeholder="(11) 99999-9999" 
                  />
                </div>

                {/* Serviço */}
                <div className="space-y-1.5">
                  <label className="flex items-center space-x-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Briefcase className="h-3 w-3" />
                    <span>Tipo de seguro</span>
                  </label>
                  <select 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-900 outline-none font-medium cursor-pointer text-slate-900"
                  >
                    <option value={ServiceType.HEALTH} className="text-slate-900">Plano de Saúde</option>
                    <option value={ServiceType.VEHICLE} className="text-slate-900">Seguro Veicular</option>
                    <option value={ServiceType.RESIDENTIAL} className="text-slate-900">Seguro Residencial</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Seguradora Atual */}
                <div className="space-y-1.5">
                  <label className="flex items-center space-x-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Building2 className="h-3 w-3" />
                    <span>Seguradora Atual</span>
                  </label>
                  <select 
                    name="currentInsurer" 
                    value={formData.currentInsurer} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-900 outline-none font-medium cursor-pointer text-slate-900"
                  >
                    <option value="" className="text-slate-400 italic">Selecione...</option>
                    {INSURERS.map(insurer => (
                      <option key={insurer} value={insurer} className="text-slate-900">
                        {insurer}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Faixa de Valor Dinâmica */}
                <div className="space-y-1.5">
                  <label className="flex items-center space-x-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Wallet className="h-3 w-3" />
                    <span>{isHealth ? 'Custo Mensal Atual' : 'Custo Anual Atual'}</span>
                  </label>
                  <select 
                    name="valueRange" 
                    value={formData.valueRange} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-900 outline-none font-medium cursor-pointer text-slate-900"
                  >
                    <option value="" className="text-slate-400 italic">Selecione a faixa...</option>
                    {VALUE_RANGES.map(range => (
                      <option key={range} value={range} className="text-slate-900">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notas */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">
                  Observações (Rede credenciada ou Coberturas desejadas)
                </label>
                <textarea 
                  name="policyNotes" 
                  value={formData.policyNotes} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none transition-all h-24 resize-none placeholder:text-slate-300 font-medium text-slate-900" 
                  placeholder="Ex: Gostaria de manter atendimento no Hospital X ou cobertura para vidros..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-3 active:scale-[0.98] group"
              >
                <span className="uppercase tracking-widest text-sm">Solicitar Análise Técnica</span>
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
