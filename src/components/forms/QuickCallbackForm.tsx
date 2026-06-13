'use client';

import { useState } from 'react';

export default function QuickCallbackForm() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      if (res.ok) {
        setStatus('success');
        setPhone('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-white max-w-sm w-full">
      <h4 className="text-base font-bold mb-1">📞 Request a Quick Callback</h4>
      <p className="text-xs text-slate-400 mb-4">Enter your number and our support desk will call you back in 15 minutes.</p>
      
      {status === 'success' ? (
        <p className="text-xs text-emerald-400 font-medium bg-emerald-950/50 p-3 rounded border border-emerald-800">
          ✓ Request received. Calling you shortly!
        </p>
      ) : (
        <form onSubmit={handleCallbackSubmit} className="flex flex-col gap-2">
          <input 
            type="tel" 
            placeholder="10-Digit Mobile Number" 
            required 
            pattern="[0-9]{10}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2.5 text-sm rounded bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded text-xs transition disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Call Me Back'}
          </button>
          {status === 'error' && (
            <p className="text-[11px] text-red-400 mt-1">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  );
}
