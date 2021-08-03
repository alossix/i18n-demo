import React, { useState } from 'react';

const LangContext = React.createContext({
  language: 'en',
});

export const LangContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
