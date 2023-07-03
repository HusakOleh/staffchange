'use client';
import { createContext, useState } from "react";

export const LangContext = createContext({
  lang: 'en',
  setLang: () => {},
});


export default function LangProvider ({children}) {
  const [lang, setLang] = useState('en');

  const contextValue = {
    lang,
    setLang
  };

  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
}