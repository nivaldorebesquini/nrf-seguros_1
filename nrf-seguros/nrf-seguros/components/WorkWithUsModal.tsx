
import React, { useState } from 'react';
import { X, Send, ShieldCheck } from 'lucide-react';

interface WorkWithUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkWithUsModal: React.FC<WorkWithUsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', area: 'Comercial' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`*Interesse Profissional - NRF Seguros*\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*WhatsApp:* ${formData.phone}\n*Área:* ${formData.area}`);
    window.open(`https://wa.me/5511951678815?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-950/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 p-2"><X className="h-6 w-6" /></button>
        <div className="bg-blue-900 p-8 text-white">
          <ShieldCheck className="h-6 w-6 mb-2" />
          <h2 className="text-2xl font-serif font-bold">Trabalhe Conosco</h2>
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required placeholder="Nome Completo" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-900" />
            <input required type="email" placeholder="E-mail" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-900" />
            <input required type="tel" placeholder="WhatsApp" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-900" />
            <select value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none">
              <option value="Comercial">Comercial</option>
              <option value="Administrativo">Administrativo</option>
            </select>
            <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2">
              <span>Enviar via WhatsApp</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUsModal;
