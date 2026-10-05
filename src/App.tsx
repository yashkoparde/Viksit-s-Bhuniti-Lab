import React, { useState } from 'react';
import { UserProfile, LanguageCode } from './types/landGovernance.ts';
import { CommandDock } from './components/CommandDock.tsx';
import { TypographyLoader } from './components/TypographyLoader.tsx';
import { CinematicIntro } from './components/CinematicIntro.tsx';
import { OverviewHero } from './components/OverviewHero.tsx';
import { PolicyTwin } from './components/PolicyTwin.tsx';
import { GisDigitalTwin } from './components/GisDigitalTwin.tsx';
import { DisputeIntelligence } from './components/DisputeIntelligence.tsx';
import { EvidenceGapMap } from './components/EvidenceGapMap.tsx';
import { FederatedCopilot } from './components/FederatedCopilot.tsx';
import { InnovationSandbox } from './components/InnovationSandbox.tsx';
import { PolicyBriefModal } from './components/PolicyBriefModal.tsx';
import { LoginPortalModal, PRESET_PROFILES } from './components/LoginPortalModal.tsx';

export default function App() {
  const [showTypeLoader, setShowTypeLoader] = useState<boolean>(true);
  const [showIntro, setShowIntro] = useState<boolean>(false);
  const [introInfo, setIntroInfo] = useState<{ title: string; role: string }>({
    title: 'NATIONAL LAND POLICY OBSERVATORY',
    role: 'Cabinet Executive Access',
  });

  const [activeTab, setActiveTab] = useState<string>('overview');
  const [currentUser, setCurrentUser] = useState<UserProfile>(PRESET_PROFILES[0]);
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [isBriefOpen, setIsBriefOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const handleSelectUser = (user: UserProfile) => {
    setCurrentUser(user);
    setIntroInfo({
      title: `${user.name.toUpperCase()} AUTHENTICATED`,
      role: `${user.designation} (${user.accessLevel})`,
    });
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] flex flex-col font-sans selection:bg-black selection:text-white">
      {showTypeLoader && (
        <TypographyLoader onComplete={() => setShowTypeLoader(false)} />
      )}

      {showIntro && !showTypeLoader && (
        <CinematicIntro
          userTitle={introInfo.title}
          userRole={introInfo.role}
          onComplete={() => setShowIntro(false)}
        />
      )}

      <CommandDock
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
        currentUser={currentUser}
        language={language}
        setLanguage={setLanguage}
        onOpenBrief={() => setIsBriefOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      <main className="flex-1 w-full pt-4">
        {activeTab === 'overview' && (
          <OverviewHero
            onNavigate={(tab) => setActiveTab(tab)}
            onOpenLogin={() => setIsLoginOpen(true)}
          />
        )}
        {activeTab === 'policy-twin' && <PolicyTwin onOpenBrief={() => setIsBriefOpen(true)} />}
        {activeTab === 'gis-twin' && <GisDigitalTwin />}
        {activeTab === 'dispute-intel' && <DisputeIntelligence />}
        {activeTab === 'evidence-gap' && <EvidenceGapMap />}
        {activeTab === 'copilot' && (
          <FederatedCopilot language={language} setLanguage={setLanguage} />
        )}
        {activeTab === 'innovation' && <InnovationSandbox />}
      </main>

      <PolicyBriefModal isOpen={isBriefOpen} onClose={() => setIsBriefOpen(false)} />
      <LoginPortalModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        currentUser={currentUser}
        onSelectUser={handleSelectUser}
      />

      <footer className="border-t border-black/10 bg-[#070709] text-white py-8 px-6 text-xs text-[#86868b] mt-12">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-extrabold text-white">BHUNITI-LAB</span>
            <span>·</span>
            <span>Department of Land Resources (PME Division)</span>
            <span>·</span>
            <span>Ministry of Rural Development, Government of India</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-white/60">
            <span>LADM (ISO 19152)</span>
            <span>·</span>
            <span>OGC API Standards</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
