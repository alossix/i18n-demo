import React, { useState } from 'react';

const ModeContext = React.createContext({
  mode: 'light',
  setMode: () => {},
  toggleMode: () => {},
});

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const isDarkMode = mode === 'light';
  const toggleMode = () => setMode(isDarkMode ? 'light' : 'dark');

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
