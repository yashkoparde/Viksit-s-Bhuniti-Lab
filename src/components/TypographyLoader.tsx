import React, { useEffect, useState } from 'react';

export const TypographyLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [txt, setTxt] = useState('');
  useEffect(() => {
    setTxt('BHUNITI-LAB');
    const timer = setTimeout(onComplete, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex items-center justify-center font-mono text-xl">
      {txt}
    </div>
  );
};
