import React from 'react';
import { formatINR } from '../utils/formatters.ts';

export const OverviewHero: React.FC<{ onNavigate: (tab: string) => void; onOpenLogin: () => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-black text-white p-8 rounded-2xl mb-8 shadow-xl">
        <span className="text-[11px] font-mono tracking-widest uppercase bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30 mb-4 inline-block">
          Viksit Bharat @ 2047 Alignment
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          BhuSaakshya: AI-Powered Evidence Engine for Land Governance & Causal Policy
        </h1>
        <p className="text-white/80 max-w-3xl text-sm mb-6">
          Unifying GIS Spatial Digital Twins, Staggered DiD & Synthetic Control Econometrics, DeBERTa Legal Judgment Parser, and Gemini 2.4 Vector RAG Copilot into a national observatory.
        </p>
        <div className="flex gap-4">
          <button onClick={() => onNavigate('policy-twin')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-lg">
            Explore Policy Twin (DiD/SCM)
          </button>
          <button onClick={() => onNavigate('gis-twin')} className="bg-white/10 hover:bg-white/20 text-white text-xs px-5 py-2.5 rounded-xl border border-white/20">
            Launch GIS Digital Twin
          </button>
        </div>
      </div>
    </div>
  );
};
