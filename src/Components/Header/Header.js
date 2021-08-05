import React, { useContext } from 'react';

import LangContext from '../../store/lang-context';
import ModeContext from '../../store/mode-context';

import {
  HeaderContainer,
  HeaderTitle,
  LanguageSelectLabel,
  LanguageSelect,
  ModeSelectLabel,
  ModeSelect,
} from './styles';

const Header = () => {
  const { setTheme } = useContext(ModeContext);
  const { language, setLanguage } = useContext(LangContext);
  let text = {};

  // Header Text Options
  const textHandler = () => {
    if (language === 'en') {
      return (text = {
        header: `Internationalization (i18n) App Demonstration`,
        header2: `State Management with Context API`,
        langSelectLabel: `Please choose a language:`,
        modeSelectLabel: `Light Mode / Dark Mode:`,
        modeSelectLight: `Light Mode`,
        modeSelectDark: `Dark Mode`,
      });
    }
    return (text = {
      header: `Dimostrazione dell'App per l'Internazionalizzazione (i18n)`,
      header2: `State Management con Context API`,
      langSelectLabel: `Si prega di scegliere una lingua:`,
      modeSelectLabel: `Modalità Chiara / Modalità Scura:`,
      modeSelectLight: `Modalità Chiara`,
      modeSelectDark: `Modalità Scura`,
    });
  };
  textHandler();

  return (
    <HeaderContainer>
      <HeaderTitle>{text.header}</HeaderTitle>
      <HeaderTitle as="h2">{text.header2}</HeaderTitle>
      <LanguageSelectLabel htmlFor="lang">
        {text.langSelectLabel}
      </LanguageSelectLabel>
      <LanguageSelect
        id="lang"
        onChange={(event) => setLanguage(event.target.value)}
      >
        <option id="en" value="en">
          English
        </option>
        <option id="it" value="it">
          Italiano
        </option>
      </LanguageSelect>
      <ModeSelectLabel htmlFor="mode">
        {text.modeSelectLabel}
      </ModeSelectLabel>
      <ModeSelect
        id="mode"
        onChange={(event) => setTheme(event.target.value)}
      >
        <option id="light" value="light">
          {text.modeSelectLight}
        </option>
        <option id="dark" value="dark">
          {text.modeSelectDark}
        </option>
      </ModeSelect>
    </HeaderContainer>
  );
};

export default Header;
