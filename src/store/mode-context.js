import React, { useState } from 'react';

const ModeContext = React.createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export const ModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
