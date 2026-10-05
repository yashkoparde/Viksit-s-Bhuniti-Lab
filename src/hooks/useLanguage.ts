import { useState } from 'react';
import { LanguageCode } from '../types/landGovernance.ts';

export function useLanguage(initialLang: LanguageCode = 'en') {
  const [language, setLanguage] = useState<LanguageCode>(initialLang);
  return { language, setLanguage };
}
