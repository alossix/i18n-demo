import React, { useState } from 'react';

const ModeContext = React.createContext({
  darkMode: false,
});

export const ModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  console.log(`darkmode is ${darkMode}`);

  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
