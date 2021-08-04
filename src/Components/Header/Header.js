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

// Text Options
const text = (lang) => {
  if (lang === 'en') {
    return {
      header: `Internationalization (i18n) App Demonstration`,
      langSelectLabel: `Please choose a language:`,
      modeSelectLabel: `Dark mode/light mode:`,
      modeSelectDark: `Dark mode`,
      modeSelectLight: `Light mode`,
    };
  }
  return {
    header: `Dimostrazione dell'App per l'Internazionalizzazione (i18n)`,
    langSelectLabel: `Si prega di scegliere una lingua:`,
    modeSelectLabel: `Modalità scura/modalità chiara:`,
    modeSelectDark: `Modalità scura`,
    modeSelectLight: `Modalità chiara`,
  };
};

const Header = () => {
  const { language, setLanguage } = useContext(LangContext);
  const { darkMode, setDarkMode } = useContext(ModeContext);

  return (
    <HeaderContainer>
      <HeaderTitle>{text(language).header}</HeaderTitle>
      <LanguageSelectLabel htmlFor="lang">
        {text(language).langSelectLabel}
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
      <ModeLabel htmlFor="mode">
        {text(language).modeSelectLabel}
      </ModeLabel>
      <ModeSelect
        id="mode"
        onChange={(event) => setDarkMode(event.target.value)}
      >
        <option id="light" value={false}>
          {text(language).modeSelectLight}
        </option>
        <option id="dark" value={true}>
          {text(language).modeSelectDark}
        </option>
      </ModeSelect>
    </HeaderContainer>
  );
};

export default Header;
