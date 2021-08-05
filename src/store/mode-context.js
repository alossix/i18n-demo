import React, { useState } from 'react';

const ModeContext = React.createContext({
  theme: 'light',
  setTheme: () => {},
});

export const ModeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
