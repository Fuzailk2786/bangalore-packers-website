// src/components/ui/QuoteForm.tsx

"use client";

import React, { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  originCity: string;
  destinationCity: string;
  moveDate: string;
  moveType: "DOMESTIC_HOUSE" | "INTERNATIONAL_HOUSE" | "OFFICE_RELOCATION" | "VEHICLE_TRANSPORT" | "PACKING_ONLY";
  cargoDescription: string;
  isVehicleIncluded: boolean;
};

export default function QuoteForm() {
  const = useState(1);
  const = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    originCity: "",
    destinationCity: "",
    moveDate: "",
    moveType: "DOMESTIC_HOUSE",
    cargoDescription: "",
    isVehicleIncluded: false
  });

  const [loading, setLoading] = useState(false);
  const = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({...prev, [name]: checked }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.fullName ||!formData.phone ||!formData.email)) {
      setErrorMsg("Please complete all personal details before moving forward.");
      return;
    }
    setErrorMsg("");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setErrorMsg("");
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.originCity ||!formData.destinationCity ||!formData.moveDate) {
      setErrorMsg("Please provide origin, destination, and planned move date.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
      } else {
        setErrorMsg(result.message || "An unexpected validation error occurred on the server.");
      }
    } catch (err) {
      setErrorMsg("Network failure. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-slate-900 border border-emerald-500/30 p-8 rounded-2xl text-center max-w-lg mx-auto shadow-2xl animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-full mb-6">
          <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Quote Request Received!</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Your details are logged. A relocation advisor will contact you within 15 minutes to provide an itemized pricing layout.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-lg mx-auto shadow-2xl text-left">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Step {step} of 2</span>
        <div className="h-1.5 w-32 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: step === 1? "50%" : "100%" }}></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1? (
          <div className="space-y-5 animate-fade-in">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Mobile Number (Indian)</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="9876543210"
              />
            </div>
            <div>
              <label htmlFor="moveType" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Relocation Category</label>
              <select
                id="moveType"
                name="moveType"
                value={formData.moveType}
                onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
              >
                <option value="DOMESTIC_HOUSE">Domestic Relocation</option>
                <option value="INTERNATIONAL_HOUSE">International Relocation</option>
                <option value="OFFICE_RELOCATION">Office Relocation</option>
                <option value="VEHICLE_TRANSPORT">Vehicle Transport</option>
                <option value="PACKING_ONLY">Packing & Unpacking</option>
              </select>
            </div>
            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-lg text-sm transition-all shadow-lg hover:shadow-indigo-500/20"
            >
              Continue to Logistics Details
            </button>
          </div>
        ) : (
          <div className="space-y-5 animate-fade-in">
            <div>
              <label htmlFor="originCity" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Origin City / Area</label>
              <input
                id="originCity"
                type="text"
                name="originCity"
                required
                value={formData.originCity}
                onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="e.g., Whitefield, Bangalore"
              />
            </div>
            <div>
              <label htmlFor="destinationCity" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Destination City / Country</label>
              <input
                id="destinationCity"
                type="text"
                name="destinationCity"
                required
                value={formData.destinationCity}
                onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="e.g., Mumbai, Maharashtra"
              />
            </div>
            <div>
              <label htmlFor="moveDate" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Move Date</label>
              <input
                id="moveDate"
                type="date"
                name="moveDate"
                required
                value={formData.moveDate}
                onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="cargoDescription" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Approximate Item List (Optional)</label>
              <textarea
                id="cargoDescription"
                name="cargoDescription"
                value={formData.cargoDescription}
                onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors h-24 resize-none"
                placeholder="e.g., 2 BHK household items, sofa, washing machine, fridge..."
              />
            </div>
            <div className="flex items-center">
              <input
                id="isVehicleIncluded"
                type="checkbox"
                name="isVehicleIncluded"
                checked={formData.isVehicleIncluded}
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-slate-950 border-slate-800 text-indigo-600 rounded focus:ring-0 focus:ring-offset-0"
              />
              <label htmlFor="isVehicleIncluded" className="ml-3 text-xs font-medium text-slate-300 tracking-wide select-none">Include vehicle transport (Car/Bike)</label>
            </div>
            {errorMsg && <p className="text-rose-500 text-xs font-semibold leading-relaxed">{errorMsg}</p>}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/3 bg-slate-950 border border-slate-800 text-slate-300 font-semibold py-3.5 rounded-lg text-sm hover:bg-slate-900 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-2/3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white font-semibold py-3.5 rounded-lg text-sm transition-all shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center"
              >
                {loading? "Generating Quote..." : "Submit Quote Request"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
