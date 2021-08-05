import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { LangContextProvider } from './store/lang-context';

import Header from './Components/Header/Header';
import CardsList from './Components/CardsList/CardsList';
import ModeContext from './store/mode-context';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { Container } from './styles';

function App() {
  const { theme } = useContext(ModeContext);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <LangContextProvider>
          <Container>
            <Header />
            <CardsList />
          </Container>
        </LangContextProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
