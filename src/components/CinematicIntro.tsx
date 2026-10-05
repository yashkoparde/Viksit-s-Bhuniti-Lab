import React, { useEffect } from 'react';

export const CinematicIntro: React.FC<{ userTitle: string; userRole: string; onComplete: () => void }> = ({ userTitle, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-bold">{userTitle}</h2>
    </div>
  );
};
