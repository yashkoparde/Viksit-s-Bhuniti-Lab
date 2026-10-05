import React from 'react';
import { generateCabinetPolicyBriefPDF } from '../services/pdfExportService.ts';

export const PolicyBriefModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-2xl max-w-sm w-full">
        <h3 className="font-bold mb-2 text-sm">Export Cabinet Brief</h3>
        <button onClick={() => generateCabinetPolicyBriefPDF({ title: 'Brief 2026', state: 'India', executiveSummary: 'Summary', recommendations: ['Rec 1'], preparedBy: 'DoLR', date: '2026-10-05' })} className="bg-blue-600 text-white text-xs px-4 py-2 rounded">
          Download PDF
        </button>
        <button onClick={onClose} className="ml-2 border text-xs px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};
