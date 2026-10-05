import React from 'react';
import { UserProfile } from '../types/landGovernance.ts';

export const PRESET_PROFILES: UserProfile[] = [{ id: '01', name: 'Yash Koparde', role: 'official', designation: 'Senior Advisor', department: 'DoLR', accessLevel: 'Cabinet', avatar: '', permissions: ['all'] }];

export const LoginPortalModal: React.FC<{ isOpen: boolean; onClose: () => void; currentUser: UserProfile; onSelectUser: (u: UserProfile) => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-2xl text-xs max-w-xs w-full">
        <h3 className="font-bold mb-2">Authenticated User Role</h3>
        <button onClick={onClose} className="bg-black text-white w-full py-1.5 rounded mt-4">Close</button>
      </div>
    </div>
  );
};
