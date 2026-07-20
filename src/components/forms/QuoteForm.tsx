'use client';

import { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/site';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', movingFrom: '', movingTo: '', moveDate: '', serviceType: 'Home Relocation', itemsDescription: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'Hello MoveSafe, I would like a moving quote.',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `From: ${formData.movingFrom}`,
      `To: ${formData.movingTo}`,
      `Move date: ${formData.moveDate}`,
      `Service: ${formData.serviceType}`,
      formData.itemsDescription ? `Move details: ${formData.itemsDescription}` : '',
    ].filter(Boolean).join('\n');
    window.location.assign(getWhatsAppUrl(message));
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-lg flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl shadow-slate-950/10 md:p-8">
      <div className="mb-1 text-left">
        <p className="eyebrow mb-2">Free move estimate</p>
        <h3 className="text-2xl font-black tracking-tight">Tell us about your move</h3>
        <p className="mt-1 text-sm text-slate-500">Send the details directly to our team on WhatsApp.</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input 
          type="text" placeholder="Moving From (City/Area)" required
          value={formData.movingFrom}
          className="min-w-0 rounded-xl border border-slate-300 p-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          onChange={(e) => setFormData({...formData, movingFrom: e.target.value})}
        />
        <input 
          type="text" placeholder="Moving To (City/Area)" required
          value={formData.movingTo}
          className="min-w-0 rounded-xl border border-slate-300 p-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          onChange={(e) => setFormData({...formData, movingTo: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input 
          type="text" placeholder="Your Name" required
          value={formData.name}
          className="min-w-0 rounded-xl border border-slate-300 p-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="tel" placeholder="Mobile Number" required pattern="[0-9]{10}"
          value={formData.phone}
          inputMode="numeric"
          className="min-w-0 rounded-xl border border-slate-300 p-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input 
          type="date" required
          value={formData.moveDate}
          className="min-w-0 rounded-xl border border-slate-300 p-3 text-sm text-slate-600 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          onChange={(e) => setFormData({...formData, moveDate: e.target.value})}
        />
        <select 
          value={formData.serviceType}
          className="min-w-0 rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-600 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
        >
          <option>Home Relocation</option>
          <option>Office Relocation</option>
          <option>Domestic Relocation</option>
          <option>International Relocation</option>
          <option>Vehicle Transport</option>
        </select>
      </div>

      <textarea 
        placeholder="Optional: Briefly list major items (e.g., 2 BHK, Sofa, Fridge, 10 Boxes)" rows={2}
        value={formData.itemsDescription}
        className="resize-none rounded-xl border border-slate-300 p-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
        onChange={(e) => setFormData({...formData, itemsDescription: e.target.value})}
      />

      <button 
        type="submit"
        className="relative z-10 min-h-12 w-full rounded-xl bg-orange-600 px-4 py-3.5 text-base font-extrabold text-white shadow-md transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Send Quote Request
      </button>

      <p className="text-center text-[11px] text-slate-400">No payment is required to request an estimate.</p>
    </form>
  );
}
