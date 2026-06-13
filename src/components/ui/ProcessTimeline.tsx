import React from "react";

const steps ="
  },
  {
    phase: "02",
    title: "Surgical Multi-Layer Packing",
    description: "Our professional packaging crew uses robust corrugated boxes, heavy-duty air bubble rolls, foam corners, and customized crates to pack fragile items.[2]"
  },
  {
    phase: "03",
    title: "Secure Mechanized Loading",
    description: "Secure placement of goods into our specialized container fleet using hydraulic tail-lifts and anti-skid safety ramps.[2]"
  },
  {
    phase: "04",
    title: "Real-Time Tracked Transit",
    description: "The assigned transit container is routed along major commercial corridors, monitored by GPS tracking, and backed by comprehensive transit insurance.[3]"
  },
  {
    phase: "05",
    title: "Safe Unloading & Setup",
    description: "Careful unloading, methodical unpacking, and structured room-by-room reassembly of furniture at the target destination.[2, 3]"
  }
];

export default function ProcessTimeline() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Operational Excellence</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-12 tracking-tight">Our Five-Step Relocation Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connecting line for tablet and desktop viewports */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-6 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center group">
              <div className="w-12 h-12 bg-slate-900 border border-slate-800 text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-500 rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-xl transition-all duration-300">
                {step.phase}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide group-hover:text-indigo-400 transition-colors duration-300">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
