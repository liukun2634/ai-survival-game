import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../engine/types';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (textObj: { zh: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'zh',
  setLanguage: () => {},
  t: (textObj) => textObj.zh,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    return navigator.language.startsWith('zh') ? 'zh' : 'en';
  });

  const t = useCallback(
    (textObj: { zh: string; en: string }) => textObj[language],
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
