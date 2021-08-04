import React, { useContext } from 'react';

import LangContext from '../../store/lang-context';
import ModeContext from '../../store/mode-context';

import {
  HeaderContainer,
  HeaderTitle,
  LanguageSelectLabel,
  LanguageSelect,
  ModeLabel,
  ModeSelect,
} from './styles';

const Header = () => {
  const { language, setLanguage } = useContext(LangContext);
  const { darkMode, setDarkMode } = useContext(ModeContext);
  let text = {};

  // Header Text Options
  const textHandler = () => {
    if (language === 'en') {
      return (text = {
        header: `Internationalization (i18n) App Demonstration`,
        header2: `State Management with Context API`,
        langSelectLabel: `Please choose a language:`,
        modeSelectLabel: `Dark mode/light mode:`,
        modeSelectDark: `Dark mode`,
        modeSelectLight: `Light mode`,
      });
    }
    return (text = {
      header: `Dimostrazione dell'App per l'Internazionalizzazione (i18n)`,
      header2: `State Management con Context API`,
      langSelectLabel: `Si prega di scegliere una lingua:`,
      modeSelectLabel: `Modalità scura/modalità chiara:`,
      modeSelectDark: `Modalità scura`,
      modeSelectLight: `Modalità chiara`,
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
      <ModeLabel htmlFor="mode">{text.modeSelectLabel}</ModeLabel>
      <ModeSelect id="mode" onChange={() => setDarkMode(!darkMode)}>
        <option id="light" value="false">
          {text.modeSelectLight}
        </option>
        <option id="dark" value="true">
          {text.modeSelectDark}
        </option>
      </ModeSelect>
    </HeaderContainer>
  );
};

export default Header;
