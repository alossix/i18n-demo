import React from 'react';

import {
  HeaderContainer,
  HeaderTitle,
  LanguageSelectLabel,
  LanguageSelect,
  ModeLabel,
  ModeSelect,
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Internationalization (i18n) Demo App</HeaderTitle>
      <LanguageSelectLabel htmlFor="lang">
        Please choose a language:
      </LanguageSelectLabel>
      <LanguageSelect id="lang">
        <option>English</option>
        <option>Italiano</option>
      </LanguageSelect>
      <ModeLabel htmlFor="mode">Dark/Light Mode:</ModeLabel>
      <ModeSelect id="mode">
        <option>Light Mode</option>
        <option>Dark Mode</option>
      </ModeSelect>
    </HeaderContainer>
  );
};

export default Header;
