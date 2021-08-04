import React, { useContext } from 'react';

import LangContext from '../../store/lang-context';

import {
  HeaderContainer,
  HeaderTitle,
  LanguageSelectLabel,
  LanguageSelect,
} from './styles';

const Header = () => {
  const { language, setLanguage } = useContext(LangContext);
  let text = {};

  // Header Text Options
  const textHandler = () => {
    if (language === 'en') {
      return (text = {
        header: `Internationalization (i18n) App Demonstration`,
        header2: `State Management with Context API`,
        langSelectLabel: `Please choose a language:`,
      });
    }
    return (text = {
      header: `Dimostrazione dell'App per l'Internazionalizzazione (i18n)`,
      header2: `State Management con Context API`,
      langSelectLabel: `Si prega di scegliere una lingua:`,
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
    </HeaderContainer>
  );
};

export default Header;
