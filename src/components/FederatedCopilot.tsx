import React, { useState } from 'react';
import { queryPolicyCopilot } from '../services/geminiService.ts';
import { LanguageCode } from '../types/landGovernance.ts';

export const FederatedCopilot: React.FC<{ language: LanguageCode; setLanguage: (lang: LanguageCode) => void }> = ({ language }) => {
  const [query, setQuery] = useState('');
  const [ans, setAns] = useState('');

  const handleAsk = async () => {
    const res = await queryPolicyCopilot(query, language);
    setAns(res.answer);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Federated AI Policy Copilot</h2>
      <div className="flex gap-2 mb-4">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask copilot..." className="border p-2 rounded text-xs flex-1" />
        <button onClick={handleAsk} className="bg-blue-600 text-white px-4 py-2 rounded text-xs">Ask</button>
      </div>
      {ans && <div className="p-4 bg-gray-100 rounded text-xs">{ans}</div>}
    </div>
  );
};
