import React from 'react';
import { UserProfile, LanguageCode } from '../types/landGovernance.ts';

export const CommandDock: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: UserProfile;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  onOpenBrief: () => void;
  onOpenLogin: () => void;
}> = ({ activeTab, setActiveTab, currentUser, language, setLanguage, onOpenBrief, onOpenLogin }) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'policy-twin', label: 'Policy Twin (DiD/SCM)' },
    { id: 'gis-twin', label: 'GIS Digital Twin' },
    { id: 'dispute-intel', label: 'Dispute Intelligence' },
    { id: 'evidence-gap', label: 'Evidence Gap Map' },
    { id: 'copilot', label: 'AI Copilot' },
    { id: 'innovation', label: 'OGC Sandbox' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#070709]/90 backdrop-blur-xl border-b border-white/10 text-white px-6 py-3">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-sm text-white">BL</div>
          <div>
            <span className="font-extrabold tracking-wider text-sm block">BHUNITI-LAB</span>
            <span className="text-[10px] text-white/50 block">National Observatory</span>
          </div>
        </div>
        <nav className="flex items-center gap-1 overflow-x-auto max-w-full pb-1 lg:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id ? 'bg-blue-600 text-white font-semibold shadow-md' : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <select value={language} onChange={(e) => setLanguage(e.target.value as LanguageCode)} className="bg-white/10 border border-white/20 text-white text-xs rounded-md px-2 py-1">
            <option value="en" className="text-black">EN</option>
            <option value="hi" className="text-black">HI</option>
            <option value="kn" className="text-black">KN</option>
            <option value="ta" className="text-black">TA</option>
            <option value="mr" className="text-black">MR</option>
          </select>
          <button onClick={onOpenBrief} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-md text-xs">PDF Brief</button>
          <button onClick={onOpenLogin} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md text-xs font-semibold">{currentUser.name}</button>
        </div>
      </div>
    </header>
  );
};
