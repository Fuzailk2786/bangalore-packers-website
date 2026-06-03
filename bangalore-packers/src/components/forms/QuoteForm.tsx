'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', movingFrom: '', movingTo: '', moveDate: '', serviceType: 'House Shifting', itemsDescription: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center shadow-md">
        <h3 className="text-xl font-bold mb-2">🎉 Quote Request Received!</h3>
        <p>Our relocation expert will call you within 15 minutes with an estimated pricing structure.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-4 max-w-lg w-full mx-auto">
      <div className="text-center md:text-left mb-2">
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Get an Instant Cost Estimate</h3>
        <p className="text-sm text-slate-500 mt-1">Save up to 20% on booking today!</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input 
          type="text" placeholder="Moving From (City/Area)" required
          className="p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
          onChange={(e) => setFormData({...formData, movingFrom: e.target.value})}
        />
        <input 
          type="text" placeholder="Moving To (City/Area)" required
          className="p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
          onChange={(e) => setFormData({...formData, movingTo: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input 
          type="text" placeholder="Your Name" required
          className="p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="tel" placeholder="Mobile Number" required pattern="[0-9]{10}"
          className="p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input 
          type="date" required
          className="p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-600"
          onChange={(e) => setFormData({...formData, moveDate: e.target.value})}
        />
        <select 
          className="p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white text-slate-600"
          onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
        >
          <option>House Shifting</option>
          <option>Office Relocation</option>
          <option>Domestic Relocation</option>
          <option>International Relocation</option>
          <option>Vehicle Transport</option>
        </select>
      </div>

      <textarea 
        placeholder="Optional: Briefly list major items (e.g., 2 BHK, Sofa, Fridge, 10 Boxes)" rows={2}
        className="p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none resize-none"
        onChange={(e) => setFormData({...formData, itemsDescription: e.target.value})}
      />

      <button 
        type="submit" disabled={loading}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-md hover:shadow-lg disabled:opacity-50 text-base"
      >
        {loading ? 'Calculating Costs...' : 'Get Free Quote Now'}
      </button>

      <p className="text-[11px] text-center text-slate-400">🛡️ Your data is completely secure. No spam guaranteed.</p>
    </form>
  );
}